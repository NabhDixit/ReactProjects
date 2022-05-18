import React ,{useState} from 'react';
import { addInput , ondragStart, ondropOver} from '../Action/index';
import { useDispatch,useSelector } from 'react-redux';


export default function Dnd() {
    
    const arr = useSelector((state)=>state.todolist.arr);
    const newArr =useSelector((state) => state.todolist.newArr);
    const [task, setTask] = useState("");
    const dispatch = useDispatch()

    const onChangeHandler=(e)=>{
        setTask(e.target.value);
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
                                <button type="submit" id="text" className="btn btn-success mb-2 ml-2" onClick={(event)=>dispatch(addInput(event,task))}>Add Todo</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


            <div className="box" size="lg" onDrop={(e) => dispatch(ondropOver(e,"drrag"))} onDragOver={(e) =>e.preventDefault()}>
                <h1>Drag</h1>
                {
                    arr.map((task, i) => (
                        <li key={i} onDragStart={(e) => dispatch(ondragStart (e, task, i, "drrag"))} draggable={true} >{task}</li>

                    ))}
            </div>

            <div className="box" size="lg" onDragOver={(e) => e.preventDefault()} onDrop={(e) => dispatch(ondropOver(e,"drop"))}>
                <h1>Drop</h1>
                {
                    newArr.map((task, i) => (
                        <li key={i}  onDragStart={(e) => dispatch(ondragStart(e,task,i,"drop"))} draggable={true} >{task}</li>


                    ))}
            </div>
        </>
    )
}
