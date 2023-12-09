//Mengimpor modul Sequelize dan objek db yang mewakili koneksi ke database
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

//Menggunakan DataTypes dari Sequelize untuk mendeklarasikan tipe data yang akan digunakan dalam model
const { DataTypes } = Sequelize;

//Mendefinisikan model Product dengan kolom-kolom 
//Opsi freezeTableName: true digunakan untuk mencegah Sequelize mengubah nama tabel menjadi bentuk jamak dari nama model
const Product = db.define('product', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
}, {
    freezeTableName: true
});

//Mengekspor model Product untuk digunakan di tempat lain dalam aplikasi
export default Product;

//Menggunakan db.sync() untuk menyinkronkan model dengan database
(async () => {
    await db.sync();
})();