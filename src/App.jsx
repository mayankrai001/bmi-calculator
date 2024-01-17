import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");


  let calBmi = (e)=>{
    e.preventDefault();
    if(weight===0 || height===0 ){
      alert("enter valid height and weight")
    }
    else{
      let bmi = (weight/(height * height) * 703)
      setBmi(bmi.toFixed(1))

      if(bmi < 25){
        setMessage("you are underweight")
      }
      else if(bmi > 25 && bmi<30){
        setMessage("you are healthy weighted individual")
      }
      else{
        setMessage("you are overweight")
      }
    }
  }

  let reload = () =>{
    window.location.reload()
  }

  return (
    <div className="container bg-slate-500 h-[300px] w-[400px] rounded-lg p-5">
      <h2 className="text-2xl font-bold p-5">BMI Calculator</h2>
      <form onSubmit={calBmi}>
        <div className="p-5">
          <label>Weight(lbs)</label>
          <input className="bg-slate-600 rounded-lg mx-5 text-center"
            type="text"
            placeholder="enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Height(in)</label>
          <input className="bg-slate-600 rounded-lg mx-5 text-center"
            type="text"
            placeholder="enter your height"
            value={height}
            onChange={(e)=> setHeight(e.target.value)}
          ></input>
        </div>
        <div>
          <button className="btn bg-slate-600 m-3" type="submit">
            Submit
          </button>
          <button className="btn bg-slate-600 m-3" onClick={reload} type="submit">
            Reload
          </button>
        </div>
        <div className="center">
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
