import React from 'react';
import MainUploadImage from '../activity-components/MainUploadImage';
import img1 from '../../../../resources/img/act9/1-donando-ropa.jpg';
import img2 from '../../../../resources/img/act9/2-alimentando-a-alguien-que-lo-necesite.jpg';
import img3 from '../../../../resources/img/act9/3-recogiendo-basura-en-el-parque.jpg';



const Activity9 = (props) => {

    const tituloActividad =`
        <h2>Durante los próximos días, con la ayuda de tus padres o cuidadores, debes realizar alguna de las siguientes acciones relacionadas con el cuidado hacia otros:</h2>
        
        <table>
            <tr className="containerEV">
                <td>
                    Donar ropa a alguien que no tiene.
                    <img src=${img1} alt="im1" />
                </td>
                <td>
                    Donar ropa a alguien que no tiene.
                    <img src=${img2} alt="im2" />
                </td>
                <td>
                    Donar ropa a alguien que no tiene.
                    <img src=${img3} alt="im3" />
                </td>
            </tr>
        <table/>
    `;

    const textoTextArea =`
    Describe cómo te fue
    `;

     return ( 
        <div>
            <MainUploadImage {...props} 
            textoTextArea={textoTextArea}
            tituloActividad={tituloActividad}
            />
        </div>
           
     );
}
 
export default Activity9;