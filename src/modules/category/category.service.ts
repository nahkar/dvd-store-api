import { Injectable } from '@nestjs/common';

import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
	constructor(private categoryRepository: CategoryRepository) {}

	async getCategories() {
		const categories = await this.categoryRepository.getAll();
		return categories;
	}
}
