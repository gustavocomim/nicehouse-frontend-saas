import React from "react";  

import {  

    FormTypeItem,
    FormTypeItemImage,
    FormTypeItemContent,
    FormTypeItemText,
    FormTypeItemTitle,
    ContentInput,

} from "./styled";


import Input from "components/Form/Input";
import Check from "components/Form/Check";

export default function CardContentType({ item, formValue, changeForm, preview, description }){  

    return ( 
        <>
            <FormTypeItem onClick={preview ? null : () => changeForm(item, 'other')} preview={preview}>
                <FormTypeItemImage image={item?.image} />
                <FormTypeItemContent>
                    { preview ? <FormTypeItemTitle>{ item?.title }</FormTypeItemTitle> : <Check label={item?.title} checked={formValue('other')?.title === item?.title} /> }
                    {
                        !item?.other || preview ? 
                            <FormTypeItemText preview={preview} >{ preview && item?.other ? description : item?.text }</FormTypeItemText>
                                :
                            <ContentInput>
                                <Input type={"textarea"} small placeholder="Informe detalhadamente a editoria de conteúdo que deseja" value={formValue('other_description')} onChange={e => changeForm(e.target.value, 'other_description')} /> 
                            </ContentInput>
                    }
                </FormTypeItemContent>
                <FormTypeItemText link>Ver exemplo</FormTypeItemText>
            </FormTypeItem>                                
        </>
    );
}