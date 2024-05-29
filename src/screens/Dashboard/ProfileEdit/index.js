import React, { useContext, useState } from "react";  
import { useHistory } from "react-router-dom";

import {  
    
    CardUserContainer,
    CardUserContainerHeader,
    CardUserContainerHeaderImage,
    CardUserContainerHeaderTitle,
    CardUserContainerBody,
    
    CardUserContainerBodyFooter,
    CardUserContainerBodyFooterItem,
    FormSpacer,
    CardUserContainerHeaderImageDecoration,
    CardUserContainerHeaderImageDecorationIcon,

} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Button from "components/Form/Button";

import Input, { MaskedInput } from "components/Form/Input";
import { CoreContext } from "context/CoreContext";
import { parseInitialize } from "utils/parsers";
import { UpdateMe } from "services/me";
import { exposeStrapiError, parseStrapiImage } from "utils";
import { toast } from "react-toastify";
import UploadFile from "components/Form/UploadFile";
import { Load } from "ui/styled";

export default function DashboardProfileEdit(){  

    const history = useHistory(); 

    const { user, setUser } = useContext(CoreContext)

    const [saving, setSaving] = useState(false)
    const [sending, setSending] = useState(false)

    const [ form, setForm ] = useState({ ...user })
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    const save = async () => {
        setSaving(true)
        const result = await UpdateMe({
            name: form?.name,
            email: form?.email,
            phone: form?.phone,
        })

        if(result && !exposeStrapiError(result)){
            setUser({ ...user, ...result })
            toast.success("Salvo!")
            history.goBack()
        }
        setSaving(false)
    }

    const changeImage = async item => {
        setSending(true)
        const result = await UpdateMe({
            data:{ image: item?.id }
        })

        if(result && !exposeStrapiError(result)){
            setUser({ ...user, ...result, image:item })
            toast.success("Imagem atualizada!")
        }
        setSending(false)
    }
 
    return ( 
        <>
            <ContainerAuthenticated side={3}> 
             
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6}>
                            <CardUserContainer>
                                <CardUserContainerHeader>
                                    <UploadFile onChange={changeImage}>
                                        <CardUserContainerHeaderImage image={user?.image?.url ? parseStrapiImage(user?.image?.url) : null} >
                                            { sending ? <Load colored /> : user?.image ? null : parseInitialize(user?.name) }
                                            <CardUserContainerHeaderImageDecoration>
                                                <CardUserContainerHeaderImageDecorationIcon />
                                            </CardUserContainerHeaderImageDecoration>

                                        </CardUserContainerHeaderImage>
                                    </UploadFile>
                                    <CardUserContainerHeaderTitle>{ user?.name }</CardUserContainerHeaderTitle>
                                </CardUserContainerHeader>
                                
                                <CardUserContainerBody>
                                    
                                    <Input placeholder="Nome completo" id={'name'} value={formValue('name')} onChange={e => changeForm(e.target.value, 'name')} /> 
                                    <FormSpacer />
                                    <Input placeholder="E-mail" id={'email'} value={formValue('email')} onChange={e => changeForm(e.target.value, 'email')} /> 
                                    <FormSpacer />
                                    <MaskedInput mask={"(99) 99999-9999"} placeholder="Telefone" id={'phone'} value={formValue('phone')} onChange={e => changeForm(e.target.value, 'phone')} /> 

                                    <CardUserContainerBodyFooter>
                                        <CardUserContainerBodyFooterItem>
                                            <Button outline primary onClick={() => history.goBack()}>CANCELAR</Button>
                                        </CardUserContainerBodyFooterItem>
                                        <CardUserContainerBodyFooterItem>
                                            <Button primary loading={saving} onClick={save}>SALVAR</Button>
                                        </CardUserContainerBodyFooterItem>
                                    </CardUserContainerBodyFooter>
                                </CardUserContainerBody>

                            </CardUserContainer>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                        
            </ContainerAuthenticated> 
        </>
    );
}