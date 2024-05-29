import React, { useContext } from "react";
import ModalWrapper from "./Wrapper";
import { ThemedComponent } from "ui/theme";
import ModalReviewApprove from "./ReviewApprove";
import { CoreContext } from "context/CoreContext";


export default function ModalController(){
    const { modal } = useContext(CoreContext)
    return (
        <>
            <ThemedComponent>
                { modal?.type === 'review' ? <ModalReviewApprove /> : null }
            </ThemedComponent>
        </>
    )
}