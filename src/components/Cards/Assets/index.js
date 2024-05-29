import React, { useContext, useState } from "react";  
import { useHistory, useParams } from "react-router-dom";

import {  
    
    UploadLabel,

    AssetsContent,
    AssetsContentItem,
    AssetsContentItemContent,
    AssetsContentItemIcon,
    AssetsContentItemText,
    AssetsContentItemAction,
    AssetsContentItemActionIcon,
    AssetsContentItemActionIconDownload,
    
    
} from "./styled";
import { parseStrapiImage } from "utils";
import { CoreContext } from "context/CoreContext";
import CardApproved from "../CardApproved";

export default function CardAssets({ title, removable, showableAssets, removeAsset:removeAssetUp }){  

    const { assets, removeAsset, reloading } = useContext(CoreContext)

    console.log("removeAssetUp", removeAssetUp)

    return !(showableAssets || assets)?.length ? null : ( 
        <>
            { !title ? null : <UploadLabel>{ title }</UploadLabel> }
            
            <AssetsContent>
                {
                    reloading ? null :
                    (showableAssets || assets)?.map((item, key) => 
                        <AssetsContentItem key={key}>
                            <AssetsContentItemContent>
                                <AssetsContentItemIcon />
                                <AssetsContentItemText>{ item?.name }</AssetsContentItemText>
                            </AssetsContentItemContent>

                            <CardApproved approved={item?.approved} />

                            <AssetsContentItemAction onClick={ () => !item?.url ? null : window.open(parseStrapiImage(item?.url), "campaing-asset") }>
                                <AssetsContentItemActionIconDownload />
                            </AssetsContentItemAction>
                            {
                                !removable && !removeAssetUp ? null :
                                    <AssetsContentItemAction onClick={() => removeAssetUp ? removeAssetUp(item?.id) : removeAsset(item?.id)}>
                                        <AssetsContentItemActionIcon />
                                    </AssetsContentItemAction>
                            }
                        </AssetsContentItem>
                    )
                }
            </AssetsContent>
       </>
    );
}