import React, { useContext, useRef, useState } from "react";

import { 
    
    ContainerVideo,
    ContainerVideoHeader,
    ContainerVideoAction,
    ContainerVideoHeaderButtonIcon,
    ContainerVideoVideo,

} from "./styled";

import ModalWrapper from "../Wrapper";
import CardChatSupport from "components/Cards/ChatSupport";
import { Col, Row } from "reactstrap";

import Button from "components/Form/Button";
import { CoreContext } from "context/CoreContext";
import { parseStrapiImage } from "utils";
import { Update } from "services/deliveries";
import { toast } from "react-toastify";

export default function ModalReviewApprove(){

    const { modal, setModal } = useContext(CoreContext)

    const [approving, setApproving] = useState(false)
    const [refusing, setRefusing] = useState(false)

    const close = () => {
        setModal(null)
    }

    const reviewOptions = {
        approve: () => approveDelivable(),
        refuse: () => refuseDelivable(),
    }

    const approveDelivable = async () => {
        if(modal?.item?.id){
            setApproving(true)
                const result = await Update({ data:{ approved: true } }, modal?.item?.id)
                if(result?.data?.id){ 
                    toast.success("Aprovado!") ;
                    if(typeof modal?.reload === 'function'){ modal?.reload() }
                }
            setApproving(false)
            close()
        }
    }

    const refuseDelivable = async () => {
        if(modal?.item?.id){
            setRefusing(true)
                const result = await Update({ data:{ approved: false } }, modal?.item?.id)
                if(result?.data?.id){ 
                    toast.success("Reprovado") ;
                    if(typeof modal?.reload === 'function'){ modal?.reload() }
                }
            setRefusing(false)
            close()
        }
    }

    const videoRef = useRef(null);

    console.log('ITEM', modal?.item)

    return (
        <>
            <ModalWrapper approving={approving} refusing={refusing} review={reviewOptions}>
                <Row>
                    <Col className="no-col">
                        <ContainerVideo image={modal?.item?.image}>
                            <ContainerVideoHeader>
                                <ContainerVideoAction>
                                    <Button nospace primary onClick={modal?.item?.url ? () => window.open(parseStrapiImage(modal?.item?.url), "campaing-asset") : null }>
                                        <ContainerVideoHeaderButtonIcon icon={"cloud-download-white"} />
                                        { modal?.item?.isVideo ? `DOWNLOAD DO VÍDEO` : `DOWNLOAD` }
                                    </Button>
                                </ContainerVideoAction>
                            </ContainerVideoHeader>

                            {
                                modal?.item?.isVideo ? <>
                                    <ContainerVideoVideo ref={videoRef} controls >
                                        <source src={parseStrapiImage(modal?.item?.parsed_file?.url)} type="video/mp4" />
                                    </ContainerVideoVideo >
                                </> : null
                            }

                            {/* <ContainerVideoBody>

                                <ContainerVideoBodyAction>
                                    <ContainerVideoBodyActionIcon icon={"play"} />
                                </ContainerVideoBodyAction>

                            </ContainerVideoBody>
                            <ContainerVideoFooter>

                                <ContainerVideoFooterProgress>
                                    <ContainerVideoFooterProgressText>0:10</ContainerVideoFooterProgressText>
                                    <ContainerVideoFooterProgressLine>
                                        <ContainerVideoFooterProgressLineDecoration />
                                        <ContainerVideoFooterProgressLineIndicator />
                                    </ContainerVideoFooterProgressLine>
                                    <ContainerVideoFooterProgressText>1:10</ContainerVideoFooterProgressText>
                                </ContainerVideoFooterProgress>

                            </ContainerVideoFooter> */}

                        </ContainerVideo>
                    </Col>
                    <Col className="no-col">
                        <CardChatSupport closeable={close} />
                    </Col>
                </Row>
            </ModalWrapper>
        </>
    )
}