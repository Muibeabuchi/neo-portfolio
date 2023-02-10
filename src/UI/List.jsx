
const List = ({link, iconname,activeNav,setActiveNav}) => {
  return (
    <>
         <li className="nav__item">
            <a href={`#${link}`} onClick={()=>setActiveNav(link)} className={activeNav===`#${link}`?'active-link nav__link':'nav__link'}>
            <i className={`uil uil-${iconname} nav__icon`}></i>
            {link}
            </a>
        </li>
    </>
  )
}

export default List;