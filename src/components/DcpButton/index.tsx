import React from 'react'

import { DcpColors } from '../../types'

interface DcpButtonAttribtutes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    tag?: any
    text: string
    color?: DcpColors
    slotStart?: any
    slotEnd?: any
}

interface DcpLinkAttribtutes extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    tag?: any
    text: string
    color?: DcpColors
    slotStart?: any
    slotEnd?: any
}

const DcpButton = ({
    tag: Tag = 'button',
    type = Tag == 'button' ? 'button' : undefined,
    text,
    color = 'primary',
    ...props
}: DcpButtonAttribtutes | DcpLinkAttribtutes) => {
    return (
        <Tag {...props} type={type} className={['dcp-button', color].join(' ')}>
            {props.slotStart && <span className='slot-start'>{props.slotStart}</span>}
            <span>{text}</span>
            {props.slotEnd && <span className='slot-end'>{props.slotEnd}</span>}
        </Tag>
    )
}

export default DcpButton
