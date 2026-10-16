import React from 'react';
import { Star } from 'lucide-react';

export const StarRating = ({
  count = 5,
  size = 'md',
  className = '',
  showScore = false,
  scoreText = '5.0',
}) => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-4.5 h-4.5',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  };

  const starSize = sizes[size] || 'w-4 h-4';

  return (
    <div
      className={`inline-flex items-center gap-1.5 ${className}`}
      aria-label={`${count} out of 5 stars`}
    >
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {[...Array(count)].map((_, i) => (
          <Star
            key={i}
            className={`${starSize} fill-[#F59E0B] stroke-[#F59E0B] text-[#F59E0B]`}
          />
        ))}
      </div>
      {showScore && (
        <span className="font-display font-bold text-xs text-brand-charcoal ml-1">
          {scoreText}
        </span>
      )}
    </div>
  );
};
