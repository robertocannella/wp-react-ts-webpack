import React from "react";

const onChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    console.log(event.target.value)
}

export const EventComponent:React.FC = () => {
    return (
        <div>
            <input type="text" onChange={onChange}/>
        </div>
    )
}