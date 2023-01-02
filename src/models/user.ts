import { DataTypes } from "sequelize";
import sequelize from "../database";


const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

export default User;