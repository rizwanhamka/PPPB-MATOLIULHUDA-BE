const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ==========================================
// DATA DUMMY SEMENTARA (Simulasi Database)
// ==========================================

// 1. Data Berita
let beritaData = [
  {
    id: 1,
    image:
      "https://cdn.prod.website-files.com/65af5f0812c914d3fef6a68c/67bd8d63c3bfd403dc75b528_Hasil%20Lomba%20Tahfiz%2010%20Besar.jpeg",
    title: "Lomba Ngaji Nasional",
    description:
      "Lomba Ngaji Nasional diselenggarakan untuk mahasiswa dari seluruh Indonesia sebagai ajang pengembangan kemampuan membaca dan menghafal Al-Qur’an. Kegiatan ini bertujuan menumbuhkan semangat religius, mempererat ukhuwah antar mahasiswa, serta meningkatkan kualitas generasi muda yang berakhlak dan berprestasi di bidang keagamaan.",
    date: "2023-10-25",
  },
  {
    id: 2,
    image: "https://matholiulhudabugel.com/images/ma.jpg",
    title: "Update Sistem Kampus",
    description:
      "Pihak kampus menginformasikan bahwa sistem akademik akan menjalani proses maintenance pada minggu depan. Selama periode tersebut, beberapa layanan seperti pengisian KRS, akses nilai, dan portal mahasiswa mungkin tidak dapat diakses sementara. Mahasiswa diharapkan menyesuaikan jadwal dan menyelesaikan keperluan akademik sebelum maintenance dimulai.",
    date: "2023-11-02",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop",
    title: "Seminar Teknologi AI",
    description:
      "Seminar bertajuk 'Masa Depan AI dalam Pendidikan' sukses digelar di aula utama. Acara ini menghadirkan pakar teknologi nasional yang membahas dampak kecerdasan buatan terhadap metode pembelajaran modern. Mahasiswa diajak untuk memanfaatkan teknologi secara bijak sebagai alat bantu produktivitas.",
    date: "2023-11-15",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1000&auto=format&fit=crop",
    title: "Pekan Olahraga Antar Kelas",
    description:
      "Pekan Olahraga tahunan kembali digelar dengan meriah. Berbagai cabang olahraga seperti futsal, bulu tangkis, dan voli dipertandingkan antar kelas untuk mempererat solidaritas dan sportivitas siswa. Final akan dilaksanakan pada akhir pekan ini dengan memperebutkan piala bergilir.",
    date: "2023-11-20",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop",
    title: "Bakti Sosial Peduli Lingkungan",
    description:
      "Mahasiswa dan staf pengajar berkolaborasi dalam kegiatan penanaman 1000 pohon dan pembersihan area sungai di sekitar kampus. Kegiatan ini merupakan wujud nyata kepedulian civitas akademika terhadap kelestarian lingkungan dan upaya pencegahan banjir di musim penghujan.",
    date: "2023-12-05",
  },
  {
    id: 6,
    image:
      "https://ugm.ac.id/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-15.14.19.jpeg",
    title: "Wisuda Angkatan 2024",
    description:
      "Selamat kepada para wisudawan dan wisudawati yang telah berhasil menyelesaikan masa studinya. Upacara wisuda berlangsung khidmat dengan dihadiri oleh orang tua dan wali. Rektor berpesan agar para lulusan dapat mengamalkan ilmunya untuk kemajuan bangsa dan negara.",
    date: "2023-12-15",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop",
    title: "Peresmian Perpustakaan Digital",
    description:
      "Fasilitas perpustakaan baru yang dilengkapi dengan akses jurnal internasional dan e-book kini resmi dibuka. Dengan desain interior yang modern dan nyaman, diharapkan minat baca dan riset mahasiswa akan meningkat signifikan. Tersedia juga ruang diskusi kedap suara.",
    date: "2024-01-10",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000&auto=format&fit=crop",
    title: "Peringatan Isra Mi'raj",
    description:
      "Acara pengajian akbar dalam rangka memperingati Isra Mi'raj Nabi Muhammad SAW dihadiri oleh seluruh warga kampus. Penceramah mengingatkan pentingnya meneladani sifat Rasulullah dan meningkatkan kualitas ibadah shalat dalam kehidupan sehari-hari.",
    date: "2024-02-08",
  },
];

