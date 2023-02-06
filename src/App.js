import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './loop.js';
import Loop from './loop.js';
/*Ei näytä tulosta ensimmäislle calculaten painamisella.*/
function App() {
  const [litres, setLitre] = useState(0)
  const [grams, setGram] = useState(0)
  const [Weight, setWeight] = useState(0)
  const [Burning, setBurning] = useState(0)
  const [Time, setTime] = useState(0)
  const [left, setleft] = useState(0)
  const [bottles, setbottles] = useState(0)
  const [result, setResult] = useState(0)
  const [gender, setGender] = useState(0)

  function laske(){
    setLitre(bottles * 0.33)
    setGram(litres * 8 * 4.5)
    setBurning(Weight / 10)
    setleft(grams - (Burning * Time))

  if(gender === 'male'){
    setResult(left / (Weight * 0.7))
  }
  else if(gender === 'female'){
    setResult(left / (Weight * 0.6))
  }
  if (result < 0){
    setResult(0)
  }
  }

  return (
    <div>
    <form onSubmit={laske}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight:</label>
        <input type="number" value={Weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles: </label>
        <select value={bottles} onChange={e => setbottles(e.target.value)}>
            <Loop min={0} max={30}/>
          </select>
      </div>
      <div>
        <label>Time:</label>
        <select value={Time} onChange={e => setTime(e.target.value)}>
            <Loop min={0} max={12}/>
          </select>
      </div>
      <div>
        <label>Gender: </label>
        <input type="radio" name="gender" value='male' defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value='female' onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(2)}</output>
      </div>
      <button type="button" onClick={laske}>Calculate</button>
    </form>
    </div>
  );
}

export default App;
