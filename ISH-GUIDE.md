# Hướng dẫn chạy ShopUSD trên iSH

## 1. Cài đặt iSH và môi trường

### Mở iSH và cập nhật:
```bash
apk update
apk upgrade
```

### Cài đặt Node.js và npm:
```bash
apk add nodejs npm
```

### Kiểm tra version:
```bash
node -v
npm -v
```

---

## 2. Copy source code vào iSH

### Cách 1: Dùng Files app (Khuyến nghị)
1. Tải file `shommo-shop-source.tar.gz` về iPhone
2. Mở Files app → Tìm file đã tải
3. Nhấn giữ file → Share → "Save to Files" → chọn "On My iPhone"
4. Mở iSH, chạy:
```bash
# Tạo thư mục project
mkdir -p ~/projects
cd ~/projects

# Copy từ Files app (thường ở /var/mobile/Containers/Data/Application/...)
# Hoặc dùng lệnh find để tìm
cp /var/mobile/Containers/Shared/AppGroup/*/File\
Provider-Documents/shommo-shop-source.tar.gz .

# Giải nén
tar -xzf shommo-shop-source.tar.gz
```

### Cách 2: Dùng curl/wget (nếu có link)
```bash
cd ~/projects
# Thay YOUR_LINK bằng link thực tế
curl -L -o shommo-shop-source.tar.gz YOUR_LINK
tar -xzf shommo-shop-source.tar.gz
```

### Cách 3: Dùng iTunes File Sharing
1. Kết nối iPhone với máy tính
2. Mở iTunes/Finder → chọn iPhone → Files → iSH
3. Kéo file `shommo-shop-source.tar.gz` vào
4. Trên iSH:
```bash
cd ~/projects
tar -xzf shommo-shop-source.tar.gz
```

---

## 3. Cài đặt và chạy project

```bash
# Vào thư mục project
cd ~/projects/shommo-shop-source

# Cài đặt dependencies (có thể mất 5-10 phút trên iSH)
npm install

# Chạy dev server
npm run dev
```

**Lưu ý:** iSH chạy chậm hơn máy tính thường, quá trình `npm install` có thể mất vài phút.

---

## 4. Truy cập website

Sau khi chạy `npm run dev`, bạn sẽ thấy:
```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
  ➜  press h + enter to show help
```

### Truy cập trên cùng thiết bị:
- Mở Safari/Chrome trên iPhone
- Truy cập: `http://localhost:5173/`

### Truy cập từ thiết bị khác (cùng WiFi):
- Dùng địa chỉ Network: `http://192.168.x.x:5173/`

---

## 5. Build production

```bash
# Build file production
npm run build

# Kết quả sẽ ở thư mục dist/
ls -la dist/
```

---

## 6. Deploy (Tùy chọn)

### Deploy lên Vercel:
```bash
# Cài Vercel CLI
npm i -g vercel

# Login và deploy
vercel login
vercel --prod
```

### Deploy lên Netlify:
```bash
# Cài Netlify CLI
npm i -g netlify-cli

# Login và deploy
netlify login
netlify deploy --prod --dir=dist
```

---

## 7. Troubleshooting

### Lỗi "Cannot find module"
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Lỗi memory/performance
```bash
# Tăng memory limit cho Node
export NODE_OPTIONS="--max-old-space-size=1024"
npm run build
```

### iSH bị treo khi npm install
- iSH có giới hạn tài nguyên, chia nhỏ quá trình:
```bash
# Cài từng package riêng lẻ
npm install react react-dom
npm install -D vite typescript
# ...v.v
```

---

## 8. Script tự động (tùy chọn)

Tạo file `start.sh`:
```bash
#!/bin/sh
cd ~/projects/shommo-shop-source
npm run dev
```

Chạy:
```bash
chmod +x start.sh
./start.sh
```

---

## Tips

1. **Dùng tmux/screen** để giữ server chạy ngầm:
   ```bash
   apk add tmux
   tmux new -s shop
   # Chạy server trong tmux
   # Nhấn Ctrl+B rồi D để detach
   tmux attach -t shop  # để quay lại
   ```

2. **Tắt server:** Nhấn `Ctrl+C`

3. **Chạy ngầm:**
   ```bash
   npm run dev &
   ```
