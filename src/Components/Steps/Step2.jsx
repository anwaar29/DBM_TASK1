import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../Common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../Common/DisplayComponent";

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "ADDRESS",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "city",
            label: "City",
            options: [
              { key: "Uttar Pardesh", value: "Uttar Pardesh" },
              { key: "Rajshthan", value: "Rajshthan" },
              { key: "Delhi", value: "Delhi" },
              { key: "Goa", value: "Goa" },
              { key: "Karnataka", value: "Karnataka" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "address_line1",
            label: "address_line1",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "address_line2",
            label: "address_line2",
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "pincode",
            required:'true',
            label: "Pin-Code",
            onChange: handleChange,
          })}
        </Grid>
       
      </Grid>

      <Grid container component={Box} justifyContent='flex-end' style={{margin: "5px"}}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box>{renderButton({ label: "Next", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
  );
};

export default Step2;
