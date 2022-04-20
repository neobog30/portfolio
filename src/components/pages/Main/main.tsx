import React from 'react';
import styles from "./main.module.scss";
import kuva from '../../../media/profileimg.jpg';

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>

      <div className={styles.profile}>
        <div className={styles.profileImg}>
          <img src={kuva} alt='Kuva ei toimi =(' />
        </div>
      </div>

      <div className={styles.info}>
        <h1>Welcome to my portfolio website</h1>
        <p>
          My name is Neo Bognomini. I'm currently studying programming at Varia. Here's my CV and some of my projects.
        </p>
      
        

      </div>


      {/* <div className={styles.a}>
        <div className={styles.a_a}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas molestiae dolores necessitatibus ipsum perferendis iste reprehenderit, possimus error impedit debitis dicta iure quae eius incidunt id commodi blanditiis quos iusto.
          </p>
        </div>
        <div className={styles.a_b}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed cum saepe repudiandae assumenda veritatis nam suscipit enim fugiat, laudantium, provident at delectus quasi adipisci voluptatem earum sequi culpa doloremque? Vitae modi voluptas possimus natus, placeat quam laudantium fugiat, voluptatibus rerum cumque laboriosam, eaque cupiditate! Qui exercitationem et iste incidunt.
        </div>
      </div> */}
    </div>
  )
}

export default Main
