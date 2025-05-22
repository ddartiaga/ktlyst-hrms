import PseudoLink from "@/components/elements/PseudoLink";
import Image from "next/image";

const NavBarCart = () => {
  return (
    <div className="header-element cart-dropdown">
      <PseudoLink
        className="header-link dropdown-toggle"
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
      >
        <i className="bx bx-cart header-link-icon" />
        <span
          className="badge bg-primary rounded-pill header-icon-badge"
          id="cart-icon-badge"
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
            <p className="mb-0 fs-17 fw-semibold">Cart Items</p>
            <span className="badge bg-success-transparent" id="cart-data">
              5 Items
            </span>
          </div>
        </div>
        <div>
          <hr className="dropdown-divider" />
        </div>
        <ul className="list-unstyled mb-0" id="header-cart-items-scroll">
          <li className="dropdown-item">
            <div className="d-flex align-items-start cart-dropdown-item">
              <Image
                width={28}
                height={28}
                src="/assets/images/ecommerce/jpg/1.jpg"
                alt="img"
                className="avatar avatar-sm avatar-rounded br-5 me-3"
              />
              <div className="flex-grow-1">
                <div className="d-flex align-items-start justify-content-between mb-0">
                  <div className="mb-0 fs-13 text-dark fw-semibold">
                    <a href="cart.html">SomeThing Phone</a>
                  </div>
                  <div>
                    <span className="text-black mb-1">$1,299.00</span>
                    <PseudoLink className="header-cart-remove float-end dropdown-item-close">
                      <i className="ti ti-trash" />
                    </PseudoLink>
                  </div>
                </div>
                <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                  <ul className="header-product-item d-flex">
                    <li>Metallic Blue</li>
                    <li>6gb Ram</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown-item">
            <div className="d-flex align-items-start cart-dropdown-item">
              <Image
                width={28}
                height={28}
                src="/assets/images/ecommerce/jpg/3.jpg"
                alt="img"
                className="avatar avatar-sm avatar-rounded br-5 me-3"
              />
              <div className="flex-grow-1">
                <div className="d-flex align-items-start justify-content-between mb-0">
                  <div className="mb-0 fs-13 text-dark fw-semibold">
                    <a href="cart.html">Stop Watch</a>
                  </div>
                  <div>
                    <span className="text-black mb-1">$179.29</span>
                    <PseudoLink className="header-cart-remove float-end dropdown-item-close">
                      <i className="ti ti-trash" />
                    </PseudoLink>
                  </div>
                </div>
                <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                  <ul className="header-product-item">
                    <li>Analog</li>
                    <li>
                      <span className="badge bg-pink-transparent fs-10">
                        Free shipping
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown-item">
            <div className="d-flex align-items-start cart-dropdown-item">
              <Image
                width={28}
                height={28}
                src="/assets/images/ecommerce/jpg/5.jpg"
                alt="img"
                className="avatar avatar-sm avatar-rounded br-5 me-3"
              />
              <div className="flex-grow-1">
                <div className="d-flex align-items-start justify-content-between mb-0">
                  <div className="mb-0 fs-13 text-dark fw-semibold">
                    <a href="cart.html">Photo Frame</a>
                  </div>
                  <div>
                    <span className="text-black mb-1">$29.00</span>
                    <PseudoLink className="header-cart-remove float-end dropdown-item-close">
                      <i className="ti ti-trash" />
                    </PseudoLink>
                  </div>
                </div>
                <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                  <ul className="header-product-item d-flex">
                    <li>Decorative</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown-item">
            <div className="d-flex align-items-start cart-dropdown-item">
              <Image
                width={28}
                height={28}
                src="/assets/images/ecommerce/jpg/4.jpg"
                alt="img"
                className="avatar avatar-sm avatar-rounded br-5 me-3"
              />
              <div className="flex-grow-1">
                <div className="d-flex align-items-start justify-content-between mb-0">
                  <div className="mb-0 fs-13 text-dark fw-semibold">
                    <a href="cart.html">Kikon Camera</a>
                  </div>
                  <div>
                    <span className="text-black mb-1">$4,999.00</span>
                    <PseudoLink className="header-cart-remove float-end dropdown-item-close">
                      <i className="ti ti-trash" />
                    </PseudoLink>
                  </div>
                </div>
                <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                  <ul className="header-product-item d-flex">
                    <li>Black</li>
                    <li>50MM</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown-item">
            <div className="d-flex align-items-start cart-dropdown-item">
              <Image
                width={28}
                height={28}
                src="/assets/images/ecommerce/jpg/6.jpg"
                alt="img"
                className="avatar avatar-sm avatar-rounded br-5 me-3"
              />
              <div className="flex-grow-1">
                <div className="d-flex align-items-start justify-content-between mb-0">
                  <div className="mb-0 fs-13 text-dark fw-semibold">
                    <a href="cart.html">Canvas Shoes</a>
                  </div>
                  <div>
                    <span className="text-black mb-1">$129.00</span>
                    <PseudoLink className="header-cart-remove float-end dropdown-item-close">
                      <i className="ti ti-trash" />
                    </PseudoLink>
                  </div>
                </div>
                <div className="d-flex align-items-start justify-content-between">
                  <ul className="header-product-item d-flex">
                    <li>Gray</li>
                    <li>Sports</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="p-3 empty-header-item border-top">
          <div className="d-grid">
            <a href="checkout.html" className="btn btn-primary">
              Proceed to checkout
            </a>
          </div>
        </div>
        <div className="p-5 empty-item d-none">
          <div className="text-center">
            <span className="avatar avatar-xl avatar-rounded bg-warning-transparent">
              <i className="ri-shopping-cart-2-line fs-2" />
            </span>
            <h6 className="fw-bold mb-1 mt-3">Your Cart is Empty</h6>
            <span className="mb-3 fw-normal fs-13 d-block">
              Add some items to make me happy :)
            </span>
            <a
              href="products.html"
              className="btn btn-primary btn-wave btn-sm m-1"
              data-abc="true"
            >
              continue shopping <i className="bi bi-arrow-right ms-1" />
            </a>
          </div>
        </div>
      </div>
      {/* End::main-header-dropdown */}
    </div>
  );
};

export default NavBarCart;
