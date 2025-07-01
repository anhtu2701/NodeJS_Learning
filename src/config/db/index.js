const mysql = require('mysql2/promise');

let pool = null;

async function connect() {
    try {
        pool = mysql.createPool({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'Htu0404@',
            database: 'QuanLyPhongTro',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
        // Test the connection
        await pool.query('SELECT 1');
        console.log('Database connection established successfully.');
    } catch (error) {
        console.log('Error connecting to the database:', error);
        process.exit(1);
    }
}

function getPool() {
    if (!pool) {
        throw new Error('Database connection pool is not initialized. Call connect() first.');
    }
    return pool;
}

module.exports = { connect, getPool };