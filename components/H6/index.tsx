import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const H6 = ({ children }: Props) => {
  return (
    <h6 className="font-sans text-sm lg:text-md tracking-tight py-2">
      {children}
    </h6>
  );
};

export default H6;
