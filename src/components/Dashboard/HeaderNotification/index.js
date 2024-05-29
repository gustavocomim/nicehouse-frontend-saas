import React, { useCallback, useContext, useEffect, useState } from "react";   
 
import { 
                   
    ContentHeaderNotification,
    ContentHeaderNotificationIcon,
    ContentHeaderNotificationBadge,
    ContentHeaderNotificationBadgeText,
    ContentHeaderNotificationContainer,

    HeaderNotificationContainer,
    HeaderNotificationItem,
    HeaderNotificationItemDecoration,
    HeaderNotificationItemDecorationIcon,
    HeaderNotificationItemContent,
    HeaderNotificationItemContentTitle,
    HeaderNotificationItemContentText,
    HeaderNotificationItemIcon,
    
} from "./styled"; 
import { Read, Update } from "services/notifications";
import { CoreContext } from "context/CoreContext";
import { exposeStrapiError, normalizeStrapiList } from "utils";
import { Load } from "ui/styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function DashboardHeaderNotitication({ actions }){  

    const history = useHistory();
    const navigate = useCallback(to => history.push(`/${ to }`), [history]);

    const { user } = useContext(CoreContext)
    
    const [opened, setOpened] = useState(false) 
    const [loading, setLoading] = useState(false) 

    const [notifications, setNotifications] = useState([])

    const parseNotification = item => {
        return { 
            ...item,
            text: item?.message, 
            icon:"bell" 
        }
    }

    const action = async (item) => { 
        setLoading(true)
        await Update({
            data:{ readed:true }
        }, item?.id)
        init()
        setOpened(!opened)
        if(item?.link){ navigate(item?.link) ;}
    }

    const init = async () => {
        setLoading(true)
        const result = await Read(user?.id)
        if(result && !exposeStrapiError(result)){
            const normalResult = normalizeStrapiList(result)
            setNotifications(normalResult?.map(parseNotification))
        }
        setLoading(false)
    }

    useEffect(() => {
        init()
    }, [])

    return ( 
        <> 
            <ContentHeaderNotificationContainer>

                {
                    loading ? <Load colored /> : <>
                        <ContentHeaderNotification  onClick={() => setOpened(!opened)} >
                            <ContentHeaderNotificationIcon />
                            {
                                !notifications?.filter(f => !f.readed)?.length ? null :
                                    <ContentHeaderNotificationBadge>
                                        <ContentHeaderNotificationBadgeText>{ notifications?.filter(f => !f.readed)?.length }</ContentHeaderNotificationBadgeText>
                                    </ContentHeaderNotificationBadge>
                            }
                        </ContentHeaderNotification>

                        {
                            !opened ? null :
                                <HeaderNotificationContainer>
                                    {
                                        notifications?.map((item, key) => 
                                            <HeaderNotificationItem key={key} onClick={() => action(item)}>
                                                <HeaderNotificationItemDecoration>
                                                    <HeaderNotificationItemDecorationIcon />
                                                </HeaderNotificationItemDecoration>
                                                <HeaderNotificationItemContent>
                                                    <HeaderNotificationItemContentTitle>{ item?.title }</HeaderNotificationItemContentTitle>
                                                    <HeaderNotificationItemContentText>{ item?.text }</HeaderNotificationItemContentText>
                                                </HeaderNotificationItemContent>
                                                <HeaderNotificationItemIcon />
                                            </HeaderNotificationItem>
                                        )
                                    }
                                </HeaderNotificationContainer>
                        }
                    </>
                }


            </ContentHeaderNotificationContainer>
        </>
    );
}