import PseudoLink from "@/components/elements/PseudoLink";

const NavBarTheme = () => {
  return (
    <div className="header-element header-theme-mode">
      <PseudoLink className="header-link layout-setting">
        <span className="light-layout">
          <i className="bx bx-moon header-link-icon" />
        </span>
        <span className="dark-layout">
          <i className="bx bx-sun header-link-icon" />
        </span>
      </PseudoLink>
    </div>
  );
};

export default NavBarTheme;
