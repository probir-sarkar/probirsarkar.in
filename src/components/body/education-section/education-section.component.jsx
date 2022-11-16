import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import "./education-section.style.scss";

const EducationSection = () => {
  const educations = [
    {
      id: 1,
      title: "B.Tech in CSE",
      institute: "Bengal Institute of Technology and Management",
      year: "2019-2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
    {
      id: 2,
      title: "Diploma in CST",
      institute: "Santiniketan Institute of Polytrchnic",
      year: "2015-2017",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
    {
      id: 3,
      title: "Secondary",
      institute: "Ausgram High School",
      year: "2013-2014",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
  ];
  return (
    <section className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="row">
          {educations.map((education) => {
            const { id, title, institute, year } = education;
            return (
              <div className="col-lg-4 col-md-6 px-4 my-3" key={id}>
                <div className="card text-dark">
                  <div className="card-body d-flex">
                    <div className="mr-lg-0 me-3">
                      <FontAwesomeIcon
                        icon={faAward}
                        className="text-primary "
                        size="2x"
                      />
                    </div>
                    <div>
                      <p className=" mb-1 pr-2">{year}</p>
                      <h5>{title}</h5>
                      <p className="mb-0">{institute}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
