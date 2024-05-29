import React from "react";  

import {  
    
    CheckContainer,
    CheckText

} from "./styled";
import Check from "components/Form/Check";

export default function CardTerms({ changeForm, formValue, preview }){  
    
    return ( 
        <>
            
            <CheckContainer onClick={preview ? null : () => changeForm(!formValue('terms'), 'terms')}>
                <Check checked={!!formValue('terms')|| preview } />
                <CheckText>
                    Ao clicar em ENVIAR você concorda que o seu briefing estará sujeito aos <CheckText link>termos de uso</CheckText> e <CheckText link>políticas de privacidade</CheckText> da plataforma Nice For Brands
                </CheckText>
            </CheckContainer>
                                            
        </>
    );
}