
import { useState } from 'react';
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {


  //state to hold value from input field
  const [principle ,setPrinciple] = useState(0)
  const [rate ,setRate] = useState(0)
  const [year ,setYear] = useState(0)
  const [interest ,setInterest] = useState(0)

  //for conditional rendering
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)


  const validate =(e)=>{
    // console.log(e.target);
    //  console.log(e.target.name);  
    
    let name = e.target.name
    let value= e.target.value  
    console.log(!!value.match(/^[0-9]*$/));

   if (!!value.match(/^[0-9]*$/)) {
    if(name=="principle"){
      setPrinciple(value)
      setPrinciple(true)
    }
    else if(name=="rate"){
      setRate(value)
      setRate(true)
    }
    else{
      setYear(value)
      setYear(true)
    }
   }
   else{
    if(name=="principle"){
      // setPrinciple(value)
      setPrinciple(false)
    }
    else if(name=="rate"){
      // setRate(value)
      setRate(false)
    }
    else{
      // setYear(value)
      setYear(false)
    }
   }

   const handleReset =()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
   }

   const calculate = ()=>{
    setInterest((principle*rate*year)/100)
   }
    // console.log('principle',principle);
    // console.log('rate',rate);
    // console.log('year',year);

  }

  return (
    <>
      <div className=' d-flex justify-content-center align-items-center ' style={{width:'100',height:'100vh'}}>

        <div className='bg-light rounded p-5'>
          <h2 className=' '>Simple Interest App</h2>
          <p>calculate your simple interest easily</p>

          <div className='mt-5 bg-dark text-light p-3 rounded d-flex justify-content-center align-items-center shadow flex-column '>
            <h4 className='fw-bold fs-2'>0</h4>
            <p>total simple interest</p>     
          </div>  
          
            <form>
              <div className='mt-5'>
              <TextField id="outlined-basic" value={principle || ""} 
              label="Outlined" variant="outlined" 
              onchange={(e)=>validate(e)} className='w-100'/>
              {!isPrinciple &&
                <p className='text-danger'>*invalid input</p>
                }
              </div>

              <div className='mt-3'>
              <TextField id="outlined-basic" value={rate || ""} label="Outlined" variant="outlined"  onchange={(e)=>validate(e)} className='w-100'/>
              {!isRate &&
                <p className='text-danger'>*invalid input</p>
                }
              </div>

              <div className='mt-3'>
              <TextField id="outlined-basic" value={year || ""}label="Outlined" variant="outlined"  onchange={(e)=>validate(e)} className='w-100'/>
              {!isYear &&
                <p className='text-danger'>*invalid input</p>
                }
              </div>

              <div className='d-flex justify-content-between w-100 mt-4'>
              <Button variant="contained" disabled={isPrinciple && isRate && isYear ? false:true} onClick={calculate} >calculate</Button>

              <Button variant="contained" onClick={handleReset}>reset
              </Button>
              </div>

            </form>
          </div>
        </div>
      
    </>
  )
}

export default App
