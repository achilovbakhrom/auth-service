import {Roles} from "../enums/Roles";
import {ApiModel, ApiModelProperty} from "swagger-express-ts";
import {Expose} from "class-transformer";
import {IsDefined, IsEmail, IsString, Matches} from "class-validator";

@ApiModel({
    description: "User Model",
    name: "User"
})
export class UserEntity {

    @ApiModelProperty({
        description: "ID of User model",
        required: true,
        example: ['123']
    })
    readonly id: number

    @IsDefined()
    @IsEmail()
    @ApiModelProperty({
        description: "Username for User model",
        required: true,
        example: ['test@gmail.com']
    })
    public username: string


    @Expose()
    @Matches(RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/))
    @ApiModelProperty({
        description: "ID of User model",
        required: true,
        example: ['123']
    })
    public password: string


    public role: Roles

    public otp?: string

    public twoFactorAuthEnabled?: boolean

    public twoFactorAuthToken?: string

    public kycVerified?: boolean

    public emailVerified: boolean

    readonly createdAt: Date

    readonly updatedAt: Date

}
