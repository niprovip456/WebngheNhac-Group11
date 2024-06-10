<h1 align= center><b>⭐️ Web nghe nhạc nhóm 11 ⭐️</b></h1>

## Thành viên
|MSSV|Contributor|Họ và tên|
|:--------|:-------------|:-----------------------|
|21522312|niprovip456|Phùng Đức Lương|
|21522492|SnCorn|Ngô Minh Quân|
|22521093|Garcon04|Trần Thanh Phong|
|20521103|TyFlick|Mai Quốc Bảo|
|20521537|klinh000|Tống Khánh Linh|

## Sơ đồ chức năng:
   ![image](https://github.com/niprovip456/WebngheNhac-Group11/assets/129501122/4208ad6e-12d4-4215-8893-54bd2610faff)


## Công nghệ chính

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=flat&logo=SASS&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)

## Set up môi trường, cài đặt các gói phụ thuộc 

---

Pull hoặc git cclone repo về rồi gõ các câu lệnh sau:

```bash
npm install
npm run build
npm start
```


## ✨ <a name="features"></a>Chức năng
-   Phát nhạc liên tục trên nhiều trang
-   Đầy đủ các chức năng điều khiển cơ bản như: Play, Pause, Next, Previous, Lặp lại, Phát ngẫu nhiên, Tăng giảm âm lượng, Tải xuống bài hát yêu thích...
-   Thay đổi hình nền của trang web
-   Danh sách phát nhạc động từ nhiều nguồn khác nhau
-   UI linh hoạt trên các nền tảng laptop, tablet, di động.
-   Quản lý bài hát, nghệ sĩ yêu thích
-   Nghe radio, podcast chữa lành

<br />

## Các tiêu chí cộng điểm'
---
-   Video Seminar

