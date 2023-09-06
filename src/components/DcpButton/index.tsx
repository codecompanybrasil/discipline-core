import React from 'react'

import { DcpColors } from '../../types'

interface DcpButtonAttribtutes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    color?: DcpColors
    icon?: React.FC
    hasIcon?: boolean
}

const DcpButton = ({
    text,
    type = 'button',
    color = 'primary',
    hasIcon,
    icon: Icon,
    ...props
}: DcpButtonAttribtutes) => {
    return (
        <button {...props} type={type} className={['dcp-button', color].join(' ')}>
            {hasIcon && Icon && <Icon />}
            <span>{text}</span>
        </button>
    )
}

export default DcpButton
