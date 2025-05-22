import Image from "next/image";

import React from "react";
import menu from "./daloy-menu.json";
import Link from "next/link";
import PseudoLink from "@/components/elements/PseudoLink";
import clsx from "clsx";

const SideMenuBar = () => {
  return (
    <aside className="app-sidebar sticky" id="sidebar">
      <div className="main-sidebar-header">
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
      <div className="main-sidebar" id="sidebar-scroll">
        <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div className="slide-left" id="slide-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
            </svg>
          </div>
          <ul className="main-menu">
            {menu.categories.map(({ id: cid, label, subcategory }) => (
              <React.Fragment key={cid}>
                <li className="slide__category">
                  <span className="category-name text-primary fs-bold">
                    {label}
                  </span>
                </li>

                {subcategory.map(
                  ({
                    id: scid,
                    label,
                    items,
                    path,
                    new: isNewSubCat,
                    icon,
                  }) => (
                    <li className={clsx("slide has-sub")} key={scid}>
                      <Link href={path ?? ""} className="side-menu__item">
                        <i className={`${icon} side-menu__icon`} />
                        <span className="side-menu__label">
                          {label}
                          {items.length > 0 && (
                            <span className="badge bg-warning-transparent ms-2">
                              {items.length}
                            </span>
                          )}
                          {isNewSubCat && (
                            <span className="badge bg-secondary-transparent ms-2">
                              New
                            </span>
                          )}
                        </span>
                        {items.length > 0 && (
                          <i className="fe fe-chevron-right side-menu__angle" />
                        )}
                      </Link>

                      <ul className="slide-menu child1">
                        <li className="slide side-menu__label1">
                          <PseudoLink>{label}</PseudoLink>
                        </li>

                        {items.map(
                          ({
                            id: iid,
                            label,
                            path,
                            new: isNewItem,
                            // subitems NOTE: uncomment if with subitems, see menu.json
                          }) => (
                            <React.Fragment key={iid}>
                              <li className="slide">
                                <a href={path} className="side-menu__item">
                                  {label}
                                  {isNewItem && (
                                    <span className="badge bg-secondary-transparent ms-2">
                                      New
                                    </span>
                                  )}
                                </a>
                              </li>
                              {/* NOTE: uncomment if with subitems, see menu.json
                              for example */}
                              {/* {subitems.length > 0 ? (
                                <li className="slide has-sub">
                                  <PseudoLink className="side-menu__item">
                                    {label}
                                    {isNewItem && (
                                      <span className="badge bg-secondary-transparent ms-2">
                                        New
                                      </span>
                                    )}
                                    <i className="fe fe-chevron-right side-menu__angle" />
                                  </PseudoLink>
                                  <ul className="slide-menu child2">
                                    {subitems.map(
                                      ({
                                        id: siid,
                                        label,
                                        path,
                                        new: isNewSubItem,
                                      }) => (
                                        <li className="slide" key={siid}>
                                          <a
                                            href={path}
                                            className="side-menu__item"
                                          >
                                            {label}
                                            {isNewSubItem && (
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
                                    {isNewItem && (
                                      <span className="badge bg-secondary-transparent ms-2">
                                        New
                                      </span>
                                    )}
                                  </a>
                                </li>
                              )} */}
                            </React.Fragment>
                          )
                        )}
                      </ul>
                    </li>
                  )
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
        </nav>
        {/* End::nav */}
      </div>
      {/* End::main-sidebar */}
    </aside>
  );
};

export default SideMenuBar;
