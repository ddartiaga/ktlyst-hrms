"use client";

import clsx from "clsx";
import React, { useRef, useEffect } from "react";

type OffCanvasProps = {
  id: string;
  className?: string;
  labelId: string;
  label: string;
  witBackdrop?: boolean;
  children: React.ReactNode;
  onShown?: () => void;
  onHidden?: () => void;
};

const OffCanvas = ({
  id,
  className,
  labelId,
  label,
  witBackdrop = false,
  children,
  onShown,
  onHidden,
}: OffCanvasProps) => {
  const offcanvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const offcanvasEl = offcanvasRef.current;
    if (!offcanvasEl) return;

    const handleShown = () => {
      if (onShown) {
        onShown();
      }
    };

    const handleHidden = () => {
      if (onHidden) {
        onHidden();
      }
    };

    // Attach event listeners for Bootstrap offcanvas events:
    offcanvasEl.addEventListener("shown.bs.offcanvas", handleShown);
    offcanvasEl.addEventListener("hidden.bs.offcanvas", handleHidden);

    return () => {
      offcanvasEl.removeEventListener("shown.bs.offcanvas", handleShown);
      offcanvasEl.removeEventListener("hidden.bs.offcanvas", handleHidden);
    };
  }, [id, onShown, onHidden]);

  return (
    <div
      ref={offcanvasRef}
      className={clsx("offcanvas", className)}
      tabIndex={-1}
      id={id}
      aria-labelledby={labelId}
      data-bs-backdrop={witBackdrop}
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id={labelId}>
          {label}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      {/* Remove fixed container/row wrapping */}
      <div className="offcanvas-body">{children}</div>
    </div>
  );
};

export default OffCanvas;
