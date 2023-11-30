import React, { useState, useEffect, useRef } from 'react'

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
    option?: string
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
    const [selectDisplay, setSelectDisplay] = useState<boolean>(false)
    //const [widthOptions, setWidthOptions] = useState()
    const cssClasses = ['dcp-button', color, props.className].join(' ')

    const selectOptionsRef = useRef(null)

    useEffect(() => {
        setTagValue(text ?? options[0].text)
    }, [])

    const handleOptionClick = (value: string) => {
        setTagValue(value)
        handleSelectDisplay()
    }

    const handleSelectDisplay = () => {
        setSelectDisplay((select) => !select)
    }

    return (
        <div className='dcp-select-area'>
            <button {...props} className={cssClasses} style={{ borderWidth: border }} onClick={handleSelectDisplay}>
                {props.slotstart && <span className='slot-start'>{props.slotstart}</span>}
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
                        <div className='option' onClick={() => handleOptionClick(item.option ?? item.text)}>
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
