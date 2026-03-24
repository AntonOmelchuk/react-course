import React, { type ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-8 px-4">
      <div className="w-full max-w-4xl">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
