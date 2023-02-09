import './Home.css';
import Social from '../../UI/Social';
import Data from '../../UI/Data';
import ScrollDown from '../../UI/ScrollDown';


const Home = () => {
  return (
    <section className="section home" id="Home">
        <div className="home__container container grid">
            <div className="home__content grid">

                <Social />  

                <div className="home__img"></div>

                <Data />

            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home