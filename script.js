console.log("Pesan di Console");
alert("Selamat belajar JavaScript!");

const namaInput = prompt("Siapa nama Anda?", "Zeline Zahirah Zahrah Yasin");
console.log("Nama:", namaInput);

const elemenPesan = document.getElementById("pesan");
elemenPesan.textContent = "Halo, JavaScript!";

const nama = "Rani";
let umur = 20;
const mahasiswaAktif = true;
const a = 12;
const b = 5;

console.log(nama, umur, mahasiswaAktif);
console.log("Penjumlahan:", a + b);
console.log("Perkalian:", a * b);
console.log("Sisa bagi:", a % b);
console.log("Apakah a lebih besar?", a > b);

function hitungLuas(panjang, lebar) {
 return panjang * lebar;
}
console.log("Luas:", hitungLuas(8, 4));

const nilai = 76;
if (nilai >= 60) {
 console.log("Lulus");
} else {
 console.log("Belum lulus");
}
const pilihan = "2";
switch (pilihan) {
 case "1":
 console.log("Pilihan satu");
 break;
 case "2":
 console.log("Pilihan dua");
 break;
 default:
 console.log("Pilihan tidak tersedia");
}
for (let i = 1; i <= 5; i++) {
 console.log("Perulangan ke-" + i);
}
let angka = 3;
while (angka > 0) {
 console.log(angka);
 angka--;
}

function ubahTampilan() {
 document.body.style.backgroundColor = "lightyellow";
 document.getElementById("pesan").style.color = "blue";
 document.getElementById("pesan").textContent = "Tampilan berhasil diubah.";
}

// script.js
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
 alert("Halo, " + namaPengguna + "!");
 document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
 alert("Nama belum diisi.");
}

function operasiDasar(a, b) {
 console.log("Penjumlahan:", a + b);
 console.log("Pengurangan:", a - b);
 console.log("Perkalian:", a * b);
 console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
 console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

// Mengambil nilai dari prompt dan mengonversinya menjadi number
let nilai1 = Number(prompt("Masukkan bilangan pertama:"));
let nilai2 = Number(prompt("Masukkan bilangan kedua:"));

function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

// Memanggil function dengan nilai dari prompt
operasiDasar(nilai1, nilai2);

const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (inputNilai === null || inputNilai.trim() === "" ||
 Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
 alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
 alert("Lulus");
} else {
 alert("Belum lulus");
}

const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
 case "1": alert("Bilangan satu"); break;
 case "2": alert("Bilangan dua"); break;
 case "3": alert("Bilangan tiga"); break;
 case "4": alert("Bilangan empat"); break;
 case "5": alert("Bilangan lima"); break;
 default: alert("Pilihan tidak tersedia");
}

function cekBilangan() {
 const input = document.getElementById("bilangan").value;
 const angka = Number(input);
 const hasil = document.getElementById("hasilBilangan");
 if (input.trim() === "" || !Number.isInteger(angka)) {
 hasil.textContent = "Masukkan bilangan bulat yang valid.";
 } else if (angka % 2 === 0) {
 hasil.textContent = "Bilangan genap";
 } else {
 hasil.textContent = "Bilangan ganjil";
 }
}

console.log("Tabel Perkalian Angka 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

function cekGenap(angka) {
    return angka % 2 === 0;
}

// Contoh penggunaan:
console.log(cekGenap(4)); // true
console.log(cekGenap(7)); // false

function ubahWarnaLatar(warna) {
 document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
 item.addEventListener("change", hitungTotal);
});
function hitungTotal() {
 let total = 0;
 daftarMenu.forEach((item) => {
 if (item.checked) total += Number(item.value);
 });
 document.getElementById("total").textContent = total.toLocaleString("id-ID");
}
function tampilkanMenu() {
    let daftarMenu = [
        { nama: "Nasi Goreng", harga: 15000 },
        { nama: "Mie Ayam", harga: 12000 },
        { nama: "Es Teh Manis", harga: 4000 },
        { nama: "Jus Jeruk", harga: 7000 }
    ];

    console.log("Daftar Menu dan Harga:");
    daftarMenu.forEach((menu, index) => {
        console.log(`${index + 1}. ${menu.nama} - Rp ${menu.harga}`);
    });
}

tampilkanMenu();