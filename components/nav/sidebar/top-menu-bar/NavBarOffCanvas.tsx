import PseudoLink from "@/components/elements/PseudoLink";

const NavBarOffCanvas = () => {
  return (
    <div className="header-element">
      <PseudoLink
        className="header-link switcher-icon"
        data-bs-toggle="offcanvas"
        data-bs-target="#switcher-canvas"
      >
        <i className="bx bx-cog header-link-icon" />
      </PseudoLink>
    </div>
  );
};

export default NavBarOffCanvas;
