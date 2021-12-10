import React, { Fragment } from 'react';


const RowTable = (props) => {
    
    const {id, nombre, actividad, actividadeslibro, periodo} = props;

  return (
        <Fragment>
        {   
            actividadeslibro.map((act) =>
            id===act.id &&
                <tr>
                    <td>{actividad}</td>
                    <td>{nombre}</td>
                    <td>Completada</td>
                    {
                        actividad===1 ?
                            act.act1===true
                                ? <td><i className="fas fa-star"></i>{nombre}</td>
                                : <td><i className="far fa-star"></i>{nombre}</td>
                        : null
                    }  
                    {             
                        actividad===2 ?
                            act.act2===true
                                ? <td><i className="fas fa-star"></i>{nombre}</td>
                                : <td><i className="far fa-star"></i>{nombre}</td>
                     : null
                    } 
                    { 
                        actividad===3 ?
                            act.act3===true
                                ? <td><i className="fas fa-star"></i>{nombre}</td>
                                : <td><i className="far fa-star"></i>{nombre}</td>
                        : null  
                    }
                </tr>
            )
        }
        </Fragment>
     );
}
 
export default RowTable;

