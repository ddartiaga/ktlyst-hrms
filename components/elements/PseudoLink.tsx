"use client";

import React from "react";

type PseudoLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

const PseudoLink = ({ onClick, children, ...props }: PseudoLinkProps) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </a>
  );
};

export default PseudoLink;
