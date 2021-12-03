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


const ActivityBook1 = (props) => {


    const idPage = props.match.params.id;
    const idLeccion = props.match.params.leccion;

    console.log(`ID: ${idPage}`);
    console.log(`Props: ${props.match.params.leccion}`);


    const seleccionarActividad = (idPage, idLeccion)=>{

        if(idPage==='1'&&idLeccion==='1') return <Activity1 />
        if(idPage==='2'&&idLeccion==='1') return <Activity2 />
        if(idPage==='3'&&idLeccion==='1') return <Activity3 />

        if(idPage==='1'&&idLeccion==='2') return <Activity4 />
        if(idPage==='2'&&idLeccion==='2') return <Activity5 />
        if(idPage==='3'&&idLeccion==='2') return <Activity6 />

        if(idPage==='1'&&idLeccion==='3') return <Activity7 />
        if(idPage==='2'&&idLeccion==='3') return <Activity8 />
        if(idPage==='3'&&idLeccion==='3') return <Activity9 />

        if(idPage==='1'&&idLeccion==='4') return <Activity10 />
        if(idPage==='2'&&idLeccion==='4') return <Activity11 />
        if(idPage==='3'&&idLeccion==='4') return <Activity12 />

        if(idPage==='1'&&idLeccion==='5') return <Activity13 />
        if(idPage==='2'&&idLeccion==='5') return <Activity14 />
        if(idPage==='3'&&idLeccion==='5') return <Activity15 />

        if(idPage==='1'&&idLeccion==='6') return <Activity16 />
        if(idPage==='2'&&idLeccion==='6') return <Activity17 />
        if(idPage==='3'&&idLeccion==='6') return <Activity18 />

        if(idPage==='1'&&idLeccion==='7') return <Activity19 />
        if(idPage==='2'&&idLeccion==='7') return <Activity20 />
        if(idPage==='3'&&idLeccion==='7') return <Activity21 />

        if(idPage==='1'&&idLeccion==='8') return <Activity22 />
        if(idPage==='2'&&idLeccion==='8') return <Activity23 />
        if(idPage==='3'&&idLeccion==='8') return <Activity24 />

        if(idPage==='1'&&idLeccion==='9') return <Activity25 />
        if(idPage==='2'&&idLeccion==='9') return <Activity26 />
        if(idPage==='3'&&idLeccion==='9') return <Activity27 />

        if(idPage==='1'&&idLeccion==='10') return <Activity28 />
        if(idPage==='2'&&idLeccion==='10') return <Activity29 />
        if(idPage==='3'&&idLeccion==='10') return <Activity30 />

        if(idPage==='1'&&idLeccion==='11') return <Activity31 />
        if(idPage==='2'&&idLeccion==='11') return <Activity32 />
        if(idPage==='3'&&idLeccion==='11') return <Activity33 />

        if(idPage==='1'&&idLeccion==='12') return <Activity34 />
        if(idPage==='2'&&idLeccion==='12') return <Activity35 />
        if(idPage==='3'&&idLeccion==='12') return <Activity36 />

        if(idPage==='1'&&idLeccion==='13') return <Activity37 />
        if(idPage==='2'&&idLeccion==='13') return <Activity38 />
        if(idPage==='3'&&idLeccion==='13') return <Activity39 />

        if(idPage==='1'&&idLeccion==='14') return <Activity40 />
        if(idPage==='2'&&idLeccion==='14') return <Activity41 />
        if(idPage==='3'&&idLeccion==='14') return <Activity42 />

        if(idPage==='1'&&idLeccion==='15') return <Activity43 />
        if(idPage==='2'&&idLeccion==='15') return <Activity44 />
        if(idPage==='3'&&idLeccion==='15') return <Activity45 />

        if(idPage==='1'&&idLeccion==='16') return <Activity46 />
        if(idPage==='2'&&idLeccion==='16') return <Activity47 />
        if(idPage==='3'&&idLeccion==='16') return <Activity48 />

        
    }


    return ( 
        <div>
            {
                seleccionarActividad(idPage, idLeccion)
            }
        </div>
     );
}
 
export default withRouter(ActivityBook1);