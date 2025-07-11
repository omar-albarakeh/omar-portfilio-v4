import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skills = [
    { title: "Frontend Development", icon: "/images/meter1.svg" },
    { title: "Backend Development", icon: "/images/meter2.svg" },
    { title: "API Integration", icon: "/images/meter3.svg" },
    { title: "DevOps & CI/CD", icon: "/images/meter1.svg" },
    { title: "Database Design", icon: "/images/meter2.svg" },
    { title: "Cloud Services (AWS/Azure)", icon: "/images/meter3.svg" },
    { title: "Version Control (Git)", icon: "/images/meter1.svg" },
    { title: "Unit & Integration Testing", icon: "/images/meter2.svg" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <motion.div
          className="skill-bx"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-description">
            A versatile full-stack developer with a passion for building
            efficient, scalable, and user-friendly applications. Here's a
            glimpse of my core skills:
          </p>

          <div className="skill-slider">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2500}
              itemClass="carousel-item-padding">
              {skills.map((skill, index) => (
                <div className="item" key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    <img src={skill.icon} alt={`${skill.title} Icon`} />
                    <h5>{skill.title}</h5>
                  </motion.div>
                </div>
              ))}
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
