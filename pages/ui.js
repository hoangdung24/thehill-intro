import React, { Fragment } from "react";
import {
	Button,
	FormContact,
	BoxContact,
	Wheel,
	ButtonShape,
	BlogCard,
	CategoryList,
	ScrollButton,
	CardPartner,
	ButtonPop,
} from "../components";
import { Stack, Box, Container } from "@mui/material";

const UIPage = () => {
	return (
		<Fragment>
			<Container maxWidth='xl'>
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
					{/* <div>
						<CategoryList title={"1"} />
					</div> */}
					{/* <div>
						<ScrollButton />
					</div> */}
					<div>
						<CardPartner />
					</div>
					<div>
						<ButtonPop />
					</div>
				</Stack>
			</Container>
		</Fragment>
	);
};

export default UIPage;
