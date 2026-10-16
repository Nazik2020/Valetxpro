import React, { useState } from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Steps } from './components/sections/Steps';
import { Pricing } from './components/sections/Pricing';
import { PetHairBanner } from './components/sections/PetHairBanner';
import { BeforeAfterSection } from './components/sections/BeforeAfterSection';
import { Reviews } from './components/sections/Reviews';
import { BookingSection } from './components/sections/BookingSection';
import { BookingModal } from './components/sections/BookingModal';
import { FaqSection } from './components/sections/FaqSection';
import { Footer } from './components/sections/Footer';
import { StickyMobileBar } from './components/sections/StickyMobileBar';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('mini-valet');
  const [selectedVehicleSize, setSelectedVehicleSize] = useState('medium');

  const openBookingModal = ({ packageId = 'mini-valet', size = 'medium' } = {}) => {
    setSelectedPackage(packageId);
    if (size) setSelectedVehicleSize(size);
    setIsBookingModalOpen(true);
  };

  const handleSelectPackage = ({ packageId, size }) => {
    openBookingModal({ packageId, size });
  };

  const handleAddPetHair = () => {
    openBookingModal({ packageId: 'mini-valet' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-canvas text-brand-charcoal">
      {/* Top Fixed Header */}
      <Navbar onOpenBooking={() => openBookingModal()} />

      {/* Main Page Funnel */}
      <main className="flex-grow">
        {/* 1. Hero Showcase */}
        <Hero onOpenBooking={() => openBookingModal()} />

        {/* 2. 3 Simple Steps */}
        <Steps />

        {/* 3. Transparent Valeting Packages & Vehicle Matrix */}
        <Pricing onSelectPackage={handleSelectPackage} />

        {/* 4. Specialist Pet Hair Extraction Callout */}
        <PetHairBanner onAddPetHair={handleAddPetHair} />

        {/* 5. Interactive Before & After Transformation Sliders */}
        <BeforeAfterSection />

        {/* 6. Google 5.0 Star Customer Testimonials */}
        <Reviews />

        {/* 7. Nottingham Coverage Areas & CTA */}
        <BookingSection onOpenBooking={() => openBookingModal()} />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => openBookingModal()} />

      {/* Sticky Bottom Actions on Mobile Devices */}
      <StickyMobileBar onOpenBooking={() => openBookingModal()} />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedPackage={selectedPackage}
        preselectedSize={selectedVehicleSize}
      />
    </div>
  );
}

export default App;
