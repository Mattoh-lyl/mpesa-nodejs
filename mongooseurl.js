require('dotenv').config();

const mongoose=require('mongoose');
function urls(){
   const url =process.env.MONGOURL;
mongoose.connect(url).then((db)=>{

  console.log  ('MONGODB CONNECTION ESTABLISHED!');
} );
}

//export the file
urls();
module.exports=urls;