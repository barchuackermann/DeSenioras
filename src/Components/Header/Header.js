import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import SHeather from "./../IMG/SHeather.png";

const Header = () => {
  return (
    <>
      <Container fluid className="bg-berry">
        <Container>
          <Row className="header">
            <Col md={5} className="align-self-center">
              <img src={SHeather} className="heather" alt="Heather"></img>
            </Col>
            <Col md={7} className="align-self-center">
              <p className="title">
                <h2>Comunicación</h2>
                <h1>de Señoras</h1>
                <h3>Diseño, Web y Marketing Digital</h3>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Header;
