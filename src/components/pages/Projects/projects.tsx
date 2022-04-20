import React from 'react'
import styles from "./projects.module.scss"


type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.info}>
        <h1>Here are my projects</h1>
        <p>
          ------------------------------------------------------
        </p>
      </div>
  )
}

export default Projects
