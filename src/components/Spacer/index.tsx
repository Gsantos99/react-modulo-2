import React from "react";
import StyledSpacer, {StyledSpacerProps} from './styles'

const Spacer = ({width, height , flex} : StyledSpacerProps ) => {
  return(
   <StyledSpacer width={width} height={height} flex={flex}  />
  )
}

export default Spacer