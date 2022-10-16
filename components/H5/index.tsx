import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const H5 = ({ children }: Props) => {
  return (
    <h5 className="font-sans text-lg lg:text-xl tracking-tight py-2">
      {children}
    </h5>
  );
};

export default H5;
