import PseudoLink from "@/components/elements/PseudoLink";

const NavBarNotification = () => {
  return (
    <div className="header-element notifications-dropdown">
      <PseudoLink
        className="header-link dropdown-toggle"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        id="messageDropdown"
        aria-expanded="false"
      >
        <i className="bx bx-bell header-link-icon" />
        <span
          className="badge bg-secondary rounded-pill header-icon-badge pulse pulse-secondary"
          id="notification-icon-badge"
        >
          5
        </span>
      </PseudoLink>
      <div
        className="main-header-dropdown dropdown-menu dropdown-menu-end"
        data-popper-placement="none"
      >
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 fs-17 fw-semibold">Notifications</p>
            <span
              className="badge bg-secondary-transparent"
              id="notifiation-data"
            >
              5 Unread
            </span>
          </div>
        </div>
        <div className="dropdown-divider" />
        <ul className="list-unstyled mb-0" id="header-notification-scroll">
          <li className="dropdown-item">
            <div className="d-flex align-items-start">
              <div className="pe-2">
                <span className="avatar avatar-md bg-primary-transparent avatar-rounded">
                  <i className="ti ti-gift fs-18" />
                </span>
              </div>
              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                <div>
                  <p className="mb-0 fw-semibold">
                    <a href="notifications.html">Your Order Has Been Shipped</a>
                  </p>
                  <span className="text-muted fw-normal fs-12 header-notification-text">
                    Order No: 123456 Has Shipped To Your Delivery Address
                  </span>
                </div>
                <div>
                  <PseudoLink className="min-w-fit-content text-muted me-1 dropdown-item-close1">
                    <i className="ti ti-x fs-16" />
                  </PseudoLink>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown-item">
            <div className="d-flex align-items-start">
              <div className="pe-2">
                <span className="avatar avatar-md bg-secondary-transparent avatar-rounded">
                  <i className="ti ti-discount-2 fs-18" />
                </span>
              </div>
              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                <div>
                  <p className="mb-0 fw-semibold">
                    <a href="notifications.html">Discount Available</a>
                  </p>
                  <span className="text-muted fw-normal fs-12 header-notification-text">
                    Discount Available On Selected Products
                  </span>
                </div>
                <div>
                  <PseudoLink className="min-w-fit-content text-muted me-1 dropdown-item-close1">
                    <i className="ti ti-x fs-16" />
                  </PseudoLink>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown-item">
            <div className="d-flex align-items-start">
              <div className="pe-2">
                <span className="avatar avatar-md bg-pink-transparent avatar-rounded">
                  <i className="ti ti-user-check fs-18" />
                </span>
              </div>
              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                <div>
                  <p className="mb-0 fw-semibold">
                    <a href="notifications.html">Account Has Been Verified</a>
                  </p>
                  <span className="text-muted fw-normal fs-12 header-notification-text">
                    Your Account Has Been Verified Sucessfully
                  </span>
                </div>
                <div>
                  <PseudoLink className="min-w-fit-content text-muted me-1 dropdown-item-close1">
                    <i className="ti ti-x fs-16" />
                  </PseudoLink>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown-item">
            <div className="d-flex align-items-start">
              <div className="pe-2">
                <span className="avatar avatar-md bg-warning-transparent avatar-rounded">
                  <i className="ti ti-circle-check fs-18" />
                </span>
              </div>
              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                <div>
                  <p className="mb-0 fw-semibold">
                    <a href="notifications.html">
                      Order Placed{" "}
                      <span className="text-warning">ID: #1116773</span>
                    </a>
                  </p>
                  <span className="text-muted fw-normal fs-12 header-notification-text">
                    Order Placed Successfully
                  </span>
                </div>
                <div>
                  <PseudoLink className="min-w-fit-content text-muted me-1 dropdown-item-close1">
                    <i className="ti ti-x fs-16" />
                  </PseudoLink>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown-item">
            <div className="d-flex align-items-start">
              <div className="pe-2">
                <span className="avatar avatar-md bg-success-transparent avatar-rounded">
                  <i className="ti ti-clock fs-18" />
                </span>
              </div>
              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                <div>
                  <p className="mb-0 fw-semibold">
                    <a href="notifications.html">
                      Order Delayed{" "}
                      <span className="text-success">ID: 7731116</span>
                    </a>
                  </p>
                  <span className="text-muted fw-normal fs-12 header-notification-text">
                    Order Delayed Unfortunately
                  </span>
                </div>
                <div>
                  <PseudoLink className="min-w-fit-content text-muted me-1 dropdown-item-close1">
                    <i className="ti ti-x fs-16" />
                  </PseudoLink>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="p-3 empty-header-item1 border-top">
          <div className="d-grid">
            <a href="notifications.html" className="btn btn-primary">
              View All
            </a>
          </div>
        </div>
        {/* <div className="p-5 empty-item1 d-none">
                      <div className="text-center">
                        <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                          <i className="ri-notification-off-line fs-2" />
                        </span>
                        <h6 className="fw-semibold mt-3">
                          No New Notifications
                        </h6>
                      </div>
                    </div> */}
      </div>
      {/* End::main-header-dropdown */}
    </div>
  );
};

export default NavBarNotification;
