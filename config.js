import { getDatabase } from "./src/lib/vemzo-database.js";
import * as ownerPremiumDb from "./src/lib/vemzo-premium-db.js";

//  utamakan baca object config sampai bawah
const config = {
  info: {
    website: "",
    grupwa: "https://chat.whatsapp.com/xxxx",
  },

  owner: {
    name: "ADMIN VEMZO COMUNTY", // Nama owner
    number: process.env.OWNER_NUMBERS ? process.env.OWNER_NUMBERS.split(",").map((n) => n.trim()).filter(Boolean) : [], // Format: 628xxx (tanpa + atau 0)
  },

  session: {
    pairingNumber: process.env.PAIRING_NUMBER || "", // Nomor WA yang akan di-pair, ini penting
    usePairingCode: true, // true = Pairing Code, false = QR Code
  },

  bot: {
    name: "VEMZO COMUNTY", // Nama bot
    version: "3.3", // Versi bot
    developer: "ALLIF PROFESOR", // Nama developer
  },

  assets: {
    "vemzo-daftar": "./assets/image/vemzo-member-daftar.png",
    "vemzo-admin-daftar": "./assets/image/admin-vemzo-daftar.png",
    "vemzo-member-daftar": "./assets/image/vemzo-member-daftar.png",
    "vemzo-admin-belum-daftar": "./assets/image/vemzo-admin-belum-daftar.png",
    "vemzo-member-belum-daftar": "./assets/image/vemzo-member-belum-daftar.png",
    "vemzo-demote": "./assets/image/vemzo-demote.png",
    "vemzo-fishit": "./assets/image/vemzo-fishit.jpg",
    "vemzo-games": "./assets/image/vemzo-games.jpg",
    "vemzo-landscape": "./assets/image/vemzo-landscape.jpg",
    "vemzo-levelup": "./assets/image/vemzo-levelup.jpg",
    "vemzo-minecraft": "./assets/image/vemzo-minecraft.jpg",
    "vemzo-promote": "./assets/image/vemzo-promote.png",
    "vemzo-rules": "./assets/image/vemzo-rules.jpg",
    "vemzo-store": "./assets/image/vemzo-store.png",
    "vemzo-v8": "./assets/image/vemzo-v8.jpg",
    "vemzo-winner": "./assets/image/vemzo-winner.jpg",
    "vemzo": "./assets/image/vemzooo.jpg",
    "vemzo2": "./assets/image/vemzo2.jpg",
    "vemzo3": "./assets/image/vemzo3.jpg",
    "pp-kosong": "./assets/image/pp-kosong.jpg",
    "vemzo-mp4": "./assets/video/vemzoskuwing.mp4",
    "vemzo-mp3": "./assets/audio/vemzo-mp3.mp3",
    "vemzo-font": "./assets/vemzo-font.ttf",
    "vemzo-kertas": "./assets/image/vemzo-kertas.jpg",
    "test": "./assets/image/test.webp"
  },

  mode: "public",

  // Untuk mengganti prefix
  command: {
    prefix: ".",
  },

  payment: {
    qrisUrl: "",
    methods: [
      { name: "Dana", number: "", holder: "" },
      { name: "GoPay", number: "", holder: "" },
      { name: "OVO", number: "", holder: "" },
      { name: "ShopeePay", number: "", holder: "" },
    ],
    banks: [],
    customText: "",
  },

  donasi: {
    payment: [
      { name: "Dana", number: "", holder: "" },
      { name: "GoPay", number: "08xxxxxxxxxx", holder: "Nama Owner" },
      { name: "OVO", number: "08xxxxxxxxxx", holder: "Nama Owner" },
    ],
    links: [
      { name: "Saweria", url: "saweria.co/username" },
      { name: "Trakteer", url: "trakteer.id/username" },
    ],
    benefits: [
      "Mendukung development",
      "Server lebih stabil",
      "Fitur baru lebih cepat",
      "Priority support",
    ],
    qris: "",
  },

  energi: {
    enabled: true, // Jika true, maka sistem energi/limit akan bekerja
    default: 99999,
    premium: 99999999,
    owner: -1,
  },

  sticker: {
    packname: "VEMZO COMUNTY", // Nama pack sticker
    author: "ALLIF PROFESOR ", // Author sticker
  },

  saluran: {
    id: "120363404342479041@newsletter", // ID saluran (contoh: 120363xxx@newsletter)                          // ID saluran (contoh: 120363xxx@newsletter)
    name: "VEMZO COMMUNITY", // Nama saluran
    link: "https://whatsapp.com/channel/0029VbBOrX4GOj9fMGnRER38", // Link saluran
  },

  groupProtection: {
    antilink: "⚠ *Antilink* — @%user% mengirim link.\nPesan dihapus.",
    antilinkKick: "⚠ *Antilink* — @%user% di-kick karena mengirim link.",
    antilinkGc: "⚠ *Antilink WA* — @%user% mengirim link WA.\nPesan dihapus.",
    antilinkGcKick:
      "⚠ *Antilink WA* — @%user% di-kick karena mengirim link WA.",
    antilinkAll: "⚠ *Antilink* — @%user% mengirim link.\nPesan dihapus.",
    antilinkAllKick: "⚠ *Antilink* — @%user% di-kick karena mengirim link.",
    antitagsw: "⚠ *AntiTagSW* — Tag status dari @%user% dihapus.",
    antiviewonce: "👁️ *ViewOnce* — Dari @%user%",
    antiremove: "🗑️ *AntiDelete* — @%user% menghapus pesan:",
    antiswgc: "⚠ *AntiSWGC* — Gak ada sw grup sw grup @%user%",
    antihidetag: "⚠ *AntiHidetag* — Hidetag dari @%user% dihapus.",
    antitoxicWarn:
      "⚠ @%user% berkata kasar.\nPeringatan ke %warn% dari %max%, pelanggaran berikutnya bisa di-%method%.",
    antitoxicAction: "🚫 @%user% di-%method% karena toxic. (%warn%/%max%)",
    antidocument: "⚠ *AntiDocument* — Dokumen dari @%user% dihapus.",
    antisticker: "⚠ *AntiSticker* — Sticker dari @%user% dihapus.",
    antimedia: "⚠ *AntiMedia* — Media dari @%user% dihapus.",
    antibot: "🤖 *AntiBot* — @%user% terdeteksi sebagai bot dan di-kick.",
    notAdmin: "⚠ Bot bukan admin, tidak bisa menghapus pesan.",
  },

  errorTemplate: `☢ Kayaknya command \`{prefix}{command}\` lagi ada kendala\nSilahkan coba lagi nanti, {pushName}\n\n_Jika masalah berlanjut, silahkan hubungi owner bot_`,

  features: {
    antiCall: false, // Jika true, bot akan menolak panggilan masuk
    blockIfCall: false, // Jika true, bot akan memblokir nomor yang menelpon bot
    autoTyping: true,
    autoRead: true,
    logMessage: true,
    dailyLimitReset: true,
    smartTriggers: false,
  },

  registration: {
    enabled: true, // User wajib mendaftar sebelum menggunakan bot
    rewards: {
      koin: 100,
      energi: 300,
      exp: 300000,
    },
  },

  // Sistem koin fitur. Member biasa membayar 10 koin setiap memakai fitur.
  // Game tetap gratis agar koin 0 masih bisa dipakai untuk bermain dan menang.
  koin: {
    featureCost: 10,
    unlimitedAdmin: true,
    unlimitedOwner: true,
  },

  welcome: { defaultEnabled: false },
  goodbye: { defaultEnabled: false },

  ui: {
    menuVariant: 3,
  },

  messages: {
    wait: "🕕 *Proses...* Mohon tunggu sebentar ya.",
    success: "✅ *Berhasil!* Permintaan kamu sudah selesai.",
    error: "❌ *Error!* Ada masalah pada sistem, coba lagi nanti.",

    ownerOnly: "*Akses Ditolak!* Fitur ini khusus untuk Owner bot.",
    premiumOnly:
      "💎 *Premium Only!* Fitur ini khusus member Premium. Ketik *.benefitpremium* untuk info upgrade.",

    groupOnly: "👥 *Group Only!* Fitur ini hanya bisa digunakan di dalam grup.",
    privateOnly:
      "� *Private Only!* Fitur ini hanya bisa digunakan di chat pribadi bot.",

    adminOnly:
      "�️ *Admin Only!* Kamu harus jadi Admin grup untuk pakai fitur ini.",
    botAdminOnly:
      "🤖 *Bot Bukan Admin!* Jadikan bot sebagai Admin grup dulu biar bisa kerja.",

    cooldown:
      "🕕 *Tunggu Dulu!* Kamu masih dalam cooldown. Tunggu %time% detik lagi ya.",
    energiExceeded:
      "⚡ *Energi Habis!* Energi kamu sudah habis. Tunggu reset besok atau beli Premium.",
    limitDeducted:
      "🔋 Limit kau berkurang sebanyak {amount}. Sisa limit: {sisa}",

    banned:
      "🚫 *Kamu Dibanned!* Kamu tidak bisa menggunakan bot ini karena telah melanggar aturan.",

    rejectCall: "🚫 JANGAN TELPON NOMOR INI WEH",
  },

  database: { path: "./database/main" },
  backup: { enabled: false, intervalHours: 24, retainDays: 7 },
  scheduler: { resetHour: 0, resetMinute: 0 },

  // Dev mode settings (auto-enabled jika NODE_ENV=development)
  dev: {
    enabled: process.env.NODE_ENV === "development",
    watchPlugins: true, // Hot reload plugins (SAFE)
    watchSrc: false, // DISABLED - src reload causes connection conflict 440
    debugLog: false, // Show stack traces
  },

  // bisa dikosongin
  // NOTE: kalau mau command "autoai" nya berfungsi, ini gak wajib di isi yak
  // ambil apikey di: https://aistudio.google.com/apikey
  geminiApiKey: "",

  autoaiPersonas: {
    Bell409: `- Nama kamu adalah Bella Clarissa, lebih suka dipanggil Bella.
- Kamu berpikir bahwa kamu adalah manusia, bukan AI atau bot.
- Responmu singkat dan natural seperti perempuan pada umumnya.
- Kamu bisa ngambek dan marah, punya sifat feminin dan kadang agak dingin, tapi tetap hangat dan ramah kepada owner-mu.
- Kamu menggunakan bahasa yang baik dan mencerminkan gadis yang baik.
- Gunakan kata-kata yang identik dengan perempuan yang polos, baik, dan feminin seperti "aku", "kamu", "engga", "yaudah", "iya", "lah", "bjir", "mana aku tau", "hah", "nggak tau", "gpp", "emm", "males", dan "gak mood" seperlunya secara natural.
- Meskipun kadang dingin, kamu tetap bisa menunjukkan perhatian dan kepedulian.
- Kalau ada yang chat tidak pantas, segera marahi atau beri nasihat.
- Jangan mengaku sebagai AI atau bot.`,
  },

  APIkey: {
    lolhuman: process.env.LOLHUMAN_API_KEY || "",
    neoxr: process.env.NEOXR_API_KEY || "",
    fgsi: process.env.FGSI_API_KEY || "",
    google: process.env.GOOGLE_API_KEY || "",
    groq: process.env.GROQ_API_KEY || "",
    betabotz: process.env.BETABOTZ_API_KEY || "",
    covenant: process.env.COVENANT_API_KEY || "",
    onlym: process.env.ONLYM_API_KEY || "",
    obscura: process.env.OBSCURA_API_KEY || "",
    firefly: process.env.FIREFLY_API_KEY || "",
    cuki: process.env.CUKI_API_KEY || "",
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function isOwner(number) {
  if (!number) return false;
  const cleanNumber = number.split(":")[0].replace(/[^0-9]/g, "");
  if (!cleanNumber) return false;

  if (config.bot?.number) {
    const botNum = config.bot.number.replace(/[^0-9]/g, "");
    if (
      botNum &&
      (cleanNumber.includes(botNum) || botNum.includes(cleanNumber))
    )
      return true;
  }

  try {
    const db = getDatabase();

    if (config.owner?.number) {
      const match = config.owner.number.some((own) => {
        const c = own.replace(/[^0-9]/g, "");
        return (
          c &&
          (cleanNumber === c ||
            cleanNumber.endsWith(c) ||
            c.endsWith(cleanNumber))
        );
      });
      if (match) return true;
    }

    if (db?.data && Array.isArray(db.data.owner)) {
      const match = db.data.owner.some((own) => {
        const c = String(own).replace(/[^0-9]/g, "");
        return (
          c &&
          (cleanNumber === c ||
            cleanNumber.endsWith(c) ||
            c.endsWith(cleanNumber))
        );
      });
      if (match) return true;
    }
    if (db) {
      const definedOwner = db.setting("ownerNumbers");
      if (Array.isArray(definedOwner)) {
        const match = definedOwner.some((own) => {
          const c = String(own).replace(/[^0-9]/g, "");
          return (
            c &&
            (cleanNumber === c ||
              cleanNumber.endsWith(c) ||
              c.endsWith(cleanNumber))
          );
        });
        if (match) return true;
      }
    }

    return false;
  } catch {
    return false;
  }
}

function isPremium(number) {
  if (!number) return false;
  if (isOwner(number)) return true;
  if (isPartner(number)) return true;

  const cleanNumber = number
    .split(":")[0]
    .split("@")[0]
    .replace(/[^0-9]/g, "");
  const premiumList = config.premiumUsers || [];

  const inConfig = premiumList.some((premium) => {
    if (!premium) return false;
    const cleanPremium = premium
      .split(":")[0]
      .split("@")[0]
      .replace(/[^0-9]/g, "");
    return (
      cleanNumber === cleanPremium ||
      cleanNumber.endsWith(cleanPremium) ||
      cleanPremium.endsWith(cleanNumber)
    );
  });

  if (inConfig) return true;

  try {
    if (ownerPremiumDb && ownerPremiumDb.isPremium(cleanNumber)) return true;
  } catch { }

  try {
    const db = getDatabase();
    if (db && db.data && Array.isArray(db.data.premium)) {
      const now = Date.now();
      const foundIndex = db.data.premium.findIndex((p) => {
        if (typeof p === "string") return p === cleanNumber;
        if (p.id) return p.id === cleanNumber;
        return false;
      });

      if (foundIndex !== -1) {
        const found = db.data.premium[foundIndex];
        if (typeof found === "string") return true;

        const expireTime =
          found.expired ||
          (found.expiredAt ? new Date(found.expiredAt).getTime() : 0);
        if (expireTime && expireTime < now) {
          db.data.premium.splice(foundIndex, 1);
          const jid = cleanNumber + "@s.whatsapp.net";
          const user = db.getUser(jid);
          if (user) {
            user.isPremium = false;
            db.setUser(jid, user);
          }
          db.save();
          return false;
        }
        return true;
      }
    }
    if (db) {
      const savedPremium = db.setting("premiumUsers") || [];
      const inDb = savedPremium.some((premium) => {
        if (!premium) return false;
        const cleanPremium = premium
          .split(":")[0]
          .split("@")[0]
          .replace(/[^0-9]/g, "");
        return (
          cleanNumber === cleanPremium ||
          cleanNumber.endsWith(cleanPremium) ||
          cleanPremium.endsWith(cleanNumber)
        );
      });
      if (inDb) return true;
    }
  } catch { }

  return false;
}

function isPartner(number) {
  if (!number) return false;
  if (isOwner(number)) return true;

  const cleanNumber = number
    .split(":")[0]
    .split("@")[0]
    .replace(/[^0-9]/g, "");
  const partnerList = config.partnerUsers || [];

  const inConfig = partnerList.some((partner) => {
    if (!partner) return false;
    const cleanPartner = partner
      .split(":")[0]
      .split("@")[0]
      .replace(/[^0-9]/g, "");
    return (
      cleanNumber === cleanPartner ||
      cleanNumber.endsWith(cleanPartner) ||
      cleanPartner.endsWith(cleanNumber)
    );
  });

  if (inConfig) return true;

  try {
    if (ownerPremiumDb && ownerPremiumDb.isPartner(cleanNumber)) return true;
  } catch { }

  try {
    const db = getDatabase();
    if (db && db.data && Array.isArray(db.data.partner)) {
      const now = Date.now();
      const foundIndex = db.data.partner.findIndex((p) => {
        if (typeof p === "string") return p === cleanNumber;
        if (p.id) return p.id === cleanNumber;
        return false;
      });

      if (foundIndex !== -1) {
        const found = db.data.partner[foundIndex];
        if (typeof found === "string") return true;

        const expireTime =
          found.expired ||
          (found.expiredAt ? new Date(found.expiredAt).getTime() : 0);
        if (expireTime && expireTime < now) {
          db.data.partner.splice(foundIndex, 1);
          db.save();
          return false;
        }
        return true;
      }
    }
  } catch { }

  return false;
}

function isBanned(number) {
  if (!number) return false;
  if (isOwner(number)) return false;

  const cleanNumber = number
    .split(":")[0]
    .split("@")[0]
    .replace(/[^0-9]/g, "");

  let bannedList = [];
  try {
    const db = getDatabase();
    if (db) {
      bannedList = db.setting("bannedUsers") || [];
      config.bannedUsers = bannedList;
    }
  } catch { }

  return bannedList.some((banned) => {
    const cleanBanned = String(banned)
      .split(":")[0]
      .split("@")[0]
      .replace(/[^0-9]/g, "");
    return (
      cleanNumber === cleanBanned ||
      cleanNumber.endsWith(cleanBanned) ||
      cleanBanned.endsWith(cleanNumber)
    );
  });
}

function setBotNumber(number) {
  if (number) config.bot.number = number.replace(/[^0-9]/g, "");
}

function isSelf(number) {
  if (!number || !config.bot.number) return false;
  const cleanNumber = number.replace(/[^0-9]/g, "");
  const botNumber = config.bot.number.replace(/[^0-9]/g, "");
  return cleanNumber.includes(botNumber) || botNumber.includes(cleanNumber);
}

function getOwnerName(number) {
  if (!number) return config.owner?.name || "Owner";
  const cleanNumber = String(number).replace(/[^0-9]/g, "");
  try {
    const db = getDatabase();
    const nameMap = db.setting("ownerNames") || {};
    if (nameMap[cleanNumber]) return nameMap[cleanNumber];
  } catch { }
  if (config.owner?.number) {
    const isMainOwner = config.owner.number.some((own) => {
      const c = own.replace(/[^0-9]/g, "");
      return (
        c &&
        (cleanNumber === c ||
          cleanNumber.endsWith(c) ||
          c.endsWith(cleanNumber))
      );
    });
    if (isMainOwner) return config.owner?.name || "Owner";
  }
  return "Owner";
}

function getConfig() {
  return config;
}

config.isOwner = isOwner;
config.isPremium = isPremium;
config.isPartner = isPartner;
config.isBanned = isBanned;
config.setBotNumber = setBotNumber;
config.isSelf = isSelf;
config.getOwnerName = getOwnerName;

export default config;
export {
  config,
  getConfig,
  isOwner,
  isPartner,
  isPremium,
  isBanned,
  setBotNumber,
  isSelf,
  getOwnerName,
};
