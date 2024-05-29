import React, { useContext } from "react";  

import {  
    
    UploadLabel,
    UploadContent,
    UploadContentIcon,
    UploadContentText,
    
} from "./styled";

import UploadFile from "components/Form/UploadFile";
import { CoreContext } from "context/CoreContext";

export default function CardUpload({ title, children }){  

    const { addAsset, reloading } = useContext(CoreContext);

    return ( 
        <>

            { title ? <UploadLabel>{ title }</UploadLabel> : null }
            {
                reloading ? null : 
                <UploadFile onChange={addAsset}>
                    <UploadContent>
                        {
                            children ? children : <>
                                <UploadContentIcon />
                                <UploadContentText>Arraste ou clique para adicionar os assets da campanha</UploadContentText>
                            </>
                        }
                    </UploadContent>
                </UploadFile>
            }
        </>
    );
}