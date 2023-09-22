import { TextField,Stack,Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [interset,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [validPrinciple,setValidPrinciple] = useState(true)
  const [validRate,setValidRate] = useState(true)
  const [validYear,setValidYear] = useState(true)

  const handleCalculate = (e) =>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill the form completely!!!")
    }else{
      setInterest(Math.floor(principle*rate/100*year))
    }
  }

  const validateUserInput = (e)=>{
    //{key}=object
    const {name,value} = e.target
    if(!!value.match(/^[0-9]+$/)){
      //valid expression
      if(name==="principle"){
        setPrinciple(value)
        setValidPrinciple(true)
      }else if(name==='rate'){
        setRate(value)
        setValidRate(true)
      }else{
        setYear(value)
        setValidYear(true)
      }
    }else{
      //invalid expression
      if(name==="principle"){
        setPrinciple(value)
        setValidPrinciple(false)
      }else if(name==='rate'){
        setRate(value)
        setValidRate(false)
      }else{
        setYear(value)
        setValidYear(false)
      }
    }
    
  }

  const handleReset = ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
  }
  return (
    <div style={{height:'100vh'}} className='w-100 d-flex justify-content-center align-items-center bg-dark'>

     <div style={{width:'600px'}} className='bg-light p-5 rounded' >
      <h3>Simple Interest Calculator</h3>
      <p>Calculate your simple interest Easily</p>
      <div style={{height:'150px'}} className="interest-card w-100 bg-warning d-flex flex-column justify-content-center align-items-center rounded shadow text-light mt-5">
        <h1> ₹ {' '} {interset} </h1>
        <p>Total Simple Interest</p>
      </div>

      <form className="mt-5" onSubmit={handleCalculate}>
        <div className="mb-3">
        <TextField className='w-100' id="outlined-basic1" label="₹ Principal Amount" variant="outlined" value={principle || ""} name='principle' onChange={(e)=>validateUserInput(e)} />
        </div>
        {
        !validPrinciple &&
        <div className="mb-3 text-danger fw-bolder">
          *Invalid Principal Amount
        </div>
        }
        <div className="mb-3">
        <TextField className='w-100' id="outlined-basic2" label="Rate of Interest (p.a) %" variant="outlined" value={rate || ""} name='rate' onChange={(e)=>validateUserInput(e)}/>
        </div>
        {
        !validRate &&
        <div className="mb-3 text-danger fw-bolder">
          *Invalid Rate Amount
        </div>
        }
        <div className="mb-3">
        <TextField className='w-100' id="outlined-basic3" label="Time Period (Yr)" variant="outlined" value={year || ""} name='year' onChange={(e)=>validateUserInput(e)}/>
        </div>
        {
        !validYear &&
        <div className="mb-3 text-danger fw-bolder">
          *Invalid Year input
        </div>
        }
        <Stack className='mt-2' direction="row" spacing={2}>
        <Button type='submit' style={{height:'70px',width:'50%'}}  variant="contained" disabled={validPrinciple && validRate && validYear?false:true} >Calculate</Button>
        <Button onClick={handleReset} style={{height:'70px',width:'250px'}} variant="outlined">Reset</Button>
        </Stack>
      </form>

      </div>

    </div>
  );
}

export default App;
