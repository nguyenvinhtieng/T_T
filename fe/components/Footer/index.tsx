import type { NextPage } from 'next'
import infors from '../../constants/infor';
import { BsFacebook, BsGithub } from "react-icons/bs";
const Footer: NextPage = () => {
  console.log(infors)
  return (
    <footer className='footer'>
      <div className="txt">
        © {infors.created} version {infors.version}. {infors.authors.join(" and ")}
      </div>
      <div className="footer__contact">
        <div className="footer__contact-item">
          <a href="#!" target="_blank">
            Facebook
            <BsFacebook />
          </a>
        </div>
        <div className="footer__contact-item">
          <a href="#!" target="_blank">
            Sourcecode
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
