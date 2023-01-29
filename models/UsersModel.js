import {Sequelize} from "sequelize";
import dbmsql from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = dbmsql.define('userss', {
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    jk: DataTypes.STRING,
    
}, {
    freezeTableName:true
});

export default User;

(async() =>{
    await dbmsql.sync();
}) ();