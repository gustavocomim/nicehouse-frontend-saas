import React, { useMemo, useState } from "react";  
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';

import {   
    InputLabelOut,
    MaterialInput
} from "./styled"; 

 
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment'; 
import FormControl from '@mui/material/FormControl';  
import { ThemedComponent } from "ui/theme";
import { TextField } from "@mui/material";


export const Input = (props) => { 

    const [focused, setFocused] = useState(false) 
    const [visible, setVisible] = useState(false) 

    const handleClickShowPassword = () => {
        setVisible(!visible);
    };

    const handleMouseDown = (event) => {
        event.preventDefault();
    }; 

    const focus = (e) => {
        if(typeof props?.onFocus === "function"){
            props.onFocus(e)
        }
        setFocused(true)
    }

    const blur = (e) => {
        if(typeof props?.onBlur === "function"){
            props.onBlur(e)
        }
        setFocused(false)
    }

    const noPlaceholder = useMemo(() => {
        // return props.type === "textarea" && (focused || props.value)
        return (focused || props.value)
    }, [focused, props.value ])

    const GenericInput = useMemo(() => {
        return props.type === 'textarea' ? TextField : MaterialInput
    }, [props.type])

    return ( 
        <>  
            <ThemedComponent>
                {/* standard | outlined | filled */}

                { !props.label ? null : <InputLabelOut>{ props.label }</InputLabelOut> }

                <FormControl fullWidth variant={"outlined"}>
                    <InputLabel htmlFor={props.id}
                        color={ props.secondary ? 'secondary' : 'primary' } >{ noPlaceholder ? "" : props.placeholder }</InputLabel>
                        <GenericInput
                            id={props.id}
                            type={ props.type === 'password' ? visible ? 'text' : 'password' : props.type }
                            multiline={ props.type === 'textarea' }
                            minRows={4}
                            value={props.value}
                            small={props.small}
                            onChange={props.onChange}
                            onBlur={blur}
                            onFocus={focus}
                            rounded={props.rounded}
                            onKeyDown={ ev => typeof props.onSubmitEditing === 'function' ? ( ev.keyCode === 13 ? props.onSubmitEditing() : null ) : props.onKeyDown }
                            disabled={props.disabled}
                            color={ props.secondary ? 'secondary' : 'primary' }
                            endAdornment={ props.type === 'password' || props.icon ?
                                    <InputAdornment position="end"> 
                                        {
                                            props.type === 'password' ?  
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDown} >
                                                    { !visible ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            : null
                                        }  
                                    </InputAdornment>
                                : null 
                            }
                        />
                </FormControl>
            </ThemedComponent> 
        </>
    );
}

export const MaskedInput = (props) => (
    <>
        { !props.label ? null : <InputLabelOut>{ props.label }</InputLabelOut> }
        <InputMask mask={props.mask} value={props.value} disabled={false} placeholder={props.placeholder} onChange={props.onChange} maskChar="">
        { (inputProps) => <Input {...inputProps} type="tel" value={null} onChange={null} />  }
        </InputMask>
    </>
);

MaskedInput.propTypes = { 
    type: PropTypes.oneOf(['password', 'text']),  
    label: PropTypes.string, 
    placeholder: PropTypes.string, 
    value: PropTypes.string.isRequired, 
    secondary: PropTypes.bool, 
    onSubmitEditing: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    mask: PropTypes.string.isRequired
};


MaskedInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    value: '',  
    secondary: false,
    onSubmitEditing: undefined,
    onChange: undefined,
    mask: ''
};

Input.propTypes = { 
    type: PropTypes.oneOf(['password', 'text']),  
    label: PropTypes.string, 
    placeholder: PropTypes.string, 
    value: PropTypes.string.isRequired, 
    secondary: PropTypes.bool, 
    disabled: PropTypes.bool, 
    onSubmitEditing: PropTypes.func,
    onChange: PropTypes.func.isRequired,
};


Input.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    value: '',  
    secondary: false,
    disabled: false,
    onSubmitEditing: undefined,
    onChange: undefined,
};

export default Input; 