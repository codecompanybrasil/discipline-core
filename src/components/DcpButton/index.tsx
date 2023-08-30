import React from 'react';

type ButtonTypes = "link" | "button"
type ButtonColors = "primary" | "secondary" | "accent" | "danger" | "success"

type ButtonProps = {
    text: string,
    type?: ButtonTypes,
    color?: ButtonColors,
    icon?: React.FC,
    hasIcon?: boolean,
    onClick?: () => void
}

const DcpButton = ({ text, type = "button", color = "primary", icon: Icon, hasIcon, onClick = () => { } }: ButtonProps) => {

    if (type == 'link') {
        return (
            <button className={['dcp-link', color].join(" ")} onClick={onClick}>
                {hasIcon && Icon && <Icon />}
                <span>{text}</span>
            </button>
        )
    }
    return (
        <a className={['dcp-button', color].join(" ")} onClick={onClick}>
            {hasIcon && Icon && <Icon />}
            <span>{text}</span>
        </a>
    )
}

export default DcpButton