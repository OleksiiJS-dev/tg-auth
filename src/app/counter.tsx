import React from "react";

const Counter = () => {
    const [state, setState] = React.useState<number>(0);

    React.useEffect(() => {
        setState((state) => state + 1)
        console.log("UseEffect in tsx")
    }, [])

    return (
        <div>
            <button onClick={() => setState(state => state + 1)}>Click in tsx</button>
            Counter in TSX: {state}
        </div>
    )
}

export default Counter;