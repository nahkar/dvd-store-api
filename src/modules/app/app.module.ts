import { Module } from '@nestjs/common';

import { ActorModule } from '../actor/actor.module';
import { CategoryModule } from '../category/category.module';
import { CustomerModule } from '../customer/customer.module';
import { FilmModule } from '../film/film.module';
import { StaffModule } from '../staff/staff.module';
import { StoreModule } from '../store/store.module';

@Module({
	imports: [CategoryModule, ActorModule, CustomerModule, FilmModule, StoreModule, StaffModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
