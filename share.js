import { createServer } from 'vite';
import { startTunnel } from 'untun';
import net from 'node:net';
import { exec } from 'node:child_process';

const DEFAULT_PORT = Number(process.env.PORT) || 5173;

/**
 * Checks if a given port is currently listening on localhost
 */
function isPortInUse(port, host = '127.0.0.1') {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(800);
    socket.on('connect', () => {
      socket.destroy();
      resolve(true);
    });
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    socket.on('error', () => {
      resolve(false);
    });
    socket.connect(port, host);
  });
}

/**
 * Copies text to system clipboard across OS platforms
 */
function copyToClipboard(text) {
  return new Promise((resolve) => {
    let cmd = '';
    if (process.platform === 'win32') {
      cmd = `powershell -NoProfile -Command "Set-Clipboard -Value '${text.replace(/'/g, "''")}'"`;
    } else if (process.platform === 'darwin') {
      cmd = `printf '%s' "${text}" | pbcopy`;
    } else {
      cmd = `printf '%s' "${text}" | (xclip -selection clipboard 2>/dev/null || wl-copy 2>/dev/null)`;
    }

    exec(cmd, (error) => {
      resolve(!error);
    });
  });
}

// ANSI styling colors
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
};

async function main() {
  console.log(`\n${c.bold}${c.cyan}================================================================${c.reset}`);
  console.log(`${c.bold}${c.magenta}   ⚡ ValetXpress Nottingham — Live Client Preview Tunnel ⚡${c.reset}`);
  console.log(`${c.bold}${c.cyan}================================================================${c.reset}\n`);

  let viteServer = null;
  const inUse = await isPortInUse(DEFAULT_PORT);

  if (inUse) {
    console.log(`${c.green}✔ Found existing dev server running on port ${DEFAULT_PORT}.${c.reset}`);
  } else {
    console.log(`${c.yellow}⏳ Starting Vite dev server on port ${DEFAULT_PORT}...${c.reset}`);
    viteServer = await createServer({
      server: {
        port: DEFAULT_PORT,
        host: true,
      },
    });
    await viteServer.listen();
    console.log(`${c.green}✔ Vite dev server is running!${c.reset}`);
  }

  console.log(`${c.yellow}🌐 Spawning Cloudflare Quick Tunnel (no account required)...${c.reset}`);

  let tunnel;
  try {
    tunnel = await startTunnel({
      port: DEFAULT_PORT,
      acceptCloudflareNotice: true,
    });
  } catch (err) {
    console.error(`\n${c.bold}\x1b[31m✖ Failed to create Cloudflare Tunnel:\x1b[0m`, err.message || err);
    if (viteServer) await viteServer.close();
    process.exit(1);
  }

  const shareableUrl = await tunnel.getURL();
  const copied = await copyToClipboard(shareableUrl);

  console.clear();
  console.log(`\n${c.bold}${c.cyan}╔══════════════════════════════════════════════════════════════╗${c.reset}`);
  console.log(`${c.bold}${c.cyan}║${c.reset}  ${c.bold}${c.magenta}ValetXpress — Client Shareable Link Ready!${c.reset}                  ${c.bold}${c.cyan}║${c.reset}`);
  console.log(`${c.bold}${c.cyan}╠══════════════════════════════════════════════════════════════╣${c.reset}`);
  console.log(`${c.bold}${c.cyan}║${c.reset}                                                              ${c.bold}${c.cyan}║${c.reset}`);
  console.log(`${c.bold}${c.cyan}║${c.reset}  ${c.bold}💻 Local URL:${c.reset}     ${c.cyan}http://localhost:${DEFAULT_PORT}${c.reset}                      ${c.bold}${c.cyan}║${c.reset}`);
  console.log(`${c.bold}${c.cyan}║${c.reset}  ${c.bold}🌐 Client Link:${c.reset}   ${c.bold}${c.green}${shareableUrl}${c.reset}  ${c.bold}${c.cyan}║${c.reset}`);
  if (copied) {
    console.log(`${c.bold}${c.cyan}║${c.reset}                    ${c.dim}${c.green}✔ Copied link to clipboard!${c.reset}                ${c.bold}${c.cyan}║${c.reset}`);
  }
  console.log(`${c.bold}${c.cyan}║${c.reset}                                                              ${c.bold}${c.cyan}║${c.reset}`);
  console.log(`${c.bold}${c.cyan}╠══════════════════════════════════════════════════════════════╣${c.reset}`);
  console.log(`${c.bold}${c.cyan}║${c.reset}  ${c.dim}• Send the Client Link to your client on WhatsApp / Email${c.reset}   ${c.bold}${c.cyan}║${c.reset}`);
  console.log(`${c.bold}${c.cyan}║${c.reset}  ${c.dim}• Works on mobile phones, tablets, and desktop browsers${c.reset}     ${c.bold}${c.cyan}║${c.reset}`);
  console.log(`${c.bold}${c.cyan}║${c.reset}  ${c.dim}• Secured with HTTPS via Cloudflare Quick Tunnels${c.reset}           ${c.bold}${c.cyan}║${c.reset}`);
  console.log(`${c.bold}${c.cyan}║${c.reset}  ${c.dim}• Keep this terminal open. Press ${c.bold}Ctrl + C${c.reset}${c.dim} to stop sharing.${c.reset}     ${c.bold}${c.cyan}║${c.reset}`);
  console.log(`${c.bold}${c.cyan}╚══════════════════════════════════════════════════════════════╝${c.reset}\n`);

  let isClosing = false;
  const cleanup = async () => {
    if (isClosing) return;
    isClosing = true;
    console.log(`\n${c.yellow}Stopping tunnel and closing sessions...${c.reset}`);
    try {
      if (tunnel?.close) await tunnel.close();
    } catch {
      // ignore
    }
    try {
      if (viteServer) await viteServer.close();
    } catch {
      // ignore
    }
    console.log(`${c.green}Done. Have a great day!${c.reset}\n`);
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('SIGHUP', cleanup);
}

main().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
