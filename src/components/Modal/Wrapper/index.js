import React, { useContext } from "react";

import { 
    ModalContainer, 
    ModalContainerBody, 
    ModalContainerBodyContainer, 
    ModalContainerHeader, 
    ModalContainerHeaderActionIcon, 
    ModalContainerHeaderActions, 
    ModalContainerHeaderButtonIcon, 
    ModalContainerHeaderLogo 
} from "./styled";

import Button from "components/Form/Button";
import { CoreContext } from "context/CoreContext";

export default function ModalWrapper({ review, children, approving, refusing }){

    const { setModal} = useContext(CoreContext)

    const close = () => {
        setModal(null)
    }

    return (
        <>
            <ModalContainer>
                <ModalContainerHeader>
                    <ModalContainerHeaderLogo />
                    {
                        !review ? <ModalContainerHeaderActions>
                            <Button primary nospace onClick={close}>
                                <ModalContainerHeaderButtonIcon icon={"close-white"} />
                            </Button>
                        </ModalContainerHeaderActions> :
                        <ModalContainerHeaderActions>
                            <Button color={"error"} loading={refusing} nospace onClick={review?.refuse}>
                                <ModalContainerHeaderActionIcon icon={"refused-white"} />
                                REPROVAR
                            </Button>
                            <Button color={"success"} loading={approving} nospace onClick={review?.approve}>
                                <ModalContainerHeaderActionIcon icon={"approved-white"} />
                                APROVAR
                            </Button>
                        </ModalContainerHeaderActions>
                    }
                </ModalContainerHeader>
                <ModalContainerBodyContainer>
                    <ModalContainerBody>
                        { children }
                    </ModalContainerBody>
                </ModalContainerBodyContainer>
            </ModalContainer>
        </>
    )
}