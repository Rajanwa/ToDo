import React, { useState } from "react";
import "./App.css"

const ToTo = (props) => {
    const [moj, setmoj] = useState("😆")

    let lga = () => {
        setmoj("😢")
    }
    let waps = () => {
        setmoj("😆")
    }


    return (
        <>
            <div className="style">
                <div style={{ marginRight: "35px" }}>
                    <button onMouseEnter={lga} onMouseLeave={waps} style={{ borderRadius: "12vh", fontSize: "3vh" }} onClick={() => {
                        props.onselect(props.id)
                    }}>{moj}</button></div>
                <li>{props.txt}</li>
            </div>
        </>
    )
}

export default ToTo;