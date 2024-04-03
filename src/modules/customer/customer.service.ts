import { Injectable } from '@nestjs/common';

import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService {
	constructor(private customerRepository: CustomerRepository) {}
	getCustomers() {
		return this.customerRepository.findAll();
	}
}
