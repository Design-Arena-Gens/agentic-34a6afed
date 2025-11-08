'use client'

import { useState } from 'react'
import styles from './page.module.css'

interface Category {
  id: string
  title: string
  subtitle: string
  description: string
  examples: string[]
  subCategories?: Array<{
    title: string
    description: string
    examples: string[]
  }>
}

const hukumCategories: Category[] = [
  {
    id: 'sumber',
    title: 'Berdasarkan Sumber',
    subtitle: 'Asal-usul Pembentukan Hukum',
    description: 'Penggolongan hukum berdasarkan dari mana hukum itu berasal dan bagaimana hukum tersebut terbentuk.',
    examples: [],
    subCategories: [
      {
        title: 'Hukum Undang-Undang (Statute Law)',
        description: 'Hukum yang tertulis dalam peraturan perundang-undangan yang dibuat oleh lembaga yang berwenang.',
        examples: [
          'UUD 1945',
          'Undang-Undang (UU)',
          'Peraturan Pemerintah (PP)',
          'Peraturan Presiden (Perpres)',
          'Peraturan Daerah (Perda)'
        ]
      },
      {
        title: 'Hukum Kebiasaan (Customary Law)',
        description: 'Hukum yang timbul dan berkembang dari kebiasaan masyarakat yang dilakukan secara berulang-ulang dan dianggap mengikat.',
        examples: [
          'Hukum adat dalam masyarakat',
          'Sistem perkawinan adat',
          'Pembagian warisan adat',
          'Konvensi ketatanegaraan'
        ]
      },
      {
        title: 'Hukum Yurisprudensi',
        description: 'Hukum yang terbentuk dari keputusan hakim terdahulu yang dijadikan pedoman dalam memutus perkara serupa.',
        examples: [
          'Putusan Mahkamah Agung yang menjadi yurisprudensi',
          'Arrest Hoge Raad',
          'Putusan pengadilan yang dijadikan preseden'
        ]
      },
      {
        title: 'Hukum Traktat',
        description: 'Hukum yang terbentuk dari perjanjian antar negara yang mengikat negara-negara yang menandatanganinya.',
        examples: [
          'Konvensi Jenewa',
          'Perjanjian ekstradisi',
          'Perjanjian internasional bilateral/multilateral'
        ]
      },
      {
        title: 'Hukum Doktrin',
        description: 'Pendapat para ahli hukum terkemuka yang dijadikan dasar dalam pembentukan atau penafsiran hukum.',
        examples: [
          'Pendapat Soerjono Soekanto tentang sosiologi hukum',
          'Teori Hans Kelsen tentang norma dasar',
          'Doktrin ahli hukum dalam literatur hukum'
        ]
      }
    ]
  },
  {
    id: 'bentuk',
    title: 'Berdasarkan Bentuk',
    subtitle: 'Cara Pengungkapan Hukum',
    description: 'Penggolongan hukum berdasarkan bentuk atau cara hukum itu diwujudkan dan diungkapkan.',
    examples: [],
    subCategories: [
      {
        title: 'Hukum Tertulis',
        description: 'Hukum yang dicantumkan dalam berbagai peraturan perundang-undangan dan dokumen resmi.',
        examples: [
          'Kitab Undang-Undang Hukum Pidana (KUHP)',
          'Kitab Undang-Undang Hukum Perdata (KUHPer)',
          'UU ITE',
          'UU Ketenagakerjaan',
          'Peraturan perundang-undangan lainnya'
        ]
      },
      {
        title: 'Hukum Tidak Tertulis',
        description: 'Hukum yang hidup dalam keyakinan masyarakat tetapi tidak tertulis dalam peraturan formal (hukum adat).',
        examples: [
          'Aturan adat istiadat dalam masyarakat',
          'Tradisi gotong royong',
          'Sistem sanksi adat',
          'Nilai-nilai yang diturunkan secara turun-temurun'
        ]
      }
    ]
  },
  {
    id: 'tempat',
    title: 'Berdasarkan Tempat Berlaku',
    subtitle: 'Wilayah Keberlakuan Hukum',
    description: 'Penggolongan hukum berdasarkan di wilayah mana hukum tersebut berlaku dan mengikat.',
    examples: [],
    subCategories: [
      {
        title: 'Hukum Nasional',
        description: 'Hukum yang berlaku di dalam suatu negara tertentu.',
        examples: [
          'UUD 1945 di Indonesia',
          'KUHP Indonesia',
          'UU Perpajakan Indonesia',
          'Peraturan perundang-undangan nasional lainnya'
        ]
      },
      {
        title: 'Hukum Internasional',
        description: 'Hukum yang mengatur hubungan antar negara atau hubungan internasional.',
        examples: [
          'Konvensi PBB',
          'Hukum Humaniter Internasional',
          'Perjanjian Internasional',
          'Piagam HAM Universal'
        ]
      },
      {
        title: 'Hukum Asing',
        description: 'Hukum yang berlaku di negara lain.',
        examples: [
          'Common Law di Inggris dan AS',
          'Code Civil di Perancis',
          'Hukum syariah di Arab Saudi'
        ]
      },
      {
        title: 'Hukum Gereja/Agama',
        description: 'Hukum yang berlaku dalam lingkungan keagamaan tertentu.',
        examples: [
          'Hukum Islam untuk umat Muslim',
          'Hukum Gereja Katolik (Hukum Kanon)',
          'Aturan keagamaan dalam ibadah'
        ]
      }
    ]
  },
  {
    id: 'waktu',
    title: 'Berdasarkan Waktu Berlaku',
    subtitle: 'Periode Keberlakuan Hukum',
    description: 'Penggolongan hukum berdasarkan kapan hukum tersebut berlaku.',
    examples: [],
    subCategories: [
      {
        title: 'Ius Constitutum (Hukum Positif)',
        description: 'Hukum yang sedang berlaku pada saat ini untuk suatu masyarakat tertentu dalam suatu wilayah tertentu.',
        examples: [
          'UUD 1945 (yang sedang berlaku)',
          'KUHP yang sedang berlaku',
          'Peraturan perundang-undangan yang masih aktif',
          'Sistem hukum yang diterapkan saat ini'
        ]
      },
      {
        title: 'Ius Constituendum (Hukum yang Dicita-citakan)',
        description: 'Hukum yang diharapkan akan berlaku di masa yang akan datang.',
        examples: [
          'Rancangan KUHP baru',
          'Rancangan Undang-Undang yang sedang dibahas',
          'Konsep pembaruan hukum',
          'Hukum ideal yang diharapkan masyarakat'
        ]
      },
      {
        title: 'Hukum Asasi (Hukum Alam)',
        description: 'Hukum yang berlaku universal di segala waktu dan tempat, tidak terikat waktu.',
        examples: [
          'Hak asasi manusia',
          'Prinsip keadilan universal',
          'Hukum moral dasar',
          'Nilai-nilai kemanusiaan fundamental'
        ]
      }
    ]
  },
  {
    id: 'cara-mempertahankan',
    title: 'Berdasarkan Cara Mempertahankan',
    subtitle: 'Mekanisme Penegakan Hukum',
    description: 'Penggolongan hukum berdasarkan bagaimana hukum tersebut dipertahankan atau ditegakkan.',
    examples: [],
    subCategories: [
      {
        title: 'Hukum Material (Substantif)',
        description: 'Hukum yang mengatur tentang isi atau materi hubungan hukum, menentukan hak dan kewajiban.',
        examples: [
          'KUHP (mengatur perbuatan pidana dan sanksinya)',
          'KUHPerdata (mengatur hak dan kewajiban keperdataan)',
          'UU Ketenagakerjaan (hak dan kewajiban pekerja/pengusaha)',
          'UU Perkawinan (hak dan kewajiban suami istri)'
        ]
      },
      {
        title: 'Hukum Formal (Acara)',
        description: 'Hukum yang mengatur tata cara atau prosedur mempertahankan dan menegakkan hukum material.',
        examples: [
          'KUHAP (Hukum Acara Pidana)',
          'HIR (Hukum Acara Perdata)',
          'UU Kekuasaan Kehakiman',
          'Prosedur beracara di pengadilan'
        ]
      }
    ]
  },
  {
    id: 'sifat',
    title: 'Berdasarkan Sifat',
    subtitle: 'Karakteristik Aturan Hukum',
    description: 'Penggolongan hukum berdasarkan sifat atau karakteristik aturannya.',
    examples: [],
    subCategories: [
      {
        title: 'Hukum yang Memaksa (Dwingendrecht)',
        description: 'Hukum yang dalam keadaan apapun harus dan wajib ditaati, tidak boleh diabaikan atau dikesampingkan.',
        examples: [
          'Larangan membunuh (KUHP)',
          'Kewajiban membayar pajak',
          'Aturan lalu lintas',
          'Larangan pencurian',
          'Syarat sah perkawinan'
        ]
      },
      {
        title: 'Hukum yang Mengatur (Aanvullendrecht)',
        description: 'Hukum yang dapat dikesampingkan atau disimpangi jika pihak-pihak yang bersangkutan menghendaki dan membuat aturan sendiri.',
        examples: [
          'Perjanjian jual beli (boleh buat sendiri)',
          'Aturan tentang pembagian warisan (dapat diatur dengan wasiat)',
          'Kontrak bisnis (para pihak bebas mengatur)',
          'Perjanjian sewa-menyewa'
        ]
      }
    ]
  },
  {
    id: 'isi',
    title: 'Berdasarkan Isi (Lapangan Hukum)',
    subtitle: 'Bidang yang Diatur',
    description: 'Penggolongan hukum berdasarkan materi atau bidang yang diatur oleh hukum tersebut. Ini adalah pembagian paling umum.',
    examples: [],
    subCategories: [
      {
        title: 'Hukum Publik',
        description: 'Hukum yang mengatur hubungan antara negara dengan warga negara atau hubungan antar alat perlengkapan negara, yang menyangkut kepentingan umum.',
        examples: [
          'Hukum Tata Negara: mengatur organisasi negara, lembaga negara, hubungan antar lembaga',
          'Hukum Tata Usaha Negara (Administrasi): mengatur tindakan pemerintah dalam menjalankan tugasnya',
          'Hukum Pidana: mengatur perbuatan yang dilarang dan sanksinya',
          'Hukum Acara: mengatur prosedur penegakan hukum di pengadilan'
        ]
      },
      {
        title: 'Hukum Privat (Perdata)',
        description: 'Hukum yang mengatur hubungan antara individu dengan individu lain yang menyangkut kepentingan pribadi.',
        examples: [
          'Hukum Perdata: mengatur hubungan antar individu (jual beli, sewa, utang piutang)',
          'Hukum Dagang: mengatur kegiatan perdagangan dan perusahaan',
          'Hukum Perdata Internasional: mengatur hubungan perdata yang melintasi batas negara'
        ]
      }
    ]
  },
  {
    id: 'wujud',
    title: 'Berdasarkan Wujud',
    subtitle: 'Bentuk Fisik Sanksi',
    description: 'Penggolongan hukum berdasarkan bentuk sanksi atau akibat hukum yang ditimbulkan.',
    examples: [],
    subCategories: [
      {
        title: 'Hukum Objektif',
        description: 'Hukum dalam suatu negara yang berlaku umum dan tidak mengenai orang atau golongan tertentu (peraturan hukum).',
        examples: [
          'Semua peraturan perundang-undangan',
          'Norma hukum yang berlaku umum',
          'KUHP berlaku untuk semua orang'
        ]
      },
      {
        title: 'Hukum Subjektif',
        description: 'Hukum yang timbul dari hukum objektif dan berlaku terhadap seseorang atau lebih tertentu (hak dan kewajiban).',
        examples: [
          'Hak kepemilikan seseorang atas tanah',
          'Hak waris seseorang',
          'Kewajiban membayar utang',
          'Hak dan kewajiban dalam kontrak'
        ]
      }
    ]
  }
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const toggleCategory = (id: string) => {
    setActiveCategory(activeCategory === id ? null : id)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Penggolongan Hukum</h1>
          <p className={styles.subtitle}>
            Pembagian Hukum Berdasarkan Ciri dan Ruang Lingkupnya
          </p>
        </header>

        <section className={styles.introduction}>
          <div className={styles.introCard}>
            <h2>Pengertian Penggolongan Hukum</h2>
            <p>
              <strong>Penggolongan hukum</strong> adalah pembagian atau klasifikasi hukum berdasarkan berbagai kriteria,
              seperti sumber, bentuk, tempat berlaku, waktu berlaku, sifat, isi, dan cara mempertahankannya.
            </p>
            <p>
              Tujuan dari penggolongan ini adalah agar hukum dapat <strong>diterapkan secara efektif</strong> sesuai
              dengan bidangnya masing-masing, serta memudahkan pemahaman terhadap sistem hukum yang kompleks.
            </p>
          </div>

          <div className={styles.introCard}>
            <h2>Pendapat Soerjono Soekanto</h2>
            <p>
              Menurut <strong>Soerjono Soekanto</strong>, seorang sosiolog hukum Indonesia terkemuka, penggolongan
              hukum memiliki fungsi yang sangat penting dalam memahami sistem hukum.
            </p>
            <div className={styles.quoteBox}>
              <p>
                "Penggolongan hukum membantu memahami sistem hukum secara <strong>teratur dan menyeluruh</strong>,
                sehingga setiap bidang hukum memiliki aturan dan fungsi yang jelas serta dapat dibedakan
                karakteristiknya."
              </p>
            </div>
            <p>
              Dengan penggolongan yang sistematis, praktisi hukum, akademisi, dan masyarakat dapat:
            </p>
            <ul>
              <li>Memahami struktur sistem hukum dengan lebih baik</li>
              <li>Menerapkan hukum yang tepat sesuai dengan kasusnya</li>
              <li>Membedakan karakteristik masing-masing bidang hukum</li>
              <li>Mempelajari hukum secara lebih terorganisir</li>
            </ul>
          </div>

          <div className={styles.introCard}>
            <h2>Manfaat Penggolongan Hukum</h2>
            <div className={styles.benefitGrid}>
              <div className={styles.benefitItem}>
                <h3>📚 Sistematis</h3>
                <p>Memudahkan pembelajaran dan pemahaman hukum secara terstruktur</p>
              </div>
              <div className={styles.benefitItem}>
                <h3>⚖️ Efektif</h3>
                <p>Penerapan hukum menjadi lebih tepat sasaran dan sesuai bidangnya</p>
              </div>
              <div className={styles.benefitItem}>
                <h3>🎯 Spesifik</h3>
                <p>Setiap bidang memiliki aturan dan karakteristik yang jelas</p>
              </div>
              <div className={styles.benefitItem}>
                <h3>🔍 Terorganisir</h3>
                <p>Membantu identifikasi dan analisis masalah hukum dengan lebih mudah</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.categories}>
          <h2 className={styles.sectionTitle}>Jenis-Jenis Penggolongan Hukum</h2>
          <p className={styles.sectionSubtitle}>
            Klik pada setiap kategori untuk melihat penjelasan lengkap dan contoh-contohnya
          </p>

          <div className={styles.categoryGrid}>
            {hukumCategories.map((category) => (
              <div key={category.id} className={styles.categoryCard}>
                <button
                  className={styles.categoryHeader}
                  onClick={() => toggleCategory(category.id)}
                >
                  <div>
                    <h3>{category.title}</h3>
                    <p className={styles.categorySubtitle}>{category.subtitle}</p>
                  </div>
                  <span className={`${styles.arrow} ${activeCategory === category.id ? styles.arrowOpen : ''}`}>
                    ▼
                  </span>
                </button>

                {activeCategory === category.id && (
                  <div className={styles.categoryContent}>
                    <p className={styles.description}>{category.description}</p>

                    {category.subCategories && (
                      <div className={styles.subCategories}>
                        {category.subCategories.map((sub, index) => (
                          <div key={index} className={styles.subCategory}>
                            <h4>{sub.title}</h4>
                            <p>{sub.description}</p>
                            {sub.examples.length > 0 && (
                              <div className={styles.examples}>
                                <strong>Contoh:</strong>
                                <ul>
                                  {sub.examples.map((example, exIndex) => (
                                    <li key={exIndex}>{example}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.conclusion}>
          <div className={styles.conclusionCard}>
            <h2>Kesimpulan</h2>
            <p>
              Penggolongan hukum merupakan aspek fundamental dalam memahami sistem hukum Indonesia.
              Melalui klasifikasi yang sistematis berdasarkan berbagai kriteria—mulai dari sumber, bentuk,
              tempat berlaku, waktu, sifat, isi, hingga cara mempertahankannya—hukum dapat dipelajari,
              dipahami, dan diterapkan dengan lebih efektif.
            </p>
            <p>
              Sebagaimana dikemukakan oleh Soerjono Soekanto, penggolongan ini bukan sekadar pembagian teoretis,
              melainkan alat praktis yang membantu semua pihak—mulai dari praktisi hukum, akademisi, hingga
              masyarakat umum—untuk memahami dan menerapkan hukum dengan tepat sesuai konteks dan kebutuhannya.
            </p>
            <p>
              Dengan pemahaman yang baik tentang penggolongan hukum, diharapkan penegakan hukum dapat berjalan
              lebih adil, konsisten, dan sesuai dengan tujuan hukum itu sendiri: menciptakan ketertiban,
              keadilan, dan kesejahteraan dalam masyarakat.
            </p>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>© 2025 Penggolongan Hukum Indonesia | Berdasarkan Teori Soerjono Soekanto</p>
        </footer>
      </div>
    </main>
  )
}
