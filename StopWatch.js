import { useState, useEffect } from "react";
export default function StopWatch() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [mSec, setMsec] = useState(0);
  const [stop, setStop] = useState(false);
  const onStart = () => {
    setStop(true);
    //setMsec(msec+1);
  };
  const onStop = () => {
    setStop(false);
  };
  const onReset = () => {
    setHour(0);
    setMin(0);
    setSec(0);
    setMsec(0);
  };
  useEffect(() => {
    let interval = null;
    if (stop) {
      interval = setInterval(() => {
        if (min > 59) {
          setHour(hour + 1);
          setMin(0);
          clearInterval(interval);
        }
        if (sec > 59) {
          setMin(min + 1);
          setSec(0);
          clearInterval(interval);
        }
        if (mSec > 999) {
          setSec(sec + 1);
          setMsec(0);
          clearInterval(interval);
        }
        if(mSec <= 999){
          setMsec(mSec+1);
        }
      },10)
    }
    else{
        clearInterval(interval);
    }
    return()=>{
        clearInterval(interval)
    }
   
  })
  return (
    <div
      style={{ background: "green", height: 400, padding: 20, color: "yellow" }}
    >
      <p>You can use this StopWatch</p>
      <div style={{ background: "black", color: "white", borderRadius: 10 }}>
        <h1>
          Hour:{hour}-Minute:{min}-Second:{sec}-MinSec:{mSec}
        </h1>
      </div>
      <div>
        <button style={{ background: "red", color: "white" }} onClick={onStart}>
          Start
        </button>
        <button
          style={{ background: "yellow", color: "blue" }}
          onClick={onStop}
        >
          Stop
        </button>
        <button
          style={{ background: "blue", color: "white" }}
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
