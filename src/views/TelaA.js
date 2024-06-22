import React from "react";
import TextoCentral from "../components/TextoCentral";    
import StepStack from "../components/StepStack";

export default props => {
    return (
        <StepStack {...props} next="TelaB">
            <TextoCentral corFundo='#e53935'>Tela A</TextoCentral>
        </StepStack>
        
    )
}