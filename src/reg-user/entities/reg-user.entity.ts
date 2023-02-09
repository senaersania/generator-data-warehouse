import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "ads" })
export class RegUser {
    @PrimaryGeneratedColumn({
        type:"bigint"
    })
    user_id: string;

    @Column({
        nullable: true
    })
    master_code_user: number;

    @Column({
        type: "text",
        nullable: true
    })
    master_user_type: string;

    @Column({
        type: "date",
        nullable: true
    })
    register_date: string;

    @Column({
        nullable: true
    })
    name: string;

    @Column({
        nullable: true
    })
    id_card: string;
}
