import {TextField, InputLabel} from "@mui/material"
import { Fragment } from "react";
const test = () => {
    return (
			<Fragment>
				<TextField
                    fullWidth
					label='label'
                    placeholder="placeholder"
                    InputProps={{
                        sx: {
                            color: "purple",
                            borderColor: 'cyan',
                            fontSize: '24px'
                        }
                    }}
					InputLabelProps={{
						children: "thay doi",
                        sx:{
                            color: 'green',
                            background: 'red',
                            fontSize: '24px'
                        },

					}}></TextField>
				
			</Fragment>
		);
}

export default test;