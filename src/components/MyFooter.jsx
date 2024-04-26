import { Col, Row, Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container className="bg-dark d-flex justify-content-center flex-column align-items-center pt-4" fluid>
      <Col xs={6}>
        <Row>
          <Col className="mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Row>
              <Col className="footer-links">
                <div>
                  <p alt="footer link">Audio and Subtitles</p>
                </div>
                <div>
                  <p alt="footer link">Media Center</p>
                </div>
                <div>
                  <p alt="footer link">Privacy</p>
                </div>
                <div>
                  <p alt="footer link">Contact us</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Row>
              <Col className="footer-links">
                <div>
                  <p alt="footer link">Audio Description</p>
                </div>
                <div>
                  <p alt="footer link">Investor Relations</p>
                </div>
                <div>
                  <p alt="footer link">Legal Notices</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Row>
              <Col className=" footer-links">
                <div>
                  <p alt="footer link">Help Center</p>
                </div>
                <div>
                  <p alt="footer link">Jobs</p>
                </div>
                <div>
                  <p alt="footer link">Cookie Preferences</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Row>
              <Col className=" footer-links">
                <div>
                  <p alt="footer link">Gift Cards</p>
                </div>
                <div>
                  <p alt="footer link">Terms of Use</p>
                </div>
                <div>
                  <p alt="footer link">Corporate Information</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={6}>
        <button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
          Service Code
        </button>
      </Col>
      <Col xs={6} className="mb-2 mt-2 copyright">
        © 1997-2023 Netflix, Inc.
      </Col>
    </Container>
  );
};
export default MyFooter;
