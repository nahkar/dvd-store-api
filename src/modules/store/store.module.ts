import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { StoreController } from './store.controller';
import { StoreRepository } from './store.repository';
import { StoreService } from './store.service';

@Module({
	imports: [PrismaModule],
	controllers: [StoreController],
	providers: [StoreService, StoreRepository],
})
export class StoreModule {}
