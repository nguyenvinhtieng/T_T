import type { NextPage } from 'next'
import Link from 'next/link'

const Register: NextPage = () => {
  return (
    <div className="container">
      <div className="auth">
        <h1 className="auth__header">
          Đăng ký tài khoản
        </h1>
        <form action="">
          <div className="input__field">
            <input type="text" placeholder='Tên tài khoản' />
          </div>
          <div className="input__field">
            <input type="password" placeholder='Mật khẩu' />
          </div>
          <div className="input__field">
            <input type="password" placeholder='Nhập lại mật khẩu' />
          </div>
          <div className="input__field">
            <input type="password" placeholder='Email' />
            <div className="note infor">* Để nhận thông báo khi bạn không truy cập vào trang web thường xuyên</div>
          </div>
          <div className="input__field">
            <select name="" id="">
              <option value="">Mục đích của bạn là?</option>
              <option value="">Làm thuê bài tập</option>
              <option value="">Cần giúp bài tập</option>
            </select>
          </div>

          <button className="btn btn03">Đăng ký</button>

          <br />
          <Link href="/login">
            <a className='btn btn04'>Đăng nhập tại đây</a>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register
