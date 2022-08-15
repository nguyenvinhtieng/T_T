import type { NextPage } from 'next'
import Link from 'next/link'

const Header: NextPage = () => {
  return (
    <header className="header">
        <div className="header__logo">
          T_T
        </div>
        <div className="header__slogan">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="header__auth">
          <Link href="/about">
            <a className="btn btn01">Đăng nhập</a>
          </Link>
          <Link href="/about">
            <a className="btn btn02">Đăng ký</a>
          </Link>
        </div>
    </header>
  )
}

export default Header
