import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const FloorPrice = ({ children }: Props) => {
  return (
    <div className="pr-2 font-mono text-4xl text-emerald-400 italic tracking-tighter font-semibold">
      {children}
      <span className="text-xl font-sans pl-1">Ξ</span>
    </div>
  );
};

export default FloorPrice;
