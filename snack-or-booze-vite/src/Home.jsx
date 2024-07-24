import React from "react";
import {Link} from 'react-router-dom';
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

//renders home page of app
function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h5 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h5>
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