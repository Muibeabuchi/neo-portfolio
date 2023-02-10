import { useState } from 'react';
import './Header.css';    
import List from '../../UI/List';


    const Header = () => {

        window.addEventListener('scroll',function(){
            const header = document.querySelector('.header');
            if (this.scrollY >= 80) header.classList.add('.scroll-header')
            else header.classList.remove('.scroll-header');
        })

        const [activeNav,setActiveNav] = useState('#Home');
        // SHOW MENU
        const [toggle,setToggle] = useState(false);

      return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">NERDKIDCHIKI</a>

                <div className={toggle ?'nav__menu show-menu' :"nav__menu"}>
                    <ul className="nav__list grid">

                        <List link='Home' iconname='estate' activeNav={activeNav} setActiveNav={setActiveNav}/>
                        <List link='About' iconname='user' activeNav={activeNav} setActiveNav={setActiveNav}/>
                        <List link='Skills' iconname='file-alt' activeNav={activeNav} setActiveNav={setActiveNav}/>
                        <List link='Services' iconname='briefcase-alt' activeNav={activeNav} setActiveNav={setActiveNav}/>
                        <List link='Portfolio' iconname='scenery' activeNav={activeNav} setActiveNav={setActiveNav}/>
                        <List link='Contact' iconname='message' activeNav={activeNav} setActiveNav={setActiveNav}/>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={()=>setToggle(prev=> !prev)}></i>
                </div>


                <div className="nav__toggle" onClick={()=>setToggle(prev => !prev)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
      )
    }
    
    export default Header;