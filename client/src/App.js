
import './App.css';
import {useState} from 'react'
import axios from 'axios'
import  Popup from './popup'

function Myform() {
const [pno, setpno]=useState("")
const [server, setserver]=useState("")
const [isopen, setisopen]=useState(false);
const [amount, setAmount]=useState("");
const togglepopup=()=>
{
 setisopen(!isopen)
}
 async function postname(e)

 {
   e.preventDefault();
   if(amount<=0)
   {
setserver('! Enter a valid amount')
   }
   else{
     setserver("")
   await axios.post('http://localhost:444/stk/push', {pno,amount}).then((response)=>{
     console.log(response)
      if (response.data.message==="Bad Request - Invalid PhoneNumber")
     {
       setserver("Please Check on your number")

     }
    if(response.data.ResponseDescription==="Success. Request accepted for processing")
     {
       setpno("");
       setAmount("");
       togglepopup();
       
     } 
     
   })
 } }
 return(
<div className="App">
 <h1>WELCOME TO M-PESA STK PUSH TEST PROJECT</h1>
 <div  className='logo'>
   <img src='lipa-na-mpesa.jpg'></img>
 </div>
<button onClick={togglepopup}>Click to Deposit</button>
{isopen && <Popup 
 handleClose={
   
  togglepopup}
 content={<div >
   <p className='error' >{server}</p>
   <form className='formdata' onSubmit={postname }>
   
   <div>
     <p>Enter the Mpesa number starting with country code</p>
     <img src='mpesa.png' className='image'></img><br></br>
     <label> M-PESA Number</label>
      <input type="number" maxLength="12" minLength="12" placeholder='2547XXXXXXXX'   value={pno} name="pno" onChange={(e)=>setpno(e.target.value)}
 required></input><br></br>
 <label>Amount</label><br></br>
 <input type="number"   required placeholder='Amount(ksh)'   value={amount} name="amount" onChange={(e)=>setAmount(e.target.value)}
 ></input>
 </div>

 
 <button type='submit'>PAY VIA M-PESA</button>
</form>

</div>}
 />}

 
 
</div>
 );
}

export default Myform;

