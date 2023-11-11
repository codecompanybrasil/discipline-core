import React from 'react'

import { DcpColors } from '../../types'

interface DcpButtonAttribtutes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    tag?: any
    text: string
    color?: DcpColors
    slotstart?: any
    slotend?: any,
    className?: string,
    type: string | undefined,
    fontSize?: string
}

interface DcpLinkAttribtutes extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    tag?: any
    text: string
    color?: DcpColors
    slotstart?: any
    slotend?: any,
    className?: string,
    type: string | undefined,
    fontSize?: string
}

const DcpButton = ({
    tag: Tag = 'button',
    type = Tag == 'button' ? 'button' : undefined,
    text,
    color = 'primary',
    fontSize = '1rem',
    ...props
}: DcpButtonAttribtutes | DcpLinkAttribtutes) => {
    const cssClasses = ['dcp-button', color, props.className].join(' ')

    return (
        <Tag {...props} type={type} className={cssClasses}>
            {props.slotstart && <span className='slot-start'>{props.slotstart}</span>}
            <span style={{fontSize: fontSize}} >{text}</span>
            {props.slotend && <span className='slot-end'>{props.slotend}</span>}
        </Tag>
    )
}

export default DcpButton
