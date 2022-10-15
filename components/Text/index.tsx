import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const Text = ({ children }: Props) => {
  return <p className="text-base">{children}</p>;
};

export default Text;
