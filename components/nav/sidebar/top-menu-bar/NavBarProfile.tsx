import Image from "next/image";
import PseudoLink from "@/components/elements/PseudoLink";

const NavBarProfile = () => {
  return (
    <div className="header-element">
      <PseudoLink
        className="header-link dropdown-toggle"
        id="mainHeaderProfile"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        <div className="d-flex align-items-center">
          <div className="me-sm-2 me-0">
            <Image
              src="/assets/images/faces/9.jpg"
              alt="img"
              width={32}
              height={32}
              className="rounded-circle"
            />
          </div>
          <div className="d-sm-block d-none">
            <p className="fw-semibold mb-0 lh-1">Dudz Artiaga</p>
            <span className="op-7 fw-normal d-block fs-11">
              Chief Technology Officer
            </span>
          </div>
        </div>
      </PseudoLink>
      <ul
        className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
        aria-labelledby="mainHeaderProfile"
      >
        <li>
          <a className="dropdown-item d-flex" href="profile.html">
            <i className="ti ti-user-circle fs-18 me-2 op-7" />
            Profile
          </a>
        </li>
        <li>
          <a className="dropdown-item d-flex" href="mail.html">
            <i className="ti ti-inbox fs-18 me-2 op-7" />
            Inbox{" "}
            <span className="badge bg-success-transparent ms-auto">25</span>
          </a>
        </li>
        <li>
          <a
            className="dropdown-item d-flex border-block-end"
            href="to-do-list.html"
          >
            <i className="ti ti-clipboard-check fs-18 me-2 op-7" />
            Task Manager
          </a>
        </li>
        <li>
          <a className="dropdown-item d-flex" href="mail-settings.html">
            <i className="ti ti-adjustments-horizontal fs-18 me-2 op-7" />
            Settings
          </a>
        </li>
        <li>
          <PseudoLink className="dropdown-item d-flex border-block-end">
            <i className="ti ti-wallet fs-18 me-2 op-7" />
            Bal: $7,12,950
          </PseudoLink>
        </li>
        <li>
          <a className="dropdown-item d-flex" href="chat.html">
            <i className="ti ti-headset fs-18 me-2 op-7" />
            Support
          </a>
        </li>
        <li>
          <a className="dropdown-item d-flex" href="sign-in-cover.html">
            <i className="ti ti-logout fs-18 me-2 op-7" />
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBarProfile;
