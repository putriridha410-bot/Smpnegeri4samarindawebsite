import { useState } from "react";
import AstroIslandMain from "./imports/AstroIsland→Main";
import svgPaths from "./imports/svg-darmfucaxm";
import img1921 from "figma:asset/8bd4297a9506a7adb026cd793ac32a779e3138ab.png";
import imgWhatsAppImage20251118At1000522783Ce6B2 from "figma:asset/efa157f82c912f1c02f2a640b3db6526f64c72c1.png";
import imgImg5083Yg2LJDbx6Kh23D9JJpg from "figma:asset/94c0dedef69b3259a1250a67afcd39017eada1cd.png";
import imgImg5096YNqJlxEyZqfQ9JzKJpg from "figma:asset/e953eaadcbb7dce25144b899b7b786940af254f9.png";
import imgImg5243M5KvZndMrMfGwqzlJpg from "figma:asset/caf33d610b69cab0c52890f54d6cb65f41649cd7.png";
import imgImg5234AMqn9OwqERi8XjzeJpg from "figma:asset/5a16a342444189dfdba4f3fa5b7e713784a4e9f6.png";
import imgImg5191M7VpenV7L1FbweNnJpg from "figma:asset/7203396bed88d5dc5970a52843f38c7d353db838.png";
import imgImg5146Mnl3PaBXaohDg9ZMJpg from "figma:asset/76030bcb5a8a78e3cafbf306a3c65bc7105fa1e5.png";
import imgImg5298AgbgwZoOqjfwxg3QJpg from "figma:asset/f632c2cf755857e272bbddf6635423438acd9526.png";
import imgImg5184Ar0Jde0Lx3Uljw5MJpg from "figma:asset/91b7dcf45d86a6211a59cabcdc40d838937cd64e.png";
import imgImg5200AwvrBzv6P5HBn5LMJpg from "figma:asset/0b852f2c3430cc57f5820a8701bb18b6ef6ba3ed.png";
import imgImg5139M7VpenyJNzsnyQbYJpg from "figma:asset/211a750fbc9c1cc4a4dbf6aa8a11904bc285c376.png";
import imgImg5167MePl68N2Vphow4RzJpg from "figma:asset/6feafefe68e2415596899b78b838fc068f1ffd57.png";
import imgImg5148AMqn9Opxo5FJgBaQJpg from "figma:asset/ab359134c757a370436dbbd8c42c0654e52a870c.png";
import imgImg5127D95PBbe71Bh9JBllJpg from "figma:asset/f5d4d54a87f0685e4298624bb8b588b7c8bc4d57.png";
import imgImg5226Ae0PNDx6Jrtw1VEmJpg from "figma:asset/2556ba682422109b40187d9775d5d97a78060bc5.png";
import imgImg5213YKbJxBxN52CjgbV0Jpg from "figma:asset/66a65844af108e312bf2fcae6f94e2d28bdf69f7.png";
import imgImage15 from "figma:asset/59bb0d6cae938b585b0a82e55355fbbda66a5478.png";
import imgYoutubeMv0J11Z8RgHMyoXnPng from "figma:asset/d76dd9d41452093a398825f8805ba5d33753a356.png";
import imgFbA85PnDLyBzCa8XWbPng from "figma:asset/5ce09202ac3b267c45f722f0a49acff97a7c6d6b.png";
import imgIgMp8NpMlmMwcxL9M1Png from "figma:asset/a7d1e89570955976f3653bab7340f6cc8cc58011.png";
import imgImage14 from "figma:asset/8f1eb2be9cb5b665dae4a879d49308d944508cea.png";
import imgImage12 from "figma:asset/9fa23bfe3f0209d76624267a1417e4acf96ea70d.png";
import { Facebook, Youtube, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [email, setEmail] = useState("");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih! Email ${email} telah terdaftar untuk newsletter kami.`);
    setEmail("");
  };

  const galleryImages = [
    imgImg5083Yg2LJDbx6Kh23D9JJpg,
    imgImg5096YNqJlxEyZqfQ9JzKJpg,
    imgImg5243M5KvZndMrMfGwqzlJpg,
    imgImg5234AMqn9OwqERi8XjzeJpg,
    imgImg5191M7VpenV7L1FbweNnJpg,
    imgImg5146Mnl3PaBXaohDg9ZMJpg,
    imgImg5298AgbgwZoOqjfwxg3QJpg,
    imgImg5184Ar0Jde0Lx3Uljw5MJpg,
    imgImg5200AwvrBzv6P5HBn5LMJpg,
    imgImg5139M7VpenyJNzsnyQbYJpg,
    imgImg5167MePl68N2Vphow4RzJpg,
    imgImg5148AMqn9Opxo5FJgBaQJpg,
    imgImg5127D95PBbe71Bh9JBllJpg,
    imgImg5226Ae0PNDx6Jrtw1VEmJpg,
    imgImg5213YKbJxBxN52CjgbV0Jpg,
  ];

  return (
    <div className="min-h-screen bg-[#faf8f8]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[rgba(153,252,255,0.58)] backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={img1921} alt="SMP Negeri 4 Samarinda Logo" className="h-20 w-auto" />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`${
                  activeSection === "home" ? "underline" : ""
                } hover:underline transition-all`}
              >
                Depan
              </button>
              <button
                onClick={() => scrollToSection("profile")}
                className={`${
                  activeSection === "profile" ? "underline" : ""
                } hover:underline transition-all`}
              >
                Profil
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className={`${
                  activeSection === "gallery" ? "underline" : ""
                } hover:underline transition-all`}
              >
                Galeri Foto
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${
                  activeSection === "contact" ? "underline" : ""
                } hover:underline transition-all`}
              >
                Kontak
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imgWhatsAppImage20251118At1000522783Ce6B2}
            alt="SMP Negeri 4 Samarinda"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1d1e20]/20" />
        </div>
      </section>

      {/* History Section */}
      <section id="profile" className="py-20 bg-[#faf8f8]">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12">SEJARAH SINGKAT</h2>
          <div className="max-w-4xl mx-auto">
            <p className="leading-relaxed">
              SMP Negeri 4 Samarinda pertama kali menerima siswa baru pada bulan Januari tahun 1977, saat itu
              kegiatan pembelajaran menumpang di Universitas 17 Agustus (UNTAG) dengan satu ruang kelas. Setahun
              kemudian SMP Negeri 4 memiliki gedung yang beralamatkan Jalan Ir. H. Juanda No.14 RT.17 Kelurahan Air
              Putih Kecamatan Samarinda Ulu. SMP Negeri 4 Samarinda diresmikan oleh Menteri Pendidikan dan
              Kebudayaan, Bapak Daud Yusuf tepatnya tanggal 16 Januari 1978. Pada Bulan Ramadhan tahun 1990, terjadi
              peristiwa kebakaran di SMP Negeri 4 dimana gedung sekolah terbakar habis, sehingga sekolah menumpang di
              gedung SPG jalan Banggeris, Samarinda. Pada tahun 1994 setelah gedung SMP Negeri 4 selesai dibangun,
              siswanya kembali pindah ke tempat semula dengan bangun bertingkat sampai sekarang.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-[#e0f6fa]">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-12">Galeri Foto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-[#0b070f] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About */}
            <div>
              <img src={img1921} alt="Logo" className="h-20 w-auto mb-6" />
              <h3 className="mb-4">Tentang</h3>
              <p className="opacity-80">Informasi lengkap tentang SMP Negeri 4 Samarinda yang terbaik.</p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-6">Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+62 541 7774016</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>smp4samarinda@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Jl. Ir. H. Juanda, Air Putih, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75124</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="mb-6">Newsletter</h3>
              <p className="mb-4 opacity-80">Masukkan alamat email Anda</p>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda di sini"
                  className="w-full px-4 py-3 rounded-lg bg-white text-black border border-[#b8c0cc]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#00b5fc] text-white px-6 py-3 rounded-full hover:bg-[#0095d4] transition-colors"
                >
                  Kirim Formulir Sekarang
                </button>
              </form>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="mb-4">Media Sosial</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <img src={imgIgMp8NpMlmMwcxL9M1Png} alt="Instagram" className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <img src={imgFbA85PnDLyBzCa8XWbPng} alt="Facebook" className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <img src={imgYoutubeMv0J11Z8RgHMyoXnPng} alt="YouTube" className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={imgImage14} alt="Map Preview" className="h-24 w-auto rounded" />
                <img src={imgImage12} alt="School Info" className="h-16 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
