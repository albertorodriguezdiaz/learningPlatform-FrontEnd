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
                    
                    {
                        actividad===1 ?
                            act.act1===true
                                ? (<Fragment>
                                    <td>Completada</td>
                                    <td><i className="fas fa-star"></i>{nombre}</td>
                                    </Fragment>
                                  )
                                : (<Fragment>
                                    <td>No Completada</td>
                                    <td><i className="far fa-star"></i>{nombre}</td>
                                    </Fragment>
                                   )
                        : null
                    }  
                    {
                        actividad===2 ?
                            act.act2===true
                                ? (<Fragment>
                                    <td>Completada</td>
                                    <td><i className="fas fa-star"></i>{nombre}</td>
                                    </Fragment>
                                  )
                                : (<Fragment>
                                    <td>No Completada</td>
                                    <td><i className="far fa-star"></i>{nombre}</td>
                                    </Fragment>
                                   )
                        : null
                    }  
                    {
                        actividad===3 ?
                            act.act3===true
                                ? (<Fragment>
                                    <td>Completada</td>
                                    <td><i className="fas fa-star"></i>{nombre}</td>
                                    </Fragment>
                                  )
                                : (<Fragment>
                                    <td>No Completada</td>
                                    <td><i className="far fa-star"></i>{nombre}</td>
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

