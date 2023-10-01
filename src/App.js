import React, { useState } from "react";
import "./App.css"
import ToTo from "./ToTo";

function App() {
    const [name, setname] = useState("");
    const [long, setlong] = useState([]);

    let get = (event) => {
        setname(event.target.value);
    }
    let values = () => {
        setlong((olditem) => {
            return [...olditem, name]
        });
        setname("");

    }
    let Deleted = (id) => {
        // console.log("bgfbgf")
        setlong((olditem) => {
            return olditem.filter((Element, index) => {
                return index !== id;
            });
        });
    }
    return (<>
        <div className="whole">
            <div className="center">
                <h1>To Do List</h1>
                <div className="inbut">
                    <input type="text" placeholder="Add Items" value={name} onChange={get} />
                    <button onClick={values} style={{ fontSize: "3vh", borderRadius: "12vh", marginLeft: "1" }}> 👍 </button>
                </div>
                <div className="list">
                    <ol>
                        {long.map((items, index) => {
                            return <ToTo
                                txt={items}
                                key={index}
                                id={index}
                                onselect={Deleted}
                            />
                        })}
                    </ol>
                </div>
            </div>
        </div>
    </>)
}

export default App;