'use client';
import React from "react";
export interface buttonProps {
    label: string;
    color?: string;
    offLabel?: string;
    icon?: any;
}

function handleClick(event: React.PointerEvent<HTMLButtonElement>) {
    console.log(event)
}

export const Button = (props : buttonProps) => {
    
    return <button onClick={handleClick} 
    className={
    `${props.color} px-4 py-2 rounded-md flex items-center
    hover:bg-sky-700 min-w-[140px]
    duration-200 ease-linear`}>
        {props.offLabel ? <span className="text-slate-400 pr-2">{props.offLabel}</span> : ''}
        {props.icon ? <span className="pr-2">{props.icon}</span> : ''}
        <span className="text-white">{props.label}</span>
    </button>
}