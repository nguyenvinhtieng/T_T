import type { NextPage } from 'next'
import Link from 'next/link'
import { AiFillHome } from "react-icons/ai";


const SideBar: NextPage = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__main">
        <Link href="/login">
          <div className="sidebar__item">
            <div className="icon">
              <AiFillHome />
            </div>
            <div className="txt">
              Trang chủ
            </div>
          </div>
        </Link>
        <Link href="/login">
          <div className="sidebar__item">
            <div className="icon">
              <AiFillHome />
            </div>
            <div className="txt">
              Bài đăng của tôi
            </div>
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default SideBar
