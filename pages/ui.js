import React from "react";
import {
	GridContainer,
	Button,
	FormContact,
	BoxContact,
	Wheel,
	ButtonShape,
	BlogCard,
} from "../components";
import { Stack, Box } from "@mui/material";

const UIPage = () => {
	return (
		<>
			<GridContainer
				OuterProps={{
					sx: {
						padding: 2,
					},
				}}>
				<Stack
					direction={"column"}
					spacing={2}
					justifyContent={"center"}
					alignItems={"center"}
					sx={{
						width: "inherit",
					}}>
					<div>
						<h1>UI PAGE</h1>
					</div>
					{/* <div>
						<Button title='Button' isBackground={true} />
					</div>
					<div>
						<Button
							title='Button'
							isBackground={true}
							backgroundColor='black'
						/>
					</div>
					
					<div>
						<BoxContact />
					</div>
					<div>
						<Button
							title={"Button Header"}
							isBackground={true}
							backgroundColor='#332FD0'
						/>
					</div> */}
					{/* <div>
						<Wheel />
					</div> */}
					<div>
						<ButtonShape
							title={"About"}
							isBackground={true}
							backgroundColor={"#FAD9E6"}
						/>
					</div>
					{/* <div>
						<FormContact />
					</div> */}
					{/* <div>
						<BlogCard />
					</div> */}
				</Stack>
			</GridContainer>
		</>
	);
};

export default UIPage;
