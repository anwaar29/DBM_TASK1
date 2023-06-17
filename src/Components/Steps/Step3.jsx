import React from "react";
import { Box,Paper } from "@material-ui/core";
import { styles } from "../Common/styles";
import {
  renderButton,

} from "../Common/DisplayComponent";

const Step3 = ({
  
  handleNext,
 
}) => {
  return (
    <Paper style={styles.steps}>
      <h1>Thank You  Please Click To Finish Button</h1>
        <Box ml={2}>
          {renderButton({ label: "Finish", onClick: handleNext })}
        </Box>
      
    </Paper>
  );
};

export default Step3;
