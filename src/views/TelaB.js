import React from "react";
import TextoCentral from "../components/TextoCentral";
import StepStack from "../components/StepStack";

export default props => {
    return (
        <StepStack {...props} next="TelaC" back>
        <TextoCentral corFundo='#3b82c4'>Tela B</TextoCentral>
        </StepStack>
    )
}