import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: "users" })
export class UserEntity {

    @PrimaryGeneratedColumn()
    readonly id: number

    @Column({ nullable: false, unique: true })
    public username: string

    @Column()
    public password: string




}
