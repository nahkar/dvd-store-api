import { Injectable } from '@nestjs/common';

import { FilmRepository } from './film.repository';

@Injectable()
export class FilmService {
	constructor(private filmRepository: FilmRepository) {}
	getFilms() {
		return this.filmRepository.findAll();
	}
}
