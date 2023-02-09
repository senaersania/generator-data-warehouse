import { PartialType } from '@nestjs/mapped-types';
import { CreateRegUserDto } from './create-reg-user.dto';

export class UpdateRegUserDto extends PartialType(CreateRegUserDto) {
    user_id: number;
    master_code_user: number;
    master_user_type: string;
    register_date: string;
    name: string;
    id_card: string;
}
