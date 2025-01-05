import { Injectable, Scope } from '@nestjs/common';
import { DatabaseService } from '../../db/database.service';

@Injectable({ scope: Scope.TRANSIENT })
export class UserService {
	constructor(private readonly databaseService: DatabaseService) {
		console.log('instance user service created');
	}

	getUsers() {
		return this.databaseService.findAll();
	}
}
