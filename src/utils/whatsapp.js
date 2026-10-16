import { COMPANY_INFO } from '../data/companyData';

export const buildWhatsAppUrl = ({
  name = '',
  phone = '',
  postcode = '',
  vehicleSize = '',
  service = '',
  preferredTime = '',
  addons = [],
} = {}) => {
  const lines = [
    `*VALETXPRESS MOBILE BOOKING INQUIRY*`,
    `------------------------------------`,
  ];

  if (service) lines.push(`✨ *Service:* ${service}`);
  if (vehicleSize) lines.push(`🚗 *Vehicle Type:* ${vehicleSize}`);
  if (postcode) lines.push(`📍 *Location Postcode:* ${postcode}`);
  if (preferredTime) lines.push(`📅 *Preferred Slot:* ${preferredTime}`);
  if (name) lines.push(`👤 *Name:* ${name}`);
  if (phone) lines.push(`📱 *Contact Number:* ${phone}`);
  
  if (addons && addons.length > 0) {
    lines.push(`➕ *Add-ons:* ${addons.join(', ')}`);
  }

  lines.push(`------------------------------------`);
  lines.push(`_Sent via ValetXpress Mobile Online Portal_`);

  const text = lines.join('\n');
  const encoded = encodeURIComponent(text);
  
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`;
};
