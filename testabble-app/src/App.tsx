import "./index.css";
import { DcpButton } from "@codecompanybrasil/discipline-core";
import { Puzzle, Menu, ExportDocument, Google } from "./components/DcpIcon";
import DcpIconButton from "./components/DcpIconButton";
import { Logo, DisciplineBaseline, LogoDiscipline, LogoDisciplineTransAzul, LogoDisciplineTransPreto, LogoSemPadding, LogoTrans } from './components/DcpLogo';

function App() {

    return (
        <>
            <DcpButton text="Teste" color="success" fontSize="20px" />
            <Puzzle color="black" width={50} />
            <DcpIconButton color="primary">
                <Menu width={50} color="white" />
            </DcpIconButton>
            <ExportDocument color="black" />
            <Google />
            <Logo width="100px" height="100px" />
            <br />
            <DisciplineBaseline />
            <br />
            <LogoDiscipline />
            <br />
            <LogoDisciplineTransAzul />
            <br />
            <LogoDisciplineTransPreto />
            <br />
            <LogoTrans />
            <br />
            <LogoSemPadding />
        </>
    );
}

export default App;
