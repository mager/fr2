import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const H1 = ({ children }: Props) => {
  return <h1 className="font-serif text-5xl">{children}</h1>;
};

export default H1;
