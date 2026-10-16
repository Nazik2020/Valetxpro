import React, { useEffect, useCallback, useRef } from 'react';
import { PACKAGES, VEHICLE_SIZES } from '../../data/packagesData';
import { COMPANY_INFO } from '../../data/companyData';
import { useBookingForm } from '../../hooks/useBookingForm';
import { Button } from '../common/Button';
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  Lock,
  Sparkles,
  RotateCcw,
  MessageSquare,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Car,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const BookingModal = ({ isOpen, onClose, preselectedPackage = 'mini-valet', preselectedSize = 'medium' }) => {
  const overlayRef = useRef(null);
  const firstFocusableRef = useRef(null);

  const {
    formData,
    errors,
    postcodeValidation,
    calculatedPrice,
    handleChange,
    setVehicleSize,
    setService,
    handleSubmit,
    submitted,
    resetForm,
    getWhatsAppLink,
  } = useBookingForm(preselectedPackage, true);

  // Sync preselected values when modal opens
  useEffect(() => {
    if (isOpen) {
      if (preselectedPackage) setService(preselectedPackage);
      if (preselectedSize) setVehicleSize(preselectedSize);
    }
  }, [isOpen, preselectedPackage, preselectedSize]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstFocusableRef.current?.focus(), 60);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    const success = handleSubmit(e, false);
    if (success) {
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.55 },
          colors: ['#2563EB', '#3B82F6', '#10B981', '#F59E0B'],
        });
      } catch (_) {}
    }
  };

  const handleCloseAndReset = () => {
    resetForm();
    onClose();
  };

  const selectedPkgData = PACKAGES.find((p) => p.id === formData.service);
  const selectedSizeData = VEHICLE_SIZES.find((s) => s.id === formData.vehicleSize);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" aria-hidden="true" />

      {/* Modal Container: Slide-up sheet on mobile, centered card on desktop */}
      <div className="relative w-full sm:max-w-xl max-h-[94vh] sm:max-h-[90vh] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slideUp border border-slate-100">

        {/* Mobile drag handle */}
        <div className="sm:hidden flex justify-center pt-3 pb-1" aria-hidden="true">
          <div className="w-10 h-1 rounded-full bg-slate-300" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue shadow-xs shrink-0">
              <MessageSquare className="w-5 h-5 text-brand-blue" aria-hidden="true" />
            </div>
            <div>
              <h2 id="booking-modal-title" className="font-display font-extrabold text-base sm:text-lg text-brand-charcoal leading-tight">
                Request Your Valet Slot
              </h2>
              <p className="text-xs text-slate-500 font-body mt-0.5">
                No upfront payment · Direct WhatsApp confirmation
              </p>
            </div>
          </div>
          <button
            ref={firstFocusableRef}
            type="button"
            onClick={handleCloseAndReset}
            aria-label="Close booking modal"
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 px-5 sm:px-6 py-5">

          {/* ═══════════════════════════════════════════════ */}
          {/* CONFIRMATION STATE (After Form Submitted)       */}
          {/* ═══════════════════════════════════════════════ */}
          {submitted ? (
            <div className="flex flex-col items-center text-center py-2 space-y-5">
              
              {/* Success Badge */}
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" strokeWidth={2.3} aria-hidden="true" />
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl text-brand-charcoal tracking-tight">
                  Enquiry Summary Ready!
                </h3>
                <p className="text-sm text-slate-600 font-body mt-1 max-w-md mx-auto leading-relaxed">
                  Your booking details have been compiled. Click below to send directly via WhatsApp — our team will confirm your slot within 2 hours.
                </p>
              </div>

              {/* Booking Summary Card */}
              <div className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 text-left space-y-3 font-body">
                <div className="flex items-center justify-between border-b border-slate-200/70 pb-2.5">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Sparkles className="w-4 h-4 text-brand-blue shrink-0" />
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-600">Selected Package</span>
                  </div>
                  <span className="text-sm font-display font-extrabold text-brand-charcoal">
                    {selectedPkgData?.name ?? formData.service}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-200/70 pb-2.5">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Car className="w-4 h-4 text-brand-blue shrink-0" />
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-600">Vehicle Size</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    {selectedSizeData?.label ?? formData.vehicleSize}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-200/70 pb-2.5">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-600">Contact</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    {formData.name ? `${formData.name} (${formData.phone})` : formData.phone || '—'}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-200/70 pb-2.5">
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-600">Postcode / Location</span>
                  </div>
                  <span className="text-sm font-bold uppercase text-brand-charcoal">
                    {formData.postcode?.toUpperCase() || '—'}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-200/70 pb-2.5">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="w-4 h-4 text-brand-blue shrink-0" />
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-600">Preferred Slot</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    {formData.preferredTime || 'Flexible / Next Available'}
                  </span>
                </div>

                {/* Total Price Row */}
                <div className="pt-1 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-display font-extrabold uppercase tracking-wider text-slate-500">Estimated Total</span>
                    <p className="text-[11px] text-slate-400">Fixed quote · Pay on completion</p>
                  </div>
                  <span className="font-display font-extrabold text-2xl text-brand-blue">
                    £{calculatedPrice}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full flex flex-col gap-2.5 pt-1">
                {/* Send via WhatsApp Button with precisely bounded 20px icon */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 flex items-center justify-center gap-2.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white font-display font-bold text-sm shadow-md hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <svg
                    className="w-5 h-5 shrink-0 text-white"
                    style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px' }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Send Enquiry via WhatsApp</span>
                </a>

                {/* Edit / Reset Button */}
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full h-11 flex items-center justify-center gap-2 px-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-display font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <RotateCcw className="w-4 h-4 text-slate-500" aria-hidden="true" />
                  <span>Edit Details / Start Over</span>
                </button>
              </div>

              {/* Operating Hours Reassurance */}
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-body">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Mon–Sun 7:30 AM – 7:00 PM · Typically replies within 2 hours</span>
              </div>
            </div>
          ) : (
            /* ═══════════════════════════════════════════════ */
            /* FORM STATE (Fill in Details)                   */
            /* ═══════════════════════════════════════════════ */
            <form onSubmit={onFormSubmit} noValidate className="space-y-4">

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-display font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. James Smith"
                    autoComplete="name"
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-sm text-brand-charcoal outline-none transition-all placeholder:text-slate-400 font-body"
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-display font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07xxx xxxxxx"
                    autoComplete="tel"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'modal-phone-error' : undefined}
                    className={`w-full h-11 px-3.5 rounded-xl border text-sm text-brand-charcoal outline-none transition-all placeholder:text-slate-400 font-body ${
                      errors.phone
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/20'
                        : 'border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
                    }`}
                  />
                  {errors.phone && (
                    <p id="modal-phone-error" className="text-xs text-red-600 mt-1 font-medium font-body">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Postcode & Vehicle Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-postcode" className="block text-xs font-display font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Postcode <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-postcode"
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="e.g. NG2 7LA"
                    autoComplete="postal-code"
                    aria-invalid={!!errors.postcode}
                    aria-describedby={errors.postcode ? 'modal-postcode-error' : undefined}
                    className={`w-full h-11 px-3.5 rounded-xl border text-sm uppercase text-brand-charcoal font-medium outline-none transition-all placeholder:text-slate-400 placeholder:normal-case font-body ${
                      errors.postcode
                        ? 'border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/20'
                        : 'border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
                    }`}
                  />
                  {errors.postcode && (
                    <p id="modal-postcode-error" className="text-xs text-red-600 mt-1 font-medium font-body">
                      {errors.postcode}
                    </p>
                  )}
                  {postcodeValidation.message && (
                    <div
                      role="status"
                      aria-live="polite"
                      className={`mt-1.5 p-2 rounded-lg text-xs flex items-center gap-1.5 ${
                        postcodeValidation.status === 'success'
                          ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                          : postcodeValidation.status === 'warning'
                          ? 'bg-amber-50 text-amber-900 border border-amber-200'
                          : 'bg-slate-50 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {postcodeValidation.status === 'success' && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" aria-hidden="true" />
                      )}
                      {postcodeValidation.status === 'warning' && (
                        <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" aria-hidden="true" />
                      )}
                      <span className="leading-tight">{postcodeValidation.message}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-vehicle-size" className="block text-xs font-display font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Vehicle Size
                  </label>
                  <select
                    id="modal-vehicle-size"
                    name="vehicleSize"
                    value={formData.vehicleSize}
                    onChange={(e) => setVehicleSize(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-sm text-brand-charcoal outline-none bg-white transition-all font-medium font-body"
                  >
                    {VEHICLE_SIZES.map((size) => (
                      <option key={size.id} value={size.id}>
                        {size.label} ({size.sub})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Service & Preferred Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-service" className="block text-xs font-display font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Service
                  </label>
                  <select
                    id="modal-service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-sm text-brand-charcoal outline-none bg-white transition-all font-medium font-body"
                  >
                    {PACKAGES.map((pkg) => {
                      const price = pkg.prices[formData.vehicleSize] || pkg.basePrice;
                      return (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.name} — £{price} {pkg.popular ? '(Popular)' : ''}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-preferred-time" className="block text-xs font-display font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Day &amp; Time
                  </label>
                  <input
                    id="modal-preferred-time"
                    type="text"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    placeholder="e.g. Thursday morning (10 AM)"
                    className="w-full h-11 px-3.5 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-sm text-brand-charcoal outline-none transition-all placeholder:text-slate-400 font-body"
                  />
                </div>
              </div>

              {/* Estimated Price Display Bar */}
              <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-blue shrink-0" aria-hidden="true" />
                  <span className="text-xs font-display font-bold text-slate-700">Estimated Fixed Price:</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-extrabold text-2xl text-brand-charcoal">£{calculatedPrice}</span>
                  <span className="text-xs text-slate-500 font-medium font-body">guaranteed</span>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-1">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={Send}
                  iconPosition="right"
                  className="h-12 text-base font-bold shadow-blue-glow hover:shadow-blue-glow-lg"
                >
                  Request Your Valet Slot
                </Button>
              </div>

              {/* Trust Footnote */}
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-body pt-0.5 pb-1">
                <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                <span>Zero deposit required. Pay only after you inspect the finished vehicle.</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
