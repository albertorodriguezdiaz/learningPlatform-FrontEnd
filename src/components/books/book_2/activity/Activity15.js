import React,{ Fragment } from 'react';
import MainUploadText15 from '../activity-components/MainUploadText15';


const Activity15 = (props) => {
   
   const tituloActividad =`
   <table class="tableTextArea table table-striped table-bordered table-hover">
	<tbody>
		<tr>
			<td><p align="center"><strong>El mandamiento que m&aacute;s me cuesta</strong></p>
			</td>
			<td><p align="center"><strong>&iquest;C&oacute;mo lo podr&eacute; en pr&aacute;ctica?</strong></p>
			</td>
			<td><p align="center"><strong>&iquest;Qu&eacute; sucedi&oacute; cuando lo hice?</strong></p>
			</td>
		</tr>
		<tr>
			<td><p><strong>Honrar a pap&aacute; y mam&aacute; </strong></p>
			</td>
			<td><ul>
			<li>A mi mam&aacute; le gusta cuando yo le ayudo, sin quejarme, con las labores de la casa. Esta semana limpiar&eacute; la habitaci&oacute;n de mis padres sin que me manden y sin quejarme.</li>
			<li>Mi pap&aacute; disfruta mucho ver las noticias, a m&iacute; no me gusta mucho. Esta semana lo acompa&ntilde;ar&eacute; tres veces a verlas.</li>
			</ul>
			</td>
			<td><ul>
			<li>Mi mam&aacute; me agradeci&oacute; por limpiar su habitaci&oacute;n. Se ve&iacute;a contenta.</li>
			<li>Mi pap&aacute; y yo pudimos conversar sobre algunas de las noticias que vimos. Me enter&eacute; de algunas que pasan que yo desconoc&iacute;a.</li>
			</ul>
			</td>
		</tr>
	</tbody>
</table>

    `;
   const textoTextArea =`

    `;


     return ( 
       <Fragment>
            <div>
                <MainUploadText15 {...props} 
                tituloActividad={tituloActividad}
                textoTextArea={textoTextArea}
                />
            </div>
        </Fragment>
     );
}
 
export default Activity15;