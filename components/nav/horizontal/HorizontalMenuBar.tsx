import React from "react";
import Image from "next/image";

import MenuLink from "../MenuItemLink";
import horizontalMenu from "./horizontal-menu.json";
import HorizontalMenuUser from "./HorizontalMenuUser";

type HorizontalMenuType = typeof horizontalMenu;

export const revalidate = false;

const HorizontalMenuBar = ({ menu }: { menu: HorizontalMenuType }) => {
  return (
    <aside className="app-sidebar sticky" id="sidebar">
      <div className="container-xl">
        <div className="main-sidebar">
          <nav className="main-menu-container nav nav-pills sub-open">
            <div className="landing-logo-container">
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
                    src="/assets/images/brand-logos/desktop-white.png"
                    alt="logo"
                    className="desktop-white"
                  />
                </a>
              </div>
            </div>
            <div className="slide-left" id="slide-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7b8191"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />{" "}
              </svg>
            </div>
            <ul className="main-menu">
              {menu.items?.map(({ id: iid, label, path, subitems }) => (
                <React.Fragment key={iid}>
                  {subitems.length > 0 ? (
                    <li className="slide has-sub">
                      <MenuLink className="side-menu__item">
                        <span className="side-menu__label me-2">{label}</span>
                        <i className="fe fe-chevron-right side-menu__angle op-8" />
                      </MenuLink>

                      <ul className="slide-menu child1">
                        {subitems?.map(
                          ({
                            id: siid,
                            label,
                            path,
                            children,
                            new: isNewSubItem,
                          }) => (
                            <React.Fragment key={siid}>
                              {children.length > 0 ? (
                                <li className="slide has-sub">
                                  <MenuLink className="side-menu__item">
                                    {label}
                                    {isNewSubItem && (
                                      <span className="badge bg-secondary-transparent ms-2">
                                        New
                                      </span>
                                    )}
                                    <i className="fe fe-chevron-right side-menu__angle" />
                                  </MenuLink>

                                  <ul className="slide-menu child2">
                                    {children.map(
                                      ({
                                        id: ciid,
                                        label,
                                        path,
                                        new: isNewChildItem,
                                      }) => (
                                        <li className="slide" key={ciid}>
                                          <a
                                            href={path}
                                            className="side-menu__item"
                                          >
                                            {label}
                                            {isNewChildItem && (
                                              <span className="badge bg-secondary-transparent ms-2">
                                                New
                                              </span>
                                            )}
                                          </a>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </li>
                              ) : (
                                <li className="slide">
                                  <a href={path} className="side-menu__item">
                                    {label}
                                    {isNewSubItem && (
                                      <span className="badge bg-secondary-transparent ms-2">
                                        New
                                      </span>
                                    )}
                                  </a>
                                </li>
                              )}
                            </React.Fragment>
                          )
                        )}
                      </ul>
                    </li>
                  ) : (
                    <li className="slide">
                      <a href={path} className="side-menu__item">
                        <span className="side-menu__label">{label}</span>
                      </a>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
            <div className="slide-right" id="slide-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7b8191"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />{" "}
              </svg>
            </div>

            {/* NOTE: this is for large screen view */}
            <div className="d-lg-flex d-none">
              <div className="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                
                <HorizontalMenuUser />
                
                {/* <button
                  className="btn btn-wave btn-icon btn-light switcher-icon"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#switcher-canvas"
                >
                  <i className="ri-settings-3-line" />
                </button> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default HorizontalMenuBar;
