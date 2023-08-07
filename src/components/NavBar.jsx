import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

export default function NavBar({searchQuery, setSearchQuery}) {

  return (
    <>
      <Navbar
        className="bg-body-tertiary justify-content-between"
        bg="dark"
        data-bs-theme="dark"
        style={{ position: "fixed", top: 0, zIndex: 1000, width: "100%" }}
      >
        <Navbar.Brand style={{
          marginLeft: "20px",
          }} href="/">AOT</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create" >Create Character</Nav.Link>
          </Nav>
        <Form inline="true">
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
              className=" mr-sm-2"
              style={{width: "300px", margin: "10px", padding: "10px", marginRight: "20px"}}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Col>
        </Form>
      </Navbar>
    </>
  );
}
