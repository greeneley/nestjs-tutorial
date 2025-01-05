import { Controller } from '@nestjs/common';
import { UserService } from '../user.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly userService: UserService) {}
}
