import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "./Card";
import Table from 'react-bootstrap/Table';

const DashboardContent = () => {
  return (
    <Container className="p-3">
      <Row>
        <Col>
          <div className="card-value">
            <div className="card-bc" style={{ display: "flex", gap: "20px" }}>
              <Card title="Users" value="1,234" />
              <Card title="Revenue" value="$12,345" />
              <Card title="Orders" value="678" />
              <Card title="Bussiness" value="$875" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <div className="table-cx">
              <div id="chart_div"></div>
          </div>
        </Col>
        <Col>
          <div className="table-cx">
              <div id="piechart_3d"></div>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <div className="table-cx">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
          </div>
        </Col>
      </Row>

    </Container>

  );
};

export default DashboardContent;
