const {Router} =require('express')
const userroutes= Router();
const {token,stkpush,callback}=require('../routescont/controllers');


userroutes.post('/stk/push',token,stkpush)
userroutes.post('/callback',callback);
module.exports=userroutes;