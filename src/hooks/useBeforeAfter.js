import { useState, useCallback, useRef } from 'react';

export const useBeforeAfter = (initialSplit = 50) => {
  const [sliderPosition, setSliderPosition] = useState(initialSplit);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    
    // Clamp between 0 and 100
    percentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  return {
    sliderPosition,
    setSliderPosition,
    containerRef,
    isDragging,
    handleStart,
    handleEnd,
    handleMouseMove,
    handleTouchMove,
    handleMove,
  };
};
