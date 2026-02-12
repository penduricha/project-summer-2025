# 1. Base Image:
FROM node:20-alpine

# 2. Thiết lập Thư mục Làm việc:
# Thiết lập thư mục làm việc bên trong container.
WORKDIR /usr/src/app

# 3. Sao chép và Cài đặt Phụ thuộc:
# Tận dụng cache: Copy các tệp cấu hình dependencies trước.
# SỬA LỖI BÌNH LUẬN: Bỏ qua lệnh LABEL nếu không cần thiết
COPY package*.json ./

# Cài đặt các gói phụ thuộc (dependencies).
# Sử dụng cờ --silent hoặc --no-progress để giảm bớt output khi build.
RUN npm install --production

# 4. Sao chép Code Dự án:
# Copy toàn bộ mã nguồn vào thư mục làm việc đã định.
COPY . .

# 5. Cổng Tiếp xúcạ

# Thông báo cho thế giới bên ngoài container rằng cổng 3000 sẽ được sử dụng.
EXPOSE 3000

# 6. Lệnh Khởi động:
# Xác định lệnh sẽ chạy khi container khởi động.
CMD [ "node", "app.js" ]