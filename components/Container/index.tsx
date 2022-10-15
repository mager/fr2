import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;