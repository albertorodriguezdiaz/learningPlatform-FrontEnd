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


const Activity = (props) => {


    const idPage = props.match.params.id;
    const idActivity = props.match.params.leccion;

    // console.log(`ID: ${idPage}`);
    // console.log(`Props: ${props.match.params.leccion}`);


    const seleccionarActividad = (idPage, idActivity)=>{

        if(idPage==='1'&&idActivity==='1') return <Activity1 {...props} />
        if(idPage==='2'&&idActivity==='1') return <Activity2 {...props} />
        if(idPage==='3'&&idActivity==='1') return <Activity3 {...props} />

        if(idPage==='1'&&idActivity==='2') return <Activity4 {...props} />
        if(idPage==='2'&&idActivity==='2') return <Activity5 {...props} />
        if(idPage==='3'&&idActivity==='2') return <Activity6 {...props} />

        if(idPage==='1'&&idActivity==='3') return <Activity7 {...props} />
        if(idPage==='2'&&idActivity==='3') return <Activity8 {...props} />
        if(idPage==='3'&&idActivity==='3') return <Activity9 {...props} />

        if(idPage==='1'&&idActivity==='4') return <Activity10 {...props} />
        if(idPage==='2'&&idActivity==='4') return <Activity11 {...props} />
        if(idPage==='3'&&idActivity==='4') return <Activity12 {...props} />

        if(idPage==='1'&&idActivity==='5') return <Activity13 {...props} />
        if(idPage==='2'&&idActivity==='5') return <Activity14 {...props} />
        if(idPage==='3'&&idActivity==='5') return <Activity15 {...props} />

        if(idPage==='1'&&idActivity==='6') return <Activity16 {...props} />
        if(idPage==='2'&&idActivity==='6') return <Activity17 {...props} />
        if(idPage==='3'&&idActivity==='6') return <Activity18 {...props} />

        if(idPage==='1'&&idActivity==='7') return <Activity19 {...props} />
        if(idPage==='2'&&idActivity==='7') return <Activity20 {...props} />
        if(idPage==='3'&&idActivity==='7') return <Activity21 {...props} />

        if(idPage==='1'&&idActivity==='8') return <Activity22 {...props} />
        if(idPage==='2'&&idActivity==='8') return <Activity23 {...props} />
        if(idPage==='3'&&idActivity==='8') return <Activity24 {...props} />

        if(idPage==='1'&&idActivity==='9') return <Activity25 {...props} />
        if(idPage==='2'&&idActivity==='9') return <Activity26 {...props} />
        if(idPage==='3'&&idActivity==='9') return <Activity27 {...props} />

        if(idPage==='1'&&idActivity==='10') return <Activity28 {...props} />
        if(idPage==='2'&&idActivity==='10') return <Activity29 {...props} />
        if(idPage==='3'&&idActivity==='10') return <Activity30 {...props} />

        if(idPage==='1'&&idActivity==='11') return <Activity31 {...props} />
        if(idPage==='2'&&idActivity==='11') return <Activity32 {...props} />
        if(idPage==='3'&&idActivity==='11') return <Activity33 {...props} />

        if(idPage==='1'&&idActivity==='12') return <Activity34 {...props} />
        if(idPage==='2'&&idActivity==='12') return <Activity35 {...props} />
        if(idPage==='3'&&idActivity==='12') return <Activity36 {...props} />

        if(idPage==='1'&&idActivity==='13') return <Activity37 {...props} />
        if(idPage==='2'&&idActivity==='13') return <Activity38 {...props} />
        if(idPage==='3'&&idActivity==='13') return <Activity39 {...props} />

        if(idPage==='1'&&idActivity==='14') return <Activity40 {...props} />
        if(idPage==='2'&&idActivity==='14') return <Activity41 {...props} />
        if(idPage==='3'&&idActivity==='14') return <Activity42 {...props} />

        if(idPage==='1'&&idActivity==='15') return <Activity43 {...props} />
        if(idPage==='2'&&idActivity==='15') return <Activity44 {...props} />
        if(idPage==='3'&&idActivity==='15') return <Activity45 {...props} />

        if(idPage==='1'&&idActivity==='16') return <Activity46 {...props} />
        if(idPage==='2'&&idActivity==='16') return <Activity47 {...props} />
        if(idPage==='3'&&idActivity==='16') return <Activity48 {...props} />

        
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