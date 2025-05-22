const Badge = ({
    icon,
    text,
    color,
    onClick
}: {
    icon: string;
    text: string;
    color: string;
    onClick?: () => void;
}) => {
    return (
        <span className={`badge bg-${color}-transparent`} onClick={onClick}>
            <i className={`${icon} align-middle me-1`} />
            {text}
        </span>
    )
}

export default Badge