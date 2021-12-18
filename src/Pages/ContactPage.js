import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <Card bg="dark" text="light" style={{ width: "36rem" }}>
            <Card.Header>Contact</Card.Header>
            <Card.Body>
              <Card.Title>Phupha Noppakun</Card.Title>
              <Card.Text>You can call me "PooH".Nice to meet you!</Card.Text>
                <Card.Text>
                    ● I'm a Fast-Learner, Lately i love to watch Family guy it's
                    kind a fun but some episode have smth gross which is i hate
                    it. I love Star Wars(Including The Mandalorian little grogu
                    <img src="https://img.icons8.com/color/24/000000/baby-yoda.png" />
                    )
                </Card.Text>
                <Card.Text>
                  <p>● Interesed in Webdev, AI, BlockChain</p>
                </Card.Text>
                <Card.Text>
                  <p>● My Favorite Class is I think it's Web development</p>
                </Card.Text>
              <Card.Text className="mt-2">
                For my github visit link below.
              </Card.Text>
              <Button href="https://github.com/c0zyb0y" variant="secondary">
                <BsGithub /> Click Here
              </Button>
              <Card.Text className="mt-2">
                <b>Contact me</b> : no.phupha_st@tni.ac.th
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
