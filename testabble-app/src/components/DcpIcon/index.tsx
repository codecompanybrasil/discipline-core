import React from 'react'

import back from '../../../assets/icons/black/icons8-back-100.png'
import backDisabled from '../../../assets/icons/gray/icons8-back-100.png'
import filter from '../../../assets/icons/black/icons8-options-100.png'
import firstPage from '../../../assets/icons/black/icons8-double-left-100.png'
import firstPageDisabled from '../../../assets/icons/gray/icons8-double-left-100.png'
import lastPage from '../../../assets/icons/black/icons8-double-right-100.png'
import lastPageDisabled from '../../../assets/icons/gray/icons8-double-right-100.png'
import menu from '../../../assets/icons/black/icons8-more-100.png'
import next from '../../../assets/icons/black/icons8-forward-100.png'
import nextDisabled from '../../../assets/icons/gray/icons8-forward-100.png'
import puzzleBlack from '../../../assets/icons/black/icons8-puzzle-100.png'
import puzzleWhite from '../../../assets/icons/white/icons8-puzzle-100.png'
import taskBoardBlack from '../../../assets/icons/black/icons8-tarefa-100.png'
import taskBoardWhite from '../../../assets/icons/white/icons8-tarefa-100.png'

interface DcpIconAttributes extends React.ImgHTMLAttributes<HTMLImageElement> {
    color?: 'black' | 'white',
    className?: string,
    width?: number
}

const DcpIcon = (props: DcpIconAttributes) => {
    const cssClasses = props.className ? ['dcp-icon', props.className].join(' ') : 'dcp-icon'
    const width = props.width ? `${props.width}px` : "50px"

    return <img className={cssClasses} {...props} />
}

const Puzzle = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? puzzleWhite : puzzleBlack} {...props} />
}
const Taskboard = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? taskBoardWhite : taskBoardBlack} {...props} />
}

const Filter = (props: DcpIconAttributes) => <DcpIcon src={filter} {...props} />
const Menu = (props: DcpIconAttributes) => <DcpIcon src={menu} {...props} />

const Back = (props: DcpIconAttributes) => <DcpIcon src={back} {...props} />
const BackDisabled = (props: DcpIconAttributes) => <DcpIcon src={backDisabled} {...props} />
const Next = (props: DcpIconAttributes) => <DcpIcon src={next} {...props} />
const NextDisabled = (props: DcpIconAttributes) => <DcpIcon src={nextDisabled} {...props} />
const FirstPage = (props: DcpIconAttributes) => <DcpIcon src={firstPage} {...props} />
const FirstPageDisabled = (props: DcpIconAttributes) => <DcpIcon src={firstPageDisabled} {...props} />
const LastPage = (props: DcpIconAttributes) => <DcpIcon src={lastPage} {...props} />
const LastPageDisabled = (props: DcpIconAttributes) => <DcpIcon src={lastPageDisabled} {...props} />

export {
    Puzzle,
    Taskboard,
    Filter,
    Menu,

    // Pagination
    Back,
    BackDisabled,
    Next,
    NextDisabled,
    FirstPage,
    FirstPageDisabled,
    LastPage,
    LastPageDisabled,
}
