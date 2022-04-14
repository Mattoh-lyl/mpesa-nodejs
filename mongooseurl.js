const mongoose=require('mongoose');
function urls(){
   
const url='mongodb+srv://Moses:moses2339@cluster0.ktady.mongodb.net/newmpesa?retryWrites=true&w=majority';
mongoose.connect(url).then((db)=>{

  console.log  ('MONGODB CONNECTION ESTABLISHED!');
} );
}

//export the file
urls();
module.exports=urls;