import { Optional } from 'sequelize';
import { Table, Column, Model, DataType, Default } from 'sequelize-typescript';

interface UserAttributes {
    id:number,
    name: string,
    email: string,
    password: string,
    status: boolean
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{};

@Table({
    timestamps: true
})
class User extends Model<UserAttributes, UserCreationAttributes>{

    @Column({
        primaryKey: true
    })
    id!:number

    @Column({
        type: DataType.STRING,
        allowNull: false,

    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password!: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    status!: boolean

    
}

export default User;