// ==========================================
// KUMPULAN FUNGSI HELPER (CLIENT-SIDE)
// ==========================================

function parsePackageCountsFront(pakejStr) {
  const p = (pakejStr || '').toLowerCase();
  let count15 = 0;
  let count30 = 0;
  const multi15 = p.match(/(\d+)\s*x\s*pakej\s*15/i);
  const multi30 = p.match(/(\d+)\s*x\s*pakej\s*30/i);
  
  if (multi15 || multi30) {
    if (multi15) count15 = parseInt(multi15[1], 10) || 0;
    if (multi30) count30 = parseInt(multi30[1], 10) || 0;
    return { count15: count15, count30: count30 };
  }
  
  const is30 = /(?:rm\s*)?(79|89)(?!\d)|30\s*(uncang|sachet|hari|days?)|2\s*pack|standar[td]/i.test(p);
  if (is30) { count30 = 1; } else { count15 = 1; }
  return { count15: count15, count30: count30 };
}

function getCityFromMalaysianPostcode(postcode) {
  const pc = parseInt(postcode, 10);
  if (isNaN(pc)) return { city: "", state: "" };

  if (pc >= 1000 && pc <= 2700) {
    if (pc === 2000) return { city: "Kuala Perlis", state: "Perlis" };
    if (pc === 2600) return { city: "Arau", state: "Perlis" };
    if (pc === 2700) return { city: "Padang Besar", state: "Perlis" };
    return { city: "Kangar", state: "Perlis" };
  }
  if (pc >= 5000 && pc <= 9810) {
    const st = "Kedah";
    if (pc >= 5000 && pc <= 5990) return { city: "Alor Setar", state: st };
    if (pc >= 6000 && pc <= 6010) return { city: "Kuala Kedah", state: st };
    if (pc >= 6050 && pc <= 6100) return { city: "Bukit Kayu Hitam", state: st };
    if (pc >= 6200 && pc <= 6300) return { city: "Kuala Nerang", state: st };
    if (pc >= 6400 && pc <= 6490) return { city: "Pokok Sena", state: st };
    if (pc >= 6500 && pc <= 6600) return { city: "Langgar", state: st };
    if (pc >= 6700 && pc <= 6760) return { city: "Pendang", state: st };
    if (pc >= 7000 && pc <= 7100) return { city: "Langkawi", state: st };
    if (pc >= 8000 && pc <= 8110) return { city: "Sungai Petani", state: st };
    if (pc >= 8150 && pc <= 8210) return { city: "Bedong", state: st };
    if (pc >= 8300 && pc <= 8350) return { city: "Gurun", state: st };
    if (pc >= 8400 && pc <= 8410) return { city: "Merbok", state: st };
    if (pc >= 8600 && pc <= 8610) return { city: "Tikam Batu", state: st };
    if (pc >= 9000 && pc <= 9020) return { city: "Kulim", state: st };
    if (pc >= 9100 && pc <= 9130) return { city: "Baling", state: st };
    if (pc >= 9200 && pc <= 9210) return { city: "Kupang", state: st };
    if (pc >= 9300 && pc <= 9310) return { city: "Kuala Ketil", state: st };
    if (pc >= 9400 && pc <= 9410) return { city: "Padang Serai", state: st };
    if (pc >= 9600 && pc <= 9610) return { city: "Lunas", state: st };
    if (pc >= 9800 && pc <= 9810) return { city: "Serdang", state: st };
    if (pc >= 6000 && pc <= 6999) return { city: "Jitra", state: st };
    return { city: "Alor Setar", state: st };
  }
  if (pc >= 10000 && pc <= 14400) {
    const st = "Pulau Pinang";
    if (pc >= 10000 && pc <= 10499) return { city: "George Town", state: st };
    if (pc >= 11000 && pc <= 11020) return { city: "Balik Pulau", state: st };
    if (pc >= 11100 && pc <= 11110) return { city: "Batu Ferringhi", state: st };
    if (pc >= 11200 && pc <= 11200) return { city: "Tanjung Bungah", state: st };
    if (pc >= 11400 && pc <= 11500) return { city: "Ayer Itam", state: st };
    if (pc >= 11600 && pc <= 11600) return { city: "Jelutong", state: st };
    if (pc >= 11700 && pc <= 11700) return { city: "Gelugor", state: st };
    if (pc >= 11900 && pc <= 11960) return { city: "Bayan Lepas", state: st };
    if (pc >= 12000 && pc <= 13020) return { city: "Butterworth", state: st };
    if (pc >= 13100 && pc <= 13110) return { city: "Penaga", state: st };
    if (pc >= 13200 && pc <= 13220) return { city: "Kepala Batas", state: st };
    if (pc >= 13300 && pc <= 13310) return { city: "Tasek Gelugor", state: st };
    if (pc >= 13500 && pc <= 13500) return { city: "Permatang Pauh", state: st };
    if (pc >= 13600 && pc <= 13700) return { city: "Perai", state: st };
    if (pc >= 14000 && pc <= 14020) return { city: "Bukit Mertajam", state: st };
    if (pc >= 14100 && pc <= 14120) return { city: "Simpang Ampat", state: st };
    if (pc >= 14200 && pc <= 14210) return { city: "Sungai Bakap", state: st };
    if (pc >= 14300 && pc <= 14320) return { city: "Nibong Tebal", state: st };
    return { city: "Bukit Mertajam", state: st };
  }
  if (pc >= 15000 && pc <= 18500) {
    const st = "Kelantan";
    if (pc === 16250) return { city: "Wakaf Bharu", state: st };
    if (pc >= 16200 && pc <= 16210) return { city: "Tumpat", state: st };
    if (pc >= 15000 && pc <= 16100) return { city: "Kota Bharu", state: st };
    if (pc >= 16300 && pc <= 16390) return { city: "Bachok", state: st };
    if (pc >= 16400 && pc <= 16450) return { city: "Melor", state: st };
    if (pc >= 16451 && pc <= 16500) return { city: "Ketereh", state: st };
    if (pc >= 16800 && pc <= 16860) return { city: "Pasir Puteh", state: st };
    if (pc >= 17000 && pc <= 17070) return { city: "Pasir Mas", state: st };
    if (pc >= 17200 && pc <= 17200) return { city: "Rantau Panjang", state: st };
    if (pc >= 17500 && pc <= 17510) return { city: "Tanah Merah", state: st };
    if (pc >= 18000 && pc <= 18030) return { city: "Kuala Krai", state: st };
    if (pc >= 18300 && pc <= 18300) return { city: "Gua Musang", state: st };
    if (pc >= 18500 && pc <= 18500) return { city: "Machang", state: st };
    return { city: "Kota Bharu", state: st };
  }
  if (pc >= 20000 && pc <= 24300) {
    const st = "Terengganu";
    if (pc >= 20000 && pc <= 21080) return { city: "Kuala Terengganu", state: st };
    if (pc >= 21200 && pc <= 21300) return { city: "Kuala Nerus", state: st };
    if (pc >= 21400 && pc <= 21450) return { city: "Marang", state: st };
    if (pc >= 21700 && pc <= 21700) return { city: "Kuala Berang", state: st };
    if (pc >= 22000 && pc <= 22020) return { city: "Jerteh", state: st };
    if (pc >= 22100 && pc <= 22120) return { city: "Kuala Besut", state: st };
    if (pc >= 22200 && pc <= 22300) return { city: "Besut", state: st };
    if (pc >= 23000 && pc <= 23050) return { city: "Dungun", state: st };
    if (pc >= 23100 && pc <= 23100) return { city: "Paka", state: st };
    if (pc >= 24000 && pc <= 24007) return { city: "Chukai", state: st };
    if (pc >= 24100 && pc <= 24100) return { city: "Kijal", state: st };
    if (pc >= 24200 && pc <= 24210) return { city: "Kerteh", state: st };
    if (pc >= 24300 && pc <= 24300) return { city: "Kemasek", state: st };
    return { city: "Kuala Terengganu", state: st };
  }
  if ((pc >= 25000 && pc <= 28800) || (pc >= 39000 && pc <= 39200) || pc === 49000 || pc === 69000) {
    const st = "Pahang";
    if (pc === 69000) return { city: "Genting Highlands", state: st };
    if (pc >= 39000 && pc <= 39010) return { city: "Tanah Rata", state: st };
    if (pc >= 39100 && pc <= 39200) return { city: "Brinchang", state: st };
    if (pc === 49000) return { city: "Fraser's Hill", state: st };
    if (pc >= 25000 && pc <= 25990) return { city: "Kuantan", state: st };
    if (pc >= 26050 && pc <= 26090) return { city: "Gambang", state: st };
    if (pc >= 26400 && pc <= 26480) return { city: "Bandar Pusat Jengka", state: st };
    if (pc >= 26500 && pc <= 26500) return { city: "Maran", state: st };
    if (pc >= 26600 && pc <= 26690) return { city: "Pekan", state: st };
    if (pc >= 26700 && pc <= 26710) return { city: "Muadzam Shah", state: st };
    if (pc >= 26800 && pc <= 26820) return { city: "Kuala Rompin", state: st };
    if (pc >= 27000 && pc <= 27090) return { city: "Jerantut", state: st };
    if (pc >= 27200 && pc <= 27200) return { city: "Kuala Lipis", state: st };
    if (pc >= 27600 && pc <= 27610) return { city: "Raub", state: st };
    if (pc >= 28000 && pc <= 28040) return { city: "Temerloh", state: st };
    if (pc >= 28400 && pc <= 28409) return { city: "Mentakab", state: st };
    if (pc >= 28600 && pc <= 28620) return { city: "Karak", state: st };
    if (pc >= 28700 && pc <= 28709) return { city: "Bentong", state: st };
    return { city: "Kuantan", state: st };
  }
  if (pc >= 30000 && pc <= 36810) {
    const st = "Perak";
    if (pc >= 30000 && pc <= 31400) return { city: "Ipoh", state: st };
    if (pc >= 31000 && pc <= 31009) return { city: "Batu Gajah", state: st };
    if (pc >= 31100 && pc <= 31120) return { city: "Sungai Siput", state: st };
    if (pc >= 31200 && pc <= 31200) return { city: "Chemor", state: st };
    if (pc >= 31600 && pc <= 31610) return { city: "Gopeng", state: st };
    if (pc >= 31650 && pc <= 31910) return { city: "Kampar", state: st };
    if (pc >= 32000 && pc <= 32040) return { city: "Sitiawan", state: st };
    if (pc >= 32100 && pc <= 32100) return { city: "Lumut", state: st };
    if (pc >= 32200 && pc <= 32200) return { city: "Seri Manjung", state: st };
    if (pc >= 32300 && pc <= 32300) return { city: "Pangkor", state: st };
    if (pc >= 33000 && pc <= 33040) return { city: "Kuala Kangsar", state: st };
    if (pc >= 34000 && pc <= 34030) return { city: "Taiping", state: st };
    if (pc >= 34200 && pc <= 34200) return { city: "Parit Buntar", state: st };
    if (pc >= 34300 && pc <= 34310) return { city: "Bagan Serai", state: st };
    if (pc >= 34600 && pc <= 34610) return { city: "Kamunting", state: st };
    if (pc >= 35000 && pc <= 35009) return { city: "Tapah", state: st };
    if (pc >= 35500 && pc <= 35500) return { city: "Bidor", state: st };
    if (pc >= 35600 && pc <= 35600) return { city: "Sungkai", state: st };
    if (pc >= 35800 && pc <= 35800) return { city: "Slim River", state: st };
    if (pc >= 35900 && pc <= 35910) return { city: "Tanjong Malim", state: st };
    if (pc >= 36000 && pc <= 36030) return { city: "Teluk Intan", state: st };
    return { city: "Ipoh", state: st };
  }
  if ((pc >= 40000 && pc <= 48300) || (pc >= 63000 && pc <= 68100)) {
    const st = "Selangor";
    if (pc >= 40000 && pc <= 40999) return { city: "Shah Alam", state: st };
    if (pc >= 42000 && pc <= 42009) return { city: "Pelabuhan Klang", state: st };
    if (pc === 42200) return { city: "Kapar", state: st };
    if (pc === 42300) return { city: "Bandar Puncak Alam", state: st };
    if (pc >= 42500 && pc <= 42500) return { city: "Telok Panglima Garang", state: st };
    if (pc === 42600) return { city: "Jenjarom", state: st };
    if (pc >= 42700 && pc <= 42700) return { city: "Banting", state: st };
    if (pc >= 41000 && pc <= 42999) return { city: "Klang", state: st };
    if (pc >= 43000 && pc <= 43009) return { city: "Kajang", state: st };
    if (pc >= 43200 && pc <= 43209) return { city: "Cheras", state: st };
    if (pc >= 43300 && pc <= 43300) return { city: "Seri Kembangan", state: st };
    if (pc >= 43500 && pc <= 43500) return { city: "Semenyih", state: st };
    if (pc >= 43600 && pc <= 43650) return { city: "Bandar Baru Bangi", state: st };
    if (pc >= 43800 && pc <= 43800) return { city: "Dengkil", state: st };
    if (pc >= 43900 && pc <= 43950) return { city: "Sepang", state: st };
    if (pc >= 44000 && pc <= 44100) return { city: "Kuala Kubu Bharu", state: st };
    if (pc >= 44200 && pc <= 44300) return { city: "Batang Kali", state: st };
    if (pc >= 45000 && pc <= 45000) return { city: "Kuala Selangor", state: st };
    if (pc >= 45400 && pc <= 45400) return { city: "Sekinchan", state: st };
    if (pc >= 46000 && pc <= 46999) return { city: "Petaling Jaya", state: st };
    if (pc >= 47000 && pc <= 47000) return { city: "Sungai Buloh", state: st };
    if (pc >= 47100 && pc <= 47190) return { city: "Puchong", state: st };
    if (pc >= 47300 && pc <= 47410) return { city: "Petaling Jaya", state: st };
    if (pc >= 47500 && pc <= 47650) return { city: "Subang Jaya", state: st };
    if (pc >= 47800 && pc <= 47830) return { city: "Petaling Jaya", state: st };
    if (pc >= 48000 && pc <= 48300) return { city: "Rawang", state: st };
    if (pc >= 63000 && pc <= 63300) return { city: "Cyberjaya", state: st };
    if (pc >= 64000 && pc <= 64000) return { city: "KLIA", state: st };
    if (pc >= 68000 && pc <= 68000) return { city: "Ampang", state: st };
    if (pc >= 68100 && pc <= 68100) return { city: "Batu Caves", state: st };
    return { city: "Shah Alam", state: st };
  }
  if (pc >= 50000 && pc <= 60000) return { city: "Kuala Lumpur", state: "Wilayah Persekutuan Kuala Lumpur" };
  if (pc >= 62000 && pc <= 62988) return { city: "Putrajaya", state: "Wilayah Persekutuan Putrajaya" };
  if (pc >= 70000 && pc <= 73509) {
    const st = "Negeri Sembilan";
    if (pc >= 70000 && pc <= 70990) return { city: "Seremban", state: st };
    if (pc >= 71000 && pc <= 71050) return { city: "Port Dickson", state: st };
    if (pc >= 71200 && pc <= 71200) return { city: "Rantau", state: st };
    if (pc >= 71700 && pc <= 71700) return { city: "Mantin", state: st };
    if (pc >= 71800 && pc <= 71809) return { city: "Nilai", state: st };
    if (pc >= 72000 && pc <= 72000) return { city: "Kuala Pilah", state: st };
    if (pc >= 72100 && pc <= 72120) return { city: "Bahau", state: st };
    if (pc >= 73000 && pc <= 73009) return { city: "Tampin", state: st };
    if (pc >= 73400 && pc <= 73470) return { city: "Gemas", state: st };
    if (pc >= 73500 && pc <= 73500) return { city: "Rembau", state: st };
    return { city: "Seremban", state: st };
  }
  if (pc >= 75000 && pc <= 78309) {
    const st = "Melaka";
    if (pc >= 75000 && pc <= 75990) return { city: "Melaka", state: st };
    if (pc >= 76100 && pc <= 76109) return { city: "Durian Tunggal", state: st };
    if (pc >= 77000 && pc <= 77009) return { city: "Jasin", state: st };
    if (pc >= 77300 && pc <= 77300) return { city: "Merlimau", state: st };
    if (pc >= 78000 && pc <= 78000) return { city: "Alor Gajah", state: st };
    if (pc >= 78300 && pc <= 78309) return { city: "Masjid Tanah", state: st };
    return { city: "Melaka", state: st };
  }
  if (pc >= 80000 && pc <= 86900) {
    const st = "Johor";
    if (pc >= 80000 && pc <= 81200) return { city: "Johor Bahru", state: st };
    if (pc >= 81300 && pc <= 81310) return { city: "Skudai", state: st };
    if (pc >= 81400 && pc <= 81400) return { city: "Senai", state: st };
    if (pc >= 81500 && pc <= 81500) return { city: "Pekan Nanas", state: st };
    if (pc >= 81550 && pc <= 81560) return { city: "Gelang Patah", state: st };
    if (pc >= 81700 && pc <= 81700) return { city: "Pasir Gudang", state: st };
    if (pc >= 81750 && pc <= 81750) return { city: "Masai", state: st };
    if (pc >= 81800 && pc <= 81800) return { city: "Ulu Tiram", state: st };
    if (pc >= 81900 && pc <= 81930) return { city: "Kota Tinggi", state: st };
    if (pc >= 82000 && pc <= 82020) return { city: "Pontian", state: st };
    if (pc >= 82200 && pc <= 82210) return { city: "Benut", state: st };
    if (pc >= 82300 && pc <= 82300) return { city: "Kukup", state: st };
    if (pc >= 83000 && pc <= 83009) return { city: "Batu Pahat", state: st };
    if (pc >= 83700 && pc <= 83720) return { city: "Yong Peng", state: st };
    if (pc >= 84000 && pc <= 84040) return { city: "Muar", state: st };
    if (pc >= 84900 && pc <= 84900) return { city: "Tangkak", state: st };
    if (pc >= 85000 && pc <= 85009) return { city: "Segamat", state: st };
    if (pc >= 85300 && pc <= 85300) return { city: "Labis", state: st };
    if (pc >= 86000 && pc <= 86009) return { city: "Kluang", state: st };
    if (pc >= 86200 && pc <= 86200) return { city: "Simpang Renggam", state: st };
    if (pc >= 86800 && pc <= 86810) return { city: "Mersing", state: st };
    return { city: "Johor Bahru", state: st };
  }
  if (pc >= 87000 && pc <= 87033) return { city: "Labuan", state: "Wilayah Persekutuan Labuan" };
  if (pc >= 88000 && pc <= 91309) {
    const st = "Sabah";
    if (pc >= 88000 && pc <= 88999) return { city: "Kota Kinabalu", state: st };
    if (pc >= 89000 && pc <= 89009) return { city: "Keningau", state: st };
    if (pc >= 89150 && pc <= 89160) return { city: "Kota Belud", state: st };
    if (pc >= 89200 && pc <= 89209) return { city: "Tuaran", state: st };
    if (pc >= 89300 && pc <= 89309) return { city: "Ranau", state: st };
    if (pc >= 89500 && pc <= 89509) return { city: "Penampang", state: st };
    if (pc >= 89600 && pc <= 89609) return { city: "Papar", state: st };
    if (pc >= 89800 && pc <= 89809) return { city: "Beaufort", state: st };
    if (pc >= 89900 && pc <= 89909) return { city: "Tenom", state: st };
    if (pc >= 90000 && pc <= 90009) return { city: "Sandakan", state: st };
    if (pc >= 91000 && pc <= 91038) return { city: "Tawau", state: st };
    if (pc >= 91100 && pc <= 91120) return { city: "Lahad Datu", state: st };
    if (pc >= 91300 && pc <= 91309) return { city: "Semporna", state: st };
    return { city: "Kota Kinabalu", state: st };
  }
  if (pc >= 93000 && pc <= 98859) {
    const st = "Sarawak";
    if (pc >= 93000 && pc <= 93999) return { city: "Kuching", state: st };
    if (pc >= 94000 && pc <= 94000) return { city: "Bau", state: st };
    if (pc >= 94300 && pc <= 94300) return { city: "Kota Samarahan", state: st };
    if (pc >= 94700 && pc <= 94700) return { city: "Serian", state: st };
    if (pc >= 95000 && pc <= 95008) return { city: "Sri Aman", state: st };
    if (pc >= 95700 && pc <= 95700) return { city: "Betong", state: st };
    if (pc >= 96000 && pc <= 96009) return { city: "Sibu", state: st };
    if (pc >= 96100 && pc <= 96100) return { city: "Sarikei", state: st };
    if (pc >= 96400 && pc <= 96400) return { city: "Mukah", state: st };
    if (pc >= 96500 && pc <= 96509) return { city: "Bintangor", state: st };
    if (pc >= 96800 && pc <= 96800) return { city: "Kapit", state: st };
    if (pc >= 97000 && pc <= 97012) return { city: "Bintulu", state: st };
    if (pc >= 98000 && pc <= 98009) return { city: "Miri", state: st };
    if (pc >= 98700 && pc <= 98700) return { city: "Limbang", state: st };
    if (pc >= 98850 && pc <= 98850) return { city: "Lawas", state: st };
    return { city: "Kuching", state: st };
  }
  return { city: "", state: "" };
}

