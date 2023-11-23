import React from 'react'

import { DcpColors } from '../../types'

interface DcpButtonAttribtutes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    tag?: any
    color?: DcpColors
    className?: string
    border?: string
}

interface DcpLinkAttribtutes extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    tag?: any
    color?: DcpColors
    className?: string
    border?: string
}

const DcpMobileButton = ({
    tag: Tag = 'button',
    color = 'primary',
    border = '5px',
    children,
    ...props
}: DcpButtonAttribtutes | DcpLinkAttribtutes) => {
    const cssClasses = ['dcp-mobile-button', color, props.className].join(' ')

    return (
        <Tag {...props} className={cssClasses} style={{ borderWidth: border }}>
            {children}
        </Tag>
    )
}

export default DcpMobileButton
