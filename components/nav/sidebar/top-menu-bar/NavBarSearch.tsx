import PseudoLink from "@/components/elements/PseudoLink";

const NavBarSearch = () => {
  // TODO: Fix error "TypeError: Cannot read properties of undefined (reading 'backdrop')"
  return (
    <div className="header-element header-search">
      <PseudoLink
        className="header-link"
        data-bs-toggle="modal"
        data-bs-target="#searchModal"
      >
        <i className="bx bx-search-alt-2 header-link-icon" />
      </PseudoLink>
    </div>
  );
};

export default NavBarSearch;
