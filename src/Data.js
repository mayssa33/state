import React from 'react'

const Data = ({todo,complete,handleDelete}) => {
    return (
        <div>
           {todo.map(el=> <div>
                <h3  className={el.isDone?"kemlin":""} > {el.action} </h3>
                <button onClick={()=>complete(el.id)} > complete</button>
                <button onClick={()=>handleDelete(el.id)} > delete</button>
                 </div>)}
        </div>
    )
}

export default Data

