
import Image from "next/image";
import NavBarSearch from "./NavBarSearch";
import NavBarCountry from "./NavBarCountry";
import NavBarCart from "./NavBarCart";
import NavBarNotification from "./NavBarNotification";
import NavBarFullScreen from "./NavBarFullScreen";
import NavBarShortCut from "./NavBarShortCut";
import NavBarProfile from "./NavBarProfile";
import NavBarOffCanvas from "./NavBarOffCanvas";
import NavBarTheme from "./NavBarTheme";

export const revalidate = false;
const VerticalHeader = () => {
  return (
    <>
      <header className="app-header">
        <div className="main-header-container container-fluid">
          <div className="header-content-left">
            <div className="header-element">
              <div className="horizontal-logo">
                <a href="index.html" className="header-logo">
                  <Image
                    width={92}
                    height={32}
                    src="/assets/images/brand-logos/desktop-logo.png"
                    alt="logo"
                    className="desktop-logo"
                  />
                  <Image
                    width={92}
                    height={32}
                    src="/assets/images/brand-logos/toggle-logo.png"
                    alt="logo"
                    className="toggle-logo"
                  />
                  <Image
                    width={92}
                    height={32}
                    src="/assets/images/brand-logos/desktop-dark.png"
                    alt="logo"
                    className="desktop-dark"
                  />
                  <Image
                    width={92}
                    height={32}
                    src="/assets/images/brand-logos/toggle-dark.png"
                    alt="logo"
                    className="toggle-dark"
                  />
                  <Image
                    width={92}
                    height={32}
                    src="/assets/images/brand-logos/desktop-white.png"
                    alt="logo"
                    className="desktop-white"
                  />
                  <Image
                    width={92}
                    height={32}
                    src="/assets/images/brand-logos/toggle-white.png"
                    alt="logo"
                    className="toggle-white"
                  />
                </a>
              </div>
            </div>
            <div className="header-element">
              <a
                aria-label="Hide Sidebar"
                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                data-bs-toggle="sidebar"
              >
                <span />
              </a>
            </div>
          </div>
          <div className="header-content-right">
            <NavBarSearch />
            <NavBarCountry />
            <NavBarTheme />
            <NavBarCart />
            <NavBarNotification />
            <NavBarShortCut />
            <NavBarFullScreen />
            <NavBarProfile />
            <NavBarOffCanvas />
          </div>
        </div>
      </header>
    </>
  );
};

export default VerticalHeader;
