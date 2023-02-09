import { PartialType } from '@nestjs/mapped-types';
import { CreatePdlUserAuthorizeDto } from './create-pdl-user-authorize.dto';

export class UpdatePdlUserAuthorizeDto extends PartialType(CreatePdlUserAuthorizeDto) {}
