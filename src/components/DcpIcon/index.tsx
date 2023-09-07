import React from 'react'

import back from '../../../assets/icons/black/icons8-back-100.png'
import backDisabled from '../../../assets/icons/gray/icons8-back-100.png'
import filter from '../../../assets/icons/black/icons8-options-100.png'
import firstPage from '../../../assets/icons/black/icons8-double-left-100.png'
import firstPageDisabled from '../../../assets/icons/gray/icons8-double-left-100.png'
import lastPage from '../../../assets/icons/black/icons8-double-right-100.png'
import lastPageDisabled from '../../../assets/icons/gray/icons8-double-right-100.png'
import next from '../../../assets/icons/black/icons8-forward-100.png'
import nextDisabled from '../../../assets/icons/gray/icons8-forward-100.png'

interface DcpIconAttributes extends React.ImgHTMLAttributes<HTMLImageElement> {}

const DcpIcon = (props: DcpIconAttributes) => <img className='dcp-icon' {...props} />

const Filter = (props: DcpIconAttributes) => <DcpIcon src={filter} {...props} />
const Back = (props: DcpIconAttributes) => <DcpIcon src={back} {...props} />
const BackDisabled = (props: DcpIconAttributes) => <DcpIcon src={backDisabled} {...props} />
const Next = (props: DcpIconAttributes) => <DcpIcon src={next} {...props} />
const NextDisabled = (props: DcpIconAttributes) => <DcpIcon src={nextDisabled} {...props} />
const FirstPage = (props: DcpIconAttributes) => <DcpIcon src={firstPage} {...props} />
const FirstPageDisabled = (props: DcpIconAttributes) => <DcpIcon src={firstPageDisabled} {...props} />
const LastPage = (props: DcpIconAttributes) => <DcpIcon src={lastPage} {...props} />
const LastPageDisabled = (props: DcpIconAttributes) => <DcpIcon src={lastPageDisabled} {...props} />

export {
    Filter,

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
