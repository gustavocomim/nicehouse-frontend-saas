import React, { useState } from "react"; 
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


import { 
    FormTitle,
    FormText,
    FormSpacer
} from './styled' 

import Button from "components/Form/Button";
import Input from 'components/Form/Input'

import ContainerUnauthenticated from "containers/Unauthenticated";
import { DoResetPassword } from "services/authentication";
import { exposeStrapiError } from "utils";
import { BodyContent, BodyContentImage, FormDecoration } from "ui/styled";
import PasswordValidation from "components/Form/PasswordValidation";

export default function CreatePassword(){ 
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const params = new URLSearchParams(window.location.search)
    const [ loading, setLoading ] = useState(false) 
    
    const [ form, setForm ] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    const valid = (verbose = false) => { 

        if(!formValue('password') || !formValue('password').length){ 
            if(verbose){ toast.error('Preencha o campo: Nova senha') ;}
            return false; 
        } 
        
        if(!formValue('cpassword') || !formValue('cpassword').length){ 
            if(verbose){ toast.error('Preencha o campo: Confirmar nova senha') ;}
            return false; 
        } 
        
        if( formValue('password') !== formValue('cpassword')){ 
            if(verbose){ toast.error('Nova senha e confirmação da nova senha não são iguais') ;}
            return false; 
        } 

        return true
    }

    const action = async () => {
        if(!valid(true)){ return ;}
        setLoading(true)
        
        const result =  await DoResetPassword({
            code: params.get('code'),
            password: formValue('password'),
            passwordConfirmation: formValue('cpassword')
        })   
        
        setLoading(false)
        if(result && !exposeStrapiError(result)){
            completNext()
        } 
    }

    const completNext = () => {
        toast.success('Senha criada com sucesso'); 
        navigate('login')
    } 
 
    return ( 
        <>  
            <ContainerUnauthenticated> 
                <BodyContent>
                    <FormDecoration />
                    <BodyContentImage />
                    <FormTitle>Agora sim!</FormTitle>
                    <FormText>Crie uma nova senha para acessar a sua conta.</FormText>
                    <Input id={'password'} placeholder="Senha nova" type="password" value={formValue('password')} onChange={e => changeForm(e.target.value, 'password')} />
                    <FormSpacer />
                    <Input id={'cpassword'} placeholder="Repetir senha" type="password" value={formValue('cpassword')} onChange={e => changeForm(e.target.value, 'cpassword')} />
                    <FormSpacer />
                    <PasswordValidation password={formValue('password')} />
                    <Button primary loading={loading} onClick={action}>FINALIZAR</Button>
                </BodyContent>
            </ContainerUnauthenticated> 
        </>
    );
}