import React from "react";  

import {  
 
    CardGalleryBodyStatus,
    CardGalleryBodyStatusIcon,
    CardGalleryBodyStatusText,
    
    CardGalleryBodyStatusSpacer,

} from "./styled";

export default function CardApproved({ approved }){  


    return ( 
        <>
            <CardGalleryBodyStatus>
                { 
                    !(approved === true || approved === false) ? <CardGalleryBodyStatusSpacer /> : <>
                        <CardGalleryBodyStatusIcon icon={approved ? 'approved': 'refused'} />
                        <CardGalleryBodyStatusText red={!approved}>{ approved ? "Aprovado" : "Recusado" }</CardGalleryBodyStatusText>
                    </> 
                }
            </CardGalleryBodyStatus>       
        </>
    );
}