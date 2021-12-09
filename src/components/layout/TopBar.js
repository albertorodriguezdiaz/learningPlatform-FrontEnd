import React, {useContext, useEffect, useState} from 'react';
import { Container, Navbar, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import AuthContext from '../../context/autentication/authContext';


const TopBar = () => {
        // Extraer la informacion de autenticacion
        const authContext = useContext(AuthContext);
        const { cerrarSesion, usertipo, userdata} = authContext;


    return ( 
        <div>

            { usertipo==='user' && 
            
                <Navbar bg="dark" variant="dark" expand={false}>
                <Container fluid>
                  <Navbar.Brand href="/home">SoyVida</Navbar.Brand>
                  <Navbar.Brand ><p>Hola {userdata.nombre}</p></Navbar.Brand>
                  <Navbar.Toggle aria-controls="offcanvasNavbar" />
                  <Navbar.Offcanvas 
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id="offcanvasNavbarLabel">Soy Vida - Menú</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3 ">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/notas">Notas</Nav.Link>
                        <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action5">
                            Something else here
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                      <Button
                          className=""
                          onClick={ () => cerrarSesion() }
                      >Cerrar Sesión
                      </Button>

                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            }

            { usertipo==='admin' && 
                <Navbar bg="dark" variant="dark" expand={false}>
                <Container fluid>
                  <Navbar.Brand href="/home">SoyVida</Navbar.Brand>
                  <Navbar.Brand ><p>Hola {userdata.nombre}</p></Navbar.Brand>
                  <Navbar.Toggle aria-controls="offcanvasNavbar" />
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id="offcanvasNavbarLabel">Soy Vida - Menú</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3 ">
                        <Nav.Link href="/home">Voler al inicio</Nav.Link>
                        <Nav.Link href="/usuarios">Administrar Alumnos</Nav.Link>
                        <Nav.Link href="/colegios">Administrar Colegios</Nav.Link>
                        <Nav.Link href="/usuariolibro">Añadir Libro a Alumno</Nav.Link>
                        <Nav.Link href="/libros">Libros SoyVida</Nav.Link>
                      </Nav>
                      <Button
                          className=""
                          onClick={ () => cerrarSesion() }
                      >Cerrar Sesión
                      </Button>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            }

            { usertipo==='editor' && 
                <Navbar bg="dark" variant="dark" expand={false}>
                <Container fluid>
                  <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                  <Navbar.Brand ><p>Hola {userdata.nombre}</p></Navbar.Brand>
                  <Navbar.Toggle aria-controls="offcanvasNavbar" />
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3 ">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action5">
                            Something else here
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                      <Form className="d-flex">
                        <FormControl
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                      </Form>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            }
            
        </div>
     );
}
 
export default TopBar;