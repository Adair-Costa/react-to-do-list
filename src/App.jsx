import React, { useState, useRef } from "react";
import { v4 as myFunction } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // importacao dp fontAwesome
import { faList, faCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons';  // importacao do icon solid
// import { faTrashPlus } from '@fortawesome/free-brands-svg-icons';  // importacao do icon brands
import "./style/App.css";


const App = () => {

    // icons
    const iconList = <FontAwesomeIcon icon={faList} className="me-2"/>
    const iconAdd = <FontAwesomeIcon icon={faCirclePlus} className="me-2"/>
    const iconTrash = <FontAwesomeIcon icon={faTrash} className="me-2" />


    // hook useState
    const [add, setAdd] = useState(() => {
        return "";
    });

    const [saveAdd, setSaveAdd] = useState(() => {
        return [];
    });

    // hook useRef
    const focusRef1 = useRef();

    // functions
    function addToDoList() {
        if (add === "") {
            focusRef1.current.focus();
            window.alert("List empty!")
            return;
        }

        setSaveAdd((oldToDoList) => {
            return [...oldToDoList, {id: myFunction(), body: add}];
        });

        setAdd(() => {
            return "";
        });
    }

    function cleanToDoList() {
        if (saveAdd == "") {
            focusRef1.current.focus();
            window.alert("Nothing to clean!");
            return;
        }

        setSaveAdd(() => {
            return [];
        });
    }

    return (
        <div className="container w-50 w-20">
            <div className="row">
                <div className="col">

                    <div className="text-center p-3 mb-5 text-uppercase">
                        <h1 className="fs-3 to-do-list">{ iconList } To-do-list</h1>
                        <hr />
                    </div>

                    <div className="text-center">
                        <div className="input-group mb-3">
                            <input ref={focusRef1} type="text" className="form-control" placeholder="Add list" aria-label="Username"
                                aria-describedby="basic-addon1" value={add} onChange={(event) => { setAdd(event.target.value) }} />
                        </div>

                        <div className="d-flex justify-content-between">
                            <button onClick={addToDoList} type="button" className="btn btn-outline-success">{iconAdd}Add</button>
                            <button onClick={cleanToDoList} type="button" className="btn btn-outline-danger">{iconTrash}Clean All</button>
                        </div>
                    </div>
                    <hr />
                    {saveAdd.map((list) => {
                        return <ul className="list-unstyled text-capitalize" key={ myFunction()}>
                                    <li>{list.body}</li>
                                </ul>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;