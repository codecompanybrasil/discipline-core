import React, { useState, useEffect, useRef } from 'react'

import "./styles.scss"
import { DcpColors } from '../../types'
import { ArrowDown } from '../DcpIcon'

interface DcpSelectAttributes {
    text?: string
    color?: DcpColors
    slotstart?: any
    className?: string
    fontSize?: string
    border?: string
    options: DcpSelectOption[]
}

interface DcpSelectOption {
    text: string
    option?: string,
    slotStart?: any
    callback?: () => void
}

const DcpSelect = ({
    text,
    color = 'primary',
    fontSize = '1rem',
    border = '5px',
    options,
    ...props
}: DcpSelectAttributes) => {
    const [tagValue, setTagValue] = useState<string>('')
    const [slotStartValue, setSlotStartValue] = useState<any>(props.slotstart ?? undefined)
    const [selectDisplay, setSelectDisplay] = useState<boolean>(false)
    //const [widthOptions, setWidthOptions] = useState()
    const cssClasses = ['dcp-button', color, props.className].join(' ')

    const selectOptionsRef = useRef(null)

    useEffect(() => {
        setTagValue(text ?? options[0].text)
    }, [])

    const handleOptionClick = (value: string, slotStart: any, callback: () => void) => {
        setTagValue(value)
        if (slotStart) {
            setSlotStartValue(slotStart)
        }
        handleSelectDisplay()
        callback()
    }

    const handleSelectDisplay = () => {
        setSelectDisplay((select) => !select)
    }

    return (
        <div className='dcp-select-area'>
            <button {...props} className={cssClasses} style={{ borderWidth: border }} onClick={handleSelectDisplay}>
                {slotStartValue && <span className='slot-start'>{slotStartValue}</span>}
                <span style={{ fontSize: fontSize }}>{tagValue}</span>
                <span className='slot-end'>
                    <ArrowDown />
                </span>
            </button>
            <div
                className={['select-options', color, props.className].join(' ')}
                style={{ display: selectDisplay ? 'flex' : 'none' }}
                ref={selectOptionsRef}
            >
                {options.map((item, key) => (
                    <div key={key} data-id={key}>
                        <div className='option' onClick={() => handleOptionClick(item.option ?? item.text,item.slotStart ?? undefined , item.callback ?? (() => {}))}>
                            {item.text}
                        </div>
                        {key < options.length - 1 && <div className={'divisor'}></div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DcpSelect
