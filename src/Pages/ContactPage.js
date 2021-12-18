import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <Card bg="dark" text="light" style={{ }}>
            <Card.Header>Contact</Card.Header>
            <Card.Body>
              <Card.Title>Phupha Noppakun</Card.Title>
              <Card.Text>
                You can call me "PooH".Nice to meet you!
              </Card.Text>
              <Card.Text>
                  I'm a Fast-Learner 
              </Card.Text>
              <Card.Text>
                  Interesed in AI, BlockChain 
              </Card.Text>
              <Card.Text>
                  My Favorite Class is I think it's Web development
              </Card.Text><Card.Text>
                  For my github visit link below.
              </Card.Text>
              <Button variant="primary"><BsGithub/> Click Here</Button>
              <Card.Text>Contact me : no.phupha_st@tni.ac.th</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
