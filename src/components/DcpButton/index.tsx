import React from 'react'

import { DcpColors } from '../../types'

interface DcpButtonAttribtutes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    color?: DcpColors
    slotStart?: any
    slotEnd?: any
}

const DcpButton = ({ text, type = 'button', color = 'primary', ...props }: DcpButtonAttribtutes) => {
    return (
        <button {...props} type={type} className={['dcp-button', color].join(' ')}>
            {props.slotStart}
            <span>{text}</span>
            {props.slotEnd}
        </button>
    )
}

export default DcpButton
