import { Controller, Get } from '@nestjs/common';

import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
	constructor(private readonly customerService: CustomerService) {}

	@Get()
	getCustomers() {
		return this.customerService.getCustomers();
	}
}
