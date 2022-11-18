import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const H1 = ({ children }: Props) => {
  return (
    <h1 className="font-serif font-bold text-4xl lg:text-5xl tracking-tight mb-2">
      {children}
    </h1>
  );
};

export default H1;