// 2. Data Gallery
let galleryData = [
  { id: 1, url: "https://matholiulhudabugel.com/images/ma.jpg" },
  {
    id: 2,
    url: "https://mimatholiulhudabugel.com/wp-content/uploads/2025/09/fotosekolah-1024x593.jpg",
  },
];

// 3. Data Masukkan (Feedback) - BARU
let masukkanData = [
  {
    id: 101,
    nama: "Budi Santoso",
    masukkan: "Websitenya sudah bagus, tapi warnanya terlalu terang.",
    date: "2023-12-01",
  },
  {
    id: 102,
    nama: "Siti Aminah",
    masukkan: "Tolong tambahkan fitur download brosur di menu berita.",
    date: "2023-12-05",
  },
];

// ==========================================
// ROUTES / ENDPOINTS
// ==========================================

app.get("/", (req, res) => {
  res.send(
    "Backend Berjalan! Akses /api/berita, /api/gallery, atau /api/masukkan"
  );
});

// --- A. MODULE BERITA ---

app.get("/api/berita", (req, res) => res.json(beritaData));

app.get("/api/berita/:id", (req, res) => {
  const berita = beritaData.find((b) => b.id == req.params.id);
  berita ? res.json(berita) : res.status(404).json({ message: "Not found" });
});

app.post("/api/berita", (req, res) => {
  const newBerita = {
    id: Date.now(),
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date || new Date().toISOString().split("T")[0],
  };
  beritaData.push(newBerita);
  res.status(201).json({ message: "Berita added", data: newBerita });
});

app.delete("/api/berita/:id", (req, res) => {
  beritaData = beritaData.filter((b) => b.id != req.params.id);
  res.json({ message: "Berita deleted" });
});

// --- B. MODULE GALLERY ---

app.get("/api/gallery", (req, res) => res.json(galleryData));

app.post("/api/gallery", (req, res) => {
  const newImage = { id: Date.now(), url: req.body.url };
  galleryData.push(newImage);
  res.status(201).json({ message: "Image added", data: newImage });
});

app.delete("/api/gallery/:id", (req, res) => {
  galleryData = galleryData.filter((img) => img.id != req.params.id);
  res.json({ message: "Image deleted" });
});

// --- C. MODULE MASUKKAN (FEEDBACK) - BARU ---

// 1. GET Semua Masukkan (Untuk Admin melihat feedback)
app.get("/api/masukkan", (req, res) => {
  res.json(masukkanData);
});

// 2. POST Masukkan (User mengirim feedback)
app.post("/api/masukkan", (req, res) => {
  const { nama, masukkan } = req.body;

  // Validasi sederhana
  if (!nama || !masukkan) {
    return res.status(400).json({ message: "Nama dan Masukkan wajib diisi!" });
  }

  const newFeedback = {
    id: Date.now(), // ID Unik
    nama: nama,
    masukkan: masukkan,
    date: new Date().toISOString().split("T")[0], // Tanggal hari ini (YYYY-MM-DD)
  };

  masukkanData.push(newFeedback);
  res
    .status(201)
    .json({ message: "Terima kasih atas masukannya!", data: newFeedback });
});

// 3. DELETE Masukkan (Admin menghapus feedback)
app.delete("/api/masukkan/:id", (req, res) => {
  const initialLength = masukkanData.length;
  masukkanData = masukkanData.filter((m) => m.id != req.params.id);

  if (masukkanData.length < initialLength) {
    res.json({ message: "Data masukkan berhasil dihapus" });
  } else {
    res.status(404).json({ message: "Data tidak ditemukan" });
  }
});

// ==========================================
// SERVER LISTEN (VERCEL COMPATIBLE)
// ==========================================

// Export app untuk Vercel
module.exports = app;

// Jalankan server jika di local
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}
