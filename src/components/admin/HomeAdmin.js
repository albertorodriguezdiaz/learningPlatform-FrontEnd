import React from 'react';
import Sidebar from '../layout/SideBar';
import TopBar from '../layout/TopBar';
import LinksHome from './LinksHome';


import { Col, Row } from 'react-bootstrap';

const HomeAdmin = () => {
    return (

    <div className="contenedor-app">
        <Row>
            <Col lg="2">
                <Sidebar />
            </Col>

            <Col>
                <TopBar />
                <h1>Home Admin</h1>
                <LinksHome />
            </Col>
        </Row>
            

    </div>

      );
}
 
export default HomeAdmin;