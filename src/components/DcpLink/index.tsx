import React from 'react'

import { DcpColors } from '../../types'

interface DcpLinkAttribtutes extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string
    color?: DcpColors
    icon?: React.FC
    hasIcon?: boolean
}

const DcpLink = ({ text, color = 'primary', hasIcon, icon: Icon, ...props }: DcpLinkAttribtutes) => {
    return (
        <a {...props} className={['dcp-link', color].join(' ')}>
            {hasIcon && Icon && <Icon />}
            <span>{text}</span>
        </a>
    )
}

export default DcpLink
