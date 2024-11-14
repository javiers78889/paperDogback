import { Table, Column, Model, DataType, AllowNull } from "sequelize-typescript";


@Table({
    tableName: 'Users'
})


class Users extends Model {
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    })
    email!: string;
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    })
    usuario!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    password!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    role!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    plan!: string;

}

export default Users
