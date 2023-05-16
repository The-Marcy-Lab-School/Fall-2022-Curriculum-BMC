import Project from './Project';

const ProjectList = ({projectNames}) => {
  return (
    <>
      {
        projectNames.map((projectName, i) => <Project key={i} name={projectName}/>)
      }
    </>
  )
}

export default ProjectList;