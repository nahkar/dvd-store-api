import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { StaffController } from './staff.controller';
import { StaffRepository } from './staff.repository';
import { StaffService } from './staff.service';

@Module({
	imports: [PrismaModule],
	controllers: [StaffController],
	providers: [StaffService, StaffRepository],
})
export class StaffModule {}
