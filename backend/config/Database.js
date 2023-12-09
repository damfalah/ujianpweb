//Mengimpor modul Sequelize dari library Sequelize untuk berinteraksi dengan database MySQL
import { Sequelize } from "sequelize";

//Membuat objek db yang mewakili koneksi ke database MySQL dengan konfigurasi sebagai berikut
const db = new Sequelize('upload_db', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
})

//Mengekspor objek db untuk digunakan di tempat lain dalam aplikasi
export default db;