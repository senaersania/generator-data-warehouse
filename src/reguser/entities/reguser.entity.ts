import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "ads" })
export class RegUser {
    @PrimaryGeneratedColumn({
        type:"bigint"
    })
    user_id: string;

    @Column()
    master_code_user: number;

    @Column("text")
    master_user_type: string;

    @Column({
        type: 'date'
    })
    register_date: string;

    @Column()
    name: string;

    @Column()
    id_card: string;
}
