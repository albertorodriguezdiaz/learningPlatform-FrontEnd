import React,{Fragment} from 'react';
import { Table } from 'react-bootstrap';
import RowTable from './RowTable';
import ActividadesJson from './ActividadData';


const MainTable = (props) => {

    const {leccion, periodo, id} = props;

    return ( 
        <Fragment>
        {
        
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Actividad</th>
                <th>Nombre</th>
                <th>Proceso</th>
                <th><i class="fas fa-star"></i></th>
                </tr>
            </thead>
            <tbody>
                {
                    ActividadesJson.map((act) =>
                    (leccion===act.leccion && periodo===act.periodo) &&
                        <RowTable
                            leccion={leccion}
                            nombre={act.nombre}
                            actividad={act.actividad}
                            periodo={periodo}
                            id={id}
                            {...props}
                        />
                    )
                }
                
            </tbody>
        </Table>
        }
        
        </Fragment>
     );
}
 
export default MainTable;