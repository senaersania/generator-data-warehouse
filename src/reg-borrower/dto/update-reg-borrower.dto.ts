import { PartialType } from '@nestjs/mapped-types';
import { CreateRegBorrowerDto } from './create-reg-borrower.dto';

export class UpdateRegBorrowerDto extends PartialType(CreateRegBorrowerDto) {
    user_id: string;
	serial_id: number;
	borrower: number;
	name: string;
	id_card: number;
	tax_id: number;
	birthday: string;
	sex: string;
	adress: string;
	area: string;
	province: string;
	city: string;
	post_code: number;
	religion: string;
	marriage_type: string;
	job: string;
	education: string;
	salary: number;
}
