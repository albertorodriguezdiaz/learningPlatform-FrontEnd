import React, { Fragment } from 'react';
import estrella from '../../../resources/img/estrellaAmarillo.png';
import estrellaNo from '../../../resources/img/estrellaBlanco.png';


const RowTable = (props) => {
    
    const {id, nombre, actividad, actividadeslibro} = props;

  return (
        <Fragment>
        {   
            actividadeslibro.map((act, key) =>
            id===act.id &&
                <tr key={key}>
                    <td>{actividad}</td>
                    <td>{nombre}</td>
                    
                    {
                        actividad===1 ?
                            act.act1===true
                                ? (<Fragment>
                                    <td>Completada</td>
                                    <td><img src={estrella} alt="Competado" /></td>
                                    </Fragment>
                                  )
                                : (<Fragment>
                                    <td>Incompleta</td>
                                    <td><img src={estrellaNo} alt="Incompleta" /></td>
                                    </Fragment>
                                   )
                        : null
                    }  
                    {
                        actividad===2 ?
                            act.act2===true
                                ? (<Fragment>
                                    <td>Completada</td>
                                    <td><img src={estrella} alt="Competado" /></td>
                                    </Fragment>
                                  )
                                : (<Fragment>
                                    <td>Incompleta</td>
                                    <td><img src={estrellaNo} alt="Incompleta" /></td>
                                    </Fragment>
                                   )
                        : null
                    }  
                    {
                        actividad===3 ?
                            act.act3===true
                                ? (<Fragment>
                                    <td>Completada</td>
                                    <td><img src={estrella} alt="Competado" /></td>
                                    </Fragment>
                                  )
                                : (<Fragment>
                                    <td>Incompleta</td>
                                    <td><img src={estrellaNo} alt="Incompleta" /></td>
                                    </Fragment>
                                   )
                        : null
                    }  
                </tr>
            )
        }
        </Fragment>
     );
}
 
export default RowTable;

