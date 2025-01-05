import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthService } from './auth/auth.service';
import { DatabaseService } from '../../db/database.service';

@Module({
	providers: [UserService, AuthService, DatabaseService],
	controllers: [UserController],
	// imports: [AuthModule],
	exports: [UserService]
})
export class UserModule {}
