import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserService } from '../user.service';

@Module({
	controllers: [AuthController],
	// providers: [UserService, DatabaseService]
	imports: [UserService]
})
export class AuthModule {}
