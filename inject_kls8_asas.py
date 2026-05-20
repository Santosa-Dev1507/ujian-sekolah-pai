import json
import re

payload = [
    {
        "id": 1,
        "materi": "Al-Qur'an",
        "pertanyaan": "Perhatikan potongan Q.S. Al-Baqarah ayat 143 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>وَكَذَلِكَ جَعَلْنَكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا ... عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا</span><br>Kata yang tepat untuk melengkapi potongan ayat di atas beserta makna yang paling sesuai adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "شُهَدَاءَ yang berarti saksi",
            "خُلَفَاءَ yang berarti pemimpin",
            "أُمَنَاءَ yang berarti orang yang dapat dipercaya",
            "حُكَمَاءَ yang berarti pemutus perkara"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 2,
        "materi": "Ilmu Tajwid",
        "pertanyaan": "Membaca Al-Qur'an dengan tartil dan sesuai kaidah tajwid adalah keharusan. Perhatikan lafal-lafal berikut!<br>(1) <span class='font-arabic text-xl'>مِمَّنْ يَنْقَلِبُ</span><br>(2) <span class='font-arabic text-xl'>أُمَّةً وَسَطًا</span><br>(3) <span class='font-arabic text-xl'>عَذَابٌ أَلِيمٌ</span><br>(4) <span class='font-arabic text-xl'>كَبِيرَةً إِلَّا</span><br>Berdasarkan lafal di atas, yang merupakan contoh hukum bacaan <i>Idzhar Halqi</i> ditunjukkan oleh nomor ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "(1) dan (2)",
            "(1) dan (3)",
            "(2) dan (3)",
            "(3) dan (4)"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 3,
        "materi": "Ilmu Tajwid",
        "pertanyaan": "Ilmu tajwid mengatur cara pelafalan huruf hijaiyah dengan benar, termasuk ketika nun sukun (نْ) atau tanwin (ـًـٍـٌ) bertemu dengan huruf-huruf tertentu. Huruf-huruf yang menyebabkan bacaan harus dibaca lebur/masuk tanpa disertai dengung (<i>Idgham Bilaghunnah</i>) adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "ي , ن , م , و",
            "ل , ر",
            "ب",
            "ح , خ , ع , غ , هـ , ء"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 4,
        "materi": "Ilmu Tajwid",
        "pertanyaan": "Perhatikan tabel analisis hukum tajwid di bawah ini!<br><br>1. <span class='font-arabic text-xl'>هُمْ يُوقِنُونَ</span> (Idzhar Syafawi)<br>2. <span class='font-arabic text-xl'>تَرْمِيهِمْ بِحِجَارَةٍ</span> (Ikhfa Syafawi)<br>3. <span class='font-arabic text-xl'>إِلَيْهِمْ مَدَدًا</span> (Idgham Mimi)<br>4. <span class='font-arabic text-xl'>عَلَيْكُمْ شَهِيدًا</span> (Idzhar Halqi)<br><br>Pasangan lafal mim sukun (مْ) dan hukum bacaan yang <b>tidak tepat</b> ditunjukkan oleh nomor ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "1",
            "2",
            "3",
            "4"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 5,
        "materi": "Ilmu Tajwid",
        "pertanyaan": "Dalam Q.S. Al-Baqarah ayat 143, terdapat lafal <span class='font-arabic text-xl'>\"عَلَيْكُمْ شَهِيدًا\"</span>. Cara membaca dan alasan hukum tajwid yang tepat pada lafal yang digarisbawahi tersebut adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Ikhfa Syafawi, karena mim sukun bertemu syin sehingga harus dibaca samar di bibir",
            "Idgham Mimi, karena mim sukun lebur ke huruf depannya dan berdengung",
            "Idzhar Syafawi, karena mim sukun bertemu syin sehingga harus dibaca jelas dengan bibir tertutup rapat",
            "Ikhfa Haqiqi, karena dibaca mendengung dan samar menyembunyikan mim sukun"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 6,
        "materi": "Al-Qur'an",
        "pertanyaan": "Q.S. Al-Baqarah ayat 143 menegaskan status umat Islam sebagai <i>ummatan wasathan</i>. Dalam konteks kehidupan bermasyarakat masa kini, penerapan yang paling sesuai dari konsep tersebut adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Memisahkan dan mengisolasi diri dari kehidupan sosial agar terhindar dari perbuatan maksiat",
            "Bersikap seimbang, adil, dan proporsional dalam urusan dunia maupun akhirat tanpa bersikap ekstrem",
            "Mencari harta dan kedudukan setinggi-tingginya untuk membuktikan bahwa umat Islam memiliki pengaruh",
            "Mencampuradukkan ajaran berbagai agama sebagai bentuk toleransi yang tinggi"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 7,
        "materi": "Aqidah",
        "pertanyaan": "Iman tidak boleh sekadar diucapkan di bibir saja. Berdasarkan definisinya secara istilah, seseorang dinyatakan memiliki iman yang hakiki apabila memenuhi tiga unsur utama, yaitu ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Diyakini kebenarannya di dalam hati, diucapkan dengan lisan, dan dibucapkan/dibuktikan dengan amal perbuatan",
            "Memiliki niat yang baik, beribadah siang dan malam, dan tidak pernah berbuat khilaf",
            "Mengetahui rukun iman, rukun Islam, dan menerapkannya sesekali saat memiliki waktu luang",
            "Beramal saleh, menghindari larangan, dan menunaikan ibadah haji bagi yang mampu"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 8,
        "materi": "Aqidah",
        "pertanyaan": "Allah Swt. mengutus para utusan untuk memberikan petunjuk kepada umat manusia. Walau sering kali dianggap sama, terdapat perbedaan mendasar antara Nabi dan Rasul, yaitu ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Nabi mendapatkan kitab suci yang lengkap, sedangkan Rasul hanya menerima petunjuk berupa lembaran (suhuf)",
            "Nabi diutus untuk umat yang durhaka, sedangkan Rasul diutus untuk umat yang sudah beriman",
            "Nabi dan Rasul sama-sama menerima wahyu untuk diri sendiri, namun hanya Rasul yang memiliki kewajiban mutlak untuk menyampaikannya kepada umat",
            "Rasul selalu diberikan kedudukan politik tertinggi, sedangkan Nabi tidak diberikan kekuasaan duniawi"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 9,
        "materi": "Aqidah",
        "pertanyaan": "Di antara jajaran para rasul Allah, terdapat lima orang rasul istimewa yang dianugerahi gelar <i>Ulul Azmi</i>. Gelar mulia tersebut disematkan karena mereka ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Memiliki ketangguhan, ketabahan, dan kesabaran yang luar biasa dalam menghadapi berbagai cobaan saat berdakwah",
            "Diberikan umur yang sangat panjang untuk terus menerus membimbing umatnya hingga akhir zaman",
            "Mendapatkan kitab suci yang memuat aturan-aturan hukum peribadatan paling berat",
            "Memiliki wilayah kekuasaan dan pengikut paling banyak di muka bumi pada masanya"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 10,
        "materi": "Aqidah",
        "pertanyaan": "Sejarah kenabian mencatat berbagai rintangan ekstrem yang harus dihadapi oleh para rasul pilihan. Perhatikan daftar nama berikut:<br>(1) Nabi Ibrahim a.s.<br>(2) Nabi Sulaiman a.s.<br>(3) Nabi Nuh a.s.<br>(4) Nabi Ismail a.s.<br>(5) Nabi Isa a.s.<br>Yang termasuk ke dalam kelompok rasul <i>Ulul Azmi</i> ditunjukkan oleh nomor ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "(1), (2), dan (3)",
            "(1), (3), dan (5)",
            "(2), (3), dan (4)",
            "(3), (4), dan (5)"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 11,
        "materi": "Aqidah",
        "pertanyaan": "Para nabi dan rasul seringkali dihadapkan pada penolakan keras dan tantangan berat dari kaumnya saat berdakwah. Untuk membuktikan kebenaran risalahnya, Allah Swt. membekali para nabi dan rasul dengan kejadian luar biasa yang menyalahi hukum alam (<i>sunnatullah</i>) yang tidak bisa ditiru atau dikalahkan oleh siapa pun. Secara bahasa, kejadian luar biasa ini memiliki arti 'sesuatu yang melemahkan', yang disebut dengan ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Karomah",
            "Ma'unah",
            "Mukjizat",
            "Irhas"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 12,
        "materi": "Aqidah",
        "pertanyaan": "Di era digital saat ini, arus informasi sangat terbuka bebas. Remaja sangat mudah mengakses media sosial yang sayangnya juga penuh dengan <i>hoaks</i>, perundungan siber (<i>cyberbullying</i>), hingga pengaruh gaya hidup yang menyimpang. Dalam konteks ini, peran paling tepat dari beriman kepada Nabi dan Rasul bagi seorang pelajar generasi digital adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Menjadikan sifat wajib rasul (<i>siddiq, amanah, tabligh, fathanah</i>) sebagai filter informasi dan standar etika dalam bermedia sosial",
            "Menjadikan kisah para nabi sebagai konten hiburan semata demi mencari <i>likes</i> dan interaksi di media sosial",
            "Memblokir segala bentuk penggunaan gawai dan internet karena dianggap membawa pengaruh buruk yang menjauhkan dari ajaran agama",
            "Mengikuti semua tren digital agar tidak tertinggal zaman dengan pembenaran bahwa dakwah masa kini membolehkan pelanggaran etika"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 13,
        "materi": "Akhlak",
        "pertanyaan": "Bangsa Indonesia adalah bangsa yang majemuk dengan beragam agama, suku, ras, dan adat istiadat. Dalam ajaran Islam, sikap saling menghargai, menghormati perbedaan, dan hidup berdampingan secara damai tanpa mengorbankan prinsip akidah masing-masing dinamakan ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Ta'awun",
            "Tasamuh",
            "Tawadhu'",
            "Tafakkur"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 14,
        "materi": "Akhlak",
        "pertanyaan": "Salah satu pedoman toleransi beragama dalam Al-Qur'an terdapat pada Q.S. Yunus ayat 40-41. Isi pokok kandungan dari ayat tersebut menegaskan bahwa ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Umat Islam diwajibkan untuk memaksa orang lain memeluk agama Islam demi kebaikan mereka sendiri",
            "Orang beriman diperbolehkan untuk mencoba tata cara ibadah agama lain sebagai bentuk toleransi tingkat tinggi",
            "Manusia terbagi menjadi dua golongan, yakni yang beriman dan tidak beriman kepada Al-Qur'an, dan masing-masing bertanggung jawab atas amal perbuatannya sendiri",
            "Semua agama di hadapan Allah Swt. akan dinilai benar asalkan mengajarkan kebaikan budi pekerti dan perdamaian antarsesama"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 15,
        "materi": "Akhlak",
        "pertanyaan": "Ahmad memiliki tetangga baru yang berbeda keyakinan. Suatu hari, tetangga tersebut sedang menyelenggarakan kegiatan ritual keagamaan di rumahnya yang dihadiri banyak tamu. Sikap toleransi yang paling tepat ditunjukkan oleh Ahmad adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Turut serta masuk ke dalam rumah dan mengikuti kegiatan tersebut untuk menunjukkan solidaritas bertetangga",
            "Menjaga ketenangan dengan tidak menyalakan suara televisi atau musik keras-keras agar tetangganya dapat beribadah dengan khusyuk",
            "Melarang kegiatan tersebut dengan alasan lingkungan perumahan didominasi oleh mayoritas umat Islam",
            "Meminta tetangganya pindah mengadakan acara ke tempat lain agar jalanan tidak penuh oleh kendaraan tamu"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 16,
        "materi": "Akhlak",
        "pertanyaan": "Sikap toleransi yang sejati tidak dapat terwujud begitu saja di masyarakat. Ia harus dibangun di atas landasan saling pengertian. Berikut ini yang <b>bukan</b> merupakan unsur-unsur terbentuknya sikap toleransi adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Memberikan kebebasan dan kemerdekaan dalam berkeyakinan",
            "Mengakui hak setiap orang untuk menentukan sikap hidupnya",
            "Memahami dan mengedepankan sikap saling menghargai eksistensi orang lain",
            "Menyatukan ajaran dari berbagai agama yang berbeda menjadi satu keyakinan universal"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 17,
        "materi": "Fiqih",
        "pertanyaan": "Manusia tidak bisa memenuhi kebutuhannya sendiri tanpa bantuan orang lain. Salah satu cara memenuhinya adalah melalui transaksi pertukaran. Menurut istilah fikih Islam, kegiatan menukar harta dengan harta lain (baik berupa uang maupun barang) untuk tujuan pengelolaan berdasarkan keridaan masing-masing dan sesuai ketentuan syariat disebut ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "<i>Bai'</i> (Jual beli)",
            "Riba",
            "Syirkah",
            "Wadi'ah"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 18,
        "materi": "Akhlak",
        "pertanyaan": "Perbedaan pendapat antarsiswa di sekolah kerap kali terjadi dan terkadang memicu gesekan emosional yang bisa berujung pada hilangnya rasa persaudaraan. Upaya paling proaktif yang bisa kalian lakukan sebagai pelajar muslim untuk mendorong kerukunan di lingkungan sekolah adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Menghindari berteman dengan siswa dari latar belakang daerah atau budaya yang berbeda agar tidak muncul selisih paham",
            "Membentuk kelompok belajar atau pergaulan eksklusif yang hanya mau menerima siswa-siswa yang seagama saja",
            "Mengedepankan budaya dialog dan musyawarah yang santun setiap kali muncul kesalahpahaman antarteman",
            "Membiarkan saja setiap perselisihan karena menganggap hal tersebut adalah wajar bagi anak usia remaja"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 19,
        "materi": "Fiqih",
        "pertanyaan": "Perhatikan ilustrasi transaksi berikut!<br><br>Fadil menemukan sebuah jam tangan mewah di taman kota. Karena sedang sangat membutuhkan uang, ia menjual jam tangan temuan tersebut kepada Diki dengan harga yang jauh lebih murah. Diki yang mengetahui asal usul jam tangan tersebut tetap membelinya karena tergiur ingin untung.<br><br>Berdasarkan syariat Islam, hukum jual beli yang dilakukan antara Fadil dan Diki adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Sah, karena sudah memenuhi syarat rida (suka sama suka) antara pihak penjual dan pembeli tanpa paksaan",
            "Tidak sah, karena salah satu syarat sah barang yang diperjualbelikan adalah harus berstatus milik penuh penjual secara sah, bukan barang temuan/curian",
            "Sah, asalkan uang hasil penjualan tersebut sebagian disumbangkan ke panti asuhan oleh Fadil",
            "Tidak sah, hanya karena harga yang disepakati terlalu jauh berada di bawah harga pasar"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 20,
        "materi": "Al-Qur'an",
        "pertanyaan": "Jual beli pada dasarnya bukan sekadar sarana mencari keuntungan ekonomi (<i>profit</i>), tetapi juga merupakan jalan untuk mewujudkan prinsip tolong-menolong sesama manusia. Allah Swt. memerintahkan agar umat-Nya tolong-menolong dalam kebaikan, sebagaimana firman-Nya dalam Q.S. Al-Ma'idah ayat 2:<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>وَتَعَاوَنُوْا عَلَى الْبِرِّ وَالتَّقْوٰىۖ وَلَا تَعَاوَنُوْا عَلَى ...</span><br>Lanjutan dari potongan ayat larangan dalam tolong-menolong tersebut adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "الْعُدْوَانِ وَالْاِثْمِ",
            "الشَّرِّ وَالْمُنْكَرِ",
            "الْإِثْمِ وَالْعُدْوَانِ",
            "الْفَحْشَاءِ وَالْمُنْكَرِ"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 21,
        "materi": "Al-Qur'an",
        "pertanyaan": "Islam sangat melindungi harta umatnya dari praktik eksploitasi dan ketidakadilan. Oleh karena itu, hukum asal jual beli adalah mubah, namun praktik riba diharamkan secara mutlak. Penegasan tentang kehalalan jual beli dan keharaman riba ini secara eksplisit tercantum dalam Al-Qur'an, yaitu pada ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Q.S. Al-Ma'idah ayat 2",
            "Q.S. Al-Baqarah ayat 275",
            "Q.S. Ali 'Imran ayat 130",
            "Q.S. An-Nisa ayat 29"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 22,
        "materi": "Fiqih",
        "pertanyaan": "Dalam praktik muamalah sehari-hari, sering kali kita menemukan seseorang memberikan pinjaman kepada orang lain yang sedang kesulitan. Jika pinjaman tersebut diberikan murni untuk tujuan menolong (sosial) tanpa mensyaratkan adanya tambahan pengembalian, maka akad ini sesuai dengan syariat dan disebut dengan ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "<i>Wadi'ah</i>",
            "<i>Syirkah</i>",
            "<i>Qardh</i>",
            "<i>Mudharabah</i>"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 23,
        "materi": "Fiqih",
        "pertanyaan": "Ibu Fatimah menukarkan perhiasan emas 24 karat seberat 10 gram miliknya dengan perhiasan emas 22 karat seberat 12 gram milik Ibu Aisyah. Meskipun secara nominal harganya mungkin sepadan, namun terjadi kelebihan takaran dalam pertukaran barang sejenis (emas dengan emas). Dalam fikih Islam, kelebihan takaran pada penukaran barang ribawi sejenis ini termasuk kategori ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Riba <i>Qardh</i>",
            "Riba <i>Nasi'ah</i>",
            "Riba <i>Yad</i>",
            "Riba <i>Fadhl</i>"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 24,
        "materi": "Fiqih",
        "pertanyaan": "Pak Haris sedang membutuhkan dana cepat untuk biaya rumah sakit. Ia meminjam uang sebesar Rp5.000.000,00 kepada seorang rentenir. Di awal transaksi, rentenir tersebut mensyaratkan agar Pak Haris mengembalikan uang sebesar Rp6.000.000,00 pada bulan berikutnya. Tambahan yang disyaratkan sejak awal utang-piutang ini termasuk jenis ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Riba <i>Nasi'ah</i>",
            "Riba <i>Qardh</i>",
            "Riba <i>Yad</i>",
            "Riba <i>Fadhl</i>"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 25,
        "materi": "Tarikh",
        "pertanyaan": "Sejarah peradaban Islam mencatat pergantian berbagai kekuasaan. Daulah Bani Abbasiyah resmi berdiri setelah berhasil menggulingkan kekuasaan Bani Umayyah. Sosok yang menjadi pendiri sekaligus khalifah pertama dari Daulah Abbasiyah adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Abu Ja'far Al-Mansur",
            "Harun Ar-Rasyid",
            "Abu al-Abbas as-Saffah",
            "Al-Walid bin Abdul Malik"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 26,
        "materi": "Tarikh",
        "pertanyaan": "Pada masa kejayaan Daulah Bani Abbasiyah, lahir banyak cendekiawan muslim yang karya-karyanya diakui dunia dan menjadi rujukan peradaban Barat. Salah satu tokoh ilmuwan muslim yang diberi gelar 'Bapak Kedokteran Modern' dan dikenal di dunia Barat dengan sebutan <i>Avicenna</i> adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Ibnu Rusyd",
            "Al-Khawarizmi",
            "Ibnu Sina",
            "Al-Farabi"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 27,
        "materi": "Tarikh",
        "pertanyaan": "Perkembangan ilmu komputer dan pemrograman (<i>coding</i>) yang kita nikmati di era digital saat ini tidak terlepas dari penemuan konsep algoritma dan angka nol. Konsep dasar yang sangat revolusioner ini pertama kali diletakkan oleh cendekiawan muslim masa Abbasiyah yang ahli di bidang matematika, yaitu ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Al-Khawarizmi",
            "Al-Ghazali",
            "Jabir bin Hayyan",
            "Ibnu Khaldun"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 28,
        "materi": "Tarikh",
        "pertanyaan": "Karya-karya ilmuwan muslim masa Abbasiyah banyak yang diterjemahkan ke bahasa Latin dan menjadi buku pegangan wajib di universitas-universitas Eropa selama berabad-abad. Salah satu mahakarya monumental di bidang medis yang berfungsi sebagai ensiklopedia kedokteran adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "<i>Ihya 'Ulumuddin</i>",
            "<i>Al-Qanun fi at-Tibb</i>",
            "<i>Al-Jabr wa al-Muqabalah</i>",
            "<i>Bidayatul Mujtahid</i>"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 29,
        "materi": "Tarikh",
        "pertanyaan": "Selain ilmu pengetahuan empiris, ilmu agama dan tasawuf juga berkembang pesat. Terdapat seorang ulama besar pada era Abbasiyah yang dijuluki <i>Hujjatul Islam</i> (Pembela Islam) karena kedalaman ilmunya dalam memadukan syariat, hakikat, dan tasawuf. Mahakarya beliau yang sangat terkenal adalah <i>Ihya 'Ulumuddin</i>. Tokoh yang dimaksud adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Imam Asy-Syafi'i",
            "Imam Al-Bukhari",
            "Ibnu Katsir",
            "Imam Al-Ghazali"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 30,
        "materi": "Tarikh",
        "pertanyaan": "Daulah Bani Abbasiyah mengalami puncak keemasan (<i>The Golden Age of Islam</i>) yang ditandai dengan tingginya tingkat kesejahteraan rakyat, majunya kebudayaan, serta didirikannya perpustakaan dan pusat penerjemahan raksasa <i>Baitul Hikmah</i>. Khalifah yang memimpin pemerintahan pada masa gemilang tersebut adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Harun Ar-Rasyid",
            "Al-Amin",
            "Al-Mu'tashim Billah",
            "Al-Mutawakkil"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 31,
        "materi": "Al-Qur'an",
        "pertanyaan": "<b>[Menjodohkan]</b> Jodohkan pernyataan berikut dengan pilihan yang tepat!<br><br>Kedudukan umat Islam sebagai umat yang adil, seimbang, proporsional, dan tidak bersikap ekstrem sebagaimana kandungan Q.S. Al-Baqarah ayat 143.",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "<i>Mubasysyirin wa Mundzirin</i> (Pembawa kabar gembira dan pemberi peringatan)",
            "Abu Ja'far Al-Mansur",
            "<i>Ikhfa Syafawi</i>",
            "<i>Ummatan Wasathan</i> (Umat pertengahan/moderat)"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 32,
        "materi": "Ilmu Tajwid",
        "pertanyaan": "<b>[Menjodohkan]</b> Jodohkan pernyataan berikut dengan pilihan yang tepat!<br><br>Hukum tajwid yang terjadi apabila huruf <i>mim sukun</i> (مْ) bertemu dengan huruf <i>ba'</i> (ب), cara membacanya harus disamarkan di bibir dan berdengung.",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "<i>Ikhfa Syafawi</i>",
            "<i>Idgham Mimi</i>",
            "Riba <i>Nasi'ah</i>",
            "Kebajikan dan takwa (<i>Al-Birr wat-Taqwa</i>)"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 33,
        "materi": "Aqidah",
        "pertanyaan": "<b>[Menjodohkan]</b> Jodohkan pernyataan berikut dengan pilihan yang tepat!<br><br>Berdasarkan dalil naqli Al-Qur'an, tugas pokok diutusnya para Nabi dan Rasul kepada umat manusia di dunia adalah sebagai ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Abu Ja'far Al-Mansur",
            "<i>Mubasysyirin wa Mundzirin</i> (Pembawa kabar gembira dan pemberi peringatan)",
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Jabir bin Hayyan"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 34,
        "materi": "Aqidah",
        "pertanyaan": "<b>[Menjodohkan]</b> Jodohkan pernyataan berikut dengan pilihan yang tepat!<br><br>Mukjizat fisik yang dianugerahkan Allah Swt. kepada Rasul Ulul Azmi, yakni Nabi Musa a.s. ketika menghadapi kesombongan Raja Fir'aun.",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan",
            "<i>Ummatan Wasathan</i> (Umat pertengahan/moderat)",
            "Harun Ar-Rasyid",
            "Riba <i>Nasi'ah</i>"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 35,
        "materi": "Akhlak",
        "pertanyaan": "<b>[Menjodohkan]</b> Jodohkan pernyataan berikut dengan pilihan yang tepat!<br><br>Kandungan Q.S. Yunus ayat 41 yang menjadi salah satu prinsip dasar toleransi dalam Islam saat menyikapi perbedaan keyakinan.",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "\"Bagiku pekerjaanku (amalku) dan bagimu pekerjaanmu (amalmu)\"",
            "Kebajikan dan takwa (<i>Al-Birr wat-Taqwa</i>)",
            "<i>Ikhfa Syafawi</i>"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 36,
        "materi": "Akhlak",
        "pertanyaan": "<b>[Menjodohkan]</b> Jodohkan pernyataan berikut dengan pilihan yang tepat!<br><br>Salah satu contoh perilaku intoleran dalam kehidupan bermasyarakat yang dapat merusak kerukunan dan sangat dilarang dalam agama.",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Mengganggu, melarang, atau merusak kegiatan ibadah umat agama lain",
            "Kebajikan dan takwa (<i>Al-Birr wat-Taqwa</i>)",
            "<i>Ummatan Wasathan</i> (Umat pertengahan/moderat)",
            "Riba <i>Qardh</i>"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 37,
        "materi": "Al-Qur'an",
        "pertanyaan": "<b>[Menjodohkan]</b> Jodohkan pernyataan berikut dengan pilihan yang tepat!<br><br>Berdasarkan pesan dalam Q.S. Al-Ma'idah ayat 2, Allah Swt. sangat memerintahkan umat-Nya untuk tolong-menolong dalam urusan ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "<i>Mubasysyirin wa Mundzirin</i> (Pembawa kabar gembira dan pemberi peringatan)",
            "Riba <i>Nasi'ah</i>",
            "Kebajikan dan takwa (<i>Al-Birr wat-Taqwa</i>)",
            "Abu Ja'far Al-Mansur"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 38,
        "materi": "Fiqih",
        "pertanyaan": "<b>[Menjodohkan]</b> Jodohkan pernyataan berikut dengan pilihan yang tepat!<br><br>Jenis riba yang terjadi karena adanya tambahan jumlah pembayaran utang yang dibebankan akibat penundaan atau penangguhan waktu pelunasan.",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Riba <i>Nasi'ah</i>",
            "Riba <i>Qardh</i>",
            "<i>Ikhfa Syafawi</i>",
            "Tongkat dapat berubah menjadi ular raksasa dan mampu membelah lautan"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 39,
        "materi": "Tarikh",
        "pertanyaan": "<b>[Menjodohkan]</b> Jodohkan pernyataan berikut dengan pilihan yang tepat!<br><br>Khalifah Daulah Abbasiyah yang membangun kota Baghdad dengan tata ruang bundar yang indah dan menjadikannya sebagai ibu kota peradaban dunia.",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Harun Ar-Rasyid",
            "Abu Ja'far Al-Mansur",
            "Jabir bin Hayyan",
            "<i>Mubasysyirin wa Mundzirin</i> (Pembawa kabar gembira dan pemberi peringatan)"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 40,
        "materi": "Tarikh",
        "pertanyaan": "<b>[Menjodohkan]</b> Jodohkan pernyataan berikut dengan pilihan yang tepat!<br><br>Ilmuwan muslim terkemuka pada masa Bani Abbasiyah yang diakui sebagai 'Bapak Ilmu Kimia' atas karya dan penemuannya dalam metode penyulingan (distilasi).",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Abu Ja'far Al-Mansur",
            "Harun Ar-Rasyid",
            "Jabir bin Hayyan",
            "<i>Ummatan Wasathan</i> (Umat pertengahan/moderat)"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 41,
        "materi": "Ilmu Tajwid",
        "pertanyaan": "Ilmu tajwid sangat penting dipelajari agar kita terhindar dari kesalahan saat membaca Al-Qur'an. Salah satu bab penting di dalamnya adalah hukum bacaan apabila <i>nun sukun</i> (نْ) atau <i>tanwin</i> (ـًـٍـٌ) bertemu dengan huruf-huruf hijaiyah. Sebutkan 4 (empat) macam hukum bacaan <i>nun sukun</i> atau <i>tanwin</i> beserta cara membacanya!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Idzhar Halqi: Dibaca jelas dan terang.\n2. Idgham (Bighunnah & Bilaghunnah): Dibaca masuk/melebur ke huruf setelahnya (dengan atau tanpa dengung).\n3. Iqlab: Dibaca dengan mengganti bunyi nun/tanwin menjadi mim.\n4. Ikhfa Haqiqi: Dibaca samar-samar antara idzhar dan idgham serta mendengung.",
        "tipe": "uraian"
    },
    {
        "id": 42,
        "materi": "Aqidah",
        "pertanyaan": "Sebagai utusan Allah Swt., para nabi dan rasul dianugerahi sifat-sifat khusus yang membedakan mereka dari manusia biasa, guna menjamin keberhasilan dakwahnya. Sebutkan 4 (empat) sifat wajib bagi Rasul beserta arti dari masing-masing sifat tersebut!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Shiddiq artinya benar atau jujur.\n2. Amanah artinya dapat dipercaya.\n3. Tabligh artinya menyampaikan (wahyu).\n4. Fathanah artinya cerdas atau pintar.",
        "tipe": "uraian"
    },
    {
        "id": 43,
        "materi": "Akhlak",
        "pertanyaan": "Di lingkungan sekolah kita, setiap siswa berasal dari latar belakang karakter, daerah, bahkan keyakinan yang berbeda-beda. Ketika melaksanakan kegiatan yang melibatkan kerja sama tim, seperti rutinitas kegiatan Jumat Bersih menyiapkan peralatan kebersihan bersama, perbedaan tersebut akan saling membaur. Berikan 3 (tiga) contoh perilaku nyata yang dapat kamu lakukan untuk menjaga kerukunan antarsiswa dalam kegiatan semacam itu maupun dalam pergaulan sehari-hari!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Membagi tugas kebersihan secara adil tanpa membeda-bedakan teman.\n2. Menggunakan tutur kata yang sopan dan tidak menyinggung suku/agama teman saat berdialog.\n3. Saling membantu jika ada teman yang kesulitan membawa peralatan berat.\n4. Memberikan kelonggaran waktu bagi teman yang berbeda keyakinan jika bertepatan dengan waktu ibadahnya.",
        "tipe": "uraian"
    },
    {
        "id": 44,
        "materi": "Fiqih",
        "pertanyaan": "Fikih muamalah mengatur ketat masalah jual beli agar tidak ada pihak yang terzalimi atau dirugikan. Agar sebuah transaksi jual beli dianggap sah oleh syariat Islam, barang yang diperjualbelikan harus memenuhi kriteria tertentu. Jelaskan 4 (empat) syarat sah barang yang diperjualbelikan tersebut!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Barangnya suci (bukan benda najis seperti bangkai atau khamar).\n2. Barangnya memiliki manfaat yang mubah/halal.\n3. Barangnya adalah milik penuh si penjual secara sah (atau perwakilannya).\n4. Barangnya dapat diserahterimakan (bukan burung di udara atau ikan di lautan bebas).\n5. Diketahui secara jelas kadar, wujud, sifat, dan ukurannya oleh penjual maupun pembeli.",
        "tipe": "uraian"
    },
    {
        "id": 45,
        "materi": "Tarikh",
        "pertanyaan": "Masa Daulah Bani Abbasiyah sering disebut sebagai <i>The Golden Age of Islam</i> karena pesatnya perkembangan ilmu pengetahuan. Lahir banyak cendekiawan muslim yang karya-karyanya menjadi rujukan universitas-universitas di Eropa hingga berabad-abad kemudian. Sebutkan 3 (tiga) nama tokoh ilmuwan muslim pada masa Bani Abbasiyah beserta bidang keahliannya!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Ibnu Sina: Bidang Kedokteran.\n2. Al-Khawarizmi: Bidang Matematika / Algoritma.\n3. Jabir bin Hayyan: Bidang Kimia.\n4. Al-Kindi atau Al-Farabi: Bidang Filsafat.\n5. Imam Al-Ghazali: Bidang Tasawuf / Ilmu Agama.",
        "tipe": "uraian"
    }
]

file_path = 'js/data.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the entire const quizData2026 = [...];
match = re.search(r'(const quizData2026\s*=\s*)(\[.*?\])(;?\s*$)', text, re.DOTALL)
if match:
    prefix = match.group(1)
    suffix = match.group(3)
    new_array_json = json.dumps(payload, indent=4, ensure_ascii=False)
    
    # Check if there is trailing whitespace or newlines at the end of data.js
    new_text = text[:match.start()] + prefix + new_array_json + suffix
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Success replacing quizData2026")
else:
    # Try a less restrictive regex if the above didn't match
    match2 = re.search(r'(const quizData2026\s*=\s*)(\[.*)', text, re.DOTALL)
    if match2:
        prefix = match2.group(1)
        new_array_json = json.dumps(payload, indent=4, ensure_ascii=False)
        new_text = text[:match2.start()] + prefix + new_array_json + ";\n"
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_text)
        print("Success replacing quizData2026 with secondary regex")
    else:
        print("Failed to find quizData2026")
