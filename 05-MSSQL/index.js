import config from './dbconfig.js'; 
import sql from 'mssql';
import PizzaService from './src/services/pizzas-services.js'; 
import Pizza from './src/models/pizza.js';

//console.log('AHORA VAMOS A EJECUTAR EL GET BY ID 1')
let TODO = new PizzaService();
/*let idLlamada =  await TODO.getById(1);
console.log(idLlamada);

console.log('AHORA VAMOS A EJECUTAR EL GET ALL')
let TodoLlamada = await TODO.getAll();
console.log(TodoLlamada);*/

console.log('AHORA VAMOS A EJECUTAR EL INSERT')
let mipizzitCambiadamipizzit = new Pizza();
mipizzitCambiadamipizzit.nombre = 'mica y agus the best team';
mipizzitCambiadamipizzit.libreGluten = 'asdas';
mipizzitCambiadamipizzit.importe = 1000;
mipizzitCambiadamipizzit.descripcion= 'jorge el curioso'
let InsertLlamada =  await TODO.insert(mipizzitCambiadamipizzit);
console.log(InsertLlamada);

/*console.log('AHORA VAMOS A EJECUTAR EL UPDATE')
let mipizzitCambiada = new Pizza();
mipizzitCambiada.id = 11;
mipizzitCambiada.nombre = 'cambio de pizza';
mipizzitCambiada.libreGluten = true;
mipizzitCambiada.importe = 1090;
mipizzitCambiada.descripcion= 'polshu solito'
let UpdateLlamada =  await TODO.update(mipizzitCambiada);
console.log(UpdateLlamada);

console.log('AHORA VAMOS A EJECUTAR EL DELETE')
let deleteId =  await TODO.deleteById(1);
console.log(deleteId);*/



/**let pool = await sql.connect(config);
let result = await pool.request().query("SELECT top 2 * from Pizzas");

console.log(result.recordsets.length) 
console.log(result.recordsets[0].length)
console.log(result.recordsets[0]);
console.log(result.recordset)
console.log(result.returnValue)
console.log(result.output)
console.log(result.rowsAffected)*/

process.exit(); 