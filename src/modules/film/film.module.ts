import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { FilmController } from './film.controller';
import { FilmRepository } from './film.repository';
import { FilmService } from './film.service';

@Module({
	imports: [PrismaModule],
	controllers: [FilmController],
	providers: [FilmService, FilmRepository],
})
export class FilmModule {}
