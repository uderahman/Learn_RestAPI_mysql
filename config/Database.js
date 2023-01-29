import { Sequelize } from "sequelize";

const dbmsql = new Sequelize ('latihandb1', 'root', '',{
    host : 'localhost',
    dialect : 'mysql'
})

export default dbmsql;