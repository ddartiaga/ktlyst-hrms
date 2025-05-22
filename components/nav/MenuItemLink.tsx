"use client";

import React from "react";

type MenuLinkProps = {
  className: string;
  children: React.ReactNode;
};

const MenuItemLink = ({ className, children }: MenuLinkProps) => {
  return (
    <a onClick={(e) => e.preventDefault()} className={className}>
      {children}
    </a>
  );
};

export default MenuItemLink;
