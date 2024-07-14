import app from "./app";
import { AppDataSource } from "./db/conexion";
import { environment } from "./environment";

async function main() {
  try{
    
  await AppDataSource.initialize();
  console.log('Base de datos conectada');
  
  app.listen(environment.PORT, () => {
    console.log("Server activo");
    
  });
  }catch(err){
    if( err instanceof Error){
      console.log(err.message);
      
    }
  }
}

main();
