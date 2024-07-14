import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Estudiante extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    dni:string;

    @Column()
    nombre:string;

    @Column()
    apellido:string;

    @Column()
    email:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

}