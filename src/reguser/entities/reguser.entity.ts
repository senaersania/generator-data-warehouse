import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RegUser {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    master_code_user: string;

    @Column()
    master_user_type: string;

    @Column()
    register_date: Date;

    @Column()
    id_card: number;
}
