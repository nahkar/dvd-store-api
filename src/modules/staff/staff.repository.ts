import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StaffRepository {
	constructor(private prismaService: PrismaService) {}

	findAll() {
		return this.prismaService.staff.findMany();
	}
}
