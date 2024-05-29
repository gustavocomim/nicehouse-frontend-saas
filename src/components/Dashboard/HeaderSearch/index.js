import React, { useCallback, useState } from "react";   

import { 
    ContentHeaderAutocomplete,
    ContentHeaderAutocompleteItem,
    ContentHeaderSearch,
} from "./styled"; 

import Input from "components/Form/Input"; 
import useCampaing from "hooks/useCampaing";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function DashboardHeaderSearch(){  
    const history = useHistory();
    const navigate = useCallback(to => history.push(`/${ to }`), [history]);

    const { campaings } = useCampaing()
    
    const [opened, setOpened] = useState(false) 

    const [ form, setForm ] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 


    const action = item => {
        setForm({})
        navigate(`dashboard/campaing/details/${ item?.id }`)
    }

    const filterExpression = item => {
        const searchExpression = form?.search || ""
        return ( !searchExpression || Object.keys(item).filter(k => `${ item[k] }`.toLowerCase().indexOf(searchExpression.toLowerCase()) !== -1 ).length > 0)
    }

    return ( 
        <> 
            <ContentHeaderSearch>
                <Input rounded placeholder="O que você procura?" value={formValue('search')} onChange={e => changeForm(e.target.value, 'search')} onFocus={() => setOpened(true)} onBlur={() => setOpened(false)} /> 
                {
                    !form?.search?.length || !campaings?.filter(filterExpression)?.length ? null : 
                        <ContentHeaderAutocomplete>
                            {
                                campaings?.filter(filterExpression)?.map((item, key) => 
                                    <ContentHeaderAutocompleteItem key={key} onClick={() => action(item)}>{ item?.title }</ContentHeaderAutocompleteItem>
                                )
                            }
                        </ContentHeaderAutocomplete> 
                }
            </ContentHeaderSearch>                       
        </>
    );
}