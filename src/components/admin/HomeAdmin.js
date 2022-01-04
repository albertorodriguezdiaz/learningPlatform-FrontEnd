import React from 'react';
import LinksHome from './LinksHome';
import TopBar from '../layout/TopBar';
import { Container } from 'react-bootstrap';


const HomeAdmin = () => {
    return (

    <div className='homebookBoxAdmin'>
       <TopBar />
        <Container >
            <h2>Administrador SoyVida</h2>
            <LinksHome />
        </Container>
            

    </div>

      );
}
 
export default HomeAdmin;