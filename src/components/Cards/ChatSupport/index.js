import React, { useCallback, useContext, useEffect, useState } from "react";  

import {  
    
    CardExpandContainer,
    CardExpandContainerHeader,
    CardExpandContainerHeaderIcon,
    CardExpandContainerHeaderContent,
    CardExpandTitle,
    CardExpandText,
    CardExpandContainerBody,
    CardExpandContainerActions,
    CardExpandContainerAction,

    CardChatBallon,
    CardChatBallonText,
    CardChatBallonBottom,
    CardChatBallonBottomItem,
    CardChatBallonBottomItemIcon,
    CardChatBallonBottomItemText,
    ModalContainerHeaderButtonIcon,
    ModalContainerHeaderButton,
    CardExpandContainerHeaderIconDecoration,

} from "./styled";


import Button from "components/Form/Button";
import Input from "components/Form/Input";
import { Create, Read, ReadSent } from "services/chats";
import { CoreContext } from "context/CoreContext";
import { exposeStrapiError, normalizeStrapiList } from "utils";
import moment from "moment/moment";
import { Load } from "ui/styled";


export default function CardChatSupport({ closeable }){  

    const { user } = useContext(CoreContext)

    const [chats, setChats] = useState([])
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [senting, setSenting] = useState(false)

    const parseMessage = useCallback(item => {
        return { 
            ...item,
            date: moment(item?.createdAt)?.format("L"), 
            me: item?.sent?.data?.id === user?.id
        }
    }, [user])

    const init = useCallback(async () => {
        setLoading(true)
        setMessage("")
        const result = await Read(user?.id)
        const result_sent = await ReadSent(user?.id)
        if(result && !exposeStrapiError(result)){
            const normalResult = normalizeStrapiList(result)
            const normalResultSent = normalizeStrapiList(result_sent)
            const sortedChat = [...normalResult, ...normalResultSent]?.sort((a, b) => new Date(a.createdAt)?.getTime() - new Date(b.createdAt)?.getTime() )
            console.log("sortedChat", sortedChat)
            setChats(sortedChat?.map(parseMessage))
        }
        setLoading(false)
    }, [user, parseMessage])

    const action = async () => {
        setSenting(true)
            const result = await Create({
                data:{
                    sent: user?.id,
                    message
                }
            })
            if(result?.data?.id){ init() ;}
        setSenting(false)
    }

    useEffect(() => {
        init()
    }, [init])
    
    return ( 
        <>
            <CardExpandContainer closeable={closeable}>
                <CardExpandContainerHeader>
                    <CardExpandContainerHeaderIcon>
                        <CardExpandContainerHeaderIconDecoration />
                    </CardExpandContainerHeaderIcon>
                    <CardExpandContainerHeaderContent>
                        <CardExpandTitle>Atendimento NiceHouse</CardExpandTitle>
                        <CardExpandText>Online</CardExpandText>
                    </CardExpandContainerHeaderContent>

                    { closeable ? 
                        <ModalContainerHeaderButton>
                            <Button outline nospace onClick={closeable}>
                                <ModalContainerHeaderButtonIcon icon={"close"} />
                            </Button>
                        </ModalContainerHeaderButton>
                    : null }

                </CardExpandContainerHeader>
                <CardExpandContainerBody>

                    {/* <CardChatDate>
                        <CardChatDateIcon />
                        <CardChatDateText>Hoje</CardChatDateText>
                    </CardChatDate> */}
                    
                    {/* <CardChatSpacer /> */}

                    { loading ? <Load colored /> : null }

                    {
                        chats.map((item, key) => 
                            <CardChatBallon me={item.me} key={key}>
                                <CardChatBallonText>{ item?.message }</CardChatBallonText>
                                <CardChatBallonBottom>
                                    <CardChatBallonBottomItem>
                                        <CardChatBallonBottomItemIcon />
                                        <CardChatBallonBottomItemText>{ item?.date }</CardChatBallonBottomItemText>
                                    </CardChatBallonBottomItem>
                                </CardChatBallonBottom>
                            </CardChatBallon>
                        )
                    }

                </CardExpandContainerBody>
                <CardExpandContainerActions>
                    <Input placeholder="Digite sua mensagem" value={message} onChange={e => setMessage(e?.target?.value)}/>
                    <CardExpandContainerAction>
                        <Button nospace primary loading={senting} onClick={action}>ENVIAR</Button>
                    </CardExpandContainerAction>
                </CardExpandContainerActions>
            </CardExpandContainer>
        </>
    );
}