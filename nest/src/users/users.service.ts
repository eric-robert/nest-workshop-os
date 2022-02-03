import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Equal, In, Repository } from "typeorm";
import * as DTO from "./users.dtos";

@Injectable()
export class UsersService {

    // We would absoluyely need to inject a database here
    // but we are not using a database as that would add 
    // another whole thing to this workshop so instead lets just make one locally
    users : { [key: string]: DTO.UserObject } = {} 

    // Get Requests

    getUserIfExists = async (email: string) => {
        return this.users[email] || null
    }

    // Set Requests

    setUser = async (email: string, user: DTO.UserObject) => {
        this.users[email] = user
    }

}