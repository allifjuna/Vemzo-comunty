# VEMZO COMUNTY — Termux

Versi ini ditujukan untuk menjalankan bot langsung di Termux/Linux.

## Install

```bash
bash install.sh
```

## Jalankan

```bash
./start.sh
```

Atau:

```bash
npm start
```

## Konfigurasi aman

Salin `.env.example` menjadi `.env`, lalu isi nomor pairing dan API key yang memang kamu miliki. Jangan commit `.env` atau session WhatsApp.

## Struktur

`case/` dan seluruh plugin non-panel tetap dipertahankan. Komponen Pterodactyl/cPanel/VPS provisioning dan deployment hosting dihapus dari build Termux.
