import "./footer-section.styles.scss";

const FooterSection = () => {
  return (
    <footer>
      <div className=" footer-section bg-dark">
        <div className="container">
          <div className="row w-lg-75">
            <div className="col-md-4">
              <h5 className="text-light">Email</h5>
              <p className="text-white paragraph-lg font-secondary">
                probirsarkar855@gmail.com
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-light">Phone</h5>
              <p className="text-white paragraph-lg font-secondary">
                +91 95115 49471
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-light">Address</h5>
              <p className="text-white paragraph-lg font-secondary">
                Kolkata,India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
