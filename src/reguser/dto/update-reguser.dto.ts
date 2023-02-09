import { PartialType } from '@nestjs/mapped-types';
import { CreateReguserDto } from './create-reguser.dto';

export class UpdateReguserDto extends PartialType(CreateReguserDto) {
    user_id: number;
    master_code_user: number;
    master_user_type: string;
    register_date: string;
    name: string;
    id_card: string;
}
