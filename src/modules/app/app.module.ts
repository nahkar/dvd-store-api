import { Module } from '@nestjs/common';

import { ActorModule } from '../actor/actor.module';
import { CategoryModule } from '../category/category.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
	imports: [CategoryModule, ActorModule, CustomerModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
