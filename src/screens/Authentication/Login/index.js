import React, { useContext, useState } from "react"; 
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleLogin, hasGrantedAnyScopeGoogle, useGoogleLogin } from '@react-oauth/google';


import { 
    FormTitle,
    FormText,
    FormSpacer,
    RegisterForgot,
    ForgotLink,
    ForgotContent,
    BodyLine,
    LogoGoogle
} from './styled' 

import Button from "components/Form/Button";
import Input from 'components/Form/Input'

import ContainerUnauthenticated from "containers/Unauthenticated";
import { CoreContext } from "context/CoreContext";
import { AuthGoogleFetchUser, DoLogin, DoLoginGoogle } from "services/authentication";
import { exposeStrapiError } from "utils";

import { 
    BodyContent,
    BodyContentImage,
    FormDecoration
 } from "ui/styled";

export default function Login(){ 
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const [ loading, setLoading ] = useState(false)
    const { setUser } = useContext(CoreContext)
    
    const [ form, setForm ] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    const valid = (verbose = false) => {  

        if(!formValue('identifier') || !formValue('identifier').length){ 
            if(verbose){ toast.error('Preencha o campo: Email') ;}
            return false; 
        }  

        if(!formValue('password') || !formValue('password').length){ 
            if(verbose){ toast.error('Preencha o campo: Senha') ;}
            return false; 
        }  

        return true
    } 

    const login = async () => {
        if(!valid(true)){ return ;}
        setLoading(true)
        const result = await DoLogin({ ...form, identifier: form.identifier?.replace(/ /g,'') })  
        setLoading(false)
        if(result && !exposeStrapiError(result)){
            completeLogin(result)
        } 
    }

    const completeLogin = (result) => {
        if(result?.user){ setUser(result.user) }
        navigate('dashboard')
    }  

    const loginSuccess = async tokenResponse => {


        console.log(tokenResponse, tokenResponse?.access_token) 
        setLoading(true)
        const result = await DoLoginGoogle(tokenResponse?.access_token)  
        setLoading(false)
        if(result && !exposeStrapiError(result)){
            completeLogin(result)
        } else {
            navigate('register')
        }
    
    }

    const socialLogin = useGoogleLogin({
        onSuccess: loginSuccess
    });
 
    return ( 
        <>  
            <ContainerUnauthenticated> 

                <BodyContent>
                    <FormDecoration />
                    <BodyContentImage />
                    <FormTitle>Chega mais!</FormTitle>
                    <FormText>Podemos te ajudar no crescimento da sua empresa.</FormText> 
                    <Input placeholder="E-mail" value={formValue('identifier')} onChange={e => changeForm(e.target.value, 'identifier')} /> 
                    <FormSpacer />
                    <Input placeholder="Senha" type="password" value={formValue('password')} onChange={e => changeForm(e.target.value, 'password')} onSubmitEditing={login} />   
                    <ForgotContent>
                        <ForgotLink onClick={() => navigate('forgot')}>Recuperar senha</ForgotLink>
                    </ForgotContent>
                    <Button primary loading={loading} onClick={login}>Entrar</Button>
                    <BodyLine />

                    <Button white square loading={loading} onClick={socialLogin}>
                        <LogoGoogle />
                        Entrar com Google
                    </Button>

                    <RegisterForgot>
                        Ainda não é cadastrado? 
                        <ForgotLink onClick={() => navigate('register')}>Cadastre-se</ForgotLink>
                    </RegisterForgot>
                </BodyContent>

            </ContainerUnauthenticated>
        </>
    );
}