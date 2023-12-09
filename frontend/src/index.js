//Mengimpor modul dan library yang dibutuhkan
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bulma/css/bulma.css";

//Menggunakan ReactDOM.createRoot untuk membuat root React di elemen HTML dengan ID "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
//Menggunakan root.render untuk merender komponen App di dalam mode ketat (React.StrictMode)
//Mode ketat membantu mendeteksi potensi masalah dalam aplikasi Anda selama pengembangan
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
