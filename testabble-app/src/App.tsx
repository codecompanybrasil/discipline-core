import "./index.css";
import { Bar } from "./components/DcpBar";
import { DcpButton } from "@codecompanybrasil/discipline-core";

function App() {

    return (
        <>
            <p>
                <Bar percent={60} spanPercent />
            </p>
            <br />
            <br />
            <p>
                Meu primo tem:
                <Bar percent={60} height="20px" width="300px" colorProgress="green" colorNoProgress="red" />
                90%
            </p>
            <DcpButton text="opa" />
        </>
    );
}

export default App;
