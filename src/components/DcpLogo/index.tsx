import React from 'react'
import discipline_baseline from '../../../assets/logos/discipline_baseline.png'
import logo_discipline_trans_azul from '../../../assets/logos/logo_discipline_trans_azul.png'
import logo_discipline_trans_preto from '../../../assets/logos/logo_discipline_trans_preto.png'
import logo_discipline from '../../../assets/logos/logo_discipline.png'
import logo_sem_padding from '../../../assets/logos/logo_sem_padding.png'
import logo_trans from '../../../assets/logos/logo_trans.png'
import logo from '../../../assets/logos/logo.png'

interface DcpLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    width?: string
    height?: string
}

const DcpLogo = (props: DcpLogoProps) => {
    return (
        <img className='dcp-logo' style={{ width: props.width ?? 'auto', height: props.height ?? 'auto' }} {...props} />
    )
}

const Logo = ({ width, height, ...props }: DcpLogoProps) => {
    return <DcpLogo src={logo} width={width} height={height} {...props} />
}

const DisciplineBaseline = ({ width, height, ...props }: DcpLogoProps) => {
    return <DcpLogo src={discipline_baseline} width={width} height={height} {...props} />
}

const LogoDisciplineTransAzul = ({ width, height, ...props }: DcpLogoProps) => {
    return <DcpLogo src={logo_discipline_trans_azul} width={width} height={height} {...props} />
}

const LogoDisciplineTransPreto = ({ width, height, ...props }: DcpLogoProps) => {
    return <DcpLogo src={logo_discipline_trans_preto} width={width} height={height} {...props} />
}

const LogoDiscipline = ({ width, height, ...props }: DcpLogoProps) => {
    return <DcpLogo src={logo_discipline} width={width} height={height} {...props} />
}

const LogoSemPadding = ({ width = '100px', height = '100px', ...props }: DcpLogoProps) => {
    return <DcpLogo src={logo_sem_padding} width={width} height={height} {...props} />
}

const LogoTrans = ({ width, height, ...props }: DcpLogoProps) => {
    return <DcpLogo src={logo_trans} width={width} height={height} {...props} />
}

export {
    Logo,
    DisciplineBaseline,
    LogoDisciplineTransAzul,
    LogoDisciplineTransPreto,
    LogoDiscipline,
    LogoSemPadding,
    LogoTrans,
}
