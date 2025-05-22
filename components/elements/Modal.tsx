import React from "react";

type ModalProps = {
  isOpen?: boolean;
  id: string;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

const Modal = ({ id, title, children, footer, isOpen }: ModalProps) => {
  return (
    <>
      <div
        className="modal fade"
        data-bs-backdrop="static"
        id={id}
        tabIndex={-1}
        aria-labelledby={id}
        data-bs-keyboard="false"
        aria-hidden={isOpen}
      >
        {/* Scrollable modal */}
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">{title}</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body px-4 py-4">{children}</div>
            {footer && (
              <div className="modal-footer">
                <footer />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
