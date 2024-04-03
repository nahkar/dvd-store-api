import { Controller, Get } from '@nestjs/common';

import { ActorService } from './actor.service';

@Controller('actor')
export class ActorController {
	constructor(private readonly actorService: ActorService) {}

	@Get()
	getActors() {
		return this.actorService.getActors();
	}
}
