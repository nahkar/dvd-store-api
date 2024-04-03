import { Injectable } from '@nestjs/common';

import { StoreRepository } from './store.repository';

@Injectable()
export class StoreService {
	constructor(private storeRepository: StoreRepository) {}
	getStores() {
		return this.storeRepository.findAll();
	}
}
