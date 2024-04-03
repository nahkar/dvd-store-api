import { Controller, Get } from '@nestjs/common';

import { FilmService } from './film.service';

@Controller('film')
export class FilmController {
	constructor(private readonly filmService: FilmService) {}

	@Get()
	getFilms() {
		return this.filmService.getFilms();
	}
}
