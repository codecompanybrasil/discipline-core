import React from 'react'

import back from '../../../assets/icons/black/icons8-back-100.png'
import backDisabled from '../../../assets/icons/gray/icons8-back-100.png'
import filter from '../../../assets/icons/black/icons8-options-100.png'
import firstPage from '../../../assets/icons/black/icons8-double-left-100.png'
import firstPageDisabled from '../../../assets/icons/gray/icons8-double-left-100.png'
import lastPage from '../../../assets/icons/black/icons8-double-right-100.png'
import lastPageDisabled from '../../../assets/icons/gray/icons8-double-right-100.png'
import more from '../../../assets/icons/black/icons8-more-100.png'
import next from '../../../assets/icons/black/icons8-forward-100.png'
import nextDisabled from '../../../assets/icons/gray/icons8-forward-100.png'
import puzzleBlack from '../../../assets/icons/black/icons8-puzzle-100.png'
import puzzleWhite from '../../../assets/icons/white/icons8-puzzle-100.png'
import taskBoardBlack from '../../../assets/icons/black/icons8-tarefa-100.png'
import taskBoardWhite from '../../../assets/icons/white/icons8-tarefa-100.png'
import exportDocumentBlack from '../../../assets/icons/black/icons8-abrir-documento-100.png'
import exportDocumentWhite from '../../../assets/icons/white/icons8-abrir-documento-100.png'
import arrowDownBlack from '../../../assets/icons/black/icons8-arrow-100.png'
import arrowDownWhite from '../../../assets/icons/white/icons8-arrow-100.png'
import aumentarFonteBlack from '../../../assets/icons/black/icons8-aumentar-fonte-100.png'
import aumentarFonteWhite from '../../../assets/icons/white/icons8-aumentar-fonte-100.png'
import diminuirFonteBlack from '../../../assets/icons/black/icons8-diminuir-fonte-100.png'
import diminuirFontWhite from '../../../assets/icons/white/icons8-diminuir-fonte-100.png'
import closeBlack from '../../../assets/icons/black/icons8-close-100.png'
import closeWhite from '../../../assets/icons/white/icons8-close-100.png'
import createBlack from '../../../assets/icons/black/icons8-create-50-black.png'
import createWhite from '../../../assets/icons/white/icons8-create-50-white.png'
import downloadBlack from '../../../assets/icons/black/icons8-download-100.png'
import exclamation from '../../../assets/icons/black/icons8-exclamation-60-black.png'
import exploreBlack from '../../../assets/icons/black/icons8-explore-50-black.png'
import exploreWhite from '../../../assets/icons/white/icons8-explore-50-white.png'
import eye from '../../../assets/icons/black/icons8-eye-48-black.png'
import eyeClosed from '../../../assets/icons/black/icons8-hide-48-black.png'
import gymBlack from '../../../assets/icons/black/icons8-gym-50-black.png'
import gymWhite from '../../../assets/icons/white/icons8-gym-50-white.png'
import homeBlack from '../../../assets/icons/black/icons8-home-48-black.png'
import homeWhite from '../../../assets/icons/white/icons8-home-48-white.png'
import linux from '../../../assets/icons/black/icons8-linux-50-black.png'
import mac from '../../../assets/icons/black/icons8-mac-50-black.png'
import windows from '../../../assets/icons/black/icons8-windows-50-black.png'
import optionsBlack from '../../../assets/icons/black/icons8-options-100.png'
import optionsWhite from '../../../assets/icons/white/icons8-options-100.png'
import tarefaBlack from '../../../assets/icons/black/icons8-tarefa-64-black.png'
import tarefaWhite from '../../../assets/icons/white/icons8-tarefa-100.png'
import lupaBlack from '../../../assets/icons/black/icons8-lupa-64-black.png'
import lupaWhite from '../../../assets/icons/white/icons8-lupa-64-white.png'
import calendarioBlack from '../../../assets/icons/black/icons8-calendário-100.png'
import calendarioWhite from '../../../assets/icons/white/icons8-calendário-100.png'
import enter from '../../../assets/icons/black/icons8-enter-50-black.png'
import google from '../../../assets/icons/colored/icons8-google-48-colored.png'
import menuBlack from '../../../assets/icons/black/icons8-menu-50-black.png'
import menuWhite from '../../../assets/icons/white/icons8-menu-50-white.png'
import tiktokBlack from '../../../assets/icons/black/icons8-tik-tok-50.png'
import tiktokWhite from '../../../assets/icons/white/icons8-tik-tok-50-white.png'
import verified from '../../../assets/icons/colored/icons8-verified-50.png'
import instagramBlack from '../../../assets/icons/black/icons8-instagram-50-black.png'
import instagramWhite from '../../../assets/icons/white/icons8-instagram-50-white.png'
import githubBlack from '../../../assets/icons/black/icons8-github-60-black.png'
import githubWhite from '../../../assets/icons/white/icons8-tik-tok-50-white.png'
import cronometroBlack from '../../../assets/icons/black/icons8-stopwatch-64-black.png'
import cronometroWhite from '../../../assets/icons/white/icons8-stopwatch-64-white.png'
import settingsBlack from '../../../assets/icons/black/icons8-settings-64-black.png'
import settingsWhite from '../../../assets/icons/white/icons8-settings-64-white.png'
import colecaoBlack from '../../../assets/icons/black/icons8-book-stack-50-black.png'
import colecaoWhite from '../../../assets/icons/white/icons8-book-stack-50-white.png'

