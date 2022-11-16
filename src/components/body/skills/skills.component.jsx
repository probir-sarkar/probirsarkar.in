import _ from "lodash";

import ProgressBar from "../progress-bar/progress-bar.component";

import { v4 as uuidv4 } from "uuid";
const skills = [
  {
    name: "HTML",
    icon: "fab fa-html5",
    color: "#E34F26",
    percentage: 75,
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt",
    color: "#264DE4",
    percentage: 75,
  },
  {
    name: "JavaScript",
    icon: "fab fa-js-square",
    color: "#F7DF1E",
    percentage: 65,
  },
  {
    name: "React",
    icon: "fab fa-react",
    color: "#61DAFB",
    percentage: 50,
  },
  {
    name: "Node",
    icon: "fab fa-node",
    color: "#339933",
    percentage: 40,
  },
  {
    name: "MongoDB",
    icon: "fas fa-database",
    color: "#47A248",
    percentage: 40,
  },
];

// divider array into half
const chunkedSkills = _.chunk(skills, skills.length / 2);

const SkillsSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title"> Skills</h2>
        <div className="row d-flex justify-content-around">
          <div className="col-lg-5">
            {chunkedSkills[0].map((skill) => {
              return <ProgressBar key={uuidv4()} {...skill} />;
            })}
          </div>
          <div className="col-lg-5">
            {chunkedSkills[1].map((skill) => {
              return <ProgressBar key={uuidv4()} {...skill} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
