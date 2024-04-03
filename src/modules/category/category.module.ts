import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';

@Module({
	imports: [PrismaModule],
	providers: [CategoryService, CategoryRepository],
	controllers: [CategoryController],
})
export class CategoryModule {}
