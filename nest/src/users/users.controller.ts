import { Post, Controller, HttpStatus, Body, Headers, UseFilters, Req, Res, forwardRef, Inject } from '@nestjs/common'
import * as DTO from './users.dtos'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {

    public constructor(
        private readonly usersService: UsersService
    ) {}
	
    @Post('/')
	async createuser( @Body() req: DTO.CreateNewUserReq )  {

        const {username, password, email} = req
        
        await this.usersService.setUser(email, {username, password, email})

        return {
            status: HttpStatus.OK,
            message: 'User created successfully'
        }

    }

}