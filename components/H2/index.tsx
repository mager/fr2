import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const H2 = ({ children }: Props) => {
  return (
    <h2 className="font-sans font-bold text-2xl lg:text-3xl tracking-tight py-2">
      {children}
    </h2>
  );
};

export default H2;
