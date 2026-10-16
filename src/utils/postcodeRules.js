import { POSTCODE_PREFIXES } from '../data/areasData';

export const validatePostcode = (input) => {
  if (!input || input.trim().length === 0) {
    return { status: 'idle', message: '' };
  }

  const clean = input.trim().toUpperCase().replace(/\s+/g, '');
  
  // Extract outcode (e.g., NG2 7LA -> NG2, DE74 2ZZ -> DE74)
  const match = clean.match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)/);
  if (!match) {
    return {
      status: 'invalid',
      message: 'Please enter a valid UK postcode (e.g. NG2 7LA)',
      covered: false,
    };
  }

  const prefix = match[1];

  // Check primary zero-travel coverage
  const isPrimary = POSTCODE_PREFIXES.primary.some((p) => clean.startsWith(p));
  if (isPrimary) {
    return {
      status: 'success',
      covered: true,
      freeTravel: true,
      message: `✅ Covered! Zero travel surcharge for ${prefix} area.`,
    };
  }

  // Check extended coverage
  const isExtended = POSTCODE_PREFIXES.extended.some((p) => clean.startsWith(p));
  if (isExtended) {
    return {
      status: 'warning',
      covered: true,
      freeTravel: false,
      message: `📍 ${prefix} is in our extended coverage zone. Mobile slot available!`,
    };
  }

  // Any other postcode
  if (clean.startsWith('NG') || clean.startsWith('DE')) {
    return {
      status: 'warning',
      covered: true,
      freeTravel: false,
      message: `📍 Regional route check: We regularly visit ${prefix}. Message us on WhatsApp to confirm ETA!`,
    };
  }

  return {
    status: 'neutral',
    covered: false,
    freeTravel: false,
    message: `ℹ️ Outside primary Notts zone. Contact us via WhatsApp to check if our mobile van is nearby.`,
  };
};
