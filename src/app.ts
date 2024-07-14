import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import estudiantesRoutes from './routes/estudiantesRoutes';
import profesoresRoutes from './routes/profesoresRoutes';
import cursosRoutes from './routes/cursosRoutes';

const app=express();

app.use(cors())
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    console.log('hola mundo')
    res.send('hola mundo')
})

app.use('/estudiantes',estudiantesRoutes)
app.use('/profesores',profesoresRoutes)
app.use('/cursos',cursosRoutes)

export default app;