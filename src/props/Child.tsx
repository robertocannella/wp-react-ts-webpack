import React from "react"

interface ChildProps {
    color: string;
}

export const Child = ({color}: ChildProps) => {
    return <div>Child Component's color {color}</div>
}