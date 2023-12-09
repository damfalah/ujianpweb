//Mengimpor modul express dan fungsi-fungsi dari ProductController.js yang digunakan sebagai handler untuk rute-rute tertentu
import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";

//Membuat objek router menggunakan express.Router() untuk menangani rute-rute terkait produk
const router = express.Router();


//Mendefinisikan rute-rute untuk berbagai operasi CRUD pada produk
router.get('/products', getProducts);
router.get("/products/:id", getProductById);
router.post("/products", saveProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

//Mengekspor objek router untuk digunakan di tempat lain
export default router;