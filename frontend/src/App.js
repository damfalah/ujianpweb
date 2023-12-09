//Mengimpor modul dan library yang dibutuhkan untuk melakukan routing
//Juga mengimpor komponen-komponen yang akan digunakan untuk setiap rute
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

//Komponen utama App merupakan penggunaan BrowserRouter sebagai pembungkus utama
//dan Routes untuk mendefinisikan rute - rute dalam aplikasi
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

//Mengekspor komponen
export default App;
