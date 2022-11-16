import Certificate from "../certificates/certificate.component";
import "./certification-section.styles.scss";

const certifications = [
  {
    id: 1,
    title: "SEO Training Certification Course",
    institute: "HubSpot Academy",
    year: "Sep 2021",
    description:
      "3 Total Hours of online SEO Training Certification Course from",
  },
  {
    id: 2,
    title: "The Fundamental Of Digital Marketing",
    institute: "Google Digital Unlocked",
    year: "Aug 2021 - Sep 2021",
    description:
      "Fundamentals of digital marketing Course from Google Digital Unlocked.",
  },
  {
    id: 3,
    title: "The Complete Digital Marketing Course",
    institute: "Udemy",
    year: "Jul 2021 - Sep 2021",
    description:
      "The Complete Digital Marketing Course - 12 Courses in 1 from Udemy.",
  },
];

const CertificationSection = () => {
  return (
    <section className="section certification-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="text-dark section-title">Certifications</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {certifications.map((certification, index) => (
            <Certificate
              key={certification.id}
              certificate={certification}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CertificationSection;
