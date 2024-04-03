import { Module } from '@nestjs/common';

import { ActorModule } from '../actor/actor.module';
import { CategoryModule } from '../category/category.module';
import { CustomerModule } from '../customer/customer.module';
import { FilmModule } from '../film/film.module';

@Module({
	imports: [CategoryModule, ActorModule, CustomerModule, FilmModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
