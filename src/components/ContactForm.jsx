// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: "Message sent successfully" });
//     } else {
//       setStatus({
//         succes: false,
//         message: "Something went wrong, please try again later.",
//       });
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <img
//                   className={
//                     isVisible ? "animate__animated animate__zoomIn" : ""
//                   }
//                   src="/images/contact-img.svg"
//                   alt="Contact Us"
//                 />
//               )}
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }>
//                   <h2>Get In Touch</h2>
//                   <form onSubmit={handleSubmit}>
//                     <Row>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.firstName}
//                           placeholder="First Name"
//                           onChange={(e) =>
//                             onFormUpdate("firstName", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.lasttName}
//                           placeholder="Last Name"
//                           onChange={(e) =>
//                             onFormUpdate("lastName", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="email"
//                           value={formDetails.email}
//                           placeholder="Email Address"
//                           onChange={(e) =>
//                             onFormUpdate("email", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="tel"
//                           value={formDetails.phone}
//                           placeholder="Phone No."
//                           onChange={(e) =>
//                             onFormUpdate("phone", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} className="px-1">
//                         <textarea
//                           rows="6"
//                           value={formDetails.message}
//                           placeholder="Message"
//                           onChange={(e) =>
//                             onFormUpdate("message", e.target.value)
//                           }></textarea>
//                         <button type="submit">
//                           <span>{buttonText}</span>
//                         </button>
//                       </Col>
//                       {status.message && (
//                         <Col>
//                           <p
//                             className={
//                               status.success === false ? "danger" : "success"
//                             }>
//                             {status.message}
//                           </p>
//                         </Col>
//                       )}
//                     </Row>
//                   </form>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };


import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const templateParams = {
      first_name: formDetails.firstName,
      last_name: formDetails.lastName,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    emailjs
      .send(
        "service_5teqdkq",    // replace with your EmailJS service ID
        "template_rsnbgwm",   // replace with your EmailJS template ID
        templateParams,
        "F_xJjpn_wOkgV3FQr"     // replace with your EmailJS public key
      )
      .then(
        (response) => {
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: "Message sent successfully" });
        },
        (err) => {
          setButtonText("Send");
          setStatus({
            success: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src="/images/contact-img.svg"
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
