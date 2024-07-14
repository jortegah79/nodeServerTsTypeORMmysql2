import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profesor } from "./profesorModel";
import { Estudiante } from "./estudianteModel";

@Entity()
export class Curso extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
   
    @Column()
    nombre:string;

    @Column('text')
    descripcion:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    @ManyToOne(()=>Profesor,(profesor)=>profesor.cursos)
    @JoinColumn({name:'profesor_id'})
    profesor:Profesor

    @ManyToMany(()=>Estudiante)
    @JoinTable({
        name:'cursos_estudiantes',
        joinColumn:{name:'curso_id'},
        inverseJoinColumn:{ name:'estudiante_id'}
    })
    estudiantes:Estudiante[]
}