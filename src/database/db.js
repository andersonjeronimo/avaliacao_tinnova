const Model = require('../app/models/veiculo');
const Veiculo = new Model();

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:991187842MySQL@localhost:3306/car_store");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectVehicles() {
    const conn = await connect();
    const [TextRow] = await conn.query('SELECT * FROM veiculos;');
    return TextRow;
}

async function selectVehicleById(id) {
    const conn = await connect();
    const [TextRow] = await conn.query(`SELECT * FROM veiculos WHERE id = ${id};`);
    return TextRow;
}

async function selectVehiclesByField(query) {
    const conn = await connect();
    let sql = 'SELECT * FROM veiculos WHERE';
    Object.entries(query).forEach(entry => {
        let [key, value] = entry;
        if (Veiculo.hasOwnProperty(key)) {
            sql = sql.concat(` veiculos.${key}=${value} AND`);
        }
    });
    sql = sql.substring(0, sql.length - 4);
    sql = sql.concat(';');
    console.log(sql);
    const [TextRow] = await conn.query(sql);
    return TextRow;
}

async function insertVehicle(vehicle) {
    const conn = await connect();

    let sqlCol = 'INSERT INTO veiculos(';
    let sqlVal = 'VALUES (';
    let values = [];

    Object.entries(vehicle).forEach(entry => {
        let [key, value] = entry;
        if (Veiculo.hasOwnProperty(key)) {
            sqlCol = sqlCol.concat(`${key},`);
            sqlVal = sqlVal.concat('?,');
            values.push(value);
        }
    });
    sqlCol = sqlCol.substring(0, sqlCol.length - 1);
    sqlCol = sqlCol.concat(') ');

    sqlVal = sqlVal.substring(0, sqlVal.length - 1);
    sqlVal = sqlVal.concat(');');

    let sql = '';
    sql = sql.concat(sqlCol);
    sql = sql.concat(sqlVal);

    return await conn.query(sql, values);
}

async function updateVehicle(id, vehicle) {
    const conn = await connect();
    // const sql = 'UPDATE veiculos SET veiculo=?, marca=?, ano=?, descricao=?, vendido=? WHERE id=?';    
    let sql = 'UPDATE veiculos SET ';
    let values = [];
    Object.entries(vehicle).forEach(entry => {
        let [key, value] = entry;
        if (Veiculo.hasOwnProperty(key)) {
            sql = sql.concat(`${key}=?,`);
            values.push(value);
        }
    });
    values.push(id);
    sql = sql.substring(0, sql.length - 1);
    sql = sql.concat(' WHERE id=?;');
    return await conn.query(sql, values);
}

async function updateVehiclePartial(id, vehicle) {
    const conn = await connect();
    // const sql = 'UPDATE veiculos SET veiculo=?, marca=?, ano=?, descricao=?, vendido=? WHERE id=?';    
    let sql = 'UPDATE veiculos SET ';
    let values = [];
    Object.entries(vehicle).forEach(entry => {
        let [key, value] = entry;
        if (Veiculo.hasOwnProperty(key)) {
            sql = sql.concat(`${key}=?,`);
            values.push(value);
        }
    });
    values.push(id);
    sql = sql.substring(0, sql.length - 1);
    sql = sql.concat(' WHERE id=?;');
    console.log(sql);
    return await conn.query(sql, values);
}

async function deleteVehicle(id) {
    const conn = await connect();
    const sql = 'DELETE FROM veiculos WHERE id=?;';
    return await conn.query(sql, [id]);
}

module.exports = { selectVehicles, selectVehicleById, selectVehiclesByField, insertVehicle, updateVehicle, updateVehiclePartial, deleteVehicle }