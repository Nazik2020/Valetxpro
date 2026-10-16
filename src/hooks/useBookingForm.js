import { useState, useMemo } from 'react';
import { validatePostcode } from '../utils/postcodeRules';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { PACKAGES, VEHICLE_SIZES } from '../data/packagesData';

export const useBookingForm = (initialService = 'mini-valet', initialDummyMode = true) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    vehicleSize: 'medium', // Default: Saloon / Estate
    service: initialService,
    preferredTime: '',
    selectedAddons: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isDummyMode, setIsDummyMode] = useState(initialDummyMode);

  // Real-time postcode validation
  const postcodeValidation = useMemo(() => {
    return validatePostcode(formData.postcode);
  }, [formData.postcode]);

  // Dynamic price calculation
  const calculatedPrice = useMemo(() => {
    const pkg = PACKAGES.find((p) => p.id === formData.service);
    if (!pkg) return 0;
    const base = pkg.prices[formData.vehicleSize] || pkg.basePrice;
    
    // Add-on cost
    let addonTotal = 0;
    if (formData.selectedAddons.includes('pet-hair')) addonTotal += 15;
    if (formData.selectedAddons.includes('ceramic-wax')) addonTotal += 25;
    if (formData.selectedAddons.includes('leather-treatment')) addonTotal += 20;
    
    return base + addonTotal;
  }, [formData.service, formData.vehicleSize, formData.selectedAddons]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const setVehicleSize = (sizeId) => {
    setFormData((prev) => ({ ...prev, vehicleSize: sizeId }));
  };

  const setService = (serviceId) => {
    setFormData((prev) => ({ ...prev, service: serviceId }));
  };

  const toggleAddon = (addonId) => {
    setFormData((prev) => {
      const exists = prev.selectedAddons.includes(addonId);
      return {
        ...prev,
        selectedAddons: exists
          ? prev.selectedAddons.filter((id) => id !== addonId)
          : [...prev.selectedAddons, addonId],
      };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Postcode is required to check van availability';
    }
    if (!formData.phone.trim() && !formData.name.trim()) {
      newErrors.phone = 'Please provide your name or phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getWhatsAppLink = () => {
    const pkg = PACKAGES.find((p) => p.id === formData.service);
    const size = VEHICLE_SIZES.find((s) => s.id === formData.vehicleSize);
    
    return buildWhatsAppUrl({
      name: formData.name,
      phone: formData.phone,
      postcode: formData.postcode,
      vehicleSize: size ? size.label : formData.vehicleSize,
      service: pkg ? `${pkg.name} (£${calculatedPrice})` : formData.service,
      preferredTime: formData.preferredTime,
      addons: formData.selectedAddons,
    });
  };

  const handleSubmit = (e, forceSend = false) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!validate()) return false;
    
    // In Dummy Mode, we do NOT open WhatsApp automatically to avoid sending test messages
    if (!isDummyMode || forceSend) {
      const link = getWhatsAppLink();
      window.open(link, '_blank', 'noopener,noreferrer');
    }

    setSubmitted(true);
    return true;
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrors({});
    setFormData({
      name: '',
      phone: '',
      postcode: '',
      vehicleSize: 'medium',
      service: initialService,
      preferredTime: '',
      selectedAddons: [],
    });
  };

  return {
    formData,
    setFormData,
    errors,
    postcodeValidation,
    calculatedPrice,
    handleChange,
    setVehicleSize,
    setService,
    toggleAddon,
    handleSubmit,
    getWhatsAppLink,
    submitted,
    setSubmitted,
    isDummyMode,
    setIsDummyMode,
    resetForm,
  };
};
