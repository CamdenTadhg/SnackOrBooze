import React from "react";
import {Link} from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem} from "reactstrap";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
              Welcome to Silicon Valley's premier dive cafe!
          </CardTitle>
            <ListGroup>
              <Link to={'/snacks'}>
                <ListGroupItem>Snacks: {snacks.length}</ListGroupItem>
              </Link>
              <Link to={'/drinks'}>
                <ListGroupItem>Drinks: {drinks.length}</ListGroupItem>
              </Link>
            </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
