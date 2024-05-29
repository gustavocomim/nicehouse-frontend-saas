import React, { useState } from "react";  
import { useHistory, useParams } from "react-router-dom";

import {  

    
    PageHeaderContent,
    PageHeaderContentTop,
    PageHeaderContentTopIcon,
    PageHeaderContentTopTitle,


    PageBreadcrumbs,
    PageBreadcrumbsText,
    PageBreadcrumbsSeparator

} from "./styled";
 

export default function CampaingHeaderBread({ title, children, bread }){  

    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    return ( 
        <> 
            <PageHeaderContent>
                <PageHeaderContentTop>
                    <PageHeaderContentTopIcon  onClick={() => history.goBack()} />
                    <PageHeaderContentTopTitle>
                        { title }
                    </PageHeaderContentTopTitle>
                    { children }
                </PageHeaderContentTop>
            </PageHeaderContent>

            <PageBreadcrumbs>
                {
                    bread?.map(( it, k) => <>
                        <PageBreadcrumbsText> {it} </PageBreadcrumbsText>
                        { ( k + 1 ) < bread?.length ? <PageBreadcrumbsSeparator> / </PageBreadcrumbsSeparator> : null }
                    </>)
                }
            </PageBreadcrumbs>
 
        </>
    );
}