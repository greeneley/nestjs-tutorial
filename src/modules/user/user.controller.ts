import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth/auth.service';

export class BodyDto {
	name: string;
	age: number;
}

@Controller('users')
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly authService: AuthService
	) {
		console.log('instance user controller created');
	}

	@Get() // /user
	index(@Query() query: any) {
		// return [this.userService.getUsers(), this.authService.login()];
		return {
			keyword: query.keyword
		};
	}

	@Post() // -> body
	createWithBody(@Body() bodyDto: BodyDto) {
		console.log({ bodyDto });
		return 'post create' + JSON.stringify(bodyDto);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return `This action returns a ${id} cat`;
	}
}