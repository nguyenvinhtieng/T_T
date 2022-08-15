import type { NextPage } from 'next'
import Link from 'next/link'

const Login: NextPage = () => {
  return (
    <div className="container">
      <div className="auth">
        <h1 className="auth__header">
          Đăng nhập
        </h1>
        <form action="">
          <div className="input__field">
            <input type="text" placeholder='Tên tài khoản' />
          </div>
          <div className="input__field">
            <input type="password" placeholder='Mật khẩu' />
          </div>
          <button className="btn btn03">Đăng nhập</button>
          <Link href="/forgot">
            <a className="txt-gray" href="">Quên mật khẩu?</a>
          </Link>
          <br />
          <Link href="/register">
            <a className='btn btn04'>Tạo tài khoản mới?</a>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
