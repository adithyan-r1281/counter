
import './App.css';
import {useState} from 'react'
function App() {
  const[counter,setCounter]=useState(0)//counter is a state to hold values
  function incrementCounter(){
    setCounter(counter+1);
  }
  function decrement(){
    if(counter>0){
      setCounter(counter-1)

    }
  }
  function reset(){
    setCounter(0)
  }
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:'10px',padding:'2px 5px'}} className="App">
      <header className="App-header">
        <h3 style={{color:'white',backgroundColor:'red',padding:'5px',textAlign:'center'}}>Counter App</h3>
        <h2 style={{color:'red',textAlign:'center'}}>{counter}</h2>
        <button style={{backgroundColor:"green",color:"white",padding:"10px",margin:'5px',borderRadius:'25%',borderColor:'white'}} onClick={incrementCounter}>ADD</button>
        <button style={{backgroundColor:"red",color:"white",padding:"10px",margin:'5px',borderRadius:'25%',borderColor:'white'}} onClick={decrement}>REDUCE</button>
        <button style={{backgroundColor:"blue",color:"white",padding:"10px",margin:'5px',borderRadius:'25%',borderColor:'white'}} onClick={reset}>RESET</button>

      </header>
    </div>
  );
}

export default App;
