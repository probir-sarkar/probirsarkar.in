import "./progress-bar.styles.scss";

const levelChecker = (percentage) => {
  switch (true) {
    case percentage >= 75:
      return "Expert";
    case percentage >= 50:
      return "Intermediate";
    case percentage >= 25:
      return "Beginner";
    default:
      return "Novice";
  }
};

const ProgressBar = ({ name, percentage }) => {
  return (
    <div className="skill-progress mb-4">
      <p className="p-0 m-0 text-start fw-bolder fs-5">{name}</p>
      <div className="progress " style={{ height: "40px" }}>
        <div
          className="progress-bar"
          style={{
            width: `${percentage}%`,
          }}
        >
          <span className="progress-value text-end px-5 fs-6">
            {levelChecker(percentage)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
