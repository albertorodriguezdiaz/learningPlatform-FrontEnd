import React, {useEffect } from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import { run as runHolder } from 'holderjs/holder';
import { Link } from 'react-router-dom';

const LinksHome = () => {
    useEffect(() => {        
        runHolder('image-class-name');
    });
    return ( 
        <CardGroup>
            <Card>
            <Link to='/usuarios'>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Alumnos</Card.Title>
                    <Card.Text>
                        Acceso al la información de los estudiantes
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">LIngresar</small>
                    </Card.Footer>
            </Link>
            </Card>

            <Card>
            <Link to='/colegios'>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Colegios</Card.Title>
                    <Card.Text>
                        Acceso al la información de los colegios inscritos
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">LIngresar</small>
                    </Card.Footer>
            </Link>
            </Card>

            <Card>
            <Link to='/libros'>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Libros</Card.Title>
                    <Card.Text>
                        Acceso a la lista de libros ofrecidos por SoyVida
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Ingresar</small>
                    </Card.Footer>
            </Link>
            </Card>
            <Card>
            <Link to='/usuariolibro'>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Libros Usuario</Card.Title>
                    <Card.Text>
                        Añadir libros a los alumnos de soyvida
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Ingresar</small>
                    </Card.Footer>
            </Link>
            </Card>

            </CardGroup>
     );
}
 
export default LinksHome;