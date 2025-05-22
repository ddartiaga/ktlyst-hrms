"use client";

const ButtonIcon = ({ icon, ariaLabel, onClick }: { icon: string, ariaLabel?: string, onClick?: () => void }) => {
    return (
        <button type="button" aria-label={ariaLabel} className="btn btn-sm btn-primary-light" onClick={onClick}>
            <i className={icon}></i>
        </button>
    )
}

export default ButtonIcon