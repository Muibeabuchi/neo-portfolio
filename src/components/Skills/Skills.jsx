import './Skills.css';
import Frontend from '../../UI/Frontend';
import Backend from '../../UI/Backend';


const Skills = () => {
  return (
    <section className="section skills" id="Skills">
        <h2 className='section__title'>Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills

// CREATE  AN ARRAY OF DATA TO MAP THROUGH AND DISPLAY SKILLS