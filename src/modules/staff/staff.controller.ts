import { Controller, Get } from '@nestjs/common';

import { StaffService } from './staff.service';

@Controller('staff')
export class StaffController {
	constructor(private readonly staffService: StaffService) {}

	@Get()
	getStaffs() {
		return this.staffService.getStaffs();
	}
}
