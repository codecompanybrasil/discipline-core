import React, { useState, useEffect, useRef } from 'react'

import { DcpColors } from '../../types'
import { ArrowDown } from '@codecompanybrasil/discipline-core/dist/esm/components/DcpIcon'
import './styles.scss'

interface DcpSelectAttributes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    tag?: any
    text?: string
    color?: DcpColors
    slotstart?: any
    className?: string,
    type?: string,
    fontSize?: string,
    border?: string,
    options: DcpSelectOption[]
}

interface DcpSelectOption {
    text: string,
    option?: string

}

const DcpSelect = ({
    tag: Tag = 'button',
    type = Tag == 'button' ? 'button' : undefined,
    text,
    color = 'primary',
    fontSize = '1rem',
    border = "5px",
    options,
    ...props
}: DcpSelectAttributes) => {

    const [tagValue, setTagValue] = useState<string>("")
    const [selectDisplay, setSelectDisplay] = useState<boolean>(false)
    const [widthOptions, setWidthOptions] = useState()
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
        setSelectDisplay(select => !select)
    }

    return (
        <div className="dcp-select-area">
            <Tag {...props} type={type} className={cssClasses} style={{borderWidth: border}} onClick={handleSelectDisplay} >
                {props.slotstart && <span className='slot-start'>{props.slotstart}</span>}
                <span style={{fontSize: fontSize}} >{tagValue}</span>
                <span className='slot-end'><ArrowDown /></span>
            </Tag>
            <div className={['select-options', color, props.className].join(' ')} style={{display: selectDisplay ? 'flex' : 'none'}} ref={selectOptionsRef}>
                {options.map((item, key) => (
                    <div key={key} data-id={key}>
                        <div className='option' onClick={() => handleOptionClick(item.option ?? item.text)}>
                            {item.text}
                        </div>
                        {key < options.length - 1 && (
                            <div className={"divisor"}></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DcpSelect
