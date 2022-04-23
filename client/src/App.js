
import './App.css';
import {useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import PhoneInput from 'react-phone-input-2'
 import 'react-phone-input-2/lib/style.css'
import CurrencyInput from 'react-currency-input-field';


function Myform() {
const [pno, setpno]=useState("")
const [server, setserver]=useState("")
const [amount, setAmount]=useState("");

 async function postname(e)

 {
   e.preventDefault();
   if(amount<=0)
   {
setserver('! Enter a valid amount')
   }
   else{
     setserver("")
   await axios.post(' https://trympesa.herokuapp.com/stk/push', {pno,amount}).then((response)=>{
     console.log(response)
      if (response.data.message==="Bad Request - Invalid PhoneNumber")
     {
       setserver("! Please Check on your number")

     }
    if(response.data.ResponseDescription==="Success. Request accepted for processing")
     {
      swal({
        title: "Success!",
        text: "Request sent for processing",
        icon: "success",
        button: "Close",
      }).then((okey)=>{
        if(okey)
        { window.location.reload(false);}
       
      });

      
    
     } 
     
   })
 } }
 return(
<div className="App">

  
     <nav><h2> DEPOSIT via M-PESA</h2></nav>
    
 
  <div className='body'>
   <img src='log.jpg'></img>
   <p className='error' >{server}</p>
 <div className='form'>

  
   <form className='formdata'  id='form' onSubmit={postname }>
   
   
   
     
   <div className='form-group'>
   <PhoneInput
  country={'ke'}
  enableAreaCodeStretch={true}
  value={pno}
  disableDropdown={true}
  onChange={setpno}
  onlyCountries={['ke']}
  id="pno"  className='form-control' type="text"   placeholder="Phone Number"   name="pno" 
 required
//  disableDropdown={true}
 countryCodeEditable={false}
> </PhoneInput>
      {/* <input id="pno"  className='form-control' type="number" maxLength="12" minLength="12"   placeholder='254XXXXXXXXX'   value={pno} name="pno" onChange={(e)=>setpno(e.target.value)}
 required></input> */}
 <label for="pno" className='form-label' >Phone Number</label>
 </div>
 <div  className='form-group'>
   <CurrencyInput
      id="amount"  className='form-control' required  placeholder='KES'
    value={amount}
    onValueChange={setAmount}
   intlConfig={{ locale: 'sw-KE', currency: 'KES' }}
   decimalSeparator="." groupSeparator=","
   allowNegativeValue={false}
   disableAbbreviations={false}
  
   ></CurrencyInput>
 {/* <input type="number"  id="amount"  className='form-control' required  placeholder='Amount'  value={amount} name="amount" onChange={(e)=>setAmount(e.target.value)}>
   </input> */}
    <label for="amount" className='form-label'>Amount</label>
 </div>
<div><button type='submit' className='button'>Deposit</button></div>
 
 

</form>
</div>
</div>

</div>
 );
}

export default Myform;

