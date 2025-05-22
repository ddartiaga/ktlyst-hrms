import Link from "next/link";
import PseudoLink from "../elements/PseudoLink";

const SearchModal = () => {
  return (
    <div
      className="modal fade"
      id="searchModal"
      tabIndex={-1}
      aria-labelledby="searchModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="input-group">
              <PseudoLink className="input-group-text" id="Search-Grid">
                <i className="fe fe-search header-link-icon fs-18" />
              </PseudoLink>
              <input
                type="search"
                className="form-control border-0 px-2"
                placeholder="Search"
                aria-label="Username"
              />
              <PseudoLink className="input-group-text" id="voice-search">
                <i className="fe fe-mic header-link-icon" />
              </PseudoLink>
              <PseudoLink
                className="btn btn-light btn-icon"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fe fe-more-vertical" />
              </PseudoLink>
              <ul className="dropdown-menu">
                <li>
                  <PseudoLink className="dropdown-item">Action</PseudoLink>
                </li>
                <li>
                  <PseudoLink className="dropdown-item">
                    Another action
                  </PseudoLink>
                </li>
                <li>
                  <PseudoLink className="dropdown-item">
                    Something else here
                  </PseudoLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <PseudoLink className="dropdown-item">
                    Separated link
                  </PseudoLink>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-weight-semibold text-muted mb-2">
                Are You Looking For...
              </p>
              <span className="search-tags alert">
                <i className="fe fe-user me-2" />
                People
                <PseudoLink className="tag-addon" data-bs-dismiss="alert">
                  <i className="fe fe-x" />
                </PseudoLink>
              </span>
              <span className="search-tags alert">
                <i className="fe fe-file-text me-2" />
                Pages
                <PseudoLink className="tag-addon" data-bs-dismiss="alert">
                  <i className="fe fe-x" />
                </PseudoLink>
              </span>
              <span className="search-tags alert">
                <i className="fe fe-align-left me-2" />
                Articles
                <PseudoLink className="tag-addon" data-bs-dismiss="alert">
                  <i className="fe fe-x" />
                </PseudoLink>
              </span>
              <span className="search-tags alert">
                <i className="fe fe-server me-2" />
                Tags
                <PseudoLink className="tag-addon" data-bs-dismiss="alert">
                  <i className="fe fe-x" />
                </PseudoLink>
              </span>
            </div>
            <div className="my-4">
              <p className="font-weight-semibold text-muted mb-2">
                Recent Search :
              </p>
              <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                <Link href="notifications.html">
                  <span>Notifications</span>
                </Link>
                <PseudoLink
                  className="ms-auto lh-1"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fe fe-x text-muted" />
                </PseudoLink>
              </div>
              <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                <Link href="notifications.html">
                  <span>Alerts</span>
                </Link>
                <PseudoLink
                  className="ms-auto lh-1"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fe fe-x text-muted" />
                </PseudoLink>
              </div>
              <div className="p-2 border br-5 d-flex align-items-center text-muted mb-0 alert">
                <Link href="mail.html">
                  <span>Mail</span>
                </Link>
                <PseudoLink
                  className="ms-auto lh-1"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fe fe-x text-muted" />
                </PseudoLink>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="btn-group ms-auto">
              <button type="button" className="btn btn-sm btn-primary-light">
                Search
              </button>
              <button type="button" className="btn btn-sm btn-primary">
                Clear Recents
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
