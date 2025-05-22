import Link from "next/link";
import Image from "next/image";
export const revalidate = false;

const HorizontalHeader = () => {
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
                    src="/assets/images/brand-logos/toggle-logo.png"
                    alt="logo"
                    className="toggle-logo"
                  />
                  <Image
                    width={92}
                    height={32}
                    src="/assets/images/brand-logos/toggle-dark.png"
                    alt="logo"
                    className="toggle-dark"
                  />
                </a>
              </div>
            </div>

            <div className="header-element">
              <Link
                href="#"
                className="sidemenu-toggle header-link"
                data-bs-toggle="sidebar"
                prefetch={false} // Prevent unnecessary prefetching
              >
                <span className="open-toggle">
                  <i className="ri-menu-3-line fs-20" />
                </span>
              </Link>
            </div>
          </div>

          {/* NOTE: this is for small screen view */}
          <div className="header-content-right">
            <div className="header-element align-items-center">
              <div className="btn-list d-lg-none d-block">
                <a type="button" href="/auth/signin" className="btn btn-primary">
                  Sign In
                </a>
                <a type="button" href="/auth/signout" className="btn btn-primary">
                  Sign Out
                </a>
                {/* <button
                  className="btn btn-icon btn-success switcher-icon"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#switcher-canvas"
                >
                  <i className="ri-settings-3-line" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HorizontalHeader;
