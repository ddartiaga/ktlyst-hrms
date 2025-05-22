import Image from "next/image";
import PseudoLink from "@/components/elements/PseudoLink";

const NavBarCountry = () => {
  return (
    <div className="header-element country-selector">
      <PseudoLink
        className="header-link"
        data-bs-toggle="modal"
        data-bs-target="#countryModal"
      >
        <Image
          width={28}
          height={28}
          src="/assets/images/flags/us_flag.jpg"
          alt="img"
          className="rounded-circle header-link-icon"
        />
        <span className="fw-semibold mb-0 lh-1">EN</span>
      </PseudoLink>
    </div>
  );
};

export default NavBarCountry;