![image](https://github.com/niprovip456/WebngheNhac-Group11/assets/129501122/6a2fcca0-484c-4b38-aa7a-345d8787b638)

---
-   UX/UI đẹp

![image](https://github.com/niprovip456/WebngheNhac-Group11/assets/129501122/70119fc7-4105-4ee5-8a4b-3cc0d936d77c)

---
-   Deploy Web

![image](https://github.com/niprovip456/WebngheNhac-Group11/assets/129501122/feb8a775-a29a-4050-8c86-3d3dbd004a56)

---
-   SEO Score > 90

![image](https://github.com/niprovip456/WebngheNhac-Group11/assets/129501122/b61cecbf-2dc0-42c7-88fd-5581bd518c3e)

---
-   Có tính năng nâng cao Search Auto Complete
![image](https://github.com/niprovip456/WebngheNhac-Group11/assets/129501122/622c9408-8421-4704-af48-b563249e7b05)

---
# Seminar: Ruby on Rails 
***1. Ruby hỗ trợ quản lý CSDL như thế nào?***
- Ruby hỗ trợ quản lý cơ sở dữ liệu (CSDL) thông qua nhiều thư viện và công cụ, nhưng nổi bật nhất là Active Record, một phần của framework Ruby on Rails. Dưới đây là cách Ruby, đặc biệt là Ruby on Rails, hỗ trợ quản lý CSDL:
<h2><b>1. Active</b></h2>
- Active Record là một ORM (Object-Relational Mapping) được tích hợp sẵn trong Ruby on Rails. Nó cung cấp một cách tiếp cận thân thiện với lập trình viên để làm việc với cơ sở dữ liệu. Một số tính năng và lợi ích chính có thể kể đến của Active Record như:
  - Mapping Objects to Tables: Active Record tự động ánh xạ các lớp Ruby vào các bảng trong cơ sở dữ liệu. Ví dụ, một lớp User trong Ruby sẽ tương ứng với bảng users trong CSDL.
  - CRUD Operations: Active Record cung cấp các phương thức để thực hiện các thao tác CRUD (Create, Read, Update, Delete) một cách dễ dàng. Ví dụ:
```sh
user = User.new(name: "Luong", email: "luonq@example.com")
user.save  # Create

user = User.find(1)  # Read
user.update(email: "newemail@example.com")  # Update
user.destroy  # Delete
```
  - Validations: Active Record hỗ trợ các xác thực dữ liệu dễ dàng để đảm bảo tính nhất quán và hợp lệ của dữ liệu.
```sh
class User < ApplicationRecord
  validates :name, presence: true
  validates :email, uniqueness: true
end
```
  - Associations: Active Record cung cấp các phương thức để thiết lập mối quan hệ giữa các bảng như belongs_to, has_many, has_one, has_and_belongs_to_many.
```sh
class User < ApplicationRecord
  has_many :posts
end

class Post < ApplicationRecord
  belongs_to :user
end
```
**2. Migrations**
Migrations trong Rails cho phép quản lý các thay đổi trong cấu trúc cơ sở dữ liệu theo thời gian. Chúng cung cấp một cách để phiên bản hóa và áp dụng các thay đổi đối với CSDL.

  - Tạo Migrations: Tạo một migration bằng lệnh:
```sh
rails generate migration AddEmailToUsers email:string
```
  - Chạy Migrations: Để áp dụng các thay đổi trong migration, chạy:
```sh
rails db:migrate
```
  - Rollback Migrations: Quay lại migration trước đó nếu cần:
```sh
rails db:rollback
```
**3. Query Interface**
Active Record cung cấp một query interface mạnh mẽ, cho phép truy vấn CSDL một cách dễ dàng và trực quan.

  - Basic Queries:
```sh
users = User.where(active: true)
user = User.find_by(email: "luong@example.com")
```
  - Advanced Queries:
```sh
users = User.joins(:posts).where("posts.created_at > ?", 1.week.ago)
```
  - Scopes: Định nghĩa các scopes để tái sử dụng các truy vấn phức tạp.
```sh
class User < ApplicationRecord
  scope :active, -> { where(active: true) }
  scope :recent, -> { order(created_at: :desc) }
end
```
**4. Database Configuration**
- Rails cung cấp một tệp cấu hình (config/database.yml) để thiết lập kết nối với nhiều loại CSDL như SQLite, MySQL, PostgreSQL, và nhiều loại khác.
```sh
default: &default
  adapter: postgresql
  encoding: unicode
  pool: 5

development:
  <<: *default
  database: myapp_development

test:
  <<: *default
  database: myapp_test

production:
  <<: *default
  database: myapp_production
  username: myapp
  password: <%= ENV['MYAPP_DATABASE_PASSWORD'] %>
```
**5. Database Tasks**
Rails cung cấp nhiều tác vụ (tasks) để quản lý cơ sở dữ liệu dễ dàng thông qua dòng lệnh:

  - Setup Database:
```sh
rails db:setup
```
  - Create Database:
```sh
rails db:create
```
  - Drop Database:
```sh
rails db:drop
```
  - Migrate Database:
```sh
rails db:migrate
```
  - Seed Database:
```sh
rails db:seed
```
***2. Tại sao phải sử dụng  Ruby on Rails so với các ngôn ngữ lập trình khác?***
- Có nhiều lý do tại sao lập trình viên lại chọn sử dụng Ruby on Rails thay vì các ngôn ngữ lập trình khác, đó là vì:

  - Tính đơn giản và hiệu quả: Ruby on Rails được thiết kế với triết lý "Convention over Configuration", giúp lập trình viên tập trung vào việc xây dựng các tính năng hay quy  thay vì phải đối mặt với các cấu hình phức tạp. Điều này giúp tăng tốc độ phát triển và giảm thời gian lập trình.
  - Cộng đồng mạnh mẽ: Ruby on Rails có một cộng đồng lập trình viên rất lớn và sôi nổi, cung cấp rất nhiều tài nguyên, hướng dẫn và thư viện mã nguồn mở có sẵn.
  - Tính linh hoạt và mở rộng: Rails cung cấp một cấu trúc module hóa mạnh mẽ, cho phép lập trình viên dễ dàng thêm, sửa đổi và mở rộng các tính năng của ứng dụng.
  - Hiệu suất cao: Với bộ công cụ và framework mạnh mẽ, Rails có thể giúp lập trình viên xây dựng các ứng dụng web với hiệu suất cao, đặc biệt là đối với các dự án có yêu cầu phức tạp.
  - Hỗ trợ tốt cho các yêu cầu phổ biến: Rails cung cấp sẵn các tính năng phổ biến như quản lý phiên, bảo mật, xác thực, cơ sở dữ liệu, v.v. giúp lập trình viên tập trung vào các tính năng chính của ứng dụng.
  - Tích hợp với nhiều công nghệ khác: Rails có thể dễ dàng tích hợp với các công nghệ như JavaScript, HTML, CSS, và nhiều công nghệ khác để xây dựng các ứng dụng web đầy đủ tính năng.
  - Phù hợp với mô hình MVC: Rails tuân theo mô hình Model-View-Controller (MVC), giúp tổ chức và quản lý code một cách rõ ràng, dễ bảo trì và mở rộng.
   