function parseMalaysianAddress(rawAddr) {
  if (!rawAddr) return { address1: "", address2: "", city: "", state: "", postcode: "" };
  let addr = rawAddr.trim();
  let postcode = "";
  const pcMatch = addr.match(/\b(\d{5})\b/);
  if (pcMatch) postcode = pcMatch[1];
  let { city, state } = getCityFromMalaysianPostcode(postcode);

  const stateMap = [
    { name: "Wilayah Persekutuan Kuala Lumpur", aliases: ["kuala lumpur", "wp kuala lumpur", "kl"] },
    { name: "Wilayah Persekutuan Putrajaya", aliases: ["putrajaya"] },
    { name: "Wilayah Persekutuan Labuan", aliases: ["labuan"] },
    { name: "Pulau Pinang", aliases: ["pulau pinang", "penang"] },
    { name: "Negeri Sembilan", aliases: ["negeri sembilan", "n.sembilan", "n sembilan"] },
    { name: "Johor", aliases: ["johor", "johor bahru"] },
    { name: "Kedah", aliases: ["kedah"] },
    { name: "Kelantan", aliases: ["kelantan"] },
    { name: "Melaka", aliases: ["melaka", "malacca"] },
    { name: "Pahang", aliases: ["pahang"] },
    { name: "Perak", aliases: ["perak"] },
    { name: "Perlis", aliases: ["perlis"] },
    { name: "Sabah", aliases: ["sabah"] },
    { name: "Sarawak", aliases: ["sarawak"] },
    { name: "Selangor", aliases: ["selangor"] },
    { name: "Terengganu", aliases: ["terengganu", "trg"] }
  ];

  let matchedAliases = [];
  const lowerAddr = addr.toLowerCase();
  for (const st of stateMap) {
    for (const al of st.aliases) {
      const regex = new RegExp(`\\b${al}\\b`, 'i');
      if (regex.test(lowerAddr)) {
        if (!state) state = st.name;
        matchedAliases.push(al);
      }
    }
  }

  let cleanAddress1 = addr;
  if (postcode) cleanAddress1 = cleanAddress1.replace(new RegExp(`\\b${postcode}\\b`, 'gi'), '');
  if (city) cleanAddress1 = cleanAddress1.replace(new RegExp(`\\b${city.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'), '');
  if (state) cleanAddress1 = cleanAddress1.replace(new RegExp(`\\b${state.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'), '');
  for (const al of matchedAliases) {
    cleanAddress1 = cleanAddress1.replace(new RegExp(`\\b${al.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'), '');
  }

  cleanAddress1 = cleanAddress1.replace(/[\r\n]+/g, ', ').replace(/,\s*,+/g, ', ').replace(/^[\s,]+|[\s,]+$/g, '').replace(/\s{2,}/g, ' ').trim();
  return { address1: cleanAddress1 || addr, address2: "", city: city || "", state: state || "", postcode: postcode || "" };
}

function calculateCodAndWeight(pakejStr, shippingType, stateStr, fullAddress) {
  const p = (pakejStr || '').toLowerCase();
  const isCod = (shippingType || '').toUpperCase() === 'COD';
  const locationText = `${stateStr || ''} ${fullAddress || ''}`.toLowerCase();
  const isEastMalaysia = /sabah|sarawak|labuan/.test(locationText);

  let count15 = 0;
  let count30 = 0;

  const multi15 = p.match(/(\d+)\s*x\s*pakej\s*15/i);
  const multi30 = p.match(/(\d+)\s*x\s*pakej\s*30/i);

  if (multi15 || multi30) {
    if (multi15) count15 = parseInt(multi15[1], 10) || 0;
    if (multi30) count30 = parseInt(multi30[1], 10) || 0;
  } else {
    const is30 = /79|89|30\s*(uncang|sachet|hari|days?)|2\s*pack|standar[td]/i.test(p);
    if (is30) {
      count30 = 1;
    } else {
      count15 = 1;
    }
  }

  const totalPacks = count15 + count30;
  const weight = (count15 * 0.085) + (count30 * 0.17);

  let codAmount = 0.00;
  if (isCod) {
    const baseCost = (count15 * 49.00) + (count30 * 79.00);
    let surcharge = 0.00;

    if (isEastMalaysia) {
      if (totalPacks <= 2) {
        surcharge = 10.00;
      } else if (totalPacks <= 4) {
        surcharge = 20.00;
      } else {
        surcharge = 30.00;
      }
    }
    codAmount = baseCost + surcharge;
  }

  return { weight: Number(weight.toFixed(3)), cod: isCod ? codAmount.toFixed(2) : "0.00" };
}
