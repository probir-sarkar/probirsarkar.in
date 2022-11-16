import Typewriter from "typewriter-effect";
import "./hero.styles.scss";
const Hero = () => {
  return (
    <>
      <section className="hero-area mt-5 mt-lg-0 bg-dark">
        <div className="container hero-container d-flex align-items-center">
          <div className="row w-100 hero-row">
            <div className="col">
              <h2>
                <span className="title-text text-white">HI! I'm</span>
              </h2>
              <h2>
                <span className="title-text text-white">PROBIR SARKAR</span>
              </h2>
              <div className="text-light">
                <Typewriter
                  options={{
                    strings: ["Web Developer", "Web Designer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* div same as parent for graphics */}
        <div className="hero-graphics"></div>
      </section>
    </>
  );
};
export default Hero;
