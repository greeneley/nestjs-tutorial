import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth/auth.service';

@Controller('user')
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly authService: AuthService
	) {
		console.log('instance user controller created');
	}

	@Get() // /user
	index() {
		return [this.userService.getUsers(), this.authService.login()];
	}
}
