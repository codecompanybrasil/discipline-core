import "./index.css";
// import { Bar } from "./components/DcpBar";
import { Bar } from "@codecompanybrasil/discipline-core/dist/esm/components/DcpBar";
import { DcpButton } from "@codecompanybrasil/discipline-core";
import { Taskboard } from "./components/DcpIcon";
import DcpSelect from "./components/DcpSelect";
import DcpMobileButton from "./components/DcpMobileButton";

function App() {

    const handleClickTest = () => {
        alert("Função de teste")
    }


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
            <DcpMobileButton onClick={handleClickTest}>
                <Taskboard width={30} height={30} />
            </DcpMobileButton>
            <DcpButton text="opa" />
            <Taskboard />
            <DcpSelect color="accent" options={[
                {
                    text: "Option 1"
                },
                {
                    text: "Option 2"
                }
            ]} />
        </>
    );
}

export default App;
