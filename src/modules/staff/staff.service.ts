import { Injectable } from '@nestjs/common';

import { StaffRepository } from './staff.repository';

@Injectable()
export class StaffService {
	constructor(private staffRepository: StaffRepository) {}
	getStaffs() {
		return this.staffRepository.findAll();
	}
}
