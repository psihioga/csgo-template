'use client';

import React from "react";
export interface buttonProps {
    label: string;
}

function handleClick(event: React.PointerEvent<HTMLButtonElement>) {
    console.log(event)
}

export const Button = (props : buttonProps) => {
    
    return <button onClick={handleClick}>
        {props.label}
    </button>
}