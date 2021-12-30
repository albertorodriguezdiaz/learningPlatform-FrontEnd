import React,{Fragment} from 'react';
import { Table } from 'react-bootstrap';
import RowTable from './RowTable';
import ActividadesJson from './ActividadData';
import estrella from '../../../resources/img/estrellaAmarillo.png';



const MainTable = (props) => {

    const {leccion, periodo, id} = props;

    return ( 
        <Fragment>
        {
        
        <Table bordered hover>
            <thead>
                <tr>
                <th>Actividad</th>
                <th>Nombre</th>
                <th>Proceso</th>
                <th><img src={estrella} alt="Estrella" /></th>
                </tr>
            </thead>
            <tbody>

            {
                ActividadesJson.map((act, key) =>
                (leccion===act.leccion && periodo===act.periodo) &&
                    <RowTable
                        key={key}
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