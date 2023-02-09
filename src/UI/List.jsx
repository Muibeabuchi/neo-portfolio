
const List = ({link, iconname}) => {
  return (
    <>
         <li className="nav__item">
            <a href={`#${link}`} className="nav__link ">
            <i className={`uil uil-${iconname} nav__icon`}></i>
            {link}
            </a>
        </li>
    </>
  )
}

export default List;