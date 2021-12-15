import React,{useContext} from 'react';
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

import BookContext from '../../../context/books/bookContex';


const Activity = (props) => {


    const idPage = props.match.params.id;
    const idActivity = props.match.params.leccion;

    // Extraer la informacion de books
    const bookContext = useContext(BookContext);
    const { actividades } = bookContext;

    const act = actividades[0];

    // console.log(`ID: ${idPage}`);
    // console.log(`Props: ${props.match.params.leccion}`);


    const seleccionarActividad = (idPage, idActivity)=>{

        if(idPage==='1'&&idActivity==='1') return <Activity1 {...props} actividades={act}  acticurrent={act.actividad1} />
        if(idPage==='2'&&idActivity==='1') return <Activity2 {...props} actividades={act}  acticurrent={act.actividad2} />
        if(idPage==='3'&&idActivity==='1') return <Activity3 {...props} actividades={act}  acticurrent={act.actividad3} />

        if(idPage==='1'&&idActivity==='2') return <Activity4 {...props} actividades={act}  acticurrent={act.actividad4} />
        if(idPage==='2'&&idActivity==='2') return <Activity5 {...props} actividades={act}  acticurrent={act.actividad5} />
        if(idPage==='3'&&idActivity==='2') return <Activity6 {...props} actividades={act}  acticurrent={act.actividad6} />

        if(idPage==='1'&&idActivity==='3') return <Activity7 {...props} actividades={act}  acticurrent={act.actividad7} />
        if(idPage==='2'&&idActivity==='3') return <Activity8 {...props} actividades={act}  acticurrent={act.actividad8} />
        if(idPage==='3'&&idActivity==='3') return <Activity9 {...props} actividades={act}  acticurrent={act.actividad9} />

        if(idPage==='1'&&idActivity==='4') return <Activity10 {...props} actividades={act}  acticurrent={act.actividad10} />
        if(idPage==='2'&&idActivity==='4') return <Activity11 {...props} actividades={act}  acticurrent={act.actividad11} />
        if(idPage==='3'&&idActivity==='4') return <Activity12 {...props} actividades={act}  acticurrent={act.actividad12} />

        if(idPage==='1'&&idActivity==='5') return <Activity13 {...props} actividades={act}  acticurrent={act.actividad13} />
        if(idPage==='2'&&idActivity==='5') return <Activity14 {...props} actividades={act}  acticurrent={act.actividad14} />
        if(idPage==='3'&&idActivity==='5') return <Activity15 {...props} actividades={act}  acticurrent={act.actividad15} />

        if(idPage==='1'&&idActivity==='6') return <Activity16 {...props} actividades={act}  acticurrent={act.actividad16} />
        if(idPage==='2'&&idActivity==='6') return <Activity17 {...props} actividades={act}  acticurrent={act.actividad17} />
        if(idPage==='3'&&idActivity==='6') return <Activity18 {...props} actividades={act}  acticurrent={act.actividad18} />

        if(idPage==='1'&&idActivity==='7') return <Activity19 {...props} actividades={act}  acticurrent={act.actividad19} />
        if(idPage==='2'&&idActivity==='7') return <Activity20 {...props} actividades={act}  acticurrent={act.actividad20} />
        if(idPage==='3'&&idActivity==='7') return <Activity21 {...props} actividades={act}  acticurrent={act.actividad21} />

        if(idPage==='1'&&idActivity==='8') return <Activity22 {...props} actividades={act}  acticurrent={act.actividad22} />
        if(idPage==='2'&&idActivity==='8') return <Activity23 {...props} actividades={act}  acticurrent={act.actividad23} />
        if(idPage==='3'&&idActivity==='8') return <Activity24 {...props} actividades={act}  acticurrent={act.actividad24} />

        if(idPage==='1'&&idActivity==='9') return <Activity25 {...props} actividades={act}  acticurrent={act.actividad25} />
        if(idPage==='2'&&idActivity==='9') return <Activity26 {...props} actividades={act}  acticurrent={act.actividad26} />
        if(idPage==='3'&&idActivity==='9') return <Activity27 {...props} actividades={act}  acticurrent={act.actividad27} />

        if(idPage==='1'&&idActivity==='10') return <Activity28 {...props} actividades={act}  acticurrent={act.actividad28} />
        if(idPage==='2'&&idActivity==='10') return <Activity29 {...props} actividades={act}  acticurrent={act.actividad29} />
        if(idPage==='3'&&idActivity==='10') return <Activity30 {...props} actividades={act}  acticurrent={act.actividad30} />

        if(idPage==='1'&&idActivity==='11') return <Activity31 {...props} actividades={act}  acticurrent={act.actividad31} />
        if(idPage==='2'&&idActivity==='11') return <Activity32 {...props} actividades={act}  acticurrent={act.actividad32} />
        if(idPage==='3'&&idActivity==='11') return <Activity33 {...props} actividades={act}  acticurrent={act.actividad33} />

        if(idPage==='1'&&idActivity==='12') return <Activity34 {...props} actividades={act}  acticurrent={act.actividad34} />
        if(idPage==='2'&&idActivity==='12') return <Activity35 {...props} actividades={act}  acticurrent={act.actividad35} />
        if(idPage==='3'&&idActivity==='12') return <Activity36 {...props} actividades={act}  acticurrent={act.actividad36} />

        if(idPage==='1'&&idActivity==='13') return <Activity37 {...props} actividades={act}  acticurrent={act.actividad37} />
        if(idPage==='2'&&idActivity==='13') return <Activity38 {...props} actividades={act}  acticurrent={act.actividad38} />
        if(idPage==='3'&&idActivity==='13') return <Activity39 {...props} actividades={act}  acticurrent={act.actividad39} />

        if(idPage==='1'&&idActivity==='14') return <Activity40 {...props} actividades={act}  acticurrent={act.actividad40} />
        if(idPage==='2'&&idActivity==='14') return <Activity41 {...props} actividades={act}  acticurrent={act.actividad41} />
        if(idPage==='3'&&idActivity==='14') return <Activity42 {...props} actividades={act}  acticurrent={act.actividad42} />

        if(idPage==='1'&&idActivity==='15') return <Activity43 {...props} actividades={act}  acticurrent={act.actividad43} />
        if(idPage==='2'&&idActivity==='15') return <Activity44 {...props} actividades={act}  acticurrent={act.actividad44} />
        if(idPage==='3'&&idActivity==='15') return <Activity45 {...props} actividades={act}  acticurrent={act.actividad45} />

        if(idPage==='1'&&idActivity==='16') return <Activity46 {...props} actividades={act}  acticurrent={act.actividad46} />
        if(idPage==='2'&&idActivity==='16') return <Activity47 {...props} actividades={act}  acticurrent={act.actividad47} />
        if(idPage==='3'&&idActivity==='16') return <Activity48 {...props} actividades={act}  acticurrent={act.actividad48} />

        
    }


    return ( 
        
        <div>
            {
                seleccionarActividad(idPage, idActivity)
            }
        </div>
     );
}
 
export default withRouter(Activity);