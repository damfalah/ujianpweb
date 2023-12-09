//Mengimpor modul express, express-fileupload, cors, dan ProductRoute yang akan digunakan dalam konfigurasi server  
import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();

app.use(cors()); //mengizinkan permintaan lintas domain
app.use(express.json()); //mengurai permintaan dengan tipe konten
app.use(FileUpload()); //menangani pengunggahan file
app.use(express.static("public")); //memastikan bahwa file-file yang disimpan, seperti gambar produk, dapat diakses secara publik
app.use(ProductRoute); //menangani permintaan terkait produk

//Menggunakan metode listen untuk menjalankan server pada port 5000 dan mencetak pesan ke konsol ketika server telah dimula
app.listen(5000, () => console.log('Server Up and Running...'));