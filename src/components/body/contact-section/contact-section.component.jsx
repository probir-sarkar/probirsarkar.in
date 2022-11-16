import React from "react";
import { useForm } from "@formspree/react";
import "./contact-section.styles.scss";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xvoywwde");

  return (
    <section className="section contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title text-dark">Contact Info</h2>
          </div>
          <div className="col-lg-6 mx-auto">
            <div className="bg-white rounded text-center p-5 form-div">
              <h4 className="mb-80 mb-5">Contact Form</h4>
              <form className="row form" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Type Message Here"
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-6 col-10 mx-auto">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 p-3"
                    disabled={state.submitting || state.succeeded}
                  >
                    {state.succeeded
                      ? "Message Sent Already"
                      : state.submitting
                      ? "Sending..."
                      : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
