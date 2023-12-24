import "./index.css";
// import { Bar } from "./components/DcpBar";
import DcpSelect from "./components/DcpSelect";
import { Taskboard, Calendar } from "./components/DcpIcon";

function App() {

    // const handleClickTest = () => {
    //     alert("Função de teste")
    // }


    return (
        <>
            <DcpSelect slotstart={<Taskboard />} color="accent" options={[
                {
                    text: "Option 1",
                    slotStart: (<Taskboard />)

                },
                {
                    text: "Option 2",
                    slotStart: (<Calendar />)
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
