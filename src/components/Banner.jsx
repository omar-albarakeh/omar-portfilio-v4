import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const useTypewriter = (words, period = 2000) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      } else {
        setDelta(isDeleting ? 100 : 150);
      }
    };

    const ticker = setTimeout(handleTyping, delta);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, delta, loopNum, words, period]);

  return text;
};

const Banner = () => {
  const typewriterText = useTypewriter([
    "Full Stack Developer",
    "Web Designer",
    "Mobile Developer",
  ]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Omar `}
                <span className="txt-rotate">
                  <span className="wrap">
                    {typewriterText}
                    <span className="cursor">|</span>
                  </span>
                </span>
              </h1>
              <p>
                I’m a passionate developer who builds modern web and mobile
                experiences. Let’s create something amazing together!
              </p>
              <button
                onClick={() => console.log("connect")}
                className="connect-button"
                aria-label="Connect with Omar">
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </motion.div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}>
              <img
                src="/images/header-img.svg"
                alt="Omar waving from a tech-themed illustration"
                className="img-fluid"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
