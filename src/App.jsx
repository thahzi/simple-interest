import { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Principle, setPrinciple] = useState(0);
  const [Year, setYear] = useState(0);
  const [Rate, setRate] = useState(0);
  const [Interest, setInterest] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [IsRate, setIsRate] = useState(true);
  const [IsYear, setIsYear] = useState(true);

  const validate= (e)=>{   /* Here we are assigning the usestate values comparing with the name given */
    // console.log(e.target.value);
    // console.log(e.target.name);
    console.log(!!e.target.value.match(/^[0-9]*$/));
    if(!!e.target.value.match(/^[0-9]*$/)){
      if(e.target.name === "Principle"){
        setPrinciple(e.target.value);
        setIsPrinciple(true);
        }
       else if(e.target.name === "Rate"){
        setRate(e.target.value);
        setIsRate(true);
        }
      else{
        setYear(e.target.value);
        setIsYear(true);
       }
    }
    else{
      if(e.target.name === "Principle"){
        setIsPrinciple(false);
        }
        else if(e.target.name === "Rate"){
          setIsRate(false);
          }
          else{
            setIsYear(false);
            }
      
    }
}

const handleReset=()=>{
  setPrinciple(0);
  setYear(0);
  setRate(0);
  setInterest(0);
  setIsPrinciple(true);
  setIsRate(true);
  setIsYear(true);
 
}

const calculate=()=>{

    let interest = (Principle*Rate*Year)/100;
    setInterest(interest);
    
}

  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh'}}>
      <div className='bg-light p-4 border rounded-4' style={{width:'450px'}} >
        <h2 className=''>Simple Interest Application</h2>
        <p className='card-text'>Calculate your simple interest easily</p>
        <div className='mt-5 flex-column rounded-5 shadow bg-warning d-flex justify-content-center align-items-center p-4'>
          <h2>₹ {Interest}</h2>
          <h5>Total Simple Interest</h5>
        </div>
          <form action="" className='mt-5'>
            <div className='mb-3'>
            <TextField id="outlined-basic" value={Principle || ""}  label="Principle Amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='Principle' />
            {!isPrinciple &&
             <p className='text-danger'>*Invalid Input</p>
            }
           
            </div>
            <div className='mb-3'>
            <TextField id="outlined-basic" value={Rate || ""} label="Rate of Interest" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='Rate' />
            {!IsRate &&
            <p className='text-danger'>*Invalid Input</p>
            }
            </div>
            <div className='mb-3'>
            <TextField id="outlined-basic" value={Year || ""}  label="Year" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='Year' />
            {!IsYear &&
            <p className='text-danger'>*Invalid Input</p>
            }
            </div>
            <div className='d-flex justify-content-between mt-4'>
            <Button variant="contained" className='' color='primary' style={{width:'190px',height:'60px'} } disabled={isPrinciple && IsRate && IsYear ? false:true} onClick={calculate}>CALCULATE</Button>
             <Button variant="outlined" className='' style={{width:'190px',height:'60px'}} onClick={handleReset}>RESET</Button>
            </div>
          </form>
          </div>
       
        
        
   </div>
    </>
  )
}

export default App