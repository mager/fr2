import * as React from "react";

type Props = {
  children: React.ReactNode;
  href: string;
};

const Link = ({ children, href }: Props) => {
  return (
    <a
      href={href}
      className="border-b-2 border-slate-300 hover:border-slate-500"
    >
      {children}
    </a>
  );
};

export default Link;
