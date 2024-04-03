import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryRepository {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		const categories = await this.prisma.category.findMany();
		return categories;
	}
}
