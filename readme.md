# Actor: 
- Admin
- User
- Freelancer

# Feature
Common:
  + Chat User - Admin
  + Chat Freelancer - Admin
  Note: Không cho chat giữa user và freelancer

User:
  + Taọ bài tập
    - Tiêu đề
    - Ngành
    - Môn
    - Mô tả
    - File đính kèm
    - Giá
    - Deadline
  + Xóa bài tập
    - Nếu chưa ai nhận
  + Sửa bài tập
    - Nếu chưa ai nhận
    - Nếu có người nhận thì có thể request 
      (Freelancer sẽ thấy yêu cầu sửa, nếu oke thì freelancer bấm xác nhận, còn nếu yêu cầu sửa k hợp lý thì bỏ qua)
  + Xem bài tập

Admin:
  + Duyệt bài tập

Freelancer:
  + Nhận bài tập

# Page
Common:
  Login
  Register ( User Account - Freelancer Account)

Admin:
  Trang duyệt bài tập
  Trang quản lý user
  Trang quản lý freelancer
  Trang chat với User (logic khó)
  Trang chat với Freelancer (logic khó)
  Quản lý category (not required)
  Thông báo (not required)

User:
  Tạo bài tập
  Bài tập của tôi (Edit + Delete + View)
  Chat
  Thông báo (Khi có ai nhận hoặc gì đó)

Freelancer:
  Newfeed các bài tập available
  My Job
  Chat
  My information 
  Thông báo
