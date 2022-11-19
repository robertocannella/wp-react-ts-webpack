import React from "react"

interface ChildProps {
    color: string;
    onClick: (color?:string) => void;
    children?: React.ReactNode;

}

// A not typed declaration of a component
export const Child = ({color, onClick}: ChildProps) => {
    return (
    <div>Child Component's color <br/>
        <button onClick={()=>onClick}></button>
    </div>
    )
}

// A better way is to assign as React.FC Type for better typechecking
export const ChildAsFC: React.FC<ChildProps> = ({color,onClick}) => {
    return (
        <div>Child Component's color <br/>
            <button onClick={()=> onClick(color)}>Will Log</button>
        </div>
    )
}
