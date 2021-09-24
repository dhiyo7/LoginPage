import { Tab } from "bootstrap";
import Tabs from "react-bootstrap/Tabs";
import React, { useState } from "react";
import { SignIn, SignUp } from "../../components/molecules";
import "./Style.css";
import { Col, Container, Modal } from "react-bootstrap";

export default function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState(null);

  const successSignIn = (value) => {
    setModalShow(true)
    setUser(value)
  }

  return (
    <div className="tabs-form">
      <Container>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <h4 className="text-center">
             Welcome {(user && user.fullname)}
            </h4>
          </Modal.Body>
        </Modal>
        <Col sm="8" className="content-center">
          <Tabs defaultActiveKey="signIn" id="uncontrolled-tab-example">
            <Tab eventKey="signIn" title="Sign In" className="border-tab">
              <SignIn successSignIn={(value) => successSignIn(value)} show={modalShow}/>
            </Tab>
            <Tab eventKey="signup" title="Sign Up" className="border-tab">
              <SignUp  successSignIn={(value) => successSignIn(value)} show={modalShow}/>
            </Tab>
          </Tabs>
        </Col>
      </Container>
    </div>
  );
}
