import { Table, Column, Model, DataType, AllowNull } from "sequelize-typescript";


@Table({
    tableName: 'Paquetes'
})

class Paquetes extends Model {
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    })
    tracking!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    email!: string

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    plan!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    peso!: Number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    total!: Number

}

export default Paquetes;