import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import "./certificate.style.scss";

const Certificate = ({ certificate, index }) => {
  const { title, institute, year, description } = certificate;
  const isDark = index % 2 === 0;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-3 px-3">
      <div
        className={`text-center certificate-card box h-100 
      ${isDark ? "bg-dark text-light" : "bg-white text-dark"}`}
      >
        <div className={`card-body text-center p-4`}>
          <FontAwesomeIcon
            icon={faCertificate}
            className="mb-3 text-primary"
            size="3x"
          />
          <h3 className="card-title">{title}</h3>
          <div className="card-text">
            <p className="">
              {institute} ({year})
            </p>
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certificate;
