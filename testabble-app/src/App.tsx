import "./index.css";
import DcpButton from "./components/DcpButton";
import { Puzzle, Menu, ExportDocument, Google } from "./components/DcpIcon";
import DcpIconButton from "./components/DcpIconButton";

function App() {

    return (
        <>
            <DcpButton text="Teste" type="primary" fontSize="20px" />
            <Puzzle color="black" width={50} />
            <DcpIconButton color="primary">
                <Menu width={50} color="white" />
            </DcpIconButton>
            <ExportDocument color="black" />
            <Google />
        </>
    );
}

export default App;
