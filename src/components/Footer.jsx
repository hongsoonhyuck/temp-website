import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/soonhyuckhong"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Soonhyuck Hong
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version. Shoutout to Hashir Shoaib for the template.
          </small>
        </p>
        <a href="https://www.flaticon.com/free-icons/profile" title="profile icons">Profile icons created by Freepik - Flaticon</a>
      </Container>
    </footer>
  );
};

export default Footer;