interface DcpIconAttributes extends React.ImgHTMLAttributes<HTMLImageElement> {
    color?: 'black' | 'white' | 'colored'
    className?: string
    width?: number
}

const DcpIcon = (props: DcpIconAttributes) => {
    const cssClasses = props.className ? ['dcp-icon', props.className].join(' ') : 'dcp-icon'

    return (
        <img
            className={cssClasses}
            {...props}
            style={{ width: props.width ?? '24px', height: props.height ?? '24px' }}
        />
    )
}

const Puzzle = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? puzzleWhite : puzzleBlack} {...props} />
}
const Taskboard = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? taskBoardWhite : taskBoardBlack} {...props} />
}

const ExportDocument = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? exportDocumentWhite : exportDocumentBlack} {...props} />
}

const ArrowDown = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? arrowDownWhite : arrowDownBlack} {...props} />
}

const AumentarFonte = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? aumentarFonteWhite : aumentarFonteBlack} {...props} />
}

const DiminuirFonte = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? diminuirFontWhite : diminuirFonteBlack} {...props} />
}

const Close = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? closeWhite : closeBlack} {...props} />
}

const Create = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? createWhite : createBlack} {...props} />
}

const Explore = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? exploreWhite : exploreBlack} {...props} />
}

const Gym = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? gymWhite : gymBlack} {...props} />
}

const Home = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? homeWhite : homeBlack} {...props} />
}

const Options = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? optionsWhite : optionsBlack} {...props} />
}

const Tarefa = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? tarefaWhite : tarefaBlack} {...props} />
}

const Lupa = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? lupaWhite : lupaBlack} {...props} />
}

const Menu = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? menuWhite : menuBlack} {...props} />
}

const Calendar = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? calendarioWhite : calendarioBlack} {...props} />
}

const TikTok = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? tiktokWhite : tiktokBlack} {...props} />
}

const Instagram = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? instagramWhite : instagramBlack} {...props} />
}

const GitHub = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? githubWhite : githubBlack} {...props} />
}

const Cronometro = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? cronometroWhite : cronometroBlack} {...props} />
}

const Settings = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? settingsWhite : settingsBlack} {...props} />
}

const Colecao = ({ color = 'white', ...props }: DcpIconAttributes) => {
    return <DcpIcon src={color == 'white' ? colecaoWhite : colecaoBlack} {...props} />
}

const Enter = (props: DcpIconAttributes) => <DcpIcon src={enter} {...props} />
const Google = (props: DcpIconAttributes) => <DcpIcon src={google} {...props} />
const Verified = (props: DcpIconAttributes) => <DcpIcon src={verified} {...props} />

const Mac = (props: DcpIconAttributes) => <DcpIcon src={mac} {...props} />
const Linux = (props: DcpIconAttributes) => <DcpIcon src={linux} {...props} />
const Windows = (props: DcpIconAttributes) => <DcpIcon src={windows} {...props} />
const Exclamation = (props: DcpIconAttributes) => <DcpIcon src={exclamation} {...props} />
const Eye = (props: DcpIconAttributes) => <DcpIcon src={eye} {...props} />
const EyeClosed = (props: DcpIconAttributes) => <DcpIcon src={eyeClosed} {...props} />
const Download = (props: DcpIconAttributes) => <DcpIcon src={downloadBlack} {...props} />

const Filter = (props: DcpIconAttributes) => <DcpIcon src={filter} {...props} />
const More = (props: DcpIconAttributes) => <DcpIcon src={more} {...props} />

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
    More,
    ArrowDown,
    ExportDocument,
    AumentarFonte,
    DiminuirFonte,
    Close,
    Create,
    Download,
    Explore,
    Gym,
    Home,
    Linux,
    Exclamation,
    Eye,
    EyeClosed,
    Mac,
    Options,
    Tarefa,
    Lupa,
    Calendar,
    Windows,
    Enter,
    Menu,
    Google,
    TikTok,
    Instagram,
    GitHub,
    Cronometro,
    Verified,
    Settings,
    Colecao,

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
