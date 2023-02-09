import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "ods" })
export class PdlUserAuthorize {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({
        nullable: true
    })
    lend: string;

    @Column({
        nullable: true
    })
	holder_name: string;

    @Column({
        nullable: true
    })
	id_card: string;

    @Column({
        nullable: true
    })
	birth_place: string;

    @Column({
        nullable: true
    })
	bank_code: number;

    @Column({
        nullable: true
    })
	job: string;

    @Column({
        nullable: true
    })
	address: string;

    @Column({
        nullable: true
    })
	province: string;

    @Column({
        nullable: true
    })
	city: string;

    @Column({
        nullable: true
    })
	religion: string;

    @Column({
        nullable: true
    })
	source_fund: string;
}
