import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/counterSlice'

function Counter() {

  const [range,setRange] = useState()

/* hook- useDispatch() */
const dispatch = useDispatch()

/* useSelector()- to access state in store */
const count = useSelector((state)=>state.counter.value)

  return (

    <>


<div className='d-flex bg-black justify-content-center align-items-center w-100' style={{height:'100vh'}}>

<div style={{width:'450px',height:'550px'}} className='shadow bg-white border rounded border-info p-3'>
<h3 style={{color:'dodgerblue'}} className='text-center'>Counter Application</h3>
<h1 style={{fontSize:'60px'}} className='text-center  text-warning p-2'>{count}</h1>

<div className='d-flex mt-5 text-center justify-content-center '>
<button type="button" class="btn  btn-info" onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
<button type="button" class="btn ms-2 btn-danger" onClick={()=>dispatch(reset())}>Reset</button>
<button type="button" class="btn ms-2 btn-warning" onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
</div>

<div className=' mt-5 text-center align-items-center justify-content-center '>
  <input placeholder='Range' className='form-control' onChange={(e)=>setRange(e.target.value)} type="text" />
</div>

</div>

</div>
    

    </>

  )
}



export default Counter