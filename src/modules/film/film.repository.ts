import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilmRepository {
	constructor(private prismaService: PrismaService) {}

	findAll() {
		return this.prismaService.film.findMany();
	}
}
