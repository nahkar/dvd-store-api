import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ActorRepository {
	constructor(private prismaService: PrismaService) {}

	findAll() {
		return this.prismaService.actor.findMany();
	}
}
