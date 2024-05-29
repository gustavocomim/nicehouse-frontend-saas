import React from "react";   
 
import { 
    DashboardHeaderContainer, 
    ContentHeaderActions,
} from "./styled"; 

import { BodyContentImage } from "ui/styled";
import Button from "components/Form/Button";
import DashboardHeaderNotitication from "../HeaderNotification";
import DashboardHeaderMenu from "../HeaderMenu";
import DashboardHeaderSearch from "../HeaderSearch";

export default function DashboardHeader({ actions, loading }){  

    return ( 
        <> 
            <DashboardHeaderContainer>
                <BodyContentImage />

                {
                    !actions?.length ? null : <>
                        <ContentHeaderActions>
                            {
                                actions?.map((item, key) => 
                                    <Button nospace key={key} loading={item?.loadable && loading} onClick={item.action} outline={item.outline} primary>{item.title}</Button>
                                )
                            }
                        </ContentHeaderActions>
                    </>
                }

                {
                    actions?.length ? null : <>
                        <DashboardHeaderSearch />
                        <ContentHeaderActions>
                            <DashboardHeaderNotitication />
                            <DashboardHeaderMenu />
                        </ContentHeaderActions>
                    </>
                }

            </DashboardHeaderContainer> 
        </>
    );
}