import React from "react";
import PropTypes from 'prop-types';

import { ColorButton, Load } from "./styled";
import { ThemedComponent } from "ui/theme";

export const Button = ({ children, loading, primary, secondary, outline, link, nospace, centred, onClick, square, color, white }) => {   

    return ( 
        <> 
          <ThemedComponent>
              <ColorButton variant={ link ? "text" : outline ? "outlined" : "contained" } color={ color ? color : secondary ? 'secondary' : primary ? 'primary' : 'white' } square={square} nospace={nospace} centred={centred} onClick={onClick}>
                {
                  loading ? <Load primary={primary} secondary={secondary} outline={outline} white={white} /> : <>
                    { children }
                  </>
                }
              </ColorButton> 
          </ThemedComponent>
        </>
    );
} 
   
Button.propTypes = { 
  children: PropTypes.node, 
  primary: PropTypes.bool, 
  secondary: PropTypes.bool, 
  outline: PropTypes.bool, 
  link: PropTypes.bool, 
  nospace: PropTypes.bool, 
  centred: PropTypes.bool, 
  loading: PropTypes.bool, 
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: undefined,
  primary: false,
  secondary: false,
  outline: false,
  link: false,
  nospace: false,
  centred: false,
  loading: false,
  onClick: undefined,
};

export default Button;