import { IsEmail, IsNotEmpty, IsString, IsAscii } from 'class-validator';

export class CreateNewUserReq {

    @IsEmail()
    @IsNotEmpty()
    @IsString()

    email: string;


    @IsNotEmpty()
    @IsString()
    @IsAscii()

    password: string;

    
    @IsNotEmpty()
    @IsString()

    username: string;

}


export interface UserObject {
    email: string
    username: string
    password: string
}