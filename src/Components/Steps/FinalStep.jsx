import React from "react";
import { Box, Paper } from "@material-ui/core";
import { styles } from "../Common/styles";
import { renderText } from "../Common/DisplayComponent";



const FinalStep = ({ data }) => {

 

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Your Data ",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
        <hr/>
        <div className="container">
       <h4><b>First Name:</b> &nbsp; &nbsp;{data.firstName}</h4>
       <h4><b>Last Name:</b> &nbsp; &nbsp;{data.lastName}</h4>
       <h4><b>Gender:</b> &nbsp; &nbsp;{data.gender}</h4>
       <h4><b>Date of Birth:</b> &nbsp; &nbsp;{data.dob}</h4>
       <h4><b>Phone:</b> &nbsp; &nbsp;{data.phone}</h4>
       <h4><b>E-mail:</b> &nbsp; &nbsp;{data.email}</h4>
       <h4><b>Height:</b> &nbsp; &nbsp;{data.height}</h4>
       <h4><b>Width:</b> &nbsp; &nbsp;{data.width}</h4>
       <hr/>
       <h4><b>City:</b> &nbsp; &nbsp;{data.city}</h4>
       <h4><b>Address_Line1:</b> &nbsp; &nbsp;{data.address_line1}</h4>
       <h4><b>Address_Line2:</b> &nbsp; &nbsp;{data.address_line2}</h4>
       <h4><b>Pin Code:</b> &nbsp; &nbsp;{data.pincode}</h4>

       </div>
      </Box>

      {/* {JSON.stringify(data, null, 4)} */}
    </Paper>
  );
};

export default FinalStep;
