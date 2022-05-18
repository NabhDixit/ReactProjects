export const addInput = (event,val) =>{
    return {
        type:"AddInput",
        payload:{event,val}
    }
}

export const ondragStart = (e, n, i,item) =>{
    return {
        type:"ondragStart",
        payload:{e,n,i,item}
 }
}

export const ondropOver = (ele, newitem) =>{
    return {
        type:"ondropOver",
        payload:{ele,newitem}
    }
}
// export const onDragStartUpper = (e, u, i) =>{
//     return {
//         type:"onDragStartUpper",
//         payload:{e, u, i}
//     }
// }

// export const onDropUpper = (evt,k) =>{
//     return {
//         type:"onDropUpper",
//         payload:{evt,k}
//     }
// }


