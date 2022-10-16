import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const H1 = ({ children }: Props) => {
  return (
    <h1 className="font-serif text-4xl xl:text-5xl tracking-tight">
      {children}
    </h1>
  );
};

export default H1;
