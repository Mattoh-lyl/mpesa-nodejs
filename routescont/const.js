const PASSKEY='bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
const SHORTCODE=174379;
const CONSUMERKEY='yXPYU1eTJ5Wx0AVfNaNyphfbGYOfHGhK';
const CONSUMERSECRET='A53SGMTfsGrL8J4m';
const axios=require('axios')
module.exports.tok=async (req,res,next)=>
{
 
    const url="https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  const auth ='Basic '+ Buffer.from(CONSUMERKEY+':'+CONSUMERSECRET).toString('base64');
    
   const headers={Authorization: auth,};
   axios.get(url,{headers})
   .then((response)=>
   {
       console.log(response)
       // let data=response.data;//response.data is the response that the safaricom give after validating the detail sent in search of authorization token
       // let accesstoken=data.access_token;// data.access_token is the token sent by safaricom in the data object
       // console.log(accesstoken);
       
    //    req.token=data.access_token;
   next();
})
  .catch((error)=>
  {
      res.send(error)
      console.log(error)}) 

};