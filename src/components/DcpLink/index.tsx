import React from 'react'

import { DcpColors } from '../../types'

interface DcpLinkAttribtutes extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string
    color?: DcpColors
    slotStart?: any
    slotEnd?: any
}

const DcpLink = ({ text, color = 'primary', ...props }: DcpLinkAttribtutes) => {
    return (
        <a {...props} className={['dcp-link', color].join(' ')}>
            {props.slotStart && <span className='slot-start'>{props.slotStart}</span>}
            <span>{text}</span>
            {props.slotEnd && <span className='slot-end'>{props.slotEnd}</span>}
        </a>
    )
}

export default DcpLink
