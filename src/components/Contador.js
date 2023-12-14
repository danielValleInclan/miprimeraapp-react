import { useState } from "react";

function Contador() {
    const [num, setNum] = useState(0)

    const incrementar = () => {
        setNum(num + 1)
    }

    const decrementar = () => {
        setNum(num - 1)
    }

    const resetear = () => {
        setNum(1)
    }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={resetear}>Resetear</button>
        </div>
    )
}

export default Contador;
