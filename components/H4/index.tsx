import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const H4 = ({ children }: Props) => {
  return (
    <h4 className="font-sans font-bold text-xl lg:text-2xl tracking-tight py-2">
      {children}
    </h4>
  );
};

export default H4;
