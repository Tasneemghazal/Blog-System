import { Sequelize } from "sequelize";

export const sequelize= new Sequelize('freedb_BlogSystem', 'freedb_ghazal-db', 'R?rJj%@BpYne4!?', {
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