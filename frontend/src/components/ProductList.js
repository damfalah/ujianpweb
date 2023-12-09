//Mengimpor modul dan library yang dibutuhkan
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//Menggunakan React Hooks untuk mendeklarasikan state products yang akan menyimpan data produk
const ProductList = () => {
  const [products, setProducts] = useState([]);

  //Menggunakan useEffect untuk memanggil fungsi
  useEffect(() => {
    getProducts();
  }, []);

  //Mengambil data produk dari server menggunakan axios dan mengupdate state products dengan data yang diperoleh.
  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  //Mengirim permintaan DELETE ke server untuk menghapus produk berdasarkan productId
  //Jika berhasil, memanggil kembali fungsi getProducts untuk memperbarui data produk
  //Jika gagal, mencetak error ke konsol
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  //Merender daftar produk dengan menggunakan Link untuk menavigasi ke halaman penambahan produk baru
  //Tombol "Add New" di atas daftar produk memungkinkan pengguna menambahkan produk baru
  //Setiap produk direpresentasikan oleh elemen card dengan gambar, judul, dan opsi untuk mengedit atau menghapus
  return (
    <div className="container mt-5">
      <Link to="/add" className="button is-success">
        Add New
      </Link>
      <div className="columns is-multiline mt-2">
        {products.map((product) => (
          <div className="column is-one-quarter" key={product.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={product.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{product.name}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`edit/${product.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteProduct(product.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//Mengekspor komponen
export default ProductList;
