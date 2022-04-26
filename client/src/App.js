
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
        text: "Payment information sent to +"+ pno,
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
  containerStyle={{
    width:"280px"
  }}

   inputStyle={{
     width : "280px"
    

  }
   
    
  }
  
  value={pno}
  disableDropdown={true}
  onChange={setpno}
  onlyCountries={['ke']}
  id="pno"  
  className="form-control"
   type="text" 
  
  // name="pno" 
 required
 countryCodeEditable={false}
> </PhoneInput>
    
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

 
<button type='submit' className='btn' >Deposit</button>

</form>
</div>
</div>

</div>
 );
}

export default Myform;

