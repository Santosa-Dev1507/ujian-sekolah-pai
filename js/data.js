const kisiKisiData = [
    {
        id: "quran",
        kategori: "Al-Qur'an",
        ikon: "auto_stories",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Al-Qur'an & Tajwid",
        lgColSpan2: true,
        poin: [
            { teks: "QS Al Mujadalah/58:11 & QS Az Zumar/39:9 — Semangat Mencari Ilmu", kelas: "IX/1", tag: "Soal 1, 2, 3, 41", tagColor: "bg-red-100 text-red-700" },
            { teks: "QS Al Baqarah/2:30 & QS Al Qasas/28:77 — Khalifatullah Fil Ard, Penebar Kasih Sayang, Hukum Mad", kelas: "IX/2", tag: "Soal 4, 5, 6, 38", tagColor: "bg-red-100 text-red-700" },
            { teks: "QS Ar Rum/30:41, Ibrahim/14:32 & Az Zukhruf/43:13 — Melestarikan Alam, Hukum Ra & Lam Jalalah", kelas: "VIII/1", tag: "Soal 8", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "QS Al Baqarah/2:143 — Beragama Secara Moderat, Hukum Nun Sukun/Tanwin & Mim Sukun", kelas: "VIII/2", tag: "Soal 9", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "QS An-Nisa'/4:59 & QS An-Nahl/16:64 — Pedoman Hidup, Alif Lam Syamsiyyah & Qamariyyah", kelas: "VII/1", tag: "Soal 10", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "QS Al-Anbiya'/21:30 & QS Al-A'raf/7:54 — Tanda Kekuasaan Allah, Hukum Ghunnah", kelas: "VII/2", tag: "Soal 11", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "aqidah",
        kategori: "Aqidah",
        ikon: "brightness_7",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Keimanan & Keyakinan",
        lgColSpan2: true,
        poin: [
            { teks: "Iman Kepada Hari Akhir — Mawas Diri, Tahapan Hari Akhir", kelas: "IX/1", tag: "Soal 7, 12", tagColor: "bg-red-100 text-red-700" },
            { teks: "Iman Kepada Qada & Qadar — Taqdir Mubram & Muallaq, Penciptaan Manusia", kelas: "IX/2", tag: "Soal 13, 14, 45", tagColor: "bg-red-100 text-red-700" },
            { teks: "Iman Kepada Kitab-kitab Allah — Generasi Pecinta Al-Qur'an Yang Toleran", kelas: "VIII/1", tag: "Soal 15", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Iman Kepada Nabi & Rasul — Generasi Digital Yang Berkarakter", kelas: "VIII/2", tag: "Soal 16", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Iman Kepada Allah — Asmaul Husna: Al-Alim, As-Sami', Al-Bashir, Al-Khabir", kelas: "VII/1", tag: "Soal 17", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Iman Kepada Malaikat — Tugas Malaikat, Perbedaan Malaikat/Jin/Manusia", kelas: "VII/2", tag: "Soal 18, 44", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "akhlak",
        kategori: "Akhlak",
        ikon: "auto_awesome",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Budi Pekerti & Perilaku",
        poin: [
            { teks: "Etika Pergaulan & Komunikasi Islami — Pergaulan Antar Lawan Jenis", kelas: "IX/1", tag: "Soal 19", tagColor: "bg-red-100 text-red-700" },
            { teks: "Tradisi & Seni Islami — Prinsip Seni Arsitektur Islam", kelas: "IX/2", tag: "Soal 36", tagColor: "bg-red-100 text-red-700" },
            { teks: "Amanah & Jujur — Hikmah Sikap Amanah dan Jujur", kelas: "VIII/1", tag: "Soal 20, 21", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Salat & Zikir — Dalil Tentang Shalat", kelas: "VII/1", tag: "Soal 24", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Ghibah & Tabayun — Dampak Buruk Ghibah, Sikap Tabayun", kelas: "VII/2", tag: "Soal 22, 40", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "fiqih",
        kategori: "Fiqih",
        ikon: "gavel",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Ibadah & Muamalah",
        lgColSpan2: true,
        poin: [
            { teks: "Aqiqah & Qurban — Ketentuan Akikah dan Kurban, Syarat Hewan Kurban", kelas: "IX/1", tag: "Soal 25, 37", tagColor: "bg-red-100 text-red-700" },
            { teks: "Madzhab Dalam Fiqih Islam — Biografi Imam Mazhab, Keteladanan", kelas: "IX/2", tag: "Soal 31, 42", tagColor: "bg-red-100 text-red-700" },
            { teks: "Salat Gerhana, Istiska & Jenazah — Tata Cara Shalat Gerhana", kelas: "VIII/1", tag: "Soal 26", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Jual Beli & Hutang Piutang — Fikih Muamalah, Larangan Riba", kelas: "VIII/2", tag: "Soal 27", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Sujud Sahwi, Tilawah & Syukur — Bacaan Sujud, Tata Cara", kelas: "VII/1", tag: "Soal 28", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Rukhsah Dalam Ibadah — Kemudahan Dari Allah SWT", kelas: "VII/2", tag: "Soal 23", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "sejarah",
        kategori: "SKI / Tarikh",
        ikon: "history_edu",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Sejarah Peradaban Islam",
        lgColSpan2: true,
        poin: [
            { teks: "Peradaban Daulah Usmani — Tokoh Pemimpin, Sebab Runtuhnya Turki Usmani", kelas: "IX/1", tag: "Soal 29, 30", tagColor: "bg-red-100 text-red-700" },
            { teks: "Daulah Abbasiyah (750-1258 M) — Masa Keemasan Islam, Bayt Al Hikmah", kelas: "VIII/1", tag: "Soal 32, 43", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Ilmuwan Muslim Masa Abbasiyah — Kontribusi untuk Kemanusiaan & Peradaban", kelas: "VIII/2", tag: "Soal 33, 39", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Bani Umayah di Damaskus (661-750 M) — Sebab Kemunduran Dinasti", kelas: "VII/1", tag: "Soal 35", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Bani Umayah di Andalusia (756-1031 M) — Tokoh & Ilmuwan", kelas: "VII/2", tag: "Soal 34", tagColor: "bg-blue-100 text-blue-700" }
        ]
    }
];

const quizData2024 = [
    {
        "id": 1,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Hadits adalah sumber hukum Islam kedua setelah Al Qur'an. Fungsi Hadits ada 4 yaitu, sebagai Bayān Al-Taqrīr (menetapkan dan memperkuat apa yang telah diterangkan di dalam Al-Qur'an), Bayān Al-Tafsīr (penjelasan terhadap ayat-ayat yang memerlukan perincian atau penjelasan lebih lanjut), Bayān Al-Tasyri' (memberikan kepastian hukum Islam yang tidak ada di Al-Qur'an) dan Bayan Al-Nasakh (membatalkan ketentuan terdahulu).<br><br><span class=\'italic\'>\'Dan Kami tidak menurunkan Kitab (Al-Qur'an) ini kepadamu (Muhammad), melainkan agar engkau dapat menjelaskan kepada mereka apa yang mereka perselisihkan, serta menjadi petunjuk dan rahmat bagi orang-orang yang beriman.\'</span> Q.S. An-Nahl/16 : 64<br><br>Untuk memahami Q.S. An-Nahl/16 : 64 ini, fungsi Hadits yang sesuai adalah sebagai....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Bayān Al-Taqrīr",

            "Bayān Al-Tafsīr",

            "Bayān Al-Tasyri'",

            "Bayan Al-Nasakh"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 2,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Sebagai seorang mukmin, sudah seharusnya kita menggantungkan harapan dan mohon pertolongan kepada Allah SWT, karena itu menjadi salah satu indikator keimanan kita. Allah juga menjelaskan di beberapa ayat, diantaranya ayat berikut ini:<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ</span><br>Allah menyuruh kita meminta pertolongan kepada Allah SWT dengan cara....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Sabar dan salat",

            "Dzikir dan doa",

            "Salat dan puasa",

            "Zakat dan sedekah"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 3,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Perhatikan Q.S Al Isra'/17 : 27 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>إِنَّ الْمُبَذِّرِينَ كَانُوا إِخْوَانَ الشَّيَاطِينِ ۖ وَكَانَ الشَّيْطَانُ لِرَبِّهِ كَفُورًا</span><br>Di bawah ini ada beberapa pernyataan mengenai kandungan Q.S Al Isra' : 27 pilihlah salah satu jawaban yang paling tepat!",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Saudara-saudara setan adalah orang yang selalu berbuat dholim kepada temannya",

            "Prilaku yang dicintai oleh Allah SWT adalah mereka yang suka menabung dan tidak melakukan prilaku boros dalam kehidupan sehari-hari",

            "Prilaku yang dicintai Allah SWT adalah mereka yang banyak bersedekah dan berinfaq",

            "Setan menjadi saudara orang-orang yang banyak membicarakan kejelekan orang lain"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 4,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan tabel berikut ini!<br><table class='w-full border-collapse border border-outline-variant/30 my-4 text-center'><tr><td class='border border-outline-variant/30 p-2'>1</td><td class='border border-outline-variant/30 p-2'>Mad Thabi'i</td><td class='border border-outline-variant/30 p-2'>A</td><td class='border border-outline-variant/30 p-2 font-arabic text-xl'>وَعِبَادُ الرَّحْمَٰنِ</td></tr><tr><td class='border border-outline-variant/30 p-2'>2</td><td class='border border-outline-variant/30 p-2'>Mad Jaiz Munfasil</td><td class='border border-outline-variant/30 p-2'>B</td><td class='border border-outline-variant/30 p-2 font-arabic text-xl'>كَانُوا إِخْوَانَ</td></tr><tr><td class='border border-outline-variant/30 p-2'>3</td><td class='border border-outline-variant/30 p-2'>Mad Wajib Muttasil</td><td class='border border-outline-variant/30 p-2'>C</td><td class='border border-outline-variant/30 p-2 font-arabic text-xl'>قَالُوا سَلَامًا</td></tr><tr><td class='border border-outline-variant/30 p-2'>4</td><td class='border border-outline-variant/30 p-2'>Mad 'Iwad</td><td class='border border-outline-variant/30 p-2'>D</td><td class='border border-outline-variant/30 p-2 font-arabic text-xl'>وَنُزِّلَ الْمَلَائِكَةُ</td></tr></table>Dalam tabel di atas ada hukum bacaan Mad beserta contohnya, tentukan pasangan yang paling tepat antara hukum bacaan Mad dan contohnya pada kolom di atas!",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1-A, 2-B, 3-D, 4-C",

            "1-A, 2-B, 3-C, 4-D",

            "1-C, 2-B, 3-A, 4-D",

            "1-C, 2-D, 3-D, 4-A"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 5,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Perhatikan Q.S. Al Baqarah ayat 143 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا ۗ</span><br>Kata kunci dalam memahami ayat di atas adalah pada kalimat “ummatan wasaṭan” yang berarti umat pertengahan. Ayat ini menunjukkan bahwa ajaran Islam bersifat wasath (moderat), sehingga umat yang mengamalkan ajaran Islam adalah umat moderat. Tentukan pernyataan makna “ummatan wasaṭan” yang sesuai di bawah ini <b>kecuali</b>....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Seorang muslim dalam soal agama sangat berprilaku ekstrem, sangat mementingkan kehidupan akhirat melupakan kehidupan dunia.",

            "Umat yang berlaku adil dengan senantiasa menegakkan keadilan dan kebenaran serta membela yang hak dan melenyapkan yang batil.",

            "Umat yang berada di posisi tengah antara orang-orang yang mementingkan keduniaan dalam kehidupannya dan orang-orang yang mementingkan akhirat saja.",

            "Seorang muslim tidak akan ekstrem pada dunia, juga tidak ekstrem pada akhirat saja."

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 6,
        "materi": "Aqidah",

"pertanyaan": "Hasil Timnas Indonesia vs Vietnam di matchday 2 Grup D Piala Asia 2024 ditutup dengan skor akhir 1 - 0 lewat penalti Asnawi Mangkualam. Kemenangan di Stadion Abdullah bin Khalifa, Qatar, ini membuat Garuda naik ke peringkat 3 klasemen AFC Asian Cup 2023 di bawah Jepang.<br>Melihat hasil yang membanggakan pasukan merah putih setelah latihan keras, bermain bagus, tentunya masyarakat Indonesia merasa senang dan bersyukur dengan hasil tersebut. Menerima hasil ini sesuai dengan QS. Ali Imran/3 : 159 yaitu ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Syukur",

            "Tawakkal",

            "Ikhtiar",

            "Optimis"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 7,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Cara membaca hukum bacaan <i>Qalqalah</i> adalah memantul, yang termasuk bacaan <i>Qalqalah sugra</i> adalah....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "<span class='text-2xl font-arabic'>ثُمَّ يُجْزَاهُ</span>",

            "<span class='text-2xl font-arabic'>وَأَنَّ سَعْيَهُ</span>",

            "<span class='text-2xl font-arabic'>لَا تَنْقُضُوا</span>",

            "<span class='text-2xl font-arabic'>وَاسْتَغْفِرْ لَهُمْ</span>"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 8,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Perhatikan Q.S. Az-Zumar/39: 53 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ</span><br>Pada ayat tersebut manakah yang <b>bukan</b> termasuk kandungan di dalamnya?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Larangan putus asa",

            "Perintah mensyukuri nikmat",

            "Allah mengampuni semua dosa",

            "Allah Maha Pengampun"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 9,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Waqaf adalah tanda berhenti, Ada banyak sekali di dalam Al-Qur'an, salah satunya yang terdapat di potongan ayat berikut.<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>قُلْ لَا تَمَنَّوْا عَلَيَّ إِسْلَامَكُمْ ۚ</span><br>Pada poongan ayat tersebut terdapat tanda waqaf ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Lazim",

            "Jaiz tasawi",

            "Jaiz hasan",

            "Jaiz kafi"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 10,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Perhatikan Q.S. Al-Mujadilah [58] : 11 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قِيلَ لَكُمْ تَفَسَّحُوا فِي الْمَجَالِسِ فَافْسَحُوا يَفْسَحِ اللَّهُ لَكُمْ ۖ وَإِذَا قِيلَ انشُزُوا فَانشُزُوا يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ</span><br>Pada ayat tersebut menjelaskan kepada manusia untuk semangat ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Berbakti kepada kedua orang tua",

            "Berbuat jujur dan adil",

            "Menghargai pendapat",

            "Mencari ilmu"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 11,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan potongan ayat berikut! <span class='text-2xl font-bold font-arabic'>فَقَالَ</span> Setelah huruf Qa terdapat alif, maka dinamakan hukum bacaan ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Mad",

            "Mad Tobi'i",

            "Mad Aridlilissukun",

            "Mad 'iwad"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 12,
        "materi": "Aqidah",

"pertanyaan": "Setiap hari kita berangkat sekolah, ada bermacam-macam tujuan para siswa sampai ke sekolah. Sebagai siswa muslim yang taat, pergi sekolah adalah salah satu ibadah karena melaksanakan perintah Allah SWT untuk mencari ilmu. Dengan ilmu yang ia dapatkan akan banyak manfaat di dunia dan akhirat yang ia peroleh, salah satunya adalah akan ditinggikan derajat bagi orang yang beriman dan berilmu. Selain itu Mencari ilmu adalah salah satu pencerminan iman kepada Asmaul Husna yaitu ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Al 'Aliim",

            "Al Khobir",

            "Al Bashir",

            "As Sami'"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 13,
        "materi": "Aqidah (HOTS)",

"pertanyaan": "Pemilu telah usai, sebagai warga negara dan muslim yang baik, Xena merasa lega bisa melaksanakan kewajibannya sebagai warga negara sekaligus sebagai muslim. Ia berkeyakinan bahwa memilih pemimpin dan wakil rakyat juga ibadah dan ada aturannya dalam Islam. Meski hasilnya tidak sesuai yang ia pilih, tapi apa yang ia lakukan pasti akan dicatat dan dipertanggungjawabkan di akhirat kelak. Ini merupakan pencerminan iman kepada malaikat....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Jibril",

            "Ridwan",

            "Rokib dan Atid",

            "Munkar dan Nakir"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 14,
        "materi": "Aqidah",

"pertanyaan": "Al-Qur'an merupakan kitab suci dari Allah Swt. yang terjamin kemurniannya. Sejak awal diturunkan sampai sekarang bacaan Al-Qur'an dan isinya tidak mengalami perubahan, baik penambahan maupun pengurangan. Itulah salah satu keistimewaan Al-Qur'an dibanding dengan kitab lain. Dari pernyataan di bawah ini manakah yang <b>bukan</b> merupakan keistimewaan Al-Qur'an?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Al-Qur'an tidak hanya terjaga secara tertulis dalam mushaf seperti yang kamu lihat sehari-hari. Al-Qur'an juga terjaga dalam hati dan pikiran para penghafal Al-Qur'an yang jumlahnya jutaan.",

            "Dalam sejarah tercatat bahwa Al-Qur'an tidak diturunkan sekaligus kepada Rasulullah Saw. Seluruh ayat-ayat Al-Qur'an diturunkan secara bertahap, sedikit demi sedikit dan berangsur-angsur.",

            "Al-Qur'an sebagai penyempurna bagi kitab-kitab sebelumnya oleh sebab itu Al-Qur'an sudah ada sejak zaman nabi Adam as hingga nabi Muhammad Saw.",

            "Umat Islam yang menjadikan Al-Qur'an sebagai pedoman dalam kehidupan sehari-hari sudah tentu akan menjadikan hidupnya terarah dan selamat sampai tujuan hidup yang sebenarnya yaitu kehidupan akhirat."

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 15,
        "materi": "Aqidah",

"pertanyaan": "Para nabi dan rasul memiliki sifat wajib yaitu sidiq, amanah, tabligh dan fatonah. Sebagai seorang muslim yang meyakini adanya 25 nabi dan rasul tidak cukup dengan hanya menghafal namanya saja tapi juga harus mampu meneladani dan menerapkan sifat-sifat wajib tersebut dalam kehidupan sehari-hari.<br>Carilah pasangan sifat wajib bagi rasul dengan prilaku yang sesuai di tabel di atas ini!<br>(Lihat tabel asli pada instrumen cetak, pilih pasangan yang tepat).",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1-C, 2-D, 3-B, 4-A",

            "1-B, 2-D, 3-B, 4-A",

            "1-C, 2-D, 3-A, 4-B",

            "1-C, 2-A, 3-D, 4-B"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 16,
        "materi": "Aqidah",

"pertanyaan": "Dikumpulkannya seluruh manusia yang telah dibangkitkan dari alam kubur, menuju padang yang sangat luas, biasa disebut dengan hari ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Yaumul Mahsyar",

            "Yaumul Mizan",

            "Yaumul Ba'ats",

            "Yaumul Barzah"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 17,
        "materi": "Aqidah",

"pertanyaan": "Kiamat kubro memang belum terjadi sehingga tak seorang pun mengetahui peristiwa yang sebenarnya, namun kita mengetahuinya dari firman Allah Swt. dan Hadis Nabi Saw. Salah satunya pada ayat berikut :<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا ﴿١﴾ وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا ﴿٢﴾</span><br>Pada ayat tersebut menggambarkan peristiwa hari kiamat, peristiwa yang sesuai dengan ayat tersebut adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Dan sangkakalapun ditiup, maka matilah semua (makhluk) yang di langit dan di bumi kecuali yang dikehendaki oleh Allah.",

            "Pada hari itu manusia seperti laron yang beterbangan. Dan gunung-gunung seperti bulu yang dihambur-hamburkan.",

            "Langit terbelah, pada hari itu, janji Allah pasti terlaksana.",

            "Apabila bumi diguncangkan dengan guncangan yang dahsyat, dan bumi mengeluarkan beban-beban berat (yang dikandung)nya."

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 18,
        "materi": "Aqidah",

"pertanyaan": "Sebagai orang yang beriman, tentu kita diwajibkan untuk meyakini dengan sepenuh hati, menerima dengan ikhlas apa yang telah ditentukan oleh Allah Swt. Adapun manfaat beriman kepada Qada dan Qadar adalah sebagai berikut, <i>kecuali</i> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Selalu dihormati masyarakat",

            "Menumbuhkan sikap optimis",

            "Menjauhkan diri dari sikap sombong",

            "Ketenangan jiwa"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 19,
        "materi": "Aqidah",

"pertanyaan": "Perhatikan ilustrasi berikut! Manakah yang termasuk perilaku yang mencerminkan iman kepada Qada Qadar?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Ketika pak RT. bertanya kepada salah satu warganya yang hanya nongkrong saja mengapa tidak bekerja untuk memenuhi kebutuhannya, jawabnya kalau Allah mentakdirkan kaya, pasti saya sudah kaya, kalau Allah mentakdirkan saya miskin, ya sudah ini nasip saya.",

            "Nia mengikuti ulangan harian mata pelajaran IPS di kelasnya, namun hasilnya kurang menggembirakan, saat di tanya pak guru apakah tidak belajar, jawabnya sambil tersenyum sudah ditakdirkan Allah katanya.",

            "Setiap hari Pak Slamet selalu menaruh Pisang Raja dibawah tempat tidurnya, tak lupa bunga mawar serta beberapa makanan kecil juga ada di samping Pisang Raja, semua dilakukan sebagai bentuk usaha agar baksonya laris manis, rejeki lancar.",

            "Orang palestina yang kehilangan istri dan anaknya, serta rumah dan tokonya di bom, namun ketika di wawancarai media,ia tetap mengucapkan alhamdulillah-alhamdulillah ini sudah di takdirkan Allah Swt"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 20,
        "materi": "Akhlak",

"pertanyaan": "Dalam QS Al Ankabut /29 : 45 Allah SWT berfirman “... Sesungguhnya salat itu mencegah dari (perbuatan) keji dan mungkar ...”<br>Pernyataan yang <i>tidak</i> sesuai dengan ayat tersebut adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Orang yang menjaga salatnya, maka ia telah menegakkan agama Allah Swt., orang yang menegakkan agama Allah maka akan dijaga oleh Allah SWT.",

            "Salat adalah mengingat Allah Swt., orang yang selalu mengingat Allah Swt. tidak akan mau bermaksiat.",

            "Orang yang salat, maka tidak punya kesempatan melaksanakan kegiatan lainnya.",

            "Orang yang tekun dalam salat, hatinya akan lebih cenderung kepada amal saleh."

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 21,
        "materi": "Akhlak",

"pertanyaan": "Perintah yang diturunkan Allah Swt. kepada nabi Muhammad Saw. adalah perintah membaca. Karena faktanya orang yang banyak membaca akan menjadi orang yang cerdas dan pandai. Apalagi di era kemajuan teknologi seperti sekarang, umat Islam harus cerdas dan bijak dalam membedakan berita-berita yang beredar di dunia maya, sehingga tidak terjerumus dalam ghibah yang akan merugikan kita sendiri baik di dunia maupun akhirat. Cara yang dapat dilakukan untuk membedakan konten/berita yang beredar itu ghibah atau bukan adalah dengan cara ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Dengan memposting ke beberapa grub temannya supaya mendapat informasi lainnya",

            "Memahami efek berita/konten tersebut bermanfaat atau membawa madhorot",

            "Memahami maksud dari beredarnya konten tersebut untuk perbaikan atau menjatuhkan seseorang.",

            "Mengecek sumber berita/konten tersebut apakah bisa dipercaya atau tidak."

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 22,
        "materi": "Akhlak",

"pertanyaan": "Sebagai makhluk sosial, manusia selalu membutuhkan orang lain. Orang lain di sekitar kita harus diperlakukan secara baik, santun, saling menyayangi, dan menghormati. Berprasangka baik kepada orang lain akan menumbuhkan keharmonisan dalam kehidupan masyarakat. Sikap buruk sangka hanya akan memicu perpecahan dan konflik. Banyak pertikaian dan kerusuhan terjadi karena sikap buruk sangka. Jika ada isu-isu negative hendaknya diklarifikasi (tabayyun) terlebih dahulu agar kita tidak terjerumus kepada sikap curiga dan buruk sangka.<br>Orang yang terbiasa berbaik sangka dan mengutamakan tabayyun akan memperoleh manfaat sebagai berikut ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Hidup menjadi lebih harmonis, orang yang baik akan bergaul dengan orang baik, orang yang jujur akan bergaul dengan orang yang jujur dan sebagainya",

            "Jika mengalami kegagalan akan merasa sedih, lebih banyak mengoreksi diri dan kadangkala menyalahkan orang lain",

            "Menjadi pribadi yang banyak berfikir dan terkadang merasa lelah karena keadaan yang tidak mendukungnya",

            "Menjadi pribadi yang punya pendirian kuat, sebab tidak mudah mendapat pengaruh buruk dari orang lain"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 23,
        "materi": "Akhlak",

"pertanyaan": "Perhatikan Ilustrasi berikut!<br>Dimas seorang siswa yang berprestasi di kelasnya. Saat guru menerangkan materi pelajaran, Dimas biasanya memperhatikan dengan sungguh-sungguh. Suatu saat dalam proses belajar di kelas Dimas bersenda gurau dengan teman-teman, sehingga ditegur guru. Reaksi Dimas dan teman-temannya ada yang langsung diam dan memperhatikan, ada yang tetap bersendau gurau serta ada yang membantah gurunya. Namun guru tetap menanggapinya dengan sabar.<br>Berdasarkan ilustrasi tersebut, contoh perilaku berbakti kepada guru yang paling tepat dilakukan adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Mengingat nama dan kebaikan gurunya",

            "Memberi hadiah barang berharga kepada guru",

            "Mendengarkan setiap nasehat guru",

            "Sering berkunjung ke rumah gurunya"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 24,
        "materi": "Akhlak",

"pertanyaan": "Perhatikan pernyataan berikut!<br>1) Memilih kata-kata yang baik, tidak berkata kotor<br>2) Menatap Iawan bicara berlama-lama<br>3) Menahan diri dari tertawa yang berlebihan<br>4) Menyilangkan kaki dan tangan<br>Dari pernyataan tersebut, yang merupakan tata krama berkomunika lisan yang baik adalah ...",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1, 2, 3",

            "2, 3, 4",

            "1, 2, 4",

            "2, 3, 5"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 25,
        "materi": "Akhlak",

"pertanyaan": "Indah seorang siswi yang pandai, sopan dan selalu menghormati orang lain. Dalam kehidupan sehari-hari, adakalanya Indah juga harus bergaul dengan lawan jenis. Islam tidak melarang bergaul dengan lawan jenis, namun harus memperhatikan rambu-rambu yang mengatur tentang etika pergaulan dengan lawan jenis, berikut ini :<br>a) Menghindari berduaan dengan lawan jenis<br>b) Bila berduaan hanya sebatas teman<br>c) Tidak bersentuhan fisik<br>d) Menjaga pandangan<br>e) Hindari tempat-tempat yang sepi<br>f) Berkomunikasi lewat Watshap<br>g) Menjaga batas intensitas komunikasi.<br>Dari ilustrasi tersehut, manakah yang termasuk rambu-rambu yang mengatur tentang pergaulan dengan lawan jenis?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "a, b, c, d, dan e",

            "a, c, d, e, dan g",

            "a, c, e, f, dan g",

            "a, b, d, e, dan f"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 26,
        "materi": "Fiqih",

"pertanyaan": "Iksan adalah pedagang yang sukses. Ia juga seorang muslim yang taat. Baginya shalat wajib sangat membantunya dalam mengatur kesibukannya dalam berdagang dan beristirahat. Sehingga ia tidak pernah meninggalkan shalat wajibnya, bahkan ia menutup dagangannya saat waktu shalat datang. HaI ini juga ia terapkan kepada karyawannya. Di hari Jumat ia lebih memilih membuka tokonya setelah shalat Jumat usai. Karena ia ingin memaksimalkan ibadah di Sayyidul Ayyam itu.<br>Dari cerita di atas, fungsi shalat Jumat yang tepat adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Melipatgandakan pahala kebaikan.",

            "Membiasakan diri untuk disiplin terhadap waktu.",

            "Berkumpulnya umat Islam dalam masjid merupakan salah satu cara untuk mencari barakah Allah Swt.",

            "Dengan serlng berjamaah di masjid, bisa menambah semangat bekerja kita karena terbiasa melihat orang-orang yang semangat beribadah di masjid."

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 27,
        "materi": "Fiqih",

"pertanyaan": "Rukhsah adalah keringanan dari Allah Swt. untuk hambaNya dalam melaksanakan ibadah, tujuan diberikan rukhsah ini, agar mudah melaksanakan ibadah tanpa rasa berat.<br>Berikut ini yang <i>bukan</i> termasuk rukhsah adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Melaksanakan shalat jamak qosor saat bepergian",

            "Membayar zakat fïtrah dengan uang",

            "Mengganti puasa bagi orang yang sakit parah saat bulan Ramadhan",

            "Membayar denda bagi jamaah haji yang tidak bisa hadir saat wukuf"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 28,
        "materi": "Fiqih",

"pertanyaan": "Salat gerhana dalam fikih Islam dikenal dengan istilah shalat Kusufain yang berarti shalat dua gerhana atau shalat yang dilakukan pada saat terjadi gerhana matahari maupun bulan. Hukum shalat gerhana sunah muakkad (sangat dianjurkan).<br>Di hawah ini ketentuan shalat gerhana yang benar adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Shalat yang dilakukan saat gerhana matahari disebut dengan shalat khusuf, dilakukan berjamaah dengan jumlah rekaat dua, dua kali ruku' pada tiap rekaatnya.",

            "Shalat yang dilakukan saat gerhana bulan disebut dengan shalat khusuf, dilakukan berjamaah dengan jumlah rekaat dua, dua kali ruku' pada tiap rekaatnya",

            "Shalat gerhana bulan dilaksanakan saat terjadi gerhana bulan disebut dengan shalat kusuf, dilakukan berjamaah dengan jumlah rekaat dua. Dengan satu kali ruku' di setiap rekaatnya",

            "Shalat gerhana matahari dilaksanakan saat terjadi gerhana matahari disebut dengan shalat kusuf, dilakukan bejamaah dengan jumlah rekaat dua. Dengan satu kali ruku' di setiap rekaatnya"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 29,
        "materi": "Fiqih",

"pertanyaan": "Perhatikan bacaan sujud berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو</span><br>Bacaan di atas merupakan salah satu bacaan sujud yang dibaca ketika melaksanakan sujud ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Sujud dalam shalat",

            "Sujud Syukur",

            "Sujud tilawah",

            "Sujud sahwi"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 30,
        "materi": "Fiqih",

"pertanyaan": "Riba berasal dari kata dalam bahasa Arab yang berarti lehih atau bertambah. Secara istilah riba berarti tambahan pada harta yang disyaratkan dalam transaksi dari dua pelaku akad dalam tukar menukar antara harta dengan harta. Jika Aisya meminjam uang kepada Siti sebesar Rp.50.000,00 selarna enam bulan, ketika sudah jatuh tempo Aisya mengembalilan uang tersebut sejumlah Rp.55.000,00 dengan suka rela karena merasa berhutang budi dengan Siti. Maka uang Rp.5.000,00 yang ditambahkan Aisya kepada Siti adalah .....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Bukan termasuk riba karena tambalan yang diberikan Aisya sebesar Rp.5.000,00 tidak menjadi syarat dalam hutang piutang.",

            "Bukan tertnasuk ribu karena nilai uang Rp.5.000,00 hanya kecil dan tidak mtemberatkan.",

            "Termasuk dalans riba, karena mernberi tanıbahan dalans hutang piutang.",

            "Termasuk riba, Lariena biaıpan tanyan lanja Kip.5.000,00 snentberatkan slans nieruyikan penvinjamını."

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 31,
        "materi": "Fiqih",

"pertanyaan": "Pak Aodtul atalals seurang pelani nelon, sudah pilulan talrun iak Ablul srieiijalnai proflesinya sebyyai petai melon.Tuhun deni latitit tijalaul denyan lekuio, ladainig nieiiołapat tunting sielintpati, tellatieng juggi rugi. liki pik Ahtltsl ııteinutiri savwals nveksnya Uengan uit lisjisn, hiernjatuals kidiar zikik yarup Ititns dibavur |usk Abiısl'",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "2,5%",

            "5%",

            "10%",

            "20%"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 32,
        "materi": "Fiqih",

"pertanyaan": "Pak Heri beserta istri akan melaksanakan ibadah haji tahun ini, karena pak Heri dan istrinya mendapatkan kloter awal, maka pak heri dan istrinya melaksanakan umrah dulu baru melaksanakan haji. Tata cara pelaksanaan ibadah haji pak Heri dan istrinya tersebut dinamakan ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Haji Ifrad",

            "Haji Tamattu'",

            "Haji Qiran",

            "Haji Wada'"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 33,
        "materi": "Fiqih",

"pertanyaan": "Perhatikan pemyataan berikut!<br>1) Menyiapkan lubang penampung darah<br>2) Menyiapkan ember dan gayung untuk inembersihkan darah<br>3) Hewan yang akan disembelih di hadapkan ke kiblat<br>4) Kaki hewan di pegang kuat-kuat atau diikat<br>5) Leher hewan di letakkan di atas lubang penampung darah<br>6) Hewan yang akan di sembelih di beri inakan sebanyak-banyaknya<br>7) Bemiat menyembelih<br>8) Membaca basmalah, shalawat Nabi, dan takbir<br>9) Arahkan pisau pada bagian Ieher hewan<br>Berdasarkan pernyataan tersebut, yang tennasuk ketentuan tata cara penyembelihan hewan secara tradisional adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1, 2, 3, 4, 5, 6, 7",

            "2, 3, 4, 5, 7, 8, 9",

            "1, 3, 4, 5, 7, 8, 9",

            "2, 3, 5, 6, 7, 8, 9"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 34,
        "materi": "Fiqih",

"pertanyaan": "Bu Atika ssorans ihn smda, tielisu sielaliskani smuk lak-laki yank ganlesk dau sseugensasskiiss. |rada hrsl Letujuht ucteish Lrliilnsms issaknya, lrn Alkka mnelaksinakan Akilkuh slespsn Ketentuan whuasi inerihus ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Menyenbelih 2 ckor snpi ksrena be liasr knva rnyn",

            "Mnvyemnelisl I ekior ksishlng yrna mngst yenik",

            "Minyestnielilt 2 Lkor Lamnbinp vins wehis dssis sulat lrerxauid Kiei jxiel",

            "Mienverskxlilı ' rAit kiumnlislit yang kcsil mris lieluns Inexniils klpt kiurnn slagltituyra inili cisijusk"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 35,
        "materi": "Tarikh",

"pertanyaan": "Setelah sampai di Madinah, Nabi Muhammad saw. mulai membuat program kerja dan melaksanakannya yaitu membangun masjid, mempersaudarakan antara Muhajirin dan Ansor, dan membuat perjanjian dengan penduduk Madinah. Madinah tidak hanya orang-orang Islam saja yang tinggal, tetapi di sana terdapat pula orang-orang nonmuslim. Agar terjadi hubungan yang harmonis, saling menghormati, toleransi, dan menjaga lingkungan di Madinah, maka harus ada kesepakatan bersama. Piagam inilah yang oleh Ibnu Hisyam disebut sebagai undang-undang dasar negara dan pemerintahan Islam yang pertama. Isinya mencakup, antara lain, perikemanusiaan, keadilan sosial, toleransi beragama, dan gotong royong.<br>Dari kisah tersebut kita dapat mengambil pelajaran dari dakwah Nabi Saw. yaitu ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Pemimpin harus bisa membuat suatu kebijakan di mana seluruh kelompok tidak ada yang tersinggung dan tersakiti.",

            "Hijrah dapat menciptakan Negara dan pemerintahan baru yang lebih baik.",

            "Pemimpin harus bisa mempengaruhi pemikiran masyarakat yang dipimpinnya",

            "Pemimpin yang baik harus memiliki rakyat yang mau mengikuti keputusannya."

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 36,
        "materi": "Tarikh",

"pertanyaan": "Sepeninggal Rosululloh Saw., kepemimpinan unat Islam digantikan oleh Khulafaur Rosyidiin. Ada 4 kholifah yang Inenggantikan Rosulullah, mereka memıiliki ciri khas dalan sifst dan kepemimpinannya. Salah satu Khlolifah yang terkenal dengan kebījaksanaannya, tegas dalans nrngunibil keputusan urıuk oranp-orang yallk engXan ncnnbayar isLat dnn IxLjnL UaILn pemtulukunn AI Qur'an yanL prrsnsmndalnmn Islam arlalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Umar bin Khothob",

            "Abu Bakar As Sidiq",

            "Usman bin AtTan",

            "Ali BinAbi Tholib"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 37,
        "materi": "Tarikh",

"pertanyaan": "Paln uass ptuneriutalian lsun Umiavalı, Ilnun ptıuscialnnn sncısgalanul kemajuan yng sangl lsenarvi Sislalı snumya lalinm hlilamg Lrdokleıan yaug nnainnu nelalıiıkau ssnnank okah ulil Inalsh, peiniss lInni prıvnlil tnlinsn ıdan petnvukit inlit. TaLolr trisehui adnluls ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Abu AI-QasiınAblns lhnu Eurnss",

            "Abu AI-Ousinr AI-Ziıhsvi",

            "Ahir Maswn Abdul MlıL hirv Ilalıih",

            "Allı AnirAlsltilliıli Ilıı Syulrsil"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 38,
        "materi": "Tarikh",

"pertanyaan": "Sunan Kalijaga merupakan salah satu tokoh Wali Songo yang lahir di Tuban, Jawa Timur, pada pertengahan abad ke-15. Dalam menyebarkan ajaran Islam di Tanah Jawa, Sunan Kalijaga mempunyai pola yang sama dengan guru sekaligus sahabat dekatnya, Sunan Bonang. Dakwah Sunan Kalijaga sangat toleran terhadap budaya lokal, karena tidak ingin menyinggung atau membelokkan langsung keyakinan masyarakat yang telah dianut secara turun temurun. Sunan Kalijaga meyakinkan bahwa adat istiadat dan budaya lamanya, baik yang bersumber dari ajaran Hindu-Budha maupun kepercayaan nenek moyangnya masih bisa digunakan asalkan disisipkan ajaran Islam.<br>Pada artikel tersebut, Sunan Kalijaga menyebarkan Islam di Nusantara dengan menggunakan cara ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Kesenian",

            "Pendidikan",

            "Hubungan sosial",

            "Perdagangan"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 39,
        "materi": "Fiqih",
        "pertanyaan": "Dalam ilmu Fiqih dikenal 4 (empat) mazhab besar yang diakui dalam Islam Sunni (Ahlussunnah Wal Jamaah). Salah satu mazhab sangat dikenal karena paling ketat berpegang pada Al-Qur'an dan Hadis, serta menolak penggunaan akal (ra'yu) secara bebas dalam menetapkan hukum. Mazhab yang dimaksud dan pendirinya yang paling banyak menanggung penderitaan karena mempertahankan prinsipnya adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Imam Hanafi",
            "Imam Maliki",
            "Imam Syafi'i",
            "Imam Hanbali"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "Imam Ahmad bin Hanbal (pendiri Mazhab Hanbali) dikenal paling tegas menolak campur tangan akal dalam hukum Islam dan pernah dipenjara karena mempertahankan keyakinannya.",
        "tipe": "pg"
    },
    {
        "id": 40,
        "materi": "Seni Budaya Islam",
        "pertanyaan": "Masjid Al-Jabbar adalah masjid megah yang diresmikan pada tanggal 30 Januari 2023 di Kota Bandung, Jawa Barat. Masjid ini berdiri di atas danau buatan dan memiliki desain yang sangat indah dengan memadukan estetika modern dan nilai-nilai Islam.<br>Keindahan Masjid Al-Jabbar sebagai karya agung mencerminkan salah satu bentuk ekspresi seni Islam yang paling menonjol pada bangunan, yaitu seni ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Seni Arsitektur (Bangunan) Islam",
            "Seni Baca Al-Qur'an (Tilawah)",
            "Seni Kaligrafi Arab",
            "Seni Musik Islami"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "Masjid Al-Jabbar adalah contoh nyata Seni Arsitektur Islam modern yang memadukan keindahan bangunan dengan nilai-nilai keislaman.",
        "tipe": "pg"
    },
    {
        "id": 41,
        "materi": "Tarikh",

"pertanyaan": "Masa Rosululloh Saw. masih hidup, Al Qur'an tidak dibukukan, tetapi ditulis di beberapa media yang berbeda-beda seperti batu tulis, pelepah kurma maupun kulit-kulit pohon. Saat kepemimpinan umat Islam digantikan Khulafaur Rosyidin, Al Qur'an 2 kali dibukukan, pada masa kholifah siapakah Al Qur'an itu dibukukan? Jelaskan alasan pembukuannya!",


        "gambar": "",

"kutipan": "",


        "opsi": [],
        "kunciJawaban": "",

        "tipsBidang": "",

        "tipe": "uraian"

    },
    {
        "id": 42,
        "materi": "Fiqih",

"pertanyaan": "Di dalam Q.S. Al Maidah/5 : 3 Allah menjelaskan secara langsung makanan yang haram dari segi zatnya. Di dalam ayat yang lain juga dijelaskan makanan yang kotor dan menjijikkan juga diharamkan untuk dimakan. Sedangkan ketentuan makanan yang halal juga diatur Allah dalam ayat Al Qur'an dan Hadis. Jelaskan jenis-jenis makanan yang halal dari segi wujudnya yang sudah Allah jelaskan dalam Al Qur'an maupun dijelaskan dalam Hadis!",


        "gambar": "",

"kutipan": "",


        "opsi": [],
        "kunciJawaban": "",

        "tipsBidang": "",

        "tipe": "uraian"

    },
    {
        "id": 43,
        "materi": "Fiqih",

"pertanyaan": "Penyembelihan yang disyariatkan dalam ajaran Islam adalah penyembelihan yang memenuhi ketentuan-ketentuannya, adapun ketentuan yang harus dipenuhi seorang penyembelih adalah sebagai berikut, sebutkan!",


        "gambar": "",

"kutipan": "",


        "opsi": [],
        "kunciJawaban": "",

        "tipsBidang": "",

        "tipe": "uraian"

    },
    {
        "id": 44,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Tulislah kembali QS. Al Hujurat/49: 13 berikut, serta terjemahkanlah!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ</span>",


        "gambar": "",

"kutipan": "",


        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "uraian"

    },
    {
        "id": 45,
        "materi": "Akhlak",

"pertanyaan": "Amanah berasal dari kata dalam bahasa Arab amāntaan yang berarti aman, tenteram, tenang, dan hilang rasa takut. Sementara dalam bahasa Indonesia amanah diartikan sebagai sesuatu yang ditiyipkan kepada orang lain, keamanan dan ketenteraman, dan dapat dipercaya. Allah memerintahkan umat Islam untuk menjaga amanah. Jelaskan tiga cakupan makna amanah yang kamu ketahui beserta contohnya!",


        "gambar": "",

"kutipan": "",


        "opsi": [],
        "kunciJawaban": "",

        "tipsBidang": "",

        "tipe": "uraian"

    }
];


const quizData2025 = [
    {
        "id": 1,
        "materi": "Al-Qur'an",

"pertanyaan": "Perhatikan potongan ayat berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>تَفَسَّحُوا فِي الْمَجَالِسِ فَافْسَحُوا يَفْسَحِ اللَّهُ لَكُمْ</span><br>Pada potongan ayat tersebut menjelaskan bahwa ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Allah mengetahui apa yang ada di langit dan di bumi",

            "Allah memerintahkan manusia untuk berlapang-lapang dalam majelis ilmu",

            "Perbedaan orang musyrik dengan orang yang takut kepada Tuhannya",

            "Tuhan yang mempunyai kerajaan, memberikan kerajaan kepada siapa yang dikehendaki"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 2,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan potongan ayat berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>خَيْرٌ لَّكُمْ وَأَطْهَرُ ۗ فَإِن لَّمْ تَجِدُوا</span><br>Pada potongan ayat tersebut terdapat tanda Waqaf Qila (Waqfu Aula), yang artinya ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Diutamakan berhenti",

            "Diutamakan lanjut",

            "Harus berhenti",

            "Boleh berhenti, boleh lanjut"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 3,
        "materi": "Al-Qur'an",

"pertanyaan": "'Sesungguhnya Aku (Allah) hendak menjadikan seorang khalifah di muka bumi'. Ayat yang terjemahannya sesuai dengan pernyataan tersebut adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "<span class='text-2xl font-arabic block' dir='rtl'>وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَبَشِّرِ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أَنَّ لَهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً</span>"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 4,
        "materi": "Al-Qur'an",

"pertanyaan": "Perhatikan QS. Al Qasas (28) : 77 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا ۖ وَأَحْسِن كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ ۖ وَلَا تَبْغِ الْفَسَادَ فِي الْأَرْضِ</span><br>Manakah yang <span class='italic font-bold'>bukan</span> merupakan kandungan QS. Al Qasas (28) : 77?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Perintah kepada manusia agar hidup secara seimbang antara dunia dan akherat",

            "Perintah kepada manusia untuk berbuat baik kepada sesama manusia",

            "Larangan berbuat kerusakan di muka bumi",

            "Larangan memakan harta anak yatim"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 5,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan bacaan Mad berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>فِيمَا آتَاكَ</span><br>Pada potongan ayat tersebut mengandung hukum bacaan ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Mad wajib muttasil",

            "Mad jaiz munfasil",

            "Mad 'Arid Lissukun",

            "Mad 'Iwad"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 6,
        "materi": "Al-Qur'an",

"pertanyaan": "Perhatikan ayat berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ</span><br>Kandungan makna yang sesuai dengan ayat tersebut adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Manusia adalah penyebab kerusakan alam",

            "Allah SWT menumbuhkan tanaman dengan air hujan",

            "Allah SWT menciptakan alam untuk manusia",

            "Manusia dianugerahi akal pikiran agar dapat berpikir dan bersyukur"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 7,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan bacaan QS. Al-Baqarah: 143 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا</span><br>Hukum bacaan izhar syafawi pada ayat tersebut berjumlah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Empat",

            "Tiga",

            "Dua",

            "Satu"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 8,
        "materi": "Al-Qur'an",

"pertanyaan": "Dalam QS Al Baqarah: 143, diharapkan umat Islam menjadi umat yang 'adil dan Moderat'. Yang <span class='italic font-bold'>tidak</span> termasuk dari adil dan moderat yang dimaksud adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Memberikan perlakuan yang sama dalam menegakkan aturan kepada semua orang",

            "Lebih mengutamakan akhirat tanpa memikirkan kehidupan dunia",

            "Menempatkan segala sesuatu pada tempatnya",

            "Memberikan keseimbangan antara kepentingan dunia dan akhirat"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 9,
        "materi": "Al-Qur'an",

"pertanyaan": "Perhatikan potongan QS An-Nisa: 59 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ</span><br>Berdasarkan potongan ayat tersebut isi kandungannya memerintahkan agar orang-orang beriman selalu taat kepada, <span class='italic font-bold'>kecuali</span> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Taat kepada Allah SWT",

            "Taat kepada pemimpin (Ulil Amri)",

            "Taat kepada orangtua",

            "Taat kepada Rasulullah SAW"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 10,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan potongan kalimat berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>عَلَيْكَ الْكِتَابَ</span><br>Hukum bacaan di atas adalah Alif Lam Qamariyah, sehingga cara membaca potongan ayat tersebut adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Huruf alif lam tidak dibaca, masuk ke huruf kaf",

            "Huruf alif lam dibaca melebur ke huruf Qamariyah",

            "Huruf alif lam dibaca idghom, melebur pada huruf di depannya",

            "Huruf alif lam dibaca jelas, tidak melebur pada huruf di depannya"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 11,
        "materi": "Al-Qur'an (Literasi)",

"pertanyaan": "Bangkok - Salah satu gedung pencakar langit yang sedang dalam tahap pembangunan di Bangkok runtuh saat gempa bermagnitudo (M) 7,7 terjadi pekan lalu... Pengujian awal terhadap material yang dikumpulkan di lokasi menunjukkan adanya baja di bawah standar di antara reruntuhan... Runtuhnya gedung itu menewaskan sedikitnya 12 orang.<br><br>Pada berita tersebut yang kaitannya dengan fenomena alam gempa bumi, manakah ayat Al-Qur'an yang sangat sesuai?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "<span class='text-2xl font-arabic block' dir='rtl'>يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَإِذَا الْجِبَالُ سُيِّرَتْ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>إِذَا السَّمَاءُ انفَطَرَتْ</span>"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 12,
        "materi": "Al-Qur'an",

"pertanyaan": "Perhatikan ayat (QS Al Ghosyiyah) berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍ</span><br>Pada ayat tersebut dijelaskan bahwa tidak ada makanan untuk penghuni neraka selain dari ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Darah dan nanah",

            "Sumber mata air yang sangat panas",

            "Cairan tembaga yang mendidih",

            "Pohon yang berduri"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 13,
        "materi": "Al-Qur'an (HOTS)",

"pertanyaan": "Nama Achmad Zaky dikenal sebagai pendiri Bukalapak, marketplace besar dari Indonesia. Berasal dari pelosok Jawa Tengah tanpa akses listrik di masa kecil, semangatnya mempelajari pemrograman tak pernah surut demi merubah nasib. Dari nol ia merintis hingga menjadi CEO. Kisah Zaky adalah bukti bahwa sukses tak didapat dari malas-malasan, melainkan kerja keras mengubah keadaan.<br><br>Hal ini sangat sesuai dengan dalil ayat Al-Qur'an berikut: ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "<span class='text-2xl font-arabic block' dir='rtl'>وَكُلُّ شَيْءٍ عِندَهُ بِمِقْدَارٍ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَلِكُلِّ أُمَّةٍ أَجَلٌ ۖ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَنُفِخَ فِي الصُّورِ فَإِذَا هُم مِّنَ الْأَجْدَاثِ إِلَىٰ رَبِّهِمْ يَنسِلُونَ</span>"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 14,
        "materi": "Al-Qur'an",

"pertanyaan": "Sebagai seorang muslim sejati, pastinya Al Qur'an menjadi penunjuk arah kehidupan terdepan. Dimulai dari menyempatkan belajar membacanya sampai menggunakan dalam kehidupan sehari-hari. Berikut ini adalah tahapan sistematis dalam mencintai Al Qur'an, yaitu ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Membaca, memahami, mengamalkan dan mentadabburi",

            "Memahami, membaca, mengamalkan, dan mentadabburi",

            "Mentadabburi, membaca, memahami dan mengamalkan",

            "Membaca, memahami, mentadabburi dan mengamalkan"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 15,
        "materi": "Aqidah (Generasi Z)",

"pertanyaan": "Para Nabi dan Rasul adalah teladan terbaik dalam karakter. Di era digital inipun, sifat keteladanan para Nabi pantas dicontoh untuk kondusifnya kemajuan zaman dari penjahat dunia maya. Berikut ini <span class='font-bold italic'>bukan</span> ciri generasi digital yang berkarakter islami adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Berinternet dengan aman dan bertanggungjawab",

            "Memanfaatkan internet untuk kebaikan",

            "Menghindari dampak negatif internet (hoaks/cyberbullying)",

            "Menggunakan internet bebas sesukanya jika menguntungkan dirinya saja"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 16,
        "materi": "Akhlak",

"pertanyaan": "Dalam tatanan kehidupan bermasyarakat pasti akan terjadi komunikasi. Dalam ajaran Agama Islam cara berkomunikasi diajarkan agar tidak ada pihak yang merasa tersakiti. Etika yang dimaksud adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Kebudayaan dan adat istiadat",

            "Norma masyarakat",

            "Sopan santun dan tata krama",

            "Aturan tertulis pemerintah lokal"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 17,
        "materi": "Akhlak",

"pertanyaan": "Sebagai manusia di kehidupan sehari-hari pasti mengalami interaksi dengan lawan jenis. Oleh karena itu perlu memperhatikan etika pergaulan Islami dengan lawan jenis. Adapun etika pergaulan lawan jenis di antaranya <span class='font-bold italic'>kecuali</span> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Berbicara sengaja dengan jarak yang saling berdempetan dekat",

            "Menundukkan pandangan (Ghadul Bashar)",

            "Menghindari berada berduaan di tempat yang sunyi (Khalwat)",

            "Tidak berbaur campur aduk (Ikhtilat) secara bebas antara laki-laki dan perempuan"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 18,
        "materi": "Seni Islami",

"pertanyaan": "Agama Islam tidak membatasi kreatifitas pemeluknya selama tidak bertentangan dengan ajaran agama Islam. Ada kesenian yang sangat luhur dalam menyusun dan merangkai indah teks huruf Arab dengan proporsi keindahan visual, yang disebut ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Seni Kaligrafi",

            "Seni Arsitektur",

            "Seni Pahat Mozaik",

            "Seni Ukir Geometris"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 19,
        "materi": "Seni Islami",

"pertanyaan": "Ada beberapa macam seni Langgam (Nagham) atau nada tilawah dalam membaca Al-Qur'an agar semakin menyentuh qolbu. Di bawah ini termasuk langgam, <span class='font-bold italic'>kecuali</span> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Bayati",

            "Shoba (Saba)",

            "Sila",

            "Jiharka"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "Sila adalah jenis waqaf, bukan nama langgam tilawah.",

        "tipe": "pg"

    },
    {
        "id": 20,
        "materi": "Akhlak",

"pertanyaan": "Saat menjelang Idul Fitri, Wawan menerima amplop gaji dari bosnya. Ia terkejut isinya jauh lebih banyak dari seharusnya. Karena yakin bos salah hitung, Wawan langsung mengembalikannya jujur. Si Bos malah tersenyum dan memberikan sisa uang itu kembali kepada Wawan sebagai 'Bonus Kejujuran'. Kejadian manis ini menggambarkan bahwa ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Majikan Wawan pada dasarnya tidak teliti hitung uang",

            "Wawan awalnya panik takut dituduh polisi",

            "Wawan langsung memetik hikmah berkah instan dari integritas kejujurannya",

            "Uang itu sebenarnya memang murni bonus THR tanpa syarat"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 21,
        "materi": "Akhlak",

"pertanyaan": "Di bulan suci, guru PAI menugaskan Lembar Kegiatan Amaliah Ramadhan di rumah. Hafidz sebagai siswa berintegritas, selalu mengisi buku laporannya itu sejujur-jujurnya sesuai fakta lapangan (tidak dikarang fiktif). Perilaku Hafidz tersebut merupakan contoh pelaksanaan tanggung jawab dan amanah kepada ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Sesama teman sekelas",

            "Amanah Diri Sendiri",

            "Tugas Guru Agama",

            "Amanah kepada Allah SWT (Ibadah puasa/Kejujuran nurani)"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "Kaidah utamanya jika menyangkut ibadah rahasia murni (puasa/amal di rumah) dengan kejujuran mutlak, maka pertanggungjawabannya adalah bentuk Amanah kepada Allah SWT.",

        "tipe": "pg"

    },
    {
        "id": 22,
        "materi": "Akhlak",

"pertanyaan": "Zikir mudah dieksekusi bisa di segala momentum baik secara lisan, hati, maupun tindakan. Zikir dengan 'Hati/Nurani' seringkali diwujudkan melalui proses ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Merapalkan untaian tahmid, tahlil dan tasbih melalui mulut",

            "Bertafakur merenungkan ciptaan keagungan galaksi semesta alam Allah SWT",

            "Melaksanakan secara jasmani gerakan Shalat dan Puasa perut",

            "Berhenti memegang gelas khamr miras"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 23,
        "materi": "Fiqih",

"pertanyaan": "Pak Hamid dan Bu Eka bersyukur melahirkan anak laki-laki lucu. Tiba saatnya hari ketujuh, keluarga ini bersiap mengeksekusi syariat penyembelihan Akikah. Syarat ketentuan jenis kurban akikah yang paling sah secara syariat sunah Rasulullah untuk bayi laki-laki adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Menyembelih 2 ekor Sapi karena mereka keluarga mapan secara finansial",

            "Menyembelih 1 ekor Domba yang cukup gemuk",

            "Menyembelih 2 ekor Kambing muda yang belum pergantian gigi (poel) karena dagingnya empuk",

            "Menyembelih 2 ekor Kambing yang genap sehat fisiknya, dan umurnya masuk usia berganti gigi (musinnah/poel)"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 24,
        "materi": "Fiqih",

"pertanyaan": "Perhatikan prosedur teknis berikut!<br>1) Menyiapkan lubang darah<br>2) Menyiapkan ember pembersih<br>3) Hewan dihadapkan rute Kiblat<br>4) Kaki hewan diikat kuat agar tidak berontak parah<br>5) Leher persis di atas lubang darah<br>6) Hewan dicekok diberi makan berlebih<br>7) Berniat di hati<br>8) Membaca Basmalah, Shalawat & Takbir<br>9) Pisau tajam ditarik menyayat putus saluran nafas leher<br><br>Urutan tahapan ritual Penyembelihan Hewan Islami (Tradisional) yang sah mutlak adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1, 2, 3, 5, 6, 7, 8",

            "2, 3, 4, 5, 7, 8, 9",

            "1, 3, 4, 5, 7, 8, 9",

            "2, 3, 5, 6, 7, 9"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 25,
        "materi": "Fiqih",

"pertanyaan": "Pelaksanaan ritual Kurban (Idul Adha) hukumnya Sunnah Muakkad (berstatus ring 1 paling dianjurkan). Bahkan nabi mengancam kaum hartawan yang enggan kurban agar tidak usah mendekati masjid. Perintah Kurban Idul Adha ini secara teologis berinduk tertera pada dalil ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Q.S. Al Maidah (5) : 3",

            "Q.S. Al Kautsar (108) : 1-3",

            "Q.S. An Nahl (16) : 114",

            "Q.S. Al Baqarah (2) : 168"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 26,
        "materi": "Fiqih",

"pertanyaan": "Mazhab adalah konvensi manhaj / landasan rute pemikiran teologi fikih. Di dunia Sunni Ahlussunah modern saat ini terpusat komando pada 4 Imam Mazhab absolut. Berikut ini termasuk di dalamnya, <span class='font-bold italic'>kecuali</span> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Imam Qurtuby (Ahli Tafsir)",

            "Imam Abu Hanifah (Hanafi)",

            "Imam Malik (Maliki)",

            "Imam Muhammad bin Idris (Syafi'i)"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 27,
        "materi": "Aqidah / Fiqih",

"pertanyaan": "Sikap mengikuti dan menaati keseluruhan apa-apa yang diperintahkan, dicontohkan, dibenarkan Rasulullah SAW dengan sumber referensi dalil hadis yang shahih, serta membuang budaya yang menyimpang dilarang rasul. Terminologi prinsip ini di dunia syariah dinamakan ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Ittiba'",

            "Ijtihad",

            "Taklid (Buta Ikut-ikutan)",

            "Fatwa"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 28,
        "materi": "Fiqih",

"pertanyaan": "Dalam perpusataan besar Islam, koridor Fikih terbagi belah dua kutub: Fikih vertikal (Fikih Ibadah) dan Fikih sosial horizontal (Fikih Muamalah) antar interaksi ekonomi/kontrak manusia. Di bawah ini yang murni representasi perbuatan *Fikih Muamalah* adalah kawasan ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Transaksi Resi Jual Beli dan Kasus Sengketa Hutang Piutang",

            "Menunaikan Puasa Wajib dan Zakat profesi",

            "Hutang Piutang dicampur ibadah Sholat Subuh",

            "Haji reguler melempar jumrah dan Zakat Harta"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 29,
        "materi": "Fiqih",

"pertanyaan": "Laela salat Zuhur sendirian (munfarid) di kamarnya. Saking tak fokus, di rakaat penutup ia ragu 'Ini tadi sudah rakaat 3 atau 4 ya? Lupa!'. Dalam skenario hukum darurat memori ini, apa manuver perbaikan yang sah yang wajib ditempuh Laela seketika?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Membatalkan total salatnya lalu wudhu ulang dari nol biar afdol",

            "Rileks saja cuek lanjut salam, Tuhan maha pemakluman",

            "Lanjut salam saja, lalu nebus kesalahan lewat Sujud Tilawah",

            "Membuang keraguan dengan mengambil asumsi keyakinan paling kecil (menganggap masih rakaat 3 dan nambah 1 lagi), kelak ditutup tebusan Sujud Sahwi di akhir sebelum Salam."

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 30,
        "materi": "Tarikh",

"pertanyaan": "Osman I (Usman) sang singa pendiri Daulah Turkic Usmani menanamkan ideologi jihad murni non-pamrih militer. Pasukan elit pendobrak Konstantinopel militernya begitu disegani barat, para patriot infantri ini dilabeli status agung sebagai pasukan <strong>'Al-Ghazi'</strong>, yang bernyawa makna ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Gempuran Pasukan Berkuda",

            "Bara Persaudaraan Suci",

            "Bergerak Cepat Bak Kilat",

            "Pasukan Ksatria Penakluk Garda Depan"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 31,
        "materi": "Tarikh",

"pertanyaan": "Sultan Murad I wafat di medan tempur perang agung sebagai patriot syuhada, setelah ia melebarkan teritori kekuasaan Turki lima kali lipat ekspansi. Dampak sejarah berharga pasca kematian & kebijakan pemerintahannya di Eropa melahirkah hikmah-hikmah ini, <span class='font-bold italic'>kecuali</span> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Munculnya dinasti kerajaan sekuler baru merdeka di atas debu runtuhnya Usmani",

            "Eskalasi Syiar Islam mengakar massif kuat menembus Semenanjung balkan Eropa",

            "Daulah Usmani ditakuti, dihormati mutlak oleh hegemoni kerajaan eropa barat raya",

            "Hegemoni politik Usmani membentangkan panggung dakwah tak terbendung"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 32,
        "materi": "Tarikh",

"pertanyaan": "Puncak gilang-gemilang Imperium Mughal-India diletuskan oleh Sultan ketiga yakni *Jalaluddin Muhammad Akbar*. Ia merekonstruksi ulang arsitektur sipil, militerisme toleran, hingga seni kaligrafi Taj Mahal. Core *Spirit of Mughal* yang relevan untuk pelajar kita adaptasi masa kini adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Mental penjajah ekspansi menjajah bangsa dunia ketiga",

            "Etos kegigihan ambisius membengkokan koridor Ilmu Pengetahuan, toleransi budaya literasi (perpustakaan raksasa), dan pendidikan progresif.",

            "Semangat membuat armada monster laut penakluk samudra",

            "Foya-foya arsitektur membangun keraton marmer megah pemborosan royal"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 33,
        "materi": "Tarikh",

"pertanyaan": "Ribuan literatur sejarah emas era klasik tentang heroiknya ulama, dermawannya filantrop, cerdasnya dokter bedah muslim, tidak ditulis di kurikulum untuk menjadi dongeng usang tidur belaka. Sebagai delegasi pemuda pelajar, sikap psikologis esensial saat menyintuh pusaka sejarah mulia ini adalah agar bernilai ibadah yaitu ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Duduk termenung romantis merasa jumawa/bangga berlebihan bahwa umat Islam dulu sultan dunia",

            "Bersikap apatis biasa saja karena abad industri robotik KI sudah memisahkan kita",

            "Dijadikan baterai suntikan motivasi adrenalin untuk nge-push kegigihan belajar mewujudkan karya nyata cita-cita masa depan",

            "Terjun pada penyesalan nostalgia trauma masa lampau yang memilukan"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 34,
        "materi": "Tarikh",

"pertanyaan": "Peradaban Daulah Abbasiyah (Baghdad) adalah masa keemasan The Golden Age of Islam. Budaya *Literasi Terjemah* bahasa yunani ke arab adalah komoditas mewah. Institusi paling epik yang mendunia kala itu adalah **Bayt Al-Hikmah** (The House of Wisdom). Siapa khalifah Inisiator besarnya dan memfungsikan pilar apa dia saat itu?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Khalifah Al-Makmun, difungsikan formal sebagai lembaga sentra institusi pendidikan tinggi (Universitas & Laboratorium riset terjemah) gratis",

            "Khalifah Harun al-Rasyid, disembunyikan sebagai loker rak perpustakaan pribadi keluarga raja",

            "Khalifah Al-Mansur, sebagai percetakan brosur terjemahan kampanye faksi",

            "Khalifah Abu Abbas as-Saffah, ditujukan untuk barak militer komando tempur"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "Harun Al-Rasyid menggagas cikal bakalnya sbg pustaka kerajaan, tetapi di tangan sang Putra Al-Makmun institusi ini meledak fungsinya menjadi Universitas/Biro Terjemah Publik massal peradaban dunia.",

        "tipe": "pg"

    },
    {
        "id": 35,
        "materi": "Tarikh",

"pertanyaan": "Cocokkan silang Pasangan Avatar Cendekiawan Muslim Elite dengan domain pilar karyanya yang absolut!<br>1) Muhammad ibn Idris As-Syafi'i (C. Fikih)<br>2) Muhammad ibn Musa Al-Khwarizmi (B. Matematika Aljabar)<br>3) Ibnu Sina / Avicenna (E. Kedokteran Bapak Medis Barat)<br>4) Al-Kindi, Al Farabi (D. Filsafat Rasional)<br>5) Al-Mawardi, Al-Ghazali (A. Akhlak / Tasawuf Pemikiran Konstruktif)<br><br>Kode gembok pasangannya adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1-A, 2-B, 3-C, 4-D, 5-E",

            "1-B, 2-C, 3-D, 4-E, 5-A",

            "1-C, 2-B, 3-E, 4-D, 5-A",

            "1-D, 2-E, 3-A, 4-B, 5-C"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 36,
        "materi": "Tarikh",

"pertanyaan": "Umar Bin Abdul Aziz bin Marwan adalah *The Legend* dari Kekhalifahan Bani Umayyah Damaskus (Sering dijuluki Khulafaur Rasyidin ke-5 karena keadilannya). Di antara ribuan kebijakan masterpiecenya, ada dekret resmi negara yang membuat umat Islam tak kehilangan kompas agama hingga hari ini, serta sebuah manuver perdamaian radikal yakni ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Memfokuskan penarikan pajak haraj habis-habisan gila-gilaan pada warga koptik afrika utara",

            "Menghentikan peperangan total murni ekspansi berdarah",

            "Sanggup memediasi perdamaian panas berdarah seabad antara Dinasti Muawiyah vs faksi garis keras ideologi Khawarij dan Syiah di meja konsensus toleransi",

            "Meredam kerusuhan internal dengan membangun Diwan Al-Khatam departemen penyadapan"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "Umar II terkenal sukses mendamaikan luka perang saudara Umayyah vs Ali/Khawarij/Syiah dengan pendekatan humanistis-dialog dan menghilangkan tradisi caci-maki mimbar Jum'at warisan terdahulu.",

        "tipe": "pg"

    },
    {
        "id": 37,
        "materi": "Aqidah",

"pertanyaan": "Deteksi ciri karakteristik anatomi Makhluk Cahaya (Malaikat) Allah di matriks berikut:<br>1) Menyukai bersantai di majelis musik pop<br>2) Ada yang korupsi maksiat & ada yang taat radikal<br>3) Membakar kalori butuh asupan makan karbohidrat minimum<br>4) Mutlak berwujud roh As-Sobad Tidak Berjenis Kelamin rasio<br>5) Cyborg roh Tidak Pernah mengenal terminologi 'Letih lelah rebahan' dalam radar sujudnya kepada Allah SWT<br><br>Garis lurus identifikasi Malaikat sahih berada pada angka ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1, 2, 3",

            "1, 3, 4",

            "3, 4, 5",

            "4 dan 5"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 38,
        "materi": "Akhlak",

"pertanyaan": "Fina curhat asik dengan Lisa saling over-sharing prestasi kelas. Obrolan menyerempet gosip panas saat Lisa membocorkan desas-desus bahwa si Rina, kawan kelasnya diam-diam di grup WA dengki membenci kepintaran Fina. Lisa mengkompori Fina agar *Cancel* pertemanan dengan Rina. Sebagai siswi penganut etika internet islami, pelindung armor *Tabayyun* menyuruh Fina bereaksi ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Percaya 100% matang omongan provokator Lisa, lalu ngelock mute/blokir ig Rina seumur hidup krn toxic.",

            "Tidak reaktif percaya lidah Lisa; bermanuver verifikasi konfirmasi halus secara 4 mata dengan Rina mencari benang letak hoaks/kesalahpahamannya (Tabayyun silaturahmi).",

            "Melabrak Rina besok subuh bawa massa preman mintakan surat penjelasan kenapa sirik dan iritasi dengan prestasinya.",

            "Mengkonfrontir duet fisik menyeret mulut ke mulut bertengkar ala gangster sekolah."

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 39,
        "materi": "Fiqih",

"pertanyaan": "Islam Agama *No-Stress*. Konstitusi Rukhsah syariah bertujuan menghancurkan kesusahan teknis mukalaf hingga ia tersenyum menjumpai rongga pelonggaran ibadah tanpa ganjaran dosa setetespun. Bagi pasien patah tulang di ranjang UGD rumah sakit, bentuk *cheat* keringanan legal Rukhsah Salatnya berubah menjadi ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Boleh sah tidak melaksanakan ibadah shalat murni bebas karena status 'Sakit parah kompensatoris'.",

            "Tetap memanggis shalat esensial namun adaptif lentur; bebas eksekusi sambil duduk manis kursi wudhu, membungkuk berbaring, rebahan telentang selimut, dan sah dengan kedipan kode isyarat telunjuk asalkan akal masih stabil sadar.",

            "Modifikasi shalat Qasar memangkas diskon jumlah rakaat meski si sakit ada di atas bed kamar rumahnya deket masjid.",

            "Dipermudah bisa mengqadha ganti salat subuh yang hangus ditukar tebus pulsa 'fidyah makanan' seperti wanita hamil berikhtiar."

        ],
        "kunciJawaban": 1,
        "tipsBidang": "Rukhsah Salat orang sakit berlaku pada rukun fisiknya (berdiri diubah duduk/baring). Menghilangkan salat total sama sekali BUKAN Rukhsah, alias gugur wajiban bila hilang akal (koma/gila).",

        "tipe": "pg"

    },
    {
        "id": 40,
        "materi": "Tarikh",

"pertanyaan": "Benteng terhebat, kota basis eksistensi nafas terakhir darah umat Islam Spanyol (*Andalusia - Eropa*) berada di Granada. Peninggalan pariwisata yang membikin bule eropa nganga takjub kehabisan nafas melihat kecanggihan kaligrafi dan arsitektur batu bata bata merah raksasa Islam nan melek air mancur adalah Keraton ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Menara Emas Katedral Giralda",

            "Mezquita Kordoba Al-Muazzam",

            "Istana Al-Ma'mun",

            "Istana Merah Al-Hamra (Alhambra)"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    }
];




const quizData2026 = [
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Perhatikan potongan Q.S. Al-Baqarah ayat 143 berikut!<br>وَكَذَلِكَ جَعَلْنَكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا ... عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا<br>Kata yang tepat untuk melengkapi potongan ayat di atas beserta makna yang paling sesuai adalah ....",
        "opsi": [
            "شُهَدَاءَ yang berarti saksi",
            "خُلَفَاءَ yang berarti pemimpin",
            "أُمَنَاءَ yang berarti orang yang dapat dipercaya",
            "حُكَمَاءَ yang berarti pemutus perkara"
        ],
        "kunciJawaban": 0
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Membaca Al-Qur'an dengan tartil dan sesuai kaidah tajwid adalah keharusan. Perhatikan lafal-lafal berikut!<br>(1) مِمَّنْ يَنْقَلِبُ<br>(2) أُمَّةً وَسَطًا<br>(3) عَذَابٌ أَلِيمٌ<br>(4) كَبِيرَةً إِلَّا<br>Berdasarkan lafal di atas, yang merupakan contoh hukum bacaan *Idzhar Halqi* ditunjukkan oleh nomor ....",
        "opsi": [
            "(1) dan (2)",
            "(1) dan (3)",
            "(2) dan (3)",
            "(3) dan (4)"
        ],
        "kunciJawaban": 3
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Ilmu tajwid mengatur cara pelafalan huruf hijaiyah dengan benar, termasuk ketika nun sukun (نْ) atau tanwin (ـًـٍـٌ) bertemu dengan huruf-huruf tertentu. Huruf-huruf yang menyebabkan bacaan harus dibaca lebur/masuk tanpa disertai dengung (*Idgham Bilaghunnah*) adalah ....",
        "opsi": [
            "ي , ن , م , و",
            "ل , ر",
            "ب",
            "ح , خ , ع , غ , هـ , ء"
        ],
        "kunciJawaban": 1
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Perhatikan tabel analisis hukum tajwid di bawah ini!<br><br>1. هُمْ يُوقِنُونَ (Idzhar Syafawi)<br>2. تَرْمِيهِمْ بِحِجَارَةٍ (Ikhfa Syafawi)<br>3. إِلَيْهِمْ مَدَدًا (Idgham Mimi)<br>4. عَلَيْكُمْ شَهِيدًا (Idzhar Halqi)<br>Pasangan lafal mim sukun (مْ) dan hukum bacaan yang **tidak tepat** ditunjukkan oleh nomor ....",
        "opsi": [
            "1",
            "2",
            "3",
            "4"
        ],
        "kunciJawaban": 3
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Dalam Q.S. Al-Baqarah ayat 143, terdapat lafal \"عَلَيْكُمْ شَهِيدًا\". Cara membaca dan alasan hukum tajwid yang tepat pada lafal yang digarisbawahi tersebut adalah ....",
        "opsi": [
            "Ikhfa Syafawi, karena mim sukun bertemu syin sehingga harus dibaca samar di bibir",
            "Idgham Mimi, karena mim sukun lebur ke huruf depannya dan berdengung",
            "Idzhar Syafawi, karena mim sukun bertemu syin sehingga harus dibaca jelas dengan bibir tertutup rapat",
            "Ikhfa Haqiqi, karena dibaca mendengung dan samar menyembunyikan mim sukun"
        ],
        "kunciJawaban": 2
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Q.S. Al-Baqarah ayat 143 menegaskan status umat Islam sebagai *ummatan wasathan*. Dalam konteks kehidupan bermasyarakat masa kini, penerapan yang paling sesuai dari konsep tersebut adalah ....",
        "opsi": [
            "Memisahkan dan mengisolasi diri dari kehidupan sosial agar terhindar dari perbuatan maksiat",
            "Bersikap seimbang, adil, dan proporsional dalam urusan dunia maupun akhirat tanpa bersikap ekstrem",
            "Mencari harta dan kedudukan setinggi-tingginya untuk membuktikan bahwa umat Islam memiliki pengaruh",
            "Mencampuradukkan ajaran berbagai agama sebagai bentuk toleransi yang tinggi"
        ],
        "kunciJawaban": 1
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Iman tidak boleh sekadar diucapkan di bibir saja. Berdasarkan definisinya secara istilah, seseorang dinyatakan memiliki iman yang hakiki apabila memenuhi tiga unsur utama, yaitu ....",
        "opsi": [
            "Diyakini kebenarannya di dalam hati, diucapkan dengan lisan, dan dibuktikan dengan amal perbuatan",
            "Memiliki niat yang baik, beribadah siang dan malam, dan tidak pernah berbuat khilaf",
            "Mengetahui rukun iman, rukun Islam, dan menerapkannya sesekali saat memiliki waktu luang",
            "Beramal saleh, menghindari larangan, dan menunaikan ibadah haji bagi yang mampu"
        ],
        "kunciJawaban": 0
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Allah Swt. mengutus para utusan untuk memberikan petunjuk kepada umat manusia. Walau sering kali dianggap sama, terdapat perbedaan mendasar antara Nabi dan Rasul, yaitu ....",
        "opsi": [
            "Nabi mendapatkan kitab suci yang lengkap, sedangkan Rasul hanya menerima petunjuk berupa lembaran (suhuf)",
            "Nabi diutus untuk umat yang durhaka, sedangkan Rasul diutus untuk umat yang sudah beriman",
            "Nabi dan Rasul sama-sama menerima wahyu untuk diri sendiri, namun hanya Rasul yang memiliki kewajiban mutlak untuk menyampaikannya kepada umat",
            "Rasul selalu diberikan kedudukan politik tertinggi, sedangkan Nabi tidak diberikan kekuasaan duniawi"
        ],
        "kunciJawaban": 2
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Di antara jajaran para rasul Allah, terdapat lima orang rasul istimewa yang dianugerahi gelar *Ulul Azmi*. Gelar mulia tersebut disematkan karena mereka ....",
        "opsi": [
            "Memiliki ketangguhan, ketabahan, dan kesabaran yang luar biasa dalam menghadapi berbagai cobaan saat berdakwah",
            "Diberikan umur yang sangat panjang untuk terus menerus membimbing umatnya hingga akhir zaman",
            "Mendapatkan kitab suci yang memuat aturan-aturan hukum peribadatan paling berat",
            "Memiliki wilayah kekuasaan dan pengikut paling banyak di muka bumi pada masanya"
        ],
        "kunciJawaban": 0
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Sejarah kenabian mencatat berbagai rintangan ekstrem yang harus dihadapi oleh para rasul pilihan. Perhatikan daftar nama berikut:<br>(1) Nabi Ibrahim a.s.<br>(2) Nabi Sulaiman a.s.<br>(3) Nabi Nuh a.s.<br>(4) Nabi Ismail a.s.<br>(5) Nabi Isa a.s.<br>Yang termasuk ke dalam kelompok rasul *Ulul Azmi* ditunjukkan oleh nomor ....",
        "opsi": [
            "(1), (2), dan (3)",
            "(1), (3), dan (5)",
            "(2), (3), dan (4)",
            "(3), (4), dan (5)"
        ],
        "kunciJawaban": 1
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Para rasul seringkali dihadapkan pada penolakan keras dan tantangan berat dari kaumnya saat berdakwah. Untuk membuktikan kebenaran risalahnya, Allah Swt. membekali para nabi dan rasul dengan kejadian luar biasa yang menyalahi hukum alam (*sunnatullah*) yang tidak bisa ditiru atau dikalahkan oleh siapa pun. Secara bahasa, kejadian luar biasa ini memiliki arti \"sesuatu yang melemahkan\", yang disebut dengan ....",
        "opsi": [
            "*Karomah*",
            "*Ma'unah*",
            "*Mukjizat*",
            "*Irhas*"
        ],
        "kunciJawaban": 2
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Di era digital saat ini, arus informasi sangat terbuka bebas. Remaja sangat mudah mengakses media sosial yang sayangnya juga penuh dengan *hoaks*, perundungan siber (*cyberbullying*), hingga pengaruh gaya hidup yang menyimpang. Dalam konteks ini, peran paling tepat dari beriman kepada Nabi dan Rasul bagi seorang pelajar generasi digital adalah ....",
        "opsi": [
            "Menjadikan sifat wajib rasul (*siddiq, amanah, tabligh, fathanah*) sebagai filter informasi dan standar etika dalam bermedia sosial",
            "Menjadikan kisah para nabi sebagai konten hiburan semata demi mencari *likes* dan interaksi di media sosial",
            "Memblokir segala bentuk penggunaan gawai dan internet karena dianggap membawa pengaruh buruk yang menjauhkan dari ajaran agama",
            "Mengikuti semua tren digital agar tidak tertinggal zaman dengan pembenaran bahwa dakwah masa kini membolehkan pelanggaran etika"
        ],
        "kunciJawaban": 0
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Bangsa Indonesia adalah bangsa yang majemuk dengan beragam agama, suku, ras, dan adat istiadat. Dalam ajaran Islam, sikap saling menghargai, menghormati perbedaan, dan hidup berdampingan secara damai tanpa mengorbankan prinsip akidah masing-masing dinamakan ....",
        "opsi": [
            "*Ta'awun*",
            "*Tasamuh*",
            "*Tawadhu'*",
            "*Tafakkur*"
        ],
        "kunciJawaban": 1
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Salah satu pedoman toleransi beragama dalam Al-Qur'an terdapat pada Q.S. Yunus ayat 40-41. Isi pokok kandungan dari ayat tersebut menegaskan bahwa ....",
        "opsi": [
            "Umat Islam diwajibkan untuk memaksa orang lain memeluk agama Islam demi kebaikan mereka sendiri",
            "Orang beriman diperbolehkan untuk mencoba tata cara ibadah agama lain sebagai bentuk toleransi tingkat tinggi",
            "Manusia terbagi menjadi dua golongan, yakni yang beriman dan tidak beriman kepada Al-Qur'an, dan masing-masing bertanggung jawab atas amal perbuatannya sendiri",
            "Semua agama di hadapan Allah Swt. akan dinilai benar asalkan mengajarkan kebaikan budi pekerti dan perdamaian antarsesama"
        ],
        "kunciJawaban": 2
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Ahmad memiliki tetangga baru yang berbeda keyakinan. Suatu hari, tetangga tersebut sedang menyelenggarakan kegiatan ritual keagamaan di rumahnya yang dihadiri banyak tamu. Sikap toleransi yang paling tepat ditunjukkan oleh Ahmad adalah ....",
        "opsi": [
            "Turut serta masuk ke dalam rumah dan mengikuti kegiatan tersebut untuk menunjukkan solidaritas bertetangga",
            "Menjaga ketenangan dengan tidak menyalakan suara televisi atau musik keras-keras agar tetangganya dapat beribadah dengan khusyuk",
            "Melarang kegiatan tersebut dengan alasan lingkungan perumahan didominasi oleh mayoritas umat Islam",
            "Meminta tetangganya pindah mengadakan acara ke tempat lain agar jalanan tidak penuh oleh kendaraan tamu"
        ],
        "kunciJawaban": 1
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Sikap toleransi yang sejati tidak dapat terwujud begitu saja di masyarakat. Ia harus dibangun di atas landasan saling pengertian. Berikut ini yang **bukan** merupakan unsur-unsur terbentuknya sikap toleransi adalah ....",
        "opsi": [
            "Memberikan kebebasan dan kemerdekaan dalam berkeyakinan",
            "Mengakui hak setiap orang untuk menentukan sikap hidupnya",
            "Memahami dan mengedepankan sikap saling menghargai eksistensi orang lain",
            "Menyatukan ajaran dari berbagai agama yang berbeda menjadi satu keyakinan universal"
        ],
        "kunciJawaban": 3
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Manusia tidak bisa memenuhi kebutuhannya sendiri tanpa bantuan orang lain. Salah satu cara memenuhinya adalah melalui transaksi pertukaran. Menurut istilah fikih Islam, kegiatan menukar harta dengan harta lain (baik berupa uang maupun barang) untuk tujuan pengelolaan berdasarkan keridaan masing-masing dan sesuai ketentuan syariat disebut ....",
        "opsi": [
            "*Bai'* (Jual beli)",
            "*Riba*",
            "*Syirkah*",
            "*Wadi'ah*"
        ],
        "kunciJawaban": 0
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Perbedaan pendapat antarsiswa di sekolah kerap kali terjadi dan terkadang memicu gesekan emosional yang bisa berujung pada hilangnya rasa persaudaraan. Upaya paling proaktif yang bisa kalian lakukan sebagai pelajar muslim untuk mendorong kerukunan di lingkungan sekolah adalah ....",
        "opsi": [
            "Menghindari berteman dengan siswa dari latar belakang daerah atau budaya yang berbeda agar tidak muncul selisih paham",
            "Membentuk kelompok belajar atau pergaulan eksklusif yang hanya mau menerima siswa-siswa yang seagama saja",
            "Mengedepankan budaya dialog dan musyawarah yang santun setiap kali muncul kesalahpahaman antarteman",
            "Membiarkan saja setiap perselisihan karena menganggap hal tersebut adalah wajar bagi anak usia remaja"
        ],
        "kunciJawaban": 2
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Perhatikan ilustrasi transaksi berikut!<br>Fadil menemukan sebuah jam tangan mewah di taman kota. Karena sedang sangat membutuhkan uang, ia menjual jam tangan temuan tersebut kepada Diki dengan harga yang jauh lebih murah. Diki yang mengetahui asal usul jam tangan tersebut tetap membelinya karena tergiur ingin untung.<br>Berdasarkan syariat Islam, hukum jual beli yang dilakukan antara Fadil dan Diki adalah ....",
        "opsi": [
            "Sah, karena sudah memenuhi syarat rida (suka sama suka) antara pihak penjual dan pembeli tanpa paksaan",
            "Tidak sah, karena salah satu syarat sah barang yang diperjualbelikan adalah harus berstatus milik penuh penjual secara sah, bukan barang temuan/curian",
            "Sah, asalkan uang hasil penjualan tersebut sebagian disumbangkan ke panti asuhan oleh Fadil",
            "Tidak sah, hanya karena harga yang disepakati terlalu jauh berada di bawah harga pasar"
        ],
        "kunciJawaban": 1
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Jual beli pada dasarnya bukan sekadar sarana mencari keuntungan ekonomi (*profit*), tetapi juga merupakan jalan untuk mewujudkan prinsip tolong-menolong sesama manusia. Allah Swt. memerintahkan agar umat-Nya tolong-menolong dalam kebaikan, sebagaimana firman-Nya dalam Q.S. Al-Ma'idah ayat 2:<br>وَتَعَاوَنُوْا عَلَى الْبِرِّ وَالتَّقْوٰىۖ وَلَا تَعَاوَنُوْا عَلَى ...<br>Lanjutan dari potongan ayat larangan dalam tolong-menolong tersebut adalah ....",
        "opsi": [
            "الْعُدْوَانِ وَالْاِثْمِ",
            "الشَّرِّ وَالْمُنْكَرِ",
            "الْإِثْمِ وَالْعُدْوَانِ",
            "الْفَحْشَاءِ وَالْمُنْكَرِ"
        ],
        "kunciJawaban": 2
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Islam sangat melindungi harta umatnya dari praktik eksploitasi dan ketidakadilan. Oleh karena itu, hukum asal jual beli adalah mubah, namun praktik riba diharamkan secara mutlak. Penegasan tentang kehalalan jual beli dan keharaman riba ini secara eksplisit tercantum dalam Al-Qur'an, yaitu pada ....",
        "opsi": [
            "Q.S. Al-Ma'idah ayat 2",
            "Q.S. Al-Baqarah ayat 275",
            "Q.S. Ali 'Imran ayat 130",
            "Q.S. An-Nisa ayat 29"
        ],
        "kunciJawaban": 1
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Dalam praktik muamalah sehari-hari, sering kali kita menemukan seseorang memberikan pinjaman kepada orang lain yang sedang kesulitan. Jika pinjaman tersebut diberikan murni untuk tujuan menolong (sosial) tanpa mensyaratkan adanya tambahan pengembalian, maka akad ini sesuai dengan syariat dan disebut dengan ....",
        "opsi": [
            "*Wadi'ah*",
            "*Syirkah*",
            "*Qardh*",
            "*Mudharabah*"
        ],
        "kunciJawaban": 2
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Ibu Fatimah menukarkan perhiasan emas 24 karat seberat 10 gram miliknya dengan perhiasan emas 22 karat seberat 12 gram milik Ibu Aisyah. Meskipun secara nominal harganya mungkin sepadan, namun terjadi kelebihan takaran dalam pertukaran barang sejenis (emas dengan emas). Dalam fikih Islam, kelebihan takaran pada penukaran barang ribawi sejenis ini termasuk kategori ....",
        "opsi": [
            "Riba *Qardh*",
            "Riba *Nasi'ah*",
            "Riba *Yad*",
            "Riba *Fadhl*"
        ],
        "kunciJawaban": 3
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Pak Haris sedang membutuhkan dana cepat untuk biaya rumah sakit. Ia meminjam uang sebesar Rp5.000.000,00 kepada seorang rentenir. Di awal transaksi, rentenir tersebut mensyaratkan agar Pak Haris mengembalikan uang sebesar Rp6.000.000,00 pada bulan berikutnya. Tambahan yang disyaratkan sejak awal utang-piutang ini termasuk jenis ....",
        "opsi": [
            "Riba *Nasi'ah*",
            "Riba *Qardh*",
            "Riba *Yad*",
            "Riba *Fadhl*"
        ],
        "kunciJawaban": 1
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Sejarah peradaban Islam mencatat pergantian berbagai kekuasaan. Daulah Bani Abbasiyah resmi berdiri setelah berhasil menggulingkan kekuasaan Bani Umayyah. Sosok yang menjadi pendiri sekaligus khalifah pertama dari Daulah Abbasiyah adalah ....",
        "opsi": [
            "Abu Ja'far Al-Mansur",
            "Harun Ar-Rasyid",
            "Abu al-Abbas as-Saffah",
            "Al-Walid bin Abdul Malik"
        ],
        "kunciJawaban": 2
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Pada masa kejayaan Daulah Bani Abbasiyah, lahir banyak cendekiawan muslim yang karya-karyanya diakui dunia dan menjadi rujukan peradaban Barat. Salah satu tokoh ilmuwan muslim yang diberi gelar \"Bapak Kedokteran Modern\" dan dikenal di dunia Barat dengan sebutan *Avicenna* adalah ....",
        "opsi": [
            "Ibnu Rusyd",
            "Al-Khawarizmi",
            "Ibnu Sina",
            "Al-Farabi"
        ],
        "kunciJawaban": 2
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Perkembangan ilmu komputer dan pemrograman (*coding*) yang kita nikmati di era digital saat ini tidak terlepas dari penemuan konsep algoritma dan angka nol. Konsep dasar yang sangat revolusioner ini pertama kali diletakkan oleh cendekiawan muslim masa Abbasiyah yang ahli di bidang matematika, yaitu ....",
        "opsi": [
            "Al-Khawarizmi",
            "Al-Ghazali",
            "Jabir bin Hayyan",
            "Ibnu Khaldun"
        ],
        "kunciJawaban": 0
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Karya-karya ilmuwan muslim masa Abbasiyah banyak yang diterjemahkan ke bahasa Latin dan menjadi buku pegangan wajib di universitas-universitas Eropa selama berabad-abad. Salah satu mahakarya monumental di bidang medis yang berfungsi sebagai ensiklopedia kedokteran adalah ....",
        "opsi": [
            "*Ihya 'Ulumuddin*",
            "*Al-Qanun fi at-Tibb*",
            "*Al-Jabr wa al-Muqabalah*",
            "*Bidayatul Mujtahid*"
        ],
        "kunciJawaban": 1
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Selain ilmu pengetahuan empiris, ilmu agama dan tasawuf juga berkembang pesat. Terdapat seorang ulama besar pada era Abbasiyah yang dijuluki *Hujjatul Islam* (Pembela Islam) karena kedalaman ilmunya dalam memadukan syariat, hakikat, dan tasawuf. Mahakarya beliau yang sangat terkenal adalah *Ihya 'Ulumuddin*. Tokoh yang dimaksud adalah ....",
        "opsi": [
            "Imam Asy-Syafi'i",
            "Imam Al-Bukhari",
            "Ibnu Katsir",
            "Imam Al-Ghazali"
        ],
        "kunciJawaban": 3
    },
    {
        "tipe": "pg",
        "materi": "ASAS Genap Kelas 8",
        "pertanyaan": "Daulah Bani Abbasiyah mengalami puncak keemasan (*The Golden Age of Islam*) yang ditandai dengan tingginya tingkat kesejahteraan rakyat, majunya kebudayaan, serta didirikannya perpustakaan dan pusat penerjemahan raksasa *Baitul Hikmah*. Khalifah yang memimpin pemerintahan pada masa gemilang tersebut adalah ....",
        "opsi": [
            "Harun Ar-Rasyid",
            "Al-Amin",
            "Al-Mu'tashim Billah",
            "Al-Mutawakkil"
        ],
        "kunciJawaban": 0
    },
    {
        "tipe": "menjodohkan",
        "materi": "ASAS Genap Kelas 8 - Menjodohkan",
        "pertanyaan": "Kedudukan umat Islam sebagai umat yang adil, seimbang, proporsional, dan tidak bersikap ekstrem sebagaimana kandungan Q.S. Al-Baqarah ayat 143.",
        "opsi": [
            "*Mubasysyirin wa Mundzirin* (Pembawa kabar gembira dan pemberi peringatan)",
            "Abu Ja'far Al-Mansur",
            "*Ikhfa Syafawi*",
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Riba *Nasi'ah*",
            "Harun Ar-Rasyid",
            "\"Bagiku pekerjaanku (amalku) dan bagimu pekerjaanmu (amalmu)\"",
            "Kebajikan dan takwa (*Al-Birr wat-Taqwa*)",
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan",
            "*Ummatan Wasathan* (Umat pertengahan/moderat)",
            "Jabir bin Hayyan",
            "*Idgham Mimi*",
            "Riba *Qardh*"
        ],
        "kunciJawaban": 9
    },
    {
        "tipe": "menjodohkan",
        "materi": "ASAS Genap Kelas 8 - Menjodohkan",
        "pertanyaan": "Hukum tajwid yang terjadi apabila huruf *mim sukun* (مْ) bertemu dengan huruf *ba'* (ب), cara membacanya harus disamarkan di bibir dan berdengung.",
        "opsi": [
            "*Mubasysyirin wa Mundzirin* (Pembawa kabar gembira dan pemberi peringatan)",
            "Abu Ja'far Al-Mansur",
            "*Ikhfa Syafawi*",
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Riba *Nasi'ah*",
            "Harun Ar-Rasyid",
            "\"Bagiku pekerjaanku (amalku) dan bagimu pekerjaanmu (amalmu)\"",
            "Kebajikan dan takwa (*Al-Birr wat-Taqwa*)",
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan",
            "*Ummatan Wasathan* (Umat pertengahan/moderat)",
            "Jabir bin Hayyan",
            "*Idgham Mimi*",
            "Riba *Qardh*"
        ],
        "kunciJawaban": 2
    },
    {
        "tipe": "menjodohkan",
        "materi": "ASAS Genap Kelas 8 - Menjodohkan",
        "pertanyaan": "Berdasarkan dalil naqli Al-Qur'an, tugas pokok diutusnya para Nabi dan Rasul kepada umat manusia di dunia adalah sebagai ....",
        "opsi": [
            "*Mubasysyirin wa Mundzirin* (Pembawa kabar gembira dan pemberi peringatan)",
            "Abu Ja'far Al-Mansur",
            "*Ikhfa Syafawi*",
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Riba *Nasi'ah*",
            "Harun Ar-Rasyid",
            "\"Bagiku pekerjaanku (amalku) dan bagimu pekerjaanmu (amalmu)\"",
            "Kebajikan dan takwa (*Al-Birr wat-Taqwa*)",
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan",
            "*Ummatan Wasathan* (Umat pertengahan/moderat)",
            "Jabir bin Hayyan",
            "*Idgham Mimi*",
            "Riba *Qardh*"
        ],
        "kunciJawaban": 0
    },
    {
        "tipe": "menjodohkan",
        "materi": "ASAS Genap Kelas 8 - Menjodohkan",
        "pertanyaan": "Mukjizat fisik yang dianugerahkan Allah Swt. kepada Rasul Ulul Azmi, yakni Nabi Musa a.s. ketika menghadapi kesombongan Raja Fir'aun.",
        "opsi": [
            "*Mubasysyirin wa Mundzirin* (Pembawa kabar gembira dan pemberi peringatan)",
            "Abu Ja'far Al-Mansur",
            "*Ikhfa Syafawi*",
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Riba *Nasi'ah*",
            "Harun Ar-Rasyid",
            "\"Bagiku pekerjaanku (amalku) dan bagimu pekerjaanmu (amalmu)\"",
            "Kebajikan dan takwa (*Al-Birr wat-Taqwa*)",
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan",
            "*Ummatan Wasathan* (Umat pertengahan/moderat)",
            "Jabir bin Hayyan",
            "*Idgham Mimi*",
            "Riba *Qardh*"
        ],
        "kunciJawaban": 8
    },
    {
        "tipe": "menjodohkan",
        "materi": "ASAS Genap Kelas 8 - Menjodohkan",
        "pertanyaan": "Kandungan Q.S. Yunus ayat 41 yang menjadi salah satu prinsip dasar toleransi dalam Islam saat menyikapi perbedaan keyakinan.",
        "opsi": [
            "*Mubasysyirin wa Mundzirin* (Pembawa kabar gembira dan pemberi peringatan)",
            "Abu Ja'far Al-Mansur",
            "*Ikhfa Syafawi*",
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Riba *Nasi'ah*",
            "Harun Ar-Rasyid",
            "\"Bagiku pekerjaanku (amalku) dan bagimu pekerjaanmu (amalmu)\"",
            "Kebajikan dan takwa (*Al-Birr wat-Taqwa*)",
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan",
            "*Ummatan Wasathan* (Umat pertengahan/moderat)",
            "Jabir bin Hayyan",
            "*Idgham Mimi*",
            "Riba *Qardh*"
        ],
        "kunciJawaban": 6
    },
    {
        "tipe": "menjodohkan",
        "materi": "ASAS Genap Kelas 8 - Menjodohkan",
        "pertanyaan": "Salah satu contoh perilaku intoleran dalam kehidupan bermasyarakat yang dapat merusak kerukunan dan sangat dilarang dalam agama.",
        "opsi": [
            "*Mubasysyirin wa Mundzirin* (Pembawa kabar gembira dan pemberi peringatan)",
            "Abu Ja'far Al-Mansur",
            "*Ikhfa Syafawi*",
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Riba *Nasi'ah*",
            "Harun Ar-Rasyid",
            "\"Bagiku pekerjaanku (amalku) dan bagimu pekerjaanmu (amalmu)\"",
            "Kebajikan dan takwa (*Al-Birr wat-Taqwa*)",
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan",
            "*Ummatan Wasathan* (Umat pertengahan/moderat)",
            "Jabir bin Hayyan",
            "*Idgham Mimi*",
            "Riba *Qardh*"
        ],
        "kunciJawaban": 3
    },
    {
        "tipe": "menjodohkan",
        "materi": "ASAS Genap Kelas 8 - Menjodohkan",
        "pertanyaan": "Berdasarkan pesan dalam Q.S. Al-Ma'idah ayat 2, Allah Swt. sangat memerintahkan umat-Nya untuk tolong-menolong dalam urusan ....",
        "opsi": [
            "*Mubasysyirin wa Mundzirin* (Pembawa kabar gembira dan pemberi peringatan)",
            "Abu Ja'far Al-Mansur",
            "*Ikhfa Syafawi*",
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Riba *Nasi'ah*",
            "Harun Ar-Rasyid",
            "\"Bagiku pekerjaanku (amalku) dan bagimu pekerjaanmu (amalmu)\"",
            "Kebajikan dan takwa (*Al-Birr wat-Taqwa*)",
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan",
            "*Ummatan Wasathan* (Umat pertengahan/moderat)",
            "Jabir bin Hayyan",
            "*Idgham Mimi*",
            "Riba *Qardh*"
        ],
        "kunciJawaban": 7
    },
    {
        "tipe": "menjodohkan",
        "materi": "ASAS Genap Kelas 8 - Menjodohkan",
        "pertanyaan": "Jenis riba yang terjadi karena adanya tambahan jumlah pembayaran utang yang dibebankan akibat penundaan atau penangguhan waktu pelunasan.",
        "opsi": [
            "*Mubasysyirin wa Mundzirin* (Pembawa kabar gembira dan pemberi peringatan)",
            "Abu Ja'far Al-Mansur",
            "*Ikhfa Syafawi*",
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Riba *Nasi'ah*",
            "Harun Ar-Rasyid",
            "\"Bagiku pekerjaanku (amalku) dan bagimu pekerjaanmu (amalmu)\"",
            "Kebajikan dan takwa (*Al-Birr wat-Taqwa*)",
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan",
            "*Ummatan Wasathan* (Umat pertengahan/moderat)",
            "Jabir bin Hayyan",
            "*Idgham Mimi*",
            "Riba *Qardh*"
        ],
        "kunciJawaban": 4
    },
    {
        "tipe": "menjodohkan",
        "materi": "ASAS Genap Kelas 8 - Menjodohkan",
        "pertanyaan": "Khalifah Daulah Abbasiyah yang membangun kota Baghdad dengan tata ruang bundar yang indah dan menjadikannya sebagai ibu kota peradaban dunia.",
        "opsi": [
            "*Mubasysyirin wa Mundzirin* (Pembawa kabar gembira dan pemberi peringatan)",
            "Abu Ja'far Al-Mansur",
            "*Ikhfa Syafawi*",
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Riba *Nasi'ah*",
            "Harun Ar-Rasyid",
            "\"Bagiku pekerjaanku (amalku) dan bagimu pekerjaanmu (amalmu)\"",
            "Kebajikan dan takwa (*Al-Birr wat-Taqwa*)",
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan",
            "*Ummatan Wasathan* (Umat pertengahan/moderat)",
            "Jabir bin Hayyan",
            "*Idgham Mimi*",
            "Riba *Qardh*"
        ],
        "kunciJawaban": 1
    },
    {
        "tipe": "menjodohkan",
        "materi": "ASAS Genap Kelas 8 - Menjodohkan",
        "pertanyaan": "Ilmuwan muslim terkemuka pada masa Bani Abbasiyah yang diakui sebagai \"Bapak Ilmu Kimia\" atas karya dan penemuannya dalam metode penyulingan (distilasi).",
        "opsi": [
            "*Mubasysyirin wa Mundzirin* (Pembawa kabar gembira dan pemberi peringatan)",
            "Abu Ja'far Al-Mansur",
            "*Ikhfa Syafawi*",
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Riba *Nasi'ah*",
            "Harun Ar-Rasyid",
            "\"Bagiku pekerjaanku (amalku) dan bagimu pekerjaanmu (amalmu)\"",
            "Kebajikan dan takwa (*Al-Birr wat-Taqwa*)",
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan",
            "*Ummatan Wasathan* (Umat pertengahan/moderat)",
            "Jabir bin Hayyan",
            "*Idgham Mimi*",
            "Riba *Qardh*"
        ],
        "kunciJawaban": 10
    },
    {
        "tipe": "uraian",
        "materi": "ASAS Genap Kelas 8 - Uraian",
        "pertanyaan": "Ilmu tajwid sangat penting dipelajari agar kita terhindar dari kesalahan saat membaca Al-Qur'an. Salah satu bab penting di dalamnya adalah hukum bacaan apabila *nun sukun* (نْ) atau *tanwin* (ـًـٍـٌ) bertemu dengan huruf-huruf hijaiyah. Sebutkan 4 (empat) macam hukum bacaan *nun sukun* atau *tanwin* beserta cara membacanya!",
        "tipsBidang": "Macam-macam hukum bacaan nun sukun/tanwin (Bobot nilai: 4)<br>* *Idzhar Halqi*: Dibaca jelas dan terang.<br>* *Idgham (Bighunnah & Bilaghunnah)*: Dibaca masuk/melebur ke huruf setelahnya (dengan atau tanpa dengung).<br>* *Iqlab*: Dibaca dengan mengganti bunyi nun/tanwin menjadi mim.<br>* *Ikhfa Haqiqi*: Dibaca samar-samar antara idzhar dan idgham serta mendengung.<br>*(Catatan: Siswa menyebutkan 4 nama hukumnya saja sudah bisa dibenarkan, namun akan mendapat nilai sempurna jika disertai cara membacanya).*"
    },
    {
        "tipe": "uraian",
        "materi": "ASAS Genap Kelas 8 - Uraian",
        "pertanyaan": "Sebagai utusan Allah Swt., para nabi dan rasul dianugerahi sifat-sifat khusus yang membedakan mereka dari manusia biasa, guna menjamin keberhasilan dakwahnya. Sebutkan 4 (empat) sifat wajib bagi Rasul beserta arti dari masing-masing sifat tersebut!",
        "tipsBidang": "Sifat Wajib Rasul (Bobot nilai: 4)<br>1. *Shiddiq* artinya benar atau jujur.<br>2. *Amanah* artinya dapat dipercaya.<br>3. *Tabligh* artinya menyampaikan (wahyu).<br>4. *Fathanah* artinya cerdas atau pintar."
    },
    {
        "tipe": "uraian",
        "materi": "ASAS Genap Kelas 8 - Uraian",
        "pertanyaan": "Di lingkungan sekolah kita, setiap siswa berasal dari latar belakang karakter, daerah, bahkan keyakinan yang berbeda-beda. Ketika melaksanakan kegiatan yang melibatkan kerja sama tim, seperti rutinitas kegiatan Jumat Bersih menyiapkan peralatan kebersihan bersama, perbedaan tersebut akan saling membaur. Berikan 3 (tiga) contoh perilaku nyata yang dapat kamu lakukan untuk menjaga kerukunan antarsiswa dalam kegiatan semacam itu maupun dalam pergaulan sehari-hari!",
        "tipsBidang": "Contoh perilaku mendorong kerukunan (Bobot nilai: 3)<br>*(Jawaban siswa bisa bervariasi, kebijakan korektor diutamakan. Contoh jawaban logis:)*<br><br>* Membagi tugas kebersihan secara adil tanpa membeda-bedakan teman.<br>* Menggunakan tutur kata yang sopan dan tidak menyinggung suku/agama teman saat berdialog.<br>* Saling membantu jika ada teman yang kesulitan membawa peralatan berat.<br>* Memberikan kelonggaran waktu bagi teman yang berbeda keyakinan jika bertepatan dengan waktu ibadahnya."
    },
    {
        "tipe": "uraian",
        "materi": "ASAS Genap Kelas 8 - Uraian",
        "pertanyaan": "Fikih muamalah mengatur ketat masalah jual beli agar tidak ada pihak yang terzalimi atau dirugikan. Agar sebuah transaksi jual beli dianggap sah oleh syariat Islam, barang yang diperjualbelikan harus memenuhi kriteria tertentu. Jelaskan 4 (empat) syarat sah barang yang diperjualbelikan tersebut!",
        "tipsBidang": "Syarat barang yang diperjualbelikan (Bobot nilai: 4)<br>1. Barangnya suci (bukan benda najis seperti bangkai atau khamar).<br>2. Barangnya memiliki manfaat yang mubah/halal.<br>3. Barangnya adalah milik penuh si penjual secara sah (atau perwakilannya).<br>4. Barangnya dapat diserahterimakan (bukan burung di udara atau ikan di lautan bebas).<br>5. Diketahui secara jelas kadar, wujud, sifat, dan ukurannya oleh penjual maupun pembeli.<br>*(Catatan: Cukup menyebutkan 4 syarat poin di atas).*"
    },
    {
        "tipe": "uraian",
        "materi": "ASAS Genap Kelas 8 - Uraian",
        "pertanyaan": "Masa Daulah Bani Abbasiyah sering disebut sebagai *The Golden Age of Islam* karena pesatnya perkembangan ilmu pengetahuan. Lahir banyak cendekiawan muslim yang karya-karyanya menjadi rujukan universitas-universitas di Eropa hingga berabad-abad kemudian. Sebutkan 3 (tiga) nama tokoh ilmuwan muslim pada masa Bani Abbasiyah beserta bidang keahliannya!<br><br>---",
        "tipsBidang": "Ilmuwan muslim masa Bani Abbasiyah (Bobot nilai: 3)<br>*(Siswa cukup menyebutkan 3 di antara daftar berikut beserta bidangnya:)*<br><br>* Ibnu Sina: Bidang Kedokteran.<br>* Al-Khawarizmi: Bidang Matematika / Algoritma.<br>* Jabir bin Hayyan: Bidang Kimia.<br>* Al-Kindi atau Al-Farabi: Bidang Filsafat.<br>* Imam Al-Ghazali: Bidang Tasawuf / Ilmu Agama."
    }
];
