import { Sequelize } from "sequelize";

export const sequelize= new Sequelize('freedb_blog-system', 'freedb_tasneem', '7Htn3s!&UUwYMbB', {
    host: 'sql.freedb.tech',
    port:3306,
    dialect:'mysql'
  });
export const connectDB = async ()=>{
    try{
   return await sequelize.sync({alter:false});
    }
    catch(err){
        console.error("error to connect to database");
    }
}