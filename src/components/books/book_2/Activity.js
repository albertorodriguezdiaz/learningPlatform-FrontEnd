/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Activity1 from './activity/Activity1';
import Activity2 from './activity/Activity2';
import Activity3 from './activity/Activity3';
import Activity4 from './activity/Activity4';
import Activity5 from './activity/Activity5';
import Activity6 from './activity/Activity6';
import Activity7 from './activity/Activity7';
import Activity8 from './activity/Activity8';
import Activity9 from './activity/Activity9';
import Activity10 from './activity/Activity10';
import Activity11 from './activity/Activity11';
import Activity12 from './activity/Activity12';
import Activity13 from './activity/Activity13';
import Activity14 from './activity/Activity14';
import Activity15 from './activity/Activity15';
import Activity16 from './activity/Activity16';
import Activity17 from './activity/Activity17';
import Activity18 from './activity/Activity18';
import Activity19 from './activity/Activity19';
import Activity20 from './activity/Activity20';
import Activity21 from './activity/Activity21';
import Activity22 from './activity/Activity22';
import Activity23 from './activity/Activity23';
import Activity24 from './activity/Activity24';
import Activity25 from './activity/Activity25';
import Activity26 from './activity/Activity26';
import Activity27 from './activity/Activity27';
import Activity28 from './activity/Activity28';
import Activity29 from './activity/Activity29';
import Activity30 from './activity/Activity30';
import Activity31 from './activity/Activity31';
import Activity32 from './activity/Activity32';
import Activity33 from './activity/Activity33';
import Activity34 from './activity/Activity34';
import Activity35 from './activity/Activity35';
import Activity36 from './activity/Activity36';
import Activity37 from './activity/Activity37';
import Activity38 from './activity/Activity38';
import Activity39 from './activity/Activity39';
import Activity40 from './activity/Activity40';
import Activity41 from './activity/Activity41';
import Activity42 from './activity/Activity42';
import Activity43 from './activity/Activity43';
import Activity44 from './activity/Activity44';
import Activity45 from './activity/Activity45';
import Activity46 from './activity/Activity46';
import Activity47 from './activity/Activity47';
import Activity48 from './activity/Activity48';
import { Container } from 'react-bootstrap';




const Activity = (props) => {


    const idPage = props.match.params.id;
    const idActivity = props.match.params.leccion;
    // let actividades = props.actividades;
    let actiProps = props.actividades;
    let actividades = actiProps.find(e=>e);
    

    // console.log(`ID: ${idPage}`);
    // console.log(`Props: ${props.match.params.leccion}`);

  
    const seleccionarActividad = (idPage, idActivity)=>{

        if(idPage==='1'&& idActivity==='1' && actividades) return <Activity1 {...props} actividades={actividades}  acticurrent={actividades.actividad1} />
        if(idPage==='2'&& idActivity==='1' && actividades) return <Activity2 {...props} actividades={actividades}  acticurrent={actividades.actividad2} />
        if(idPage==='3'&& idActivity==='1' && actividades) return <Activity3 {...props} actividades={actividades}  acticurrent={actividades.actividad3} />

        if(idPage==='1'&& idActivity==='2' && actividades) return <Activity4 {...props} actividades={actividades}  acticurrent={actividades.actividad4} />
        if(idPage==='2'&& idActivity==='2' && actividades) return <Activity5 {...props} actividades={actividades}  acticurrent={actividades.actividad5} />
        if(idPage==='3'&& idActivity==='2' && actividades) return <Activity6 {...props} actividades={actividades}  acticurrent={actividades.actividad6} />

        if(idPage==='1'&& idActivity==='3' && actividades) return <Activity7 {...props} actividades={actividades}  acticurrent={actividades.actividad7} />
        if(idPage==='2'&& idActivity==='3' && actividades) return <Activity8 {...props} actividades={actividades}  acticurrent={actividades.actividad8} />
        if(idPage==='3'&& idActivity==='3' && actividades) return <Activity9 {...props} actividades={actividades}  acticurrent={actividades.actividad9} />

        if(idPage==='1'&& idActivity==='4' && actividades) return <Activity10 {...props} actividades={actividades}  acticurrent={actividades.actividad10} />
        if(idPage==='2'&& idActivity==='4' && actividades) return <Activity11 {...props} actividades={actividades}  acticurrent={actividades.actividad11} />
        if(idPage==='3'&& idActivity==='4' && actividades) return <Activity12 {...props} actividades={actividades}  acticurrent={actividades.actividad12} />

        if(idPage==='1'&& idActivity==='5' && actividades) return <Activity13 {...props} actividades={actividades}  acticurrent={actividades.actividad13} />
        if(idPage==='2'&& idActivity==='5' && actividades) return <Activity14 {...props} actividades={actividades}  acticurrent={actividades.actividad14} />
        if(idPage==='3'&& idActivity==='5' && actividades) return <Activity15 {...props} actividades={actividades}  acticurrent={actividades.actividad15} />

        if(idPage==='1'&& idActivity==='6' && actividades) return <Activity16 {...props} actividades={actividades}  acticurrent={actividades.actividad16} />
        if(idPage==='2'&& idActivity==='6' && actividades) return <Activity17 {...props} actividades={actividades}  acticurrent={actividades.actividad17} />
        if(idPage==='3'&& idActivity==='6' && actividades) return <Activity18 {...props} actividades={actividades}  acticurrent={actividades.actividad18} />

        if(idPage==='1'&& idActivity==='7' && actividades) return <Activity19 {...props} actividades={actividades}  acticurrent={actividades.actividad19} />
        if(idPage==='2'&& idActivity==='7' && actividades) return <Activity20 {...props} actividades={actividades}  acticurrent={actividades.actividad20} />
        if(idPage==='3'&& idActivity==='7' && actividades) return <Activity21 {...props} actividades={actividades}  acticurrent={actividades.actividad21} />

        if(idPage==='1'&& idActivity==='8' && actividades) return <Activity22 {...props} actividades={actividades}  acticurrent={actividades.actividad22} />
        if(idPage==='2'&& idActivity==='8' && actividades) return <Activity23 {...props} actividades={actividades}  acticurrent={actividades.actividad23} />
        if(idPage==='3'&& idActivity==='8' && actividades) return <Activity24 {...props} actividades={actividades}  acticurrent={actividades.actividad24} />

        if(idPage==='1'&& idActivity==='9' && actividades) return <Activity25 {...props} actividades={actividades}  acticurrent={actividades.actividad25} />
        if(idPage==='2'&& idActivity==='9' && actividades) return <Activity26 {...props} actividades={actividades}  acticurrent={actividades.actividad26} />
        if(idPage==='3'&& idActivity==='9' && actividades) return <Activity27 {...props} actividades={actividades}  acticurrent={actividades.actividad27} />

        if(idPage==='1'&& idActivity==='10' && actividades) return <Activity28 {...props} actividades={actividades}  acticurrent={actividades.actividad28} />
        if(idPage==='2'&& idActivity==='10' && actividades) return <Activity29 {...props} actividades={actividades}  acticurrent={actividades.actividad29} />
        if(idPage==='3'&& idActivity==='10' && actividades) return <Activity30 {...props} actividades={actividades}  acticurrent={actividades.actividad30} />

        if(idPage==='1'&& idActivity==='11' && actividades) return <Activity31 {...props} actividades={actividades}  acticurrent={actividades.actividad31} />
        if(idPage==='2'&& idActivity==='11' && actividades) return <Activity32 {...props} actividades={actividades}  acticurrent={actividades.actividad32} />
        if(idPage==='3'&& idActivity==='11' && actividades) return <Activity33 {...props} actividades={actividades}  acticurrent={actividades.actividad33} />

        if(idPage==='1'&& idActivity==='12' && actividades) return <Activity34 {...props} actividades={actividades}  acticurrent={actividades.actividad34} />
        if(idPage==='2'&& idActivity==='12' && actividades) return <Activity35 {...props} actividades={actividades}  acticurrent={actividades.actividad35} />
        if(idPage==='3'&& idActivity==='12' && actividades) return <Activity36 {...props} actividades={actividades}  acticurrent={actividades.actividad36} />

        if(idPage==='1'&& idActivity==='13' && actividades) return <Activity37 {...props} actividades={actividades}  acticurrent={actividades.actividad37} />
        if(idPage==='2'&& idActivity==='13' && actividades) return <Activity38 {...props} actividades={actividades}  acticurrent={actividades.actividad38} />
        if(idPage==='3'&& idActivity==='13' && actividades) return <Activity39 {...props} actividades={actividades}  acticurrent={actividades.actividad39} />

        if(idPage==='1'&& idActivity==='14' && actividades) return <Activity40 {...props} actividades={actividades}  acticurrent={actividades.actividad40} />
        if(idPage==='2'&& idActivity==='14' && actividades) return <Activity41 {...props} actividades={actividades}  acticurrent={actividades.actividad41} />
        if(idPage==='3'&& idActivity==='14' && actividades) return <Activity42 {...props} actividades={actividades}  acticurrent={actividades.actividad42} />

        if(idPage==='1'&& idActivity==='15' && actividades) return <Activity43 {...props} actividades={actividades}  acticurrent={actividades.actividad43} />
        if(idPage==='2'&& idActivity==='15' && actividades) return <Activity44 {...props} actividades={actividades}  acticurrent={actividades.actividad44} />
        if(idPage==='3'&& idActivity==='15' && actividades) return <Activity45 {...props} actividades={actividades}  acticurrent={actividades.actividad45} />

        if(idPage==='1'&& idActivity==='16' && actividades) return <Activity46 {...props} actividades={actividades}  acticurrent={actividades.actividad46} />
        if(idPage==='2'&& idActivity==='16' && actividades) return <Activity47 {...props} actividades={actividades}  acticurrent={actividades.actividad47} />
        if(idPage==='3'&& idActivity==='16' && actividades) return <Activity48 {...props} actividades={actividades}  acticurrent={actividades.actividad48} />

        
    }


    return ( 
        
        <Container>
            {
                seleccionarActividad(idPage, idActivity)
            }
            <div className='footerActivity'></div>
        </Container>
        
     );
}
 
export default withRouter(Activity);