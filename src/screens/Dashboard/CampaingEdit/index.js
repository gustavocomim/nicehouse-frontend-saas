import React, { useEffect, useState } from "react";  
import { useHistory } from "react-router-dom";

import {  

    CardHomeContentBodyAction,

} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import Button from "components/Form/Button";

import CampaingHeaderBread from "components/Dashboard/Campaing/HeaderBread";
import CardAccordeon from "components/Cards/Accordeon";
import CardAssets from "components/Cards/Assets";

import CardContentType from "components/Cards/ContentType";

import Input, { MaskedInput } from "components/Form/Input";
import CardTerms from "components/Cards/Terms";
import useCampaing from "hooks/useCampaing";
import { Load } from "ui/styled";
import { toast } from "react-toastify";
import { moods } from "utils/mock";


export default function DashboardCampaingEdit(){  

    const history = useHistory();

    const { currentCampaing, loading, saving, save, removeAsset } = useCampaing()
    const [ form, setForm ] = useState({})

    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    useEffect(() => {
        if(form && currentCampaing && !Object.keys(form)?.length && Object.keys(currentCampaing)?.length ){ setForm({ ...currentCampaing }) }
    }, [currentCampaing, form])

    const action = async () => {
        const success = await save(form);
        if(success){
            setForm({})
            toast.success("Campanha atualizada com sucesso")
            history.goBack()
        }
    }

    return ( 
        <>
            <ContainerAuthenticated side={1}> 
            
                <CampaingHeaderBread title={ currentCampaing?.title } bread={["Campanhas", currentCampaing?.title, "Editar campanha"]}  >
                    {
                        loading ? null :
                        <CardHomeContentBodyAction>
                            <Button onClick={() => history.goBack()} outline primary>CANCELAR</Button>
                            <Button loading={saving} onClick={() => action()} primary>SALVAR</Button>
                        </CardHomeContentBodyAction>
                    }
                </CampaingHeaderBread> 

                {
                    loading ? <Load colored /> : <>
                        <CardAccordeon title={"Informações do negócio"} label={"Andamento"}>
                            
                            <Input label={"Nome da empresa *"} placeholder="Digite o nome da empresa" value={formValue('company_company')} onChange={e => changeForm(e.target.value, 'company_company')} /> 
                            <Input label={"E-mail de contato *"} placeholder="Digite o e-mail de contato" value={formValue('company_email')} onChange={e => changeForm(e.target.value, 'company_email')} /> 
                            <MaskedInput mask={"(99) 99999-9999"} label={"Telefone de contato *"} placeholder="DDD + Número" value={formValue('company_phone')} onChange={e => changeForm(e.target.value, 'company_phone')} /> 
                            <Input type={"textarea"} label={"Descreva brevemente seu produto ou marca *"} placeholder="O que você quer destacar nesse projeto, pontos importantes e de destaque" value={formValue('company_brand_description')} onChange={e => changeForm(e.target.value, 'company_brand_description')} /> 

                        </CardAccordeon>

                        <CardAccordeon title={"Detalhes do projeto"}>

                            <Input label={"Nome da campanha *"} placeholder="Digite aqui o nome da campanha" value={formValue('name')} onChange={e => changeForm(e.target.value, 'name')} /> 
                            <Input label={"Objetivo da campanha *"} placeholder="Digite o objetivo da campanha" value={formValue('campaing_objective')} onChange={e => changeForm(e.target.value, 'campaing_objective')} /> 
                            <Input type={"textarea"} label={"Público alvo *"} placeholder="Descreva as personas que melhor se identificam com o seu público (idade, sexo, grau de escolaridade, classe social, hábitos)" value={formValue('target_audience')} onChange={e => changeForm(e.target.value, 'target_audience')} /> 
                            <Input type={"textarea"} label={"Mensagem principal"} placeholder="Tem alguma mensagem ou argumento que não pode faltar no vídeo?" value={formValue('main_message')} onChange={e => changeForm(e.target.value, 'main_message')} /> 
                            <MaskedInput mask={"99/99/9999"} label={"Expectativa de data de entrega *"} placeholder="Descreva as personas que melhor se identificam com o seu público (idade, sexo, grau de escolaridade, classe social, hábitos)" value={formValue('expected_delivery_date')} onChange={e => changeForm(e.target.value, 'expected_delivery_date')} /> 
                        
                        </CardAccordeon>
                        
                        <CardAccordeon title={"Detalhes do conteúdo"}>
                            
                            {
                                moods?.map((item, key) => 
                                    <CardContentType key={key} item={item} formValue={formValue} changeForm={changeForm} />
                                )
                            }

                        </CardAccordeon>
                        
                        <CardAccordeon title={"Informações adicionais"}>
                                                                
                            <Input label={"Site de empresa / Landing page *"} placeholder="Digite a URL (Ex: http://www.site.com.br)" value={formValue('url_site_landing_page')} onChange={e => changeForm(e.target.value, 'url_site_landing_page')} /> 
                            <Input type={"textarea"}  label={"Call-to-action (CTA)"} placeholder="Qual ação você quer que seu público execute após assistir o seu vídeo? ( Ex: Clique aqui, Saiba mais, Baixe agora e etc...)" value={formValue('cta')} onChange={e => changeForm(e.target.value, 'cta')} /> 
                            <Input type={"textarea"}  label={"Requerimento Especial  *"} placeholder="Informe qualquer requerimento específico incluindo ideias, conceitos, elementos visuais e etc..." value={formValue('special_requirement')} onChange={e => changeForm(e.target.value, 'special_requirement')} /> 

                            <CardAssets title={"Assets"} showableAssets={currentCampaing?.assets} removeAsset={removeAsset} />
                            <CardTerms preview formValue={formValue} changeForm={changeForm} />

                        </CardAccordeon>
                    </>
                }


                
            </ContainerAuthenticated> 
        </>
    );
}