import React, { ReactNode } from 'react';

interface TextSectionProps {
  title?: string;
  children: ReactNode;
}

export const TextSection: React.FC<TextSectionProps> = ({ title, children }) => {
  return (
    <div className="pt-3">
      {title && <h2 className="text-2xl font-semibold">{title}</h2>}
      <div className="text-base pt-3">{children}</div>
    </div>
  );
};
