
import React from 'react';

interface SocialButtonProps {
  children: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ children }) => {
  return (
    <button className="flex h-12 w-20 items-center justify-center rounded-lg border border-gray-300/80 bg-white/60 shadow-sm transition-all duration-200 hover:bg-white/90 hover:shadow-md">
      {children}
    </button>
  );
};

export default SocialButton;
