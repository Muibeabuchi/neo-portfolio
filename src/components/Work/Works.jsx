import { useEffect, useState } from "react";
import { ProjectData } from "../../Data/Data";
import { projectsNav } from "../../Data/Data";
import WorkItems from "./WorkItems";


// ! refactor the filtering system to pick between personal projects, clones,and ui/ux designs

const Works = () => {

    const [projects,setProjects] = useState([])
    const [item,setItem] = useState({name:'all'})
    const [active,setActive] = useState(0);


    useEffect(()=>{
        if(item.name==='all'){
            setProjects(ProjectData)
        }else{
            const newProject = ProjectData.filter((project) =>{
                return project.category== item.name
            })
            setProjects(newProject);
            // typeOf(console.log(typeOfnewProject));
            console.log(newProject);
            // console.log(projects);
        }

    },[item])

    function handleClick (e,index){
        setItem({name:e.target.textContent});
        setActive(index);
        console.log(e.target.textContent);
        console.log(projects);

    }

  return (

    <>
    <div className="work__filters">
        {
            projectsNav.map((item,index)=>{
                return(
                    <span 
                        className={active===index ? 'work__item active-work':'work__item'} 
                        onClick={e=>handleClick(e,index)} key={index}>{item.name}
                    </span>
                )
            })
        }
    </div>

    <div className="work__container container grid">
        {
            projects.map((item)=>{
            return <WorkItems item={item} key={item.id} />
        })
        }
    </div>

    </>
  )
}

export default Works