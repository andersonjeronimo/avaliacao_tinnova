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
    const [rows] = await conn.query('SELECT * FROM veiculos;');
    return rows;
}

async function selectVehicleById(id) {
    const conn = await connect();
    const [rows] = await conn.query(`SELECT * FROM veiculos WHERE id = ${id};`);
    return rows;
}

async function insertVehicle(vehicle) {
    const conn = await connect();
    const sql = 'INSERT INTO veiculos() VALUES (?,?,?,?,?);';
    const values = [vehicle.veiculo, vehicle.marca, vehicle.ano, vehicle.descricao, vehicle.vendido];
    return await conn.query(sql, values);
}

async function updateVehicle(id, vehicle) {
    const conn = await connect();
    const sql = 'UPDATE veiculos SET veiculo=?, marca=?, ano=?, descricao=?, vendido=? WHERE id=?';
    const values = [vehicle.veiculo, vehicle.marca, vehicle.ano, vehicle.descricao, vehicle.vendido, id];
    return await conn.query(sql, values);
}

async function deleteVehicle(id) {
    const conn = await connect();
    const sql = 'DELETE FROM veiculos WHERE id=?;';
    return await conn.query(sql, [id]);
}

module.exports = { selectVehicles, selectVehicleById, insertVehicle, updateVehicle, deleteVehicle }