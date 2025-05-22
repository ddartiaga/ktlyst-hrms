import PseudoLink from "@/components/elements/PseudoLink";
import Image from "next/image";

const NavBarShortCut = () => {
  return (
    <div className="header-element header-shortcuts-dropdown">
      <PseudoLink
        className="header-link dropdown-toggle"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        id="notificationDropdown"
        aria-expanded="false"
      >
        <i className="bx bx-grid-alt header-link-icon" />
      </PseudoLink>

      <div
        className="main-header-dropdown header-shortcuts-dropdown dropdown-menu pb-0 dropdown-menu-end"
        aria-labelledby="notificationDropdown"
      >
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 fs-17 fw-semibold">Related Apps</p>
          </div>
        </div>
        <div className="dropdown-divider mb-0" />
        <div className="main-header-shortcuts p-2" id="header-shortcut-scroll">
          <div className="row g-2">
            <div className="col-4">
              <PseudoLink>
                <div className="text-center p-3 related-app">
                  <span className="avatar avatar-sm avatar-rounded">
                    <Image
                      width={28}
                      height={28}
                      src="/assets/images/apps/figma.png"
                      alt=""
                    />
                  </span>
                  <span className="d-block fs-12">Figma</span>
                </div>
              </PseudoLink>
            </div>
            <div className="col-4">
              <PseudoLink>
                <div className="text-center p-3 related-app">
                  <span className="avatar avatar-sm avatar-rounded">
                    <Image
                      width={28}
                      height={28}
                      src="/assets/images/apps/microsoft-powerpoint.png"
                      alt=""
                    />
                  </span>
                  <span className="d-block fs-12">Power Point</span>
                </div>
              </PseudoLink>
            </div>
            <div className="col-4">
              <PseudoLink>
                <div className="text-center p-3 related-app">
                  <span className="avatar avatar-sm avatar-rounded">
                    <Image
                      width={28}
                      height={28}
                      src="/assets/images/apps/microsoft-word.png"
                      alt=""
                    />
                  </span>
                  <span className="d-block fs-12">MS Word</span>
                </div>
              </PseudoLink>
            </div>
            <div className="col-4">
              <PseudoLink>
                <div className="text-center p-3 related-app">
                  <span className="avatar avatar-sm avatar-rounded">
                    <Image
                      width={28}
                      height={28}
                      src="/assets/images/apps/calender.png"
                      alt=""
                    />
                  </span>
                  <span className="d-block fs-12">Calendar</span>
                </div>
              </PseudoLink>
            </div>
            <div className="col-4">
              <PseudoLink>
                <div className="text-center p-3 related-app">
                  <span className="avatar avatar-sm avatar-rounded">
                    <Image
                      width={28}
                      height={28}
                      src="/assets/images/apps/sketch.png"
                      alt=""
                    />
                  </span>
                  <span className="d-block fs-12">Sketch</span>
                </div>
              </PseudoLink>
            </div>
            <div className="col-4">
              <PseudoLink>
                <div className="text-center p-3 related-app">
                  <span className="avatar avatar-sm avatar-rounded">
                    <Image
                      width={28}
                      height={28}
                      src="/assets/images/apps/google-docs.png"
                      alt=""
                    />
                  </span>
                  <span className="d-block fs-12">Docs</span>
                </div>
              </PseudoLink>
            </div>
            <div className="col-4">
              <PseudoLink>
                <div className="text-center p-3 related-app">
                  <span className="avatar avatar-sm avatar-rounded">
                    <Image
                      width={28}
                      height={28}
                      src="/assets/images/apps/google.png"
                      alt=""
                    />
                  </span>
                  <span className="d-block fs-12">Google</span>
                </div>
              </PseudoLink>
            </div>
            <div className="col-4">
              <PseudoLink>
                <div className="text-center p-3 related-app">
                  <span className="avatar avatar-sm avatar-rounded">
                    <Image
                      width={28}
                      height={28}
                      src="/assets/images/apps/translate.png"
                      alt=""
                    />
                  </span>
                  <span className="d-block fs-12">Translate</span>
                </div>
              </PseudoLink>
            </div>
            <div className="col-4">
              <PseudoLink>
                <div className="text-center p-3 related-app">
                  <span className="avatar avatar-sm avatar-rounded">
                    <Image
                      width={28}
                      height={28}
                      src="/assets/images/apps/google-sheets.png"
                      alt=""
                    />
                  </span>
                  <span className="d-block fs-12">Sheets</span>
                </div>
              </PseudoLink>
            </div>
          </div>
        </div>
        <div className="p-3 border-top">
          <div className="d-grid">
            <PseudoLink className="btn btn-primary">View All</PseudoLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarShortCut;
