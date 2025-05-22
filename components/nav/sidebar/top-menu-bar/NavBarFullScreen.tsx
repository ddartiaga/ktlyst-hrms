"use client";

import PseudoLink from "@/components/elements/PseudoLink";

const NavBarFullScreen = () => {
  return (
    <div className="header-element header-fullscreen">
      <PseudoLink
        onClick={() => {
          console.log("TODO: Implement openFullscreen()");
          // openFullscreen();
        }}
        className="header-link"
      >
        <i className="bx bx-fullscreen full-screen-open header-link-icon" />
        <i className="bx bx-exit-fullscreen full-screen-close header-link-icon d-none" />
      </PseudoLink>
    </div>
  );
};

export default NavBarFullScreen;
