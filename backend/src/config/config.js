const dotenv=require('dotenv')
const path =require('path')


dotenv.config({path: path.join(__dirname,'../../.env')})


const config={
    MONGO_URL:process.env.MONGO_URI,
    PORT:process.env.PORT || 4000,
    HOST:process.env.HOST ||"localhost",
    GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
    SESSION_SECRET:process.env.SESSION_SECRET,
    ACCESS_TOKEN_SECRET:process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET:process.env.REFRESH_TOKEN_SECRET
}




module.exports=config