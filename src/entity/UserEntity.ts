import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Roles} from "../enums/Roles";

@Entity({ name: "users" })
export class UserEntity {

    @PrimaryGeneratedColumn()
    readonly id: number

    @Column({ nullable: false, unique: true })
    public username: string

    @Column()
    public password: string

    @Column({ enum: Roles, default: Roles.USER })
    public role: Roles

    @Column()
    public otp?: string

    @Column()
    public twoFactorAuthEnabled?: boolean

    @Column()
    public twoFactorAuthToken?: string

    @Column()
    public kycVerified?: boolean

    @Column({ nullable: false, default: false })
    public emailVerified: boolean

    @CreateDateColumn()
    readonly createdAt: Date

    @UpdateDateColumn()
    readonly updatedAt: Date
    
}
