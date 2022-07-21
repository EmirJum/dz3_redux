import React from 'react';


export  default function Mode({mode, changeMode,changeColor}) {
  let ChangeModeText = mode.current === "day" ? "Ночной режим" : "Дневной режим"
  const buttonHandler = () => {
    const newValue = mode.current === "day" ? "night": "day"
    changeMode({current: newValue})
  }
  const style = {
    day: {
      backgroundColor: "black"
    },
    night: {
      backgroundColor: "white"
    }
  }
  const newColor = mode.current === "day" ? style.day : style.night
  return (
    <div style={newColor}>
      <button onClick={buttonHandler} style={newColor} className="button">{ChangeModeText}</button>
    </div>
  )
  
}