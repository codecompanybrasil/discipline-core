import "./index.css";
// import { Bar } from "./components/DcpBar";
import DcpSelect from "./components/DcpSelect";

function App() {

    // const handleClickTest = () => {
    //     alert("Função de teste")
    // }


    return (
        <>
            <DcpSelect color="accent" options={[
                {
                    text: "Option 1"
                },
                {
                    text: "Option 2"
                }
            ]} />
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
