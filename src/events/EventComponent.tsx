import React from "react";

const onChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    console.log(event.target.value)
}

const onDragStart = (event:React.DragEvent<HTMLDivElement>) =>{
    console.log(`(${event.clientX}, ${event.clientY})`)
}
export const EventComponent:React.FC = () => {
    return (
        <div>
            <input type="text" onChange={onChange}/>
            <div draggable onDragStart={onDragStart}>Drag Me</div>
        </div>
    )
}