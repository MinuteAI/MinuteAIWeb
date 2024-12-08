import React from 'react';
import gencastIcon from '../assets/gencast_icon@2x.png';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "" }) => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center space-y-8 p-8">
        <img src={gencastIcon} alt="Gencast Icon" className="w-24" />
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
    </section>
  );
};

export default Header;
