import React, { useState } from 'react';
function Todo() {

    const [task, setTask] = useState("")
    const [data, setData] = useState([])   // for storing
    const [arr, setArr] = useState([])

    const onChangeHandler = (e) => {
        //console.log(e);
        setTask(e.target.value)
    };


    const AddTask = (e) => {
        e.preventDefault();
        if (task != "") {
            setData([...data,task]);
        }
        setTask('');
    }


    const onDragOver = (e, i) => { 
        e.preventDefault(); 
    }

    // const submitHandler = (e) => {
    //      e.preventDefault();
    //     if(task != ""){
    //     setData([...data, task]) // ...data = pahle vale data loose na ho uske liye

    //     setTask('')  // add todo karne ke bad input box ko blank karne ke liye
    // } 
    // }


    const onDragStart = (e, p, i) => {
        console.log(p);
        e.dataTransfer.setData("p", p);
        data.splice(i, 1);
    }

    const onDrop = (e, i) => {
        e.preventDefault();
        let id = e.dataTransfer.getData("p");
        console.log(id);
        setArr([...arr, id]);
    }

    const onDragStartUpper = (e, u, i) => {
        console.log(u);
        e.dataTransfer.setData("u", u);
        arr.splice(i, 1);
    }

    const onDropUpper = (e, i) => {
        e.preventDefault();
        let id = e.dataTransfer.getData("u");
        console.log(id);
        setData([...data, id]);
    }


    return (
        <>
            <div className="container mt-3">
                <div className="row justify-content-center align-items-center main-row">
                    <div className="col col-sm-6 shadow main-col bg-white">
                        <div className="row bg-warning text-dark">
                            <div className="col  p-2">
                                <h4 className='text-center'>Todo App </h4>
                            </div>
                        </div>

                        <form >
                            <div className="row justify-content-between text-white p-2">
                                <div className="form-group flex-fill mb-2 col-9">
                                    <input id="todo-input" type="text" className="form-control" name="text"
                                        value={task} onChange={onChangeHandler} />
                                </div>
                                <button type="submit" id="text" className="btn btn-success mb-2 ml-2" onClick={AddTask}>Add Todo</button>
                            </div>
                        </form>


                       
                        {/* {data.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={index}
                            task={value}
                            // onSelcet={deleteItem}
                        /> 
                        
                    })}                */}


                    </div>
                </div>
            </div>


            <div className="box" size="lg" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDropUpper(e)}>
                <h1>Drag</h1>
                {
                    data.map((task, i) => (
                        <li key={i} onDragStart={(e) => onDragStart(e,task,i)} draggable={true}>{task}</li>

                    ))}
            </div>


            <div className="box" size="lg" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)}>
                <h1>Drop</h1>
                {
                    arr.map((task, i) => (
                        <li key={i}  onDragStart={(e) => onDragStartUpper(e,task,i)} draggable={true} >{task}</li>


                    ))}
            </div>


        </>
    )
}

export default Todo