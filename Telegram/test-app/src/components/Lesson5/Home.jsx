import React from "react";

export default function Home() {

    const userLocalstorage = JSON.parse(localStorage.getItem("user"))

    
    return (
        <div className="main">
            <h1>Hello {userLocalstorage.name}</h1>    
        </div>
    )
}