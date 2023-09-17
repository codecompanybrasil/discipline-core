import React from 'react'

import { DcpColors } from '../../types'

interface DcpButtonAttribtutes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    tag?: any
    text: string
    color?: DcpColors
    slotstart?: any
    slotend?: any
}

interface DcpLinkAttribtutes extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    tag?: any
    text: string
    color?: DcpColors
    slotstart?: any
    slotend?: any
}

const DcpButton = ({
    tag: Tag = 'button',
    type = Tag == 'button' ? 'button' : undefined,
    text,
    color = 'primary',
    ...props
}: DcpButtonAttribtutes | DcpLinkAttribtutes) => {
    const cssClasses = ['dcp-button', color, props.className].join(' ')

    return (
        <Tag {...props} type={type} className={cssClasses}>
            {props.slotstart && <span className='slot-start'>{props.slotstart}</span>}
            <span>{text}</span>
            {props.slotend && <span className='slot-end'>{props.slotend}</span>}
        </Tag>
    )
}

export default DcpButton
