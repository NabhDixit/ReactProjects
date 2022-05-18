const initialData={
    arr:[],
    newArr:[]
}
export const todolist=(state=initialData,action)=>{
    switch(action.type){

        case "AddInput" :
            const {event,val}= action.payload;
            event.preventDefault();
             return {
                 ...state,
                 arr:[
                     ...state.arr,val
                 ],
             }

        case "ondragStart" :
            const{e, n, i,item}=action.payload;
            e.dataTransfer.setData("n",n)
            if(item==="drrag"){
                state.arr.splice(i,1) 
            }
            else{
                state.newArr.splice(i,1)
            }
             return{
                 ...state
             }  
         
        case "ondropOver" :
            const{ele, newitem}=action.payload;
            const id = ele.dataTransfer.getData("n");
            if(newitem === "drop")
             return{
                 ...state,
                 newArr:[...state.newArr,id]
             }
             else return{
                ...state,
                arr:[state.arr,id]
             }

            // case "onDragStartUpper":
            //     const{ev, u, it} =action.payload; 
                    
            //        const id1= ev.dataTransfer.setData("u", u);
            //         state.arr.splice(it, 1);
            //         return {
            //             ...state
            //         }

            // case "onDropUpper":
            //     const{evt,k} =action.payload; 
                            
            //      const id2= evt.dataTransfer.setData("u", u);
            //      return{
            //          ...state,
            //         newArr:[...state.arr, id2]
            //      }
                 
                

             default:
                 return state;
    }
}