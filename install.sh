#!/data/data/com.termux/files/usr/bin/bash
set -e
pkg update -y
pkg install -y nodejs-lts git ffmpeg python
npm install
chmod +x start.sh
printf '\nSelesai. Jalankan: ./start.sh\n'
