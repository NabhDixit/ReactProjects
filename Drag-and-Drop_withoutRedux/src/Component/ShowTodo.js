import React from 'react'

function ShowTodo(props) {
   
  


    return (  
        <div className='container'>
            <div className="row my-2">
               
                <div className="col-6">
                    <h6 draggable={true}> {props.task}</h6>
                </div>
                <div className="col-6">
                {/* <button className="btn btn-danger"  onClick={()=>{
                    props.onSelcet(props.id)
                  }}>Delete</button> */}
               
                </div>
            </div>
            
        </div>
    )
}

export default ShowTodo   