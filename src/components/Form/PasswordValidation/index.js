import React from 'react'  

import { PasswordValidationContainer } from './styled'
import Check from '../Check'


export default function PasswordValidation({ password }){    
    return (
        <>   
            <PasswordValidationContainer>
                <Check rounded checked={ password?.match(/[A-Z]/) } label={"Uma letra maiúscula"} />
                <Check rounded checked={ password?.match(/[0-9]/) } label={"Um número"} />
                <Check rounded checked={ password?.length > 5 } label={"Pelo menos 6 caracteres"} />
                <Check rounded checked={ password?.match(/[-./',;&@#*)(_+:"´`~]/) } label={"Pelo menos 1 caractere especial"} />
            </PasswordValidationContainer>  
        </>
    )
}