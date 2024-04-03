import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StoreRepository {
	constructor(private prismaService: PrismaService) {}

	findAll() {
		return this.prismaService.store.findMany();
	}
}
