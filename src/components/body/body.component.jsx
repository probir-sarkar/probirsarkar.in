import Hero from "./hero/hero.component";
import About from "./about/about.component";
import SkillsSection from "./skills/skills.component";
import EducationSection from "./education-section/education-section.component";
import CertificationSection from "./certification-section/certification-section.component";
import ContactSection from "./contact-section/contact-section.component";
import FooterSection from "./footer-section/footer-section.component";
const Body = () => {
  return (
    <div className="body">
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <EducationSection />
        <CertificationSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};
export default Body;
