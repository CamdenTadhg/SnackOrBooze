import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

//component renders the details of a specific snack or drink
function MenuItem({ items, cantFind }) {
  const { id } = useParams();

  //find item matching the url parameter
  let item = items.find(item => item.id === id);
  //if item does not exist, send back to snacks list or drinks list respectively
  if (!item) return <Navigate to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuItem;