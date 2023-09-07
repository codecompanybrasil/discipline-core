import React from 'react'

import { DcpColors } from '../../types'

interface DcpButtonAttribtutes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    tag?: any
    color?: DcpColors
}

interface DcpLinkAttribtutes extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    tag?: any
    color?: DcpColors
}

const DcpIconButton = ({
    tag: Tag = 'button',
    type = Tag == 'button' ? 'button' : undefined,
    children,
    color,
    ...props
}: DcpButtonAttribtutes | DcpLinkAttribtutes) => {
    return (
        <Tag {...props} type={type} className={['dcp-icon-button', color].join(' ')}>
            {children}
        </Tag>
    )
}

export default DcpIconButton
