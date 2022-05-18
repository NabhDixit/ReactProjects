import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Alert, FormGroup, Form,Input } from "reactstrap";
export default function List() {

    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);
    const [list, setList] = useState([]);
    
    const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
      if(task != ""){
       const taskDetails = {value: task};
       setTaskList([...tasklist, taskDetails]);
      }
      }

const onDrop = (e,i) =>{
  e.preventDefault();
 let id=e.dataTransfer.getData("p"); 
 setList([...list, id])
 }

 const onDragOver=(e,i)=>{ e.preventDefault(); }
 
  const  onDragStart=(e,p,i)=>{
    console.log(p);
    e.dataTransfer.setData("p",p);
    tasklist.splice(i,1);
  }

  return (
    <>
    
    <Form>
     <FormGroup className="d-flex  justify-content-center p-4  one">
      <Input
        type="text"
        name="text"
        id="text"
        className="w-50 rounded-pill"
        onChange={(e) => handleChange(e)}
        placeholder="Add task here..."
      />
      <Button  color="secondary"  className="add-btn rounded-pill" id="text" onClick={AddTask}>Add</Button>
      </FormGroup>
     
      </Form>


      <div className="blok ">
        {/* Drag=========  */}
        <ul className="list shadow-lg" >
        <h1>Drag</h1>
          {
          tasklist.map((t,i) => (
             
          <Alert  className="box" size="lg" color="secondary" onDragStart={(e)=> onDragStart(e,t.value,i)} draggable={true}  key={i}> {t.value}</Alert>
          
          ))}
        </ul>
      {/* Drop---------------------- */}
        <ul className="list shadow-lg" onDragOver={(e)=> onDragOver(e)}   onDrop={(e)=> onDrop(e)}  >
        <h1>Drop</h1>
        {
          list.map((t,i) => (
         
          <Alert  className="box" size="lg" color="secondary"  key={i} >
         {t}
            </Alert>
          
           ))}
       </ul>

        </div>
    
    </>
  );
}
