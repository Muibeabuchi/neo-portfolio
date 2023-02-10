import './Footer.css';

const Footer = () => {

  const date = new Date();
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <h1 className="footer__title">NERDKIDCHIKI</h1>

        <ul className="footer__list">
          <li><a href="#About" className="footer__link">About</a></li>
          <li><a href="#Portfolio" className="footer__link">Projects</a></li>
          <li><a href="#Testimonials" className="footer__link">Testimonials</a></li>
        </ul>

        <div className="footer__social">
          <a href="https://instagram.com/" className="footer__social-link" target='_blank'>
              <i className="uil uil-instagram"></i>    
          </a>

          <a href="https://facebook.com/" className="footer__social-link" target='_blank'>
            <i className="uil uil-facebook"></i>
          </a>
      
          <a href="htpps://twitter.com/" className="footer__social-link" target='_blank'>
              <i className="uil uil-twitter-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
        &#169; NerdkidChiki {date.getFullYear()}. All rights reserved. 
        </span>
      </div>
    </footer>
  )
}

export default Footer