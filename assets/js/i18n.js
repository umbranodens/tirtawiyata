(function () {
  'use strict';

  var translations = new Map([
    ['Solusi Pabrik & Mesin Siap Operasi', 'Engineering & Machinery Turnkey Solution'],
    ['Lewati ke konten utama', 'Skip to main content'],
    ['Beranda', 'Home'], ['Tentang Kami', 'About Us'], ['Layanan', 'Services'], ['Produk', 'Products'], ['Kontak', 'Contact'],
    ['Hubungi Kami', 'Contact Us'], ['Layanan Rekayasa', 'Engineering Services'], ['Katalog Mesin', 'Machinery Catalog'], ['Portfolio Pabrik', 'Plant Portfolio'],
    ['Pilihan bahasa', 'Language selection'], ['Buka menu', 'Open menu'], ['Tutup menu', 'Close menu'], ['Navigasi utama', 'Main navigation'], ['Navigasi seluler', 'Mobile navigation'],
    ['Tirta Wiyata Investama, ke beranda', 'Tirta Wiyata Investama, home'],
    ['Wujudkan Pabrik Air Minum Anda, dari Perencanaan hingga Siap Beroperasi.', 'Build Your Bottled Water Plant, from Planning to Production.'],
    ['Konsultasi pembangunan pabrik, perlengkapan produksi, serta mesin cetak galon dan botol untuk kebutuhan bisnis Anda.', 'Plant development consulting, production equipment, and water jug and bottle moulding machines for your business.'],
    ['Jelajahi Layanan', 'Explore Services'], ['Fasilitas AMDK Terpadu', 'Integrated Bottled Water Facility'],
    ['Integrasi Sistem Pemurnian & Cetak Kemasan Berkecepatan Tinggi', 'Integrated Water Purification & High-Speed Container Moulding'],
    ['Konsultasi Pembangunan Pabrik', 'Plant Development Consulting'],
    ['Layout alur proses, studi kelayakan lahan, kalkulasi kapasitas, serta pendampingan regulasi dan tata letak higienis hingga pabrik beroperasi.', 'Process layouts, site feasibility studies, capacity planning, and regulatory and hygienic layout guidance through to plant operation.'],
    ['Pelajari Alur Konsultasi', 'View the Consulting Process'], ['Supplier Perlengkapan Pabrik', 'Plant Equipment Supply'],
    ['Unit water treatment (UF/RO), perpipaan sanitary food-grade, tangki stainless steel bertekanan, hingga sistem pengisian dan penutupan higienis.', 'Water treatment units (UF/RO), food-grade sanitary piping, pressurized stainless steel tanks, and hygienic filling and capping systems.'],
    ['Katalog Komponen Lini', 'View Production Line Equipment'], ['Mesin Cetak Galon & Botol', 'Water Jug & Bottle Moulding Machines'],
    ['Mesin blow moulding presisi tinggi untuk botol PET 330 ml–1.500 ml serta mesin cetak galon polikarbonat / PET kapasitas 5 L dan 19 L.', 'Precision blow moulding machines for 330–1,500 ml PET bottles and 5 L and 19 L polycarbonate or PET water jugs.'],
    ['Spesifikasi Mesin Cetak', 'View Moulding Machine Specifications'], ['Profil Korporat Rekayasa', 'Company Profile'],
    ['Mitra Strategis Rekayasa Industri Air Minum dalam Kemasan (AMDK)', 'Your Engineering Partner for Bottled Water Production'],
    ['Tirta Wiyata Investama hadir sebagai mitra strategis bagi pemilik lahan, investor perintis, maupun korporasi yang ingin mendirikan fasilitas produksi air minum dalam kemasan. Kami memfasilitasi setiap tahap dari rekayasa kelayakan (feasibility), penyusunan tata letak ruang higienis, penyediaan permesinan, hingga pendampingan uji alir komersial.', 'Tirta Wiyata Investama partners with landowners, first-time investors, and companies establishing bottled water production facilities. We support each stage, from feasibility studies and hygienic facility layouts to machinery supply and commercial commissioning.'],
    ['Dengan pengalaman instalasi di berbagai wilayah Indonesia, pendekatan kami bertumpu pada keandalan mekanikal jangka panjang, efisiensi konsumsi daya, serta kemudahan transfer teknologi kepada tim operasional Anda.', 'Drawing on installation experience across Indonesia, we focus on long-term mechanical reliability, energy efficiency, and practical knowledge transfer to your operations team.'],
    ['Lihat Sertifikasi', 'View Certifications'], ['Visi & Misi', 'Vision & Mission'], ['Visi Perusahaan', 'Our Vision'],
    ['Menjadi penggerak utama pertumbuhan industri manufaktur air minum nasional yang mandiri, efisien, dan berstandar higienitas tertinggi.', 'To support the growth of an independent, efficient Indonesian bottled water manufacturing industry with high hygiene standards.'],
    ['Misi Perusahaan', 'Our Mission'],
    ['Memberikan solusi rancang bangun pabrik yang komprehensif, menyediakan mesin cetak berdaya tahan tinggi, dan memastikan transfer teknologi yang tuntas kepada operator lokal.', 'To provide complete plant engineering solutions and durable moulding machines, and equip local operators with the knowledge to run them.'],
    ['Layanan Utama A', 'Plant Development'],
    ['Program pendampingan terstruktur khusus untuk pemilik lahan dan calon investor pabrik air minum yang membutuhkan panduan menyeluruh dari nol hingga pabrik beroperasi penuh.', 'Structured support for landowners and prospective bottled water plant investors, from the initial concept to full operation.'],
    ['Perencanaan & Perizinan', 'Planning & Permits'],
    ['Konsultasi dan survei lahan, sumber air, akses logistik, serta infrastruktur.', 'Consultation and surveys of the site, water source, logistics access, and infrastructure.'],
    ['Studi kelayakan dan tata letak ruang produksi higienis, termasuk jalur pipa.', 'Feasibility studies and hygienic production layouts, including piping routes.'],
    ['Pendampingan standar sanitasi dan kebutuhan perizinan sebelum pembangunan.', 'Guidance on sanitation standards and permit requirements before construction.'],
    ['Konstruksi & Instalasi', 'Construction & Installation'],
    ['Pemilihan dan pengadaan mesin cetak kemasan, pengolahan air, serta lini pengisian sesuai target produksi.', 'Selection and procurement of container moulding machines, water treatment systems, and filling lines to meet production targets.'],
    ['Pemasangan mesin dan perpipaan, uji coba, serta kalibrasi sensor.', 'Machinery and piping installation, commissioning, and sensor calibration.'],
    ['Pelatihan operator agar tim Anda siap menjalankan produksi.', 'Operator training to prepare your team for production.'],
    ['Siap Beroperasi', 'Ready for Production'],
    ['Pabrik siap memasuki produksi komersial setelah instalasi dan uji coba selesai.', 'The plant is ready for commercial production after installation and commissioning.'],
    ['Tim operasional siap menjalankan mesin sesuai pelatihan.', 'Your operations team is trained and ready to run the machines.'],
    ['Pendampingan teknis purnajual berkala untuk menjaga keandalan lini produksi.', 'Ongoing after-sales technical support to maintain production line reliability.'],
    ['Ingin Memulai Rencana Pembangunan Pabrik?', 'Planning a New Bottled Water Plant?'],
    ['Hubungi admin untuk penawaran dan jadwal konsultasi awal.', 'Contact our team for a quotation and an initial consultation.'], ['Konsultasi Sekarang', 'Book a Consultation'], ['Layanan Utama B', 'Equipment Supply'],
    ['Komponen mekanikal, pengolahan air, dan pendukung higienis berspesifikasi industri food-grade untuk keandalan lini produksi air minum harian Anda.', 'Industrial food-grade mechanical components, water treatment systems, and hygienic equipment for reliable daily bottled water production.'],
    ['UF · RO · Ozon', 'UF · RO · Ozone'], ['Sistem Pengolahan Air', 'Water Treatment Systems'],
    ['Multi-media filtration, Ultrafiltrasi (UF), Reverse Osmosis (RO) berskala industri, serta generator ozonisasi higienis.', 'Industrial multimedia filtration, ultrafiltration (UF), reverse osmosis (RO), and hygienic ozone generators.'],
    ['Tanya Ketersediaan', 'Check Availability'], ['Pompa dan Perpipaan', 'Pumps & Piping'],
    ['Sanitary centrifugal pumps, perpipaan stainless steel food-grade SS304 & SS316, butterfly valves, dan koneksi tri-clamp.', 'Sanitary centrifugal pumps, food-grade SS304 and SS316 stainless steel piping, butterfly valves, and tri-clamp connections.'],
    ['CIP · Level Otomatis', 'CIP · Automatic Level Control'], ['Tangki dan Penampungan', 'Storage Tanks'],
    ['Tangki penampungan raw water & treated water stainless steel terisolasi dengan sanitary manhole, CIP ball, dan indikator level otomatis.', 'Insulated stainless steel raw and treated water tanks with sanitary manholes, CIP spray balls, and automatic level indicators.'],
    ['Mesin Pengisi dan Penutup', 'Filling & Capping Machines'],
    ['Automatic washing, filling, and capping system untuk galon 19 L dan botol PET dengan proteksi ruang ozon anti-kontaminasi.', 'Automatic washing, filling, and capping systems for 19 L water jugs and PET bottles, with ozone chamber protection against contamination.'],
    ['TDS · pH · Mikrobiologi', 'TDS · pH · Microbiology'], ['Peralatan Laboratorium & QC', 'Laboratory & QC Equipment'],
    ['TDS meter presisi, turbidimeter terkalibrasi, inkubator mikroba, pH meter industri, serta instrumen uji rutin higienitas laboratorium pabrik.', 'Precision TDS meters, calibrated turbidimeters, microbial incubators, industrial pH meters, and instruments for routine plant laboratory testing.'],
    ['Kebutuhan Mesin & Perlengkapan', 'More Machinery & Equipment'], ['Butuh Mesin Lain?', 'Need Another Machine?'],
    ['Mesin yang Anda cari belum tercantum? Hubungi kami untuk mendiskusikan jenis mesin, kapasitas, dan kebutuhan pabrik Anda.', 'Cannot find the machine you need? Contact us to discuss machine types, capacity, and your plant requirements.'],
    ['Katalog Mesin Blow Moulding', 'Blow Moulding Machine Catalog'], ['Mesin Cetak Galon & Botol Presisi', 'Precision Water Jug & Bottle Moulding Machines'],
    ['Unit mesin pembuat wadah (blow moulding machine) berakurasi tinggi.', 'Precision blow moulding machines for container production.'], ['Catatan teknis:', 'Technical note:'],
    ['seri ini berfokus pada pencetakan botol/galon dari preform, terpisah dari sistem pengisian (filling & capping).', 'this range moulds bottles and water jugs from preforms. Filling and capping systems are supplied separately.'],
    ['Semua', 'All'], ['Galon', 'Water Jugs'], ['Botol', 'Bottles'], ['Volume: 19 Liter', 'Volume: 19 Litres'], ['Volume: 5 Liter', 'Volume: 5 Litres'],
    ['TWI-G19 Mesin Cetak Galon 19 L', 'TWI-G19 19 L Water Jug Moulding Machine'],
    ['Mesin blow moulding semi-otomatis bertekanan tinggi untuk galon polikarbonat (PC) dan PET volume standar 19 liter.', 'High-pressure semi-automatic blow moulding machine for standard 19-litre polycarbonate (PC) and PET water jugs.'],
    ['Daya Listrik', 'Power Consumption'], ['Tekanan Tiup', 'Blowing Pressure'], ['Lihat Spesifikasi', 'View Specifications'], ['Minta Penawaran', 'Request a Quote'], ['Jumlah Cavity', 'Cavity Count'],
    ['TWI-G5 Mesin Cetak Galon 5 L', 'TWI-G5 5 L Water Jug Moulding Machine'],
    ['Unit cetak galon mini 5 liter, cocok untuk kemasan air minum sekali pakai dan produk air keluarga berukuran kompak.', 'Compact 5-litre water jug moulding unit for disposable drinking water containers and family-size bottled water products.'],
    ['TWI-B600 Mesin Cetak Botol 330–600 ml', 'TWI-B600 330–600 ml Bottle Moulding Machine'],
    ['Pencetakan linear otomatis untuk botol PET personal 330 ml dan 600 ml dengan sistem penghemat konsumsi udara bertekanan.', 'Automatic linear moulding for 330 ml and 600 ml PET bottles, with a system that reduces compressed air consumption.'],
    ['Volume: 1.500 ml', 'Volume: 1,500 ml'], ['TWI-B1500 Mesin Cetak Botol 1.500 ml', 'TWI-B1500 1,500 ml Bottle Moulding Machine'],
    ['Mesin tiup botol PET format besar 1.500 ml dengan pemanasan inframerah merata guna kestabilan ketebalan dinding botol.', 'Large-format 1,500 ml PET bottle blow moulding machine with even infrared heating for consistent bottle wall thickness.'],
    ['2.000 – 4.500 BPH', '2,000–4,500 BPH'], ['1.500 – 3.000 BPH', '1,500–3,000 BPH'], ['2,8 – 3,2 MPa', '2.8–3.2 MPa'],
    ['Butuh Bentuk atau Ukuran Khusus?', 'Need a Custom Shape or Size?'],
    ['Kami menyediakan layanan rancang cetakan (mold die) kustom untuk botol maupun galon dengan siluet identitas unik merek Anda. Dari botol berprofil ergonomis, galon bertekstur struktural, hingga ukuran volume di luar spesifikasi standar.', 'We design custom moulds for bottles and water jugs to match your brand, from ergonomic bottle profiles and textured water jugs to non-standard container sizes.'],
    ['Sampaikan jenis, volume, bentuk, dan jumlah', 'Tell Us the Type, Volume, Shape, and Quantity'],
    ['Jelaskan target bentuk botol/galon, gramatur preform, serta estimasi volume harian.', 'Describe your target bottle or jug shape, preform weight, and estimated daily production volume.'],
    ['Diskusikan kebutuhan dan kelayakan teknis', 'Discuss Requirements and Technical Feasibility'],
    ['Tim teknis kami menghitung toleransi mekanikal cetakan, waktu siklus tiup, dan efisiensi material.', 'Our technical team evaluates mould tolerances, blowing cycle times, and material efficiency.'],
    ['Terima penawaran sesuai hasil konsultasi', 'Receive a Quote Based on Your Consultation'],
    ['Estimasi biaya fabrikasi mold baja/aluminium duralium dan estimasi jadwal pengiriman.', 'Estimated fabrication costs for steel or duralumin moulds and an estimated delivery schedule.'],
    ['Protokol Diskusi Desain', 'Discussing Your Design'],
    ['Desain referensi dan sketsa teknis dikirimkan langsung melalui WhatsApp setelah diskusi dimulai, tanpa form upload.', 'Share reference designs and technical sketches directly through WhatsApp once the discussion starts. No upload form is required.'],
    ['CNC Precision ±0,01 mm', 'CNC Precision ±0.01 mm'], ['Tipe Baja Mold:', 'Mould Material:'], ['Pendinginan:', 'Cooling:'], ['Volume Fleksibel', 'Flexible Volume'], ['Format Mold', 'Mould Format'], ['Penyelesaian', 'Finish'], ['Cermin / Satin', 'Mirror / Satin'],
    ['Rekam Jejak Lapangan', 'Project Experience'], ['Portfolio Rekayasa & Pengadaan', 'Engineering & Procurement Portfolio'],
    ['Dokumentasi proyek implementasi lini pabrik, konsultasi rancang bangun, dan perakitan mesin di berbagai wilayah mitra.', 'Projects covering production line installation, plant engineering consulting, and machinery assembly across our partner locations.'],
    ['Konsultasi', 'Consulting'], ['Pabrik', 'Plants'], ['Mesin', 'Machinery'], ['Kota Contoh A', 'Sample City A'], ['Kota Contoh B', 'Sample City B'], ['Kota Contoh C', 'Sample City C'], ['Kota Contoh D', 'Sample City D'], ['Kota Contoh E', 'Sample City E'], ['Kota Contoh F', 'Sample City F'],
    ['Pabrik Air Galon Skala Menengah', 'Medium-Scale Water Jug Plant'],
    ['Instalasi turnkey lengkap dari unit filter RO 4.000 GPD hingga jalur pencucian dan pengisian galon 19 L kapasitas 300 BPH.', 'Complete turnkey installation, from a 4,000 GPD RO filtration unit to a 19 L water jug washing and filling line rated at 300 BPH.'],
    ['Konsultasi Pabrik Air Botol', 'Bottled Water Plant Consulting'],
    ['Penyusunan arsitektur ruang bersih kelas sanitasi, zoning air limbah, dan penataan alur jalur blow moulding menuju cleanroom.', 'Hygienic cleanroom design, wastewater zoning, and production flow planning from blow moulding to the cleanroom.'],
    ['Pengadaan Mesin Cetak Galon 19 L', '19 L Water Jug Moulding Machine Supply'],
    ['Pengiriman unit mesin tiup galon tipe TWI-G19 serta kompresor udara bertekanan tinggi 3,0 MPa dan chiller penstabil suhu mold.', 'Supply of a TWI-G19 water jug blow moulding machine, a 3.0 MPa high-pressure air compressor, and a mould temperature control chiller.'],
    ['Pabrik Air Kemasan Gelas dan Botol', 'Cup & Bottle Water Plant'],
    ['Integrasi dua lini sekaligus: rotary cup sealer 220 ml (8 line) dan sistem pengisian botol PET 600 ml kecepatan 3.000 BPH.', 'Integration of two lines: an eight-lane 220 ml rotary cup sealer and a 600 ml PET bottle filling system rated at 3,000 BPH.'],
    ['Konsultasi Perizinan Pabrik Air', 'Water Plant Permit Consulting'],
    ['Audit kesiapan fasilitas laboratorium uji, sterilisasi ruang produksi, dan panduan pemenuhan parameter teknis pabrik air.', 'Readiness audits for testing laboratories and production room sterilization, with guidance on meeting water plant technical requirements.'],
    ['Mesin Botol Custom Bentuk Khusus', 'Custom Bottle Moulding Machine'],
    ['Penyediaan mesin tiup 4-cavity dengan set mold custom botol heksagonal anti-slip 500 ml berkecepatan 3.600 botol per jam.', 'Supply of a four-cavity blow moulding machine with custom moulds for 500 ml non-slip hexagonal bottles, rated at 3,600 bottles per hour.'],
    ['Mutu, Keamanan & Keselamatan', 'Quality, Food Safety & Workplace Safety'], ['Sertifikasi & Standar', 'Certifications & Standards'],
    ['Sistem manajemen yang relevan untuk rekayasa industri dan operasional pabrik air minum.', 'Management systems relevant to industrial engineering and bottled water plant operations.'],
    ['Manajemen Mutu', 'Quality Management'], ['Pengelolaan proses, konsistensi mutu, serta perbaikan berkelanjutan dalam penyediaan produk dan layanan.', 'Process management, consistent quality, and continual improvement in product and service delivery.'],
    ['Sistem manajemen organisasi', 'Organizational management system'], ['Lihat Sertifikat', 'View Certificate'], ['Keamanan Pangan', 'Food Safety'],
    ['Identifikasi dan pengendalian bahaya keamanan pangan di sepanjang rantai produksi, termasuk industri air minum.', 'Identification and control of food safety hazards throughout the production chain, including bottled water manufacturing.'],
    ['Sistem manajemen keamanan pangan', 'Food safety management system'], ['Keselamatan & Kesehatan Kerja', 'Occupational Health & Safety'],
    ['Pengelolaan risiko keselamatan dan kesehatan kerja untuk mendukung lingkungan kerja yang lebih aman.', 'Management of occupational health and safety risks to support a safer workplace.'],
    ['Sistem manajemen K3', 'Occupational health & safety management system'],
    ['Konten contoh untuk pratinjau desain. Daftar ini bukan pernyataan kepemilikan sertifikasi perusahaan; dokumen asli belum ditampilkan.', 'Sample content for design preview. This list does not claim company certification; original documents are not displayed.'],
    ['Link sertifikat belum tersedia', 'Certificate link is not yet available'],
    ['Lihat Sertifikat ISO 9001, link belum tersedia', 'View ISO 9001 Certificate, link not yet available'], ['Lihat Sertifikat ISO 22000, link belum tersedia', 'View ISO 22000 Certificate, link not yet available'], ['Lihat Sertifikat ISO 45001, link belum tersedia', 'View ISO 45001 Certificate, link not yet available'],
    ['Pusat Layanan Teknis', 'Technical Support'], ['Mari Diskusikan Kebutuhan Pabrik Anda.', 'Let’s Discuss Your Plant Requirements.'],
    ['Konsultasikan target kapasitas, kondisi lahan, atau kebutuhan mesin air minum Anda bersama tim perancang pabrik kami.', 'Discuss your target capacity, site conditions, or bottled water machinery requirements with our plant engineering team.'],
    ['Alamat Operasional & Workshop', 'Office & Workshop'], ['Tirta Wiyata Investama, Jl. Contoh Industri No. 123, Kota Contoh', 'Tirta Wiyata Investama, 123 Sample Industrial Street, Sample City'],
    ['Jam Operasional', 'Business Hours'], ['Senin–Jumat, 08.00–17.00 WIB', 'Monday–Friday, 08:00–17:00 (UTC+7)'], ['WhatsApp Resmi Penjualan & Rekayasa', 'Sales & Engineering WhatsApp'],
    ['Layanan Respons Cepat', 'Talk to Our Team'], ['Kirimkan detail rancangan atau pertanyaan spesifikasi mesin langsung ke WhatsApp resmi kami.', 'Send your design requirements or machinery specification questions directly to our official WhatsApp.'],
    ['Konsultan & penyedia mesin pabrik air minum dalam kemasan (AMDK) berstandar farmasi & industri Indonesia.', 'Engineering consultants and machinery suppliers for bottled water plants serving Indonesia’s pharmaceutical and industrial standards.'],
    ['Solusi Lini Pabrik', 'Production Line Solutions'], ['Water Treatment Ultrafiltrasi & RO', 'Ultrafiltration & RO Water Treatment'], ['Lini Galon 19 L Monobloc', '19 L Water Jug Monobloc Line'], ['Botol PET 330–1.500 ml Otomatis', 'Automatic 330–1,500 ml PET Bottle Line'], ['Lini Cup Rotary 120–240 ml', '120–240 ml Rotary Cup Line'],
    ['Navigasi', 'Navigation'], ['Kantor Teknis & Workshop', 'Engineering Office & Workshop'], ['Jl. Contoh Industri No. 123, Kota Contoh, Indonesia', '123 Sample Industrial Street, Sample City, Indonesia'], ['PT Tirta Wiyata Investama. Hak cipta dilindungi.', 'PT Tirta Wiyata Investama. All rights reserved.'],
    ['Kembali ke atas', 'Back to top'], ['Spesifikasi Teknis', 'Technical Specifications'], ['Tutup spesifikasi', 'Close specifications'], ['Kapasitas Output', 'Output Capacity'], ['Garansi Resmi 1 Tahun • SLA Dukungan Suku Cadang', '1-Year Official Warranty • Spare Parts Support SLA'], ['Tutup', 'Close'],
    ['Mesin Cetak Galon 19 L (Blow Moulding Semi-Auto)', '19 L Water Jug Moulding Machine (Semi-Automatic Blow Moulding)'],
    ['120 – 240 galon/jam (tergantung gramatur preform)', '120–240 jugs/hour (depending on preform weight)'],
    ['Volume Kemasan', 'Container Volume'], ['19 Liter (Standar 5 Galon)', '19 Litres (Standard 5-Gallon Jug)'], ['Bahan Baku Kompatibel', 'Compatible Materials'], ['Jumlah Rongga (Cavity)', 'Cavity Count'], ['Daya Pemanas Inframerah', 'Infrared Heater Power'], ['28 kW (16 Zona Pemanas Terpisah)', '28 kW (16 Separate Heating Zones)'], ['Total Konsumsi Daya', 'Total Power Consumption'], ['Tekanan Udara Operasional (Tiup)', 'Operating Air Pressure (Blowing)'], ['2,8 – 3,2 MPa (Kompresor Tekanan Tinggi)', '2.8–3.2 MPa (High-Pressure Compressor)'], ['Tekanan Operasional (Pneumatik)', 'Operating Pressure (Pneumatic)'], ['0,8 – 1,0 MPa', '0.8–1.0 MPa'], ['Sistem Kontrol PLC & Layar', 'PLC Control System & Display'], ['Mitsubishi / Siemens Smart Interface (Bahasa Inggris/Mandarin)', 'Mitsubishi / Siemens Smart Interface (English/Mandarin)'], ['Dimensi Mesin (P × L × T)', 'Machine Dimensions (L × W × H)'], ['2.250 × 850 × 2.100 mm', '2,250 × 850 × 2,100 mm'], ['Berat Total Mesin', 'Total Machine Weight'], ['± 2.100 kg', '± 2,100 kg'],
    ['Kelengkapan paket mesin:', 'Machine package includes:'], ['Unit utama TWI-G19, oven pemanas preform rotary, set cetakan galon standar polos, tool kit instalasi, dan buku panduan operasi teknis.', 'TWI-G19 main unit, rotary preform heating oven, standard plain water jug mould set, installation toolkit, and technical operating manual.'],
    ['Data dimensi, berat, tekanan udara, dan sistem PLC untuk model ini dikirim bersama lembar spesifikasi resmi. Minta lewat WhatsApp untuk mendapatkannya.', 'Dimensions, weight, air pressure, and PLC system details for this model are provided in the official specification sheet. Request it through WhatsApp.'],
    ['Mesin Cetak Galon 5 L', '5 L Water Jug Moulding Machine'], ['5 Liter', '5 Litres'], ['Mesin Cetak Botol PET 330–600 ml (Linear Otomatis)', '330–600 ml PET Bottle Moulding Machine (Automatic Linear)'], ['Mesin Cetak Botol PET 1.500 ml', '1,500 ml PET Bottle Moulding Machine'], ['1.500 ml', '1,500 ml'],
    ['Tirta Wiyata Investama — Rekayasa Pabrik AMDK & Mesin Cetak Galon/Botol', 'Tirta Wiyata Investama — Bottled Water Plant Engineering & Moulding Machines'],
    ['Tirta Wiyata Investama — Rekayasa Pabrik AMDK', 'Tirta Wiyata Investama — Bottled Water Plant Engineering'],
    ['Tirta Wiyata Investama: konsultasi pembangunan pabrik air minum dalam kemasan (AMDK), supplier perlengkapan pabrik, serta mesin cetak galon dan botol dari perencanaan hingga siap beroperasi.', 'Tirta Wiyata Investama: bottled water plant development consulting, equipment supply, and water jug and bottle moulding machines, from planning to operation.'],
    ['Konsultasi pembangunan pabrik, perlengkapan produksi, serta mesin cetak galon dan botol untuk bisnis air minum Anda.', 'Plant development consulting, production equipment, and water jug and bottle moulding machines for your bottled water business.'],
    ['Lini pengisian botol air minum otomatis dengan perpipaan stainless steel sanitary di ruang produksi yang bersih', 'Automatic bottled water filling line with sanitary stainless steel piping in a clean production room'],
    ['Pabrik air isometrik dengan tangki, pemurnian air, mesin cetak botol, lini pengisian dan conveyor, pengemasan, utilitas, operator, dan gudang pengiriman', 'Isometric water plant with tanks, purification, bottle moulding machines, filling lines, conveyors, packaging, utilities, operators, and a dispatch warehouse'],
    ['Tiga fase pembangunan pabrik', 'Three phases of plant development'], ['Survei lahan dan sumber air, patok denah pabrik, serta persiapan gambar teknis dan dokumen perizinan', 'Site and water source surveys, layout markers, and preparation of technical drawings and permit documents'],
    ['Struktur pabrik sedang dibangun, crane mengangkat peralatan, truk memasok mesin, serta teknisi memasang tangki dan mesin produksi', 'Plant construction with a crane lifting equipment, trucks delivering machinery, and technicians installing tanks and production machines'],
    ['Pabrik selesai dengan pemurnian air, mesin cetak dan pengisian botol, conveyor berjalan, pengujian sampel, operator, serta pengiriman produk', 'Completed plant with water purification, bottle moulding and filling machines, running conveyors, sample testing, operators, and product dispatch'],
    ['Skid reverse osmosis dan ultrafiltrasi stainless steel dengan pressure vessel dan panel kontrol', 'Stainless steel reverse osmosis and ultrafiltration skid with pressure vessels and a control panel'],
    ['Pompa sentrifugal sanitary dan perpipaan stainless steel food-grade dengan sambungan tri-clamp', 'Sanitary centrifugal pump and food-grade stainless steel piping with tri-clamp connections'],
    ['Dua tangki stainless steel untuk raw water dan treated water di ruang pengolahan air', 'Two stainless steel tanks for raw and treated water in the water treatment room'],
    ['Mesin monoblok pencuci, pengisi, dan penutup botol pada lini konveyor', 'Monobloc bottle washing, filling, and capping machine on a conveyor line'],
    ['Analis laboratorium menguji sampel air di laminar air flow dengan TDS meter dan pH meter', 'Laboratory analyst testing water samples in a laminar flow cabinet with TDS and pH meters'],
    ['Teknisi memeriksa panel kontrol mesin di pabrik', 'Technician inspecting a machine control panel at a plant'], ['Filter kategori mesin', 'Filter machine categories'],
    ['Mesin blow moulding galon 19 liter dengan terowongan pemanas inframerah', '19-litre water jug blow moulding machine with an infrared heating tunnel'],
    ['Mesin cetak galon 5 liter dengan monitor PLC dan konveyor hasil produksi', '5-litre water jug moulding machine with a PLC display and output conveyor'],
    ['Mesin stretch blow moulding linear otomatis untuk botol PET 330 ml dan 600 ml', 'Automatic linear stretch blow moulding machine for 330 ml and 600 ml PET bottles'],
    ['Mesin blow moulding botol PET 1.500 ml dengan rangka clamp baja dan unit chiller', '1,500 ml PET bottle blow moulding machine with a steel clamping frame and chiller'],
    ['Alur pengajuan custom order', 'Custom order process'], ['Gambar CAD wireframe cetakan botol baja dua cavity dengan keterangan dimensi', 'CAD wireframe drawing of a two-cavity steel bottle mould with dimensions'], ['Filter jenis proyek', 'Filter project types'],
    ['Ruang pengisian galon 19 liter dengan konveyor otomatis dan operator berpakaian higienis', '19-litre water jug filling room with an automatic conveyor and operators in hygienic clothing'],
    ['Meja kerja dengan gambar denah tata letak pabrik dan model digital di monitor', 'Work desk with plant layout drawings and a digital model on a monitor'],
    ['Instalasi dan uji mesin blow moulding galon 19 liter dengan galon biru di konveyor', 'Installation and testing of a 19-litre water jug blow moulding machine with blue jugs on a conveyor'],
    ['Lantai pabrik air kemasan dengan beberapa lini pengisian dan pengemasan otomatis', 'Bottled water plant floor with multiple automatic filling and packaging lines'],
    ['Rapat audit kesiapan pabrik dengan dokumen ISO dan grafik kinerja', 'Plant readiness audit meeting with ISO documents and performance charts'],
    ['Sampel botol air mineral bentuk khusus di samping cetakan logam CNC dua cavity', 'Custom mineral water bottle samples beside a two-cavity CNC metal mould']
  ]);

  translations.set("Supply Chain", "Supply Chain");
  translations.set("Pendampingan rantai pasok AMDK yang mencakup bisnis, manajemen, produksi, ekspedisi, sertifikasi, legalitas, pemasaran, serta pengadaan barang dan jasa.", "Bottled water supply chain consulting covering business, management, production, logistics, certification, legal requirements, marketing, and procurement of goods and services.");
  translations.set("Lihat Layanan Supply Chain", "View Supply Chain Services");
  translations.set("Pengadaan Mesin AMDK", "Bottled Water Machinery Procurement");
  translations.set("Pengadaan mesin filling cup, botol, dan galon, serta water treatment meliputi filter, ozon, dan karbon aktif sesuai kebutuhan pabrik Anda.", "Procurement of cup, bottle, and water jug filling machines, plus water treatment equipment including filters, ozone systems, and activated carbon to suit your plant.");
  translations.set("Diskusikan Kebutuhan Mesin", "Discuss Machinery Requirements");
  translations.set("Profil Perusahaan", "Company Profile");
  translations.set("Mitra Konsultasi Industri Air Minum dalam Kemasan", "Your Bottled Water Industry Consulting Partner");
  translations.set("PT Tirta Wiyata Investama adalah perusahaan konsultan yang berfokus pada industri Air Minum Dalam Kemasan (AMDK). Nama kami memadukan Tirta (Air), Wiyata (Pendidikan), dan Investama (Investasi yang Tepat). Filosofi ini mendasari layanan kami dalam membangun pengetahuan, meningkatkan keterampilan, dan membantu mitra mengambil keputusan investasi untuk pertumbuhan bisnis yang berkelanjutan.", "PT Tirta Wiyata Investama is a consulting company focused on the bottled water industry. Our name combines Tirta (Water), Wiyata (Education), and Investama (Sound Investment). This philosophy guides our work in building knowledge, developing skills, and helping partners make investment decisions for sustainable business growth.");
  translations.set("Melalui jaringan mitra industri, kami mendampingi kebutuhan bisnis di seluruh rantai pasok AMDK, termasuk pengadaan barang dan jasa. Kami membantu Anda menilai pilihan sesuai kebutuhan pabrik; keputusan akhir tetap berada di tangan Anda.", "Through our industry partner network, we support business needs across the bottled water supply chain, including procurement of goods and services. We help you assess options for your plant; the final decision remains yours.");
  translations.set("Menjadi pemimpin industri konsultan Air Minum Dalam Kemasan yang menghadirkan solusi inovatif dan berkelanjutan bagi klien di seluruh dunia.", "To become a leader in bottled water industry consulting, delivering innovative and sustainable solutions for clients worldwide.");
  translations.set("Memberikan layanan konsultasi yang komprehensif untuk mencakup seluruh rantai pasokan industri Air Minum Dalam Kemasan.", "To provide comprehensive consulting services covering the entire bottled water industry supply chain.");
  translations.set("Mengembangkan kemitraan strategis yang saling menguntungkan dengan pemangku kepentingan industri ini.", "To develop mutually beneficial strategic partnerships with stakeholders in the industry.");
  translations.set("Mempromosikan kebijaksanaan, investasi yang tepat, dan teknologi terbaru untuk menciptakan masa depan yang lebih baik bagi industri Air Minum Dalam Kemasan.", "To promote wisdom, sound investment, and the latest technology to create a better future for the bottled water industry.");
  translations.set("Kami mendampingi konsultasi bisnis dan manajemen, perencanaan produksi, ekspedisi, sertifikasi, legalitas, pemasaran, serta pengadaan barang dan jasa. Untuk kebutuhan peralatan, kami membantu menilai pilihan mesin, berkoordinasi dengan mitra, serta mendampingi negosiasi harga dan ketentuan kontrak. Pilihan akhir mengikuti kebutuhan dan keputusan Anda.", "We provide business and management consulting, production planning, logistics support, certification and legal assistance, marketing, and procurement of goods and services. For equipment needs, we help assess machinery options, coordinate with partners, and support price and contract negotiations. Final choices reflect your needs and decisions.");
  translations.set("Pengadaan peralatan water treatment, meliputi filter, karbon aktif, dan sistem ozon, dengan pilihan yang disesuaikan dengan kebutuhan pengolahan air di pabrik Anda.", "Procurement of water treatment equipment, including filters, activated carbon, and ozone systems, selected to suit your plant water treatment needs.");
  translations.set("Pengadaan mesin filling untuk kemasan cup, botol, dan galon. Jenis mesin dan kapasitas didiskusikan berdasarkan kebutuhan produksi Anda.", "Procurement of filling machines for cups, bottles, and water jugs. Machine types and capacities are discussed based on your production needs.");
  translations.set("Konsultasi pembangunan pabrik, pendampingan supply chain, serta pengadaan mesin filling dan water treatment sesuai kebutuhan bisnis AMDK Anda.", "Plant development consulting, supply chain support, and procurement of filling machines and water treatment equipment for your bottled water business.");
  translations.set("Konsultan industri AMDK untuk pendampingan bisnis, supply chain, serta pengadaan barang dan jasa sesuai kebutuhan klien.", "Bottled water industry consultants supporting business needs, supply chains, and procurement of goods and services for clients.");
  translations.set("Tirta Wiyata Investama: konsultan industri AMDK untuk pembangunan pabrik, supply chain, serta pengadaan mesin filling dan water treatment sesuai kebutuhan klien.", "Tirta Wiyata Investama: bottled water industry consultants for plant development, supply chains, and procurement of filling machines and water treatment equipment to suit client needs.");
  translations.set("Tirta Wiyata Investama: Konsultasi & Pengadaan AMDK", "Tirta Wiyata Investama: Bottled Water Consulting & Procurement");

  translations.set("Pengadaan Mesin Cetak Galon & Botol", "Water Jug & Bottle Moulding Machinery Procurement");

  translations.set("Pendampingan pembangunan pabrik AMDK yang menghubungkan strategi bisnis, kesiapan produksi, dan pengembangan usaha. Delapan layanan kami disusun dalam tiga fase agar setiap kebutuhan dibahas sesuai tahap bisnis Anda.", "Bottled water plant development support connecting business strategy, production readiness, and business growth. Our eight services are organised into three phases to address your needs at each business stage.");
  translations.set("Analisis pasar, identifikasi peluang, dan rekomendasi strategi bisnis sebagai dasar rencana investasi Anda.", "Market analysis, opportunity assessment, and business strategy recommendations to inform your investment plan.");
  translations.set("Perencanaan fasilitas produksi, kebutuhan teknologi, peralatan, dan sumber daya sesuai tujuan usaha.", "Production facility planning, including technology, equipment, and resource needs aligned with your business goals.");
  translations.set("Pendampingan pengurusan legalitas, perizinan usaha, serta kebutuhan sertifikasi produk dan sistem manajemen.", "Support with legal documentation, business permits, and product and management system certification requirements.");
  translations.set("Konsultasi penataan fasilitas dan optimalisasi proses produksi agar pilihan peralatan sesuai kebutuhan pabrik.", "Consulting on facility layout and production process improvements to match equipment choices to plant needs.");
  translations.set("Bantuan pengadaan bahan baku, peralatan, dan jasa melalui jaringan mitra, termasuk negosiasi harga dan ketentuan kontrak.", "Support procuring raw materials, equipment, and services through our partner network, including price and contract negotiations.");
  translations.set("Koordinasi kebutuhan teknis dengan mitra penyedia; Anda menilai pilihan dan menentukan keputusan pengadaan.", "Coordination of technical requirements with suppliers; you assess the options and make procurement decisions.");
  translations.set("Pelatihan dan peningkatan keterampilan manajemen untuk mendukung operasional yang efisien dan efektif.", "Management training and skills development to support efficient and effective operations.");
  translations.set("Dukungan ekspedisi, pengepakan, pengiriman, dan transportasi produk untuk kebutuhan distribusi Anda.", "Logistics support covering packing, shipping, and product transportation for your distribution needs.");
  translations.set("Pengembangan strategi pemasaran, branding, dan promosi untuk menjangkau pasar serta mendukung pertumbuhan penjualan.", "Marketing strategy, branding, and promotion development to reach customers and support sales growth.");
  translations.set("Butuh mesin untuk pabrik AMDK? Kami membantu merumuskan kebutuhan, menghubungkan Anda dengan supplier yang sesuai, serta mendampingi pembahasan spesifikasi, harga, dan ketentuan pengadaan. Pilihan mesin dan keputusan pembelian tetap di tangan Anda.", "Need machinery for your bottled water plant? We help define your requirements, connect you with suitable suppliers, and support discussions on specifications, pricing, and procurement terms. Machine selection and purchasing decisions remain yours.");
  translations.set("Cup, Botol & Galon", "Cups, Bottles & Water Jugs");
  translations.set("Pengadaan Mesin Filling", "Filling Machinery Procurement");
  translations.set("Mesin pengisian air untuk kemasan galon, botol, dan cup dengan pilihan kapasitas serta tingkat otomatisasi sesuai target produksi. Kebutuhan pencucian, pengisian, penutupan botol atau galon, hingga sealing cup dibahas sesuai jenis lini. Kami membantu mencocokkan spesifikasi dengan pilihan dari supplier.", "Water filling machines for water jugs, bottles, and cups, with capacity and automation options to suit production targets. Rinsing, filling, bottle or jug capping, and cup sealing requirements are discussed for each line. We help match specifications to supplier options.");
  translations.set("Diskusikan Mesin Filling", "Discuss Filling Machinery");
  translations.set("Filter, Karbon Aktif & Ozon", "Filters, Activated Carbon & Ozone");
  translations.set("Pengadaan Water Treatment", "Water Treatment Procurement");
  translations.set("Peralatan pengolahan air mencakup filter sedimen atau multimedia, media karbon aktif, serta generator dan sistem injeksi ozon. Kami membantu membahas pilihan rangkaian pengolahan dengan supplier berdasarkan hasil analisis air baku, debit yang dibutuhkan, dan kebutuhan proses pabrik Anda.", "Water treatment equipment includes sediment or multimedia filters, activated carbon media, and ozone generation and injection systems. We help discuss treatment configurations with suppliers based on raw water analysis, required flow rate, and plant process needs.");
  translations.set("Diskusikan Water Treatment", "Discuss Water Treatment");
  translations.set("Kebutuhan Pengadaan Lain", "Other Procurement Needs");
  translations.set("Butuh Mesin Lain?", "Need Another Machine?");
  translations.set("Sampaikan fungsi mesin, kapasitas yang dituju, dan kendala produksi Anda. Kami bantu menelusuri pilihan supplier serta mendiskusikan spesifikasi dan kebutuhan pengadaannya bersama Anda.", "Tell us the machine function, target capacity, and production challenges. We help identify supplier options and discuss specifications and procurement requirements with you.");
  translations.set("Konsultasikan Kebutuhan Anda", "Discuss Your Requirements");
  translations.set("Pengadaan Water Treatment", "Water Treatment Procurement");
  translations.set("Mesin Filling Cup", "Cup Filling Machines");

  translations.set("Konsultasi Perencanaan & Pembangunan Pabrik", "Plant Planning & Development Consulting");
  translations.set("Pendampingan perencanaan bisnis dan fasilitas pabrik AMDK, termasuk kebutuhan produksi, legalitas, sertifikasi, dan kesiapan operasional.", "Business and facility planning support for bottled water plants, covering production needs, legal requirements, certification, and operational readiness.");
  translations.set("Bahas Rencana Pabrik", "Discuss Your Plant Plans");
  translations.set("Supply Chain AMDK", "Bottled Water Supply Chain");
  translations.set("Bantuan pengadaan mesin filling, water treatment, serta kebutuhan barang dan jasa industri AMDK melalui jaringan supplier sesuai kebutuhan pabrik Anda.", "Support procuring filling machines, water treatment equipment, and goods and services for the bottled water industry through a supplier network matched to your plant needs.");
  translations.set("Diskusikan Kebutuhan Pengadaan", "Discuss Procurement Needs");
  translations.set("Pendampingan untuk merencanakan atau mengembangkan pabrik AMDK. Kami membantu menyusun strategi bisnis, merencanakan fasilitas dan kebutuhan produksi, serta mendampingi legalitas, sertifikasi, dan kesiapan operasional sesuai tahap usaha Anda.", "Support for planning or developing a bottled water plant. We help shape business strategy, plan facilities and production requirements, and support legal requirements, certification, and operational readiness at each business stage.");
  translations.set("Pengadaan Mesin, Barang & Jasa", "Machinery, Goods & Services Procurement");

  translations.set("Kami menghubungkan kebutuhan pabrik Anda dengan supplier mesin dan mitra jasa, termasuk survei sumber air, pengeboran, serta pendampingan perizinan. Kami bantu membahas spesifikasi dan pengadaan; keputusan tetap di tangan Anda.", "We connect your plant requirements with machinery suppliers and service partners, including groundwater surveys, drilling, and permitting support. We help discuss specifications and procurement; decisions remain yours.");
  translations.set("Supply Chain Barang", "Goods Procurement");
  translations.set("Pengadaan Mesin & Peralatan", "Machinery & Equipment Procurement");
  translations.set("Mesin filling galon, botol, dan cup, serta water treatment: filter, karbon aktif, dan sistem ozon. Kami hubungkan Anda dengan supplier sesuai kapasitas, spesifikasi, dan kebutuhan pengolahan air pabrik.", "Water jug, bottle, and cup filling machines, plus water treatment equipment: filters, activated carbon, and ozone systems. We connect you with suppliers to match your plant capacity, specifications, and water treatment needs.");
  translations.set("Diskusikan Pengadaan Barang", "Discuss Equipment Procurement");
  translations.set("Supply Chain Jasa", "Service Procurement");
  translations.set("Jasa Sumber Air & Perizinan", "Groundwater & Permitting Services");
  translations.set("Survei geolistrik untuk menilai potensi air tanah dan merencanakan titik serta kedalaman pengeboran.", "Geoelectrical surveys to assess groundwater potential and plan drilling locations and depths.");
  translations.set("Koordinasi pengeboran sumur melalui mitra sesuai kajian teknis dan perizinan.", "Well drilling coordination through partners in line with technical assessments and permits.");
  translations.set("Pendampingan dokumen dan pengajuan Izin Pengusahaan Air Tanah (SIPA) melalui OSS sesuai kewenangan instansi.", "Documentation and OSS application support for groundwater business permits (SIPA), according to the responsible authority.");
  translations.set("Konsultasikan Kebutuhan Jasa", "Discuss Service Requirements");
  translations.set("Kebutuhan Pengadaan Lain", "Other Procurement Needs");
  translations.set("Ada Kebutuhan Lain?", "Have Other Requirements?");
  translations.set("Ceritakan kebutuhan barang atau jasa untuk pabrik Anda. Kami bantu menelusuri pilihan mitra dan mendiskusikan lingkup pekerjaan, spesifikasi, serta proses pengadaannya.", "Tell us what goods or services your plant needs. We help identify partner options and discuss the scope of work, specifications, and procurement process.");
  translations.set("Konsultasikan Kebutuhan Anda", "Discuss Your Requirements");

  translations.set("Mesin filling untuk kemasan galon, botol, dan cup sesuai kapasitas produksi.", "Filling machines for water jugs, bottles, and cups to suit production capacity.");
  translations.set("Peralatan water treatment: filter, karbon aktif, dan sistem ozon.", "Water treatment equipment: filters, activated carbon, and ozone systems.");
  translations.set("Pemilihan supplier sesuai spesifikasi mesin dan kebutuhan pengolahan air pabrik Anda.", "Supplier selection matched to machine specifications and your plant water treatment needs.");

  translations.set("Analisis pasar, identifikasi peluang, dan rekomendasi strategi untuk pertumbuhan serta ekspansi bisnis AMDK.", "Market analysis, business opportunity identification, and strategic recommendations for growth and expansion in bottled water.");
  translations.set("Konsultasi dan bantuan pengurusan perizinan usaha serta dokumen legal sesuai peraturan industri AMDK.", "Consulting and assistance with business permits and legal documentation in line with bottled water industry regulations.");
  translations.set("Bantuan pengurusan sertifikasi produk dan sistem manajemen sesuai standar industri dan peraturan yang berlaku.", "Assistance with product and management system certification in accordance with industry standards and applicable regulations.");
  translations.set("Konsultasi perencanaan dan optimalisasi fasilitas produksi AMDK, termasuk peralatan, teknologi, dan pengelolaan sumber daya.", "Consulting on planning and optimising bottled water production facilities, including equipment, technology, and resource management.");
  translations.set("Bantuan pengadaan bahan baku, peralatan, dan jasa, termasuk negosiasi harga serta ketentuan kontrak yang mendukung kebutuhan usaha.", "Assistance procuring raw materials, equipment, and services, including price and contract negotiations to support business needs.");
  translations.set("Pelatihan dan peningkatan keterampilan manajemen untuk mendukung operasional yang efisien serta pengembangan strategi bisnis.", "Management training and skills development to support efficient operations and business strategy development.");
  translations.set("Dukungan logistik untuk pengepakan, pengiriman, dan transportasi produk AMDK.", "Logistics support for packing, shipping, and transporting bottled water products.");
  translations.set("Pengembangan strategi pemasaran, branding, dan promosi untuk menjangkau pasar yang lebih luas serta meningkatkan penjualan.", "Marketing strategy, branding, and promotion development to reach wider markets and increase sales.");

  translations.set("Legalitas & Sertifikasi", "Permits & Certification");
  translations.set("Pendampingan Legalitas & Sertifikasi AMDK", "Bottled Water Permitting & Certification Support");
  translations.set("Siapkan persyaratan produk, sistem manajemen, dan pemanfaatan sumber air bersama TWI. Kami membantu memetakan kebutuhan, menyiapkan dokumen, serta mendampingi proses pengajuan dan kesiapan pemeriksaan.", "Prepare product, management system, and water resource requirements with TWI. We help identify your needs, prepare documentation, and support applications and assessment readiness.");
  translations.set("Standar Mutu Produk", "Product Quality Standards");
  translations.set("Pendampingan pemenuhan Standar Nasional Indonesia sesuai jenis produk AMDK dan skema sertifikasi yang berlaku.", "Support meeting Indonesian National Standards for your bottled water category and the applicable certification scheme.");
  translations.set("Penyiapan dokumen mutu dan kebutuhan pengujian produk.", "Preparation of quality documentation and product testing requirements.");
  translations.set("Pendampingan kesiapan audit dan proses sertifikasi melalui LSPro.", "Audit readiness and certification process support through a product certification body (LSPro).");
  translations.set("Rujukan resmi", "Official reference");
  translations.set("Jaminan Produk Halal", "Halal Product Assurance");
  translations.set("Pendampingan sertifikasi halal melalui kesiapan bahan, proses produksi, dan Sistem Jaminan Produk Halal (SJPH).", "Halal certification support through preparation of materials, production processes, and the Halal Product Assurance System (SJPH).");
  translations.set("Penyiapan data bahan, alur produksi, dan dokumen SJPH.", "Preparation of ingredient data, production workflows, and SJPH documentation.");
  translations.set("Pendampingan pengajuan melalui SIHALAL dan persiapan pemeriksaan.", "SIHALAL application support and assessment preparation.");
  translations.set("Rujukan resmi", "Official reference");
  translations.set("Izin Edar Produk AMDK", "Bottled Water Product Registration");
  translations.set("Pendampingan registrasi pangan olahan untuk memperoleh izin edar BPOM bagi produk AMDK yang diproduksi di Indonesia.", "Processed food registration support for BPOM marketing authorisation for bottled water produced in Indonesia.");
  translations.set("Penyiapan data produk, rancangan label, dan dokumen persyaratan.", "Preparation of product data, proposed labels, and required documentation.");
  translations.set("Pendampingan kesiapan sarana produksi dan pengajuan izin edar BPOM MD.", "Production facility readiness and BPOM MD registration support.");
  translations.set("Rujukan resmi", "Official reference");
  translations.set("Sistem Manajemen Mutu", "Quality Management System");
  translations.set("Pendampingan penerapan sistem manajemen mutu untuk menjaga konsistensi proses, memenuhi kebutuhan pelanggan, dan mendorong perbaikan berkelanjutan.", "Quality management system implementation support for consistent processes, customer requirements, and continual improvement.");
  translations.set("Penyusunan prosedur kerja, sasaran mutu, dan pengendalian dokumen.", "Development of procedures, quality objectives, and document controls.");
  translations.set("Pendampingan audit internal dan kesiapan audit lembaga sertifikasi.", "Internal audit support and preparation for certification body audits.");
  translations.set("Rujukan resmi", "Official reference");
  translations.set("Izin Pengusahaan Air Tanah", "Groundwater Business Permit");
  translations.set("Pendampingan perizinan penggunaan air tanah untuk kegiatan usaha AMDK, sesuai kondisi lokasi dan kewenangan instansi.", "Groundwater permitting support for bottled water business activities, according to site conditions and the responsible authority.");
  translations.set("Penyiapan data lokasi, kebutuhan air, dan dokumen teknis sumur.", "Preparation of site data, water requirements, and technical well documentation.");
  translations.set("Pendampingan permohonan melalui OSS dan pemenuhan persyaratan instansi terkait.", "OSS application support and assistance meeting the relevant authority requirements.");
  translations.set("Rujukan resmi", "Official reference");
  translations.set("Kebutuhan Pabrik Anda", "Your Plant Requirements");
  translations.set("Mulai dari Kebutuhan Usaha Anda", "Start with Your Business Needs");
  translations.set("Sedang merencanakan pabrik, menyiapkan produk baru, atau melengkapi perizinan? Ceritakan kondisi usaha Anda agar kami dapat membantu menentukan dokumen dan langkah yang perlu disiapkan.", "Planning a plant, preparing a new product, or completing permits? Tell us about your business so we can help identify the documents and steps to prepare.");
  translations.set("Konsultasikan Legalitas AMDK", "Discuss Permits & Certification");
  translations.set("Mesin Filling Galon", "Water Jug Filling Machines");
  translations.set("Mesin Filling Botol", "Bottle Filling Machines");
  translations.set("Legalitas", "Permits & Certification");
  translations.set("Legalitas & Sertifikasi", "Permits & Certification");
  translations.set("Layanan Legalitas & Sertifikasi", "Permitting & Certification Services");

  translations.set("Konsultasi Pabrik AMDK", "Bottled Water Plant Consulting");
  translations.set("Perencanaan Bisnis & Pengembangan Produksi", "Business Planning & Production Development");
  translations.set("Pendampingan strategi bisnis, perencanaan fasilitas produksi, serta kesiapan manajemen, legalitas, dan sertifikasi sesuai kebutuhan usaha Anda.", "Business strategy and production facility planning support, covering management readiness, legal requirements, and certification to suit your business needs.");

  translations.set("Foto ilustrasi sementara", "Temporary illustrative image");
  translations.set("Cerita Pertumbuhan Mitra", "Our Partners’ Growth Stories");
  translations.set("Pencapaian Mitra Bisnis Kami", "Business Partner Achievements");
  translations.set("Ilustrasi sementara untuk cerita PT Viura Indo Tirta", "Temporary illustrative image for PT Viura Indo Tirta");
  translations.set("Pengembangan Fasilitas & Ekspansi Pasar", "Facility Development & Market Expansion");
  translations.set("Dukungan untuk mengembangkan fasilitas produksi dan memperluas pasar AMDK.", "Support for developing production facilities and expanding the bottled water market.");
  translations.set("Perencanaan pengembangan fasilitas produksi.", "Production facility development planning.");
  translations.set("Pendampingan strategi untuk menjangkau pasar yang lebih luas.", "Strategy support to reach a wider market.");
  translations.set("Peningkatan pangsa pasar dalam 2 tahun.", "Market share growth over 2 years.");
  translations.set("Ilustrasi sementara untuk cerita PT Sun Water International", "Temporary illustrative image for PT Sun Water International");
  translations.set("Sertifikasi Produk & Sistem Manajemen", "Product & Management System Certification");
  translations.set("Pendampingan pengurusan sertifikasi untuk mendukung kualitas produk dan kepercayaan konsumen.", "Certification support to strengthen product quality and consumer confidence.");
  translations.set("Bantuan dalam proses sertifikasi produk.", "Assistance with product certification.");
  translations.set("Pendampingan pengurusan sertifikasi sistem manajemen.", "Support with management system certification.");
  translations.set("Mutu", "Quality");
  translations.set("Kualitas produk dan kepercayaan konsumen.", "Product quality and consumer confidence.");
  translations.set("Ilustrasi sementara untuk cerita M-QUA", "Temporary illustrative image for M-QUA");
  translations.set("Strategi Pemasaran AMDK", "Bottled Water Marketing Strategy");
  translations.set("Konsultasi strategi pemasaran untuk mendukung pertumbuhan penjualan produk AMDK.", "Marketing strategy consulting to support bottled water sales growth.");
  translations.set("Pengembangan strategi pemasaran sesuai kebutuhan bisnis.", "Development of marketing strategies to suit business needs.");
  translations.set("Pendampingan arah pemasaran untuk mendukung penjualan.", "Marketing direction support to strengthen sales.");
  translations.set("Peningkatan penjualan dalam 18 bulan.", "Sales growth over 18 months.");
  translations.set("Pilih cerita mitra", "Select a partner story");
  translations.set("Tampilkan cerita PT Viura Indo Tirta", "Show the PT Viura Indo Tirta story");
  translations.set("Tampilkan cerita PT Sun Water International", "Show the PT Sun Water International story");
  translations.set("Tampilkan cerita M-QUA", "Show the M-QUA story");
  translations.set("Cerita sebelumnya", "Previous story");
  translations.set("Jeda slide otomatis", "Pause automatic slides");
  translations.set("Cerita berikutnya", "Next story");
  translations.set("Jaringan Kemitraan", "Our Partner Network");
  translations.set("Klien Kami", "Our Clients");
  translations.set("Pengalaman Bermitra", "A Partnership in Practice");
  translations.set("Testimoni Klien", "Client Testimonial");
  translations.set("Ilustrasi sementara fasilitas produksi AMDK untuk cerita PT Viura Indo Tirta", "Temporary illustration of bottled water production facilities for the PT Viura Indo Tirta story");
  translations.set("Pendampingan sejak perancangan bisnis, pengembangan fasilitas produksi, hingga strategi pemasaran pabrik AMDK.", "Support spanning business planning, production facility development, and marketing strategy for a bottled water plant.");
  translations.set("“PT Tirta Wiyata Investama telah menjadi mitra yang sangat berharga… Mereka memiliki tim yang berpengalaman dan solusi inovatif…”", "“PT Tirta Wiyata Investama has been a highly valued partner… They have an experienced team and innovative solutions…”");
  translations.set("Klien produksi", "Production clients");
  translations.set("Shift produksi rata-rata", "Average production shifts");
  translations.set("Pencapaian Mitra", "Partner Achievements");
  translations.set("Slide", "Slide");
  translations.set("dari", "of");
  translations.set("Putar slide otomatis", "Play automatic slides");

  translations.set("Alamat Kantor", "Office Address");
  translations.set("Kontak Kami", "Contact Us");
  translations.set("WhatsApp Konsultasi", "Consultation WhatsApp");
  translations.set("Diskusikan rencana pabrik, kebutuhan pengadaan, atau pendampingan legalitas AMDK bersama tim konsultan kami.", "Discuss your plant plans, procurement needs, or bottled water permitting with our consulting team.");

  var textEntries = [];
  var walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    var node = walker.currentNode;
    if (node.parentElement.closest('script, style, .ms, [data-language]')) continue;
    if (translations.has(node.nodeValue.trim())) textEntries.push({ node: node, original: node.nodeValue });
  }

  var attributeEntries = [];
  document.querySelectorAll('[alt], [aria-label], [title], meta[content]').forEach(function (element) {
    ['alt', 'aria-label', 'title', 'content'].forEach(function (attribute) {
      var original = element.getAttribute(attribute);
      if (translations.has(original)) attributeEntries.push({ element: element, attribute: attribute, original: original });
    });
  });

  var messageEntries = [];
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (link) {
    var url = new URL(link.href);
    var message = url.searchParams.get('text');
    if (!message) return;
    var english = message
      .replace('Halo Admin Tirta Wiyata Investama, ', 'Hello Tirta Wiyata Investama, ')
      .replace('saya ingin berkonsultasi mengenai perencanaan pabrik AMDK dan pengadaan barang atau jasa.', 'I would like to discuss bottled water plant planning and procurement of goods or services.')
      .replace('saya ingin konsultasi tentang proyek pabrik AMDK.', 'I would like to discuss a bottled water plant project.')
      .replace('saya ingin Konsultasi Perencanaan dan Pembangunan Pabrik AMDK.', 'I would like a consultation on bottled water plant planning and development.')
      .replace('saya ingin menanyakan mesin atau perlengkapan lain untuk kebutuhan pabrik saya.', 'I would like to ask about other machinery or equipment for my plant.')
      .replace('saya ingin mengajukan Custom Order cetakan botol/galon.', 'I would like to discuss a custom bottle or water jug mould order.')
      .replace('saya ingin berdiskusi mengenai kebutuhan pabrik AMDK.', 'I would like to discuss my bottled water plant requirements.')
      .replace('saya ingin konsultasi langsung.', 'I would like to arrange a consultation.')
      .replace("saya ingin konsultasi pendampingan legalitas dan sertifikasi AMDK (SNI, Halal, BPOM, ISO 9001, atau SIPA).", "I would like to discuss bottled water permitting and certification support (SNI, Halal, BPOM, ISO 9001, or SIPA).")
      .replace("saya ingin konsultasi pengadaan mesin filling dan peralatan water treatment.", "I would like to discuss procurement of filling machines and water treatment equipment.")
      .replace("saya ingin konsultasi jasa geolistrik, pengeboran, dan pendampingan perizinan air tanah SIPA.", "I would like to discuss geoelectrical surveys, well drilling, and groundwater permit (SIPA) support.")
      .replace("saya ingin konsultasi kebutuhan pengadaan barang atau jasa untuk pabrik AMDK.", "I would like to discuss procurement of goods or services for my bottled water plant.")
      .replace('saya ingin konsultasi pengadaan mesin filling untuk galon, botol, atau cup.', 'I would like to discuss procurement of water jug, bottle, or cup filling machinery.')
      .replace('saya ingin konsultasi pengadaan peralatan water treatment.', 'I would like to discuss procurement of water treatment equipment.')
      .replace('saya ingin tanya ketersediaan ', 'I would like to check availability of ')
      .replace('saya minta penawaran harga untuk ', 'I would like to request a quotation for ')
      .replace('Sistem Pengolahan Air', 'water treatment systems')
      .replace('Pompa dan Perpipaan Sanitary', 'sanitary pumps and piping')
      .replace('Tangki dan Penampungan Air', 'water storage tanks')
      .replace('Mesin Pengisi dan Penutup', 'filling and capping machines')
      .replace('Peralatan Laboratorium QC', 'laboratory and QC equipment')
      .replace('Mesin Cetak Galon', 'Water Jug Moulding Machine')
      .replace('Mesin Cetak Botol', 'Bottle Moulding Machine');
    url.searchParams.set('text', english);
    messageEntries.push({ element: link, original: link.getAttribute('href'), english: url.href });
  });

  window.siteI18n = {
    language: 'id',
    t: function (text) { return this.language === 'en' ? translations.get(text) || text : text; },
    setLanguage: function (language) {
      if (language !== 'id' && language !== 'en') return;
      this.language = language;
      document.documentElement.lang = language;
      textEntries.forEach(function (entry) {
        entry.node.nodeValue = language === 'id' ? entry.original : entry.original.replace(entry.original.trim(), translations.get(entry.original.trim()));
      });
      attributeEntries.forEach(function (entry) {
        entry.element.setAttribute(entry.attribute, language === 'id' ? entry.original : translations.get(entry.original));
      });
      messageEntries.forEach(function (entry) { entry.element.setAttribute('href', language === 'id' ? entry.original : entry.english); });
      document.querySelector('meta[property="og:locale"]').content = language === 'en' ? 'en_US' : 'id_ID';
      document.querySelectorAll('[data-language]').forEach(function (button) { button.setAttribute('aria-pressed', String(button.dataset.language === language)); });
      try { localStorage.setItem('twi-language', language); } catch (_) { /* Storage may be blocked by browser settings. */ }
      document.dispatchEvent(new CustomEvent('site:languagechange'));
    }
  };

  document.querySelectorAll('[data-language]').forEach(function (button) {
    button.addEventListener('click', function () { window.siteI18n.setLanguage(button.dataset.language); });
  });
  var savedLanguage = 'id';
  try { savedLanguage = localStorage.getItem('twi-language') || 'id'; } catch (_) { /* Keep the default language when storage is unavailable. */ }
  window.siteI18n.setLanguage(savedLanguage);
})();
