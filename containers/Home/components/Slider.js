import React, { Fragment, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { CardPartner, Theme, Image } from "../../../components";
import styled from "@emotion/styled";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider = ({ partnerData, partner_image, ...props }) => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<Wrapper>
			<WraperImage>
				<Image
					src={partner_image}
					width='100%'
					height='100%'
					objectFit='cover'
					objectPosition='center'
					alt='Image Partner'
				/>
			</WraperImage>
			<AutoPlaySwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents>
				{partnerData?.items?.map((e, index) => (
					<Box component={"div"} key={index}>
						<CardPartner
							icon={e.image}
							name={e.name}
							description={e.description}
							point_content={e.point_content}
							link={e.link}
						/>
					</Box>
				))}
			</AutoPlaySwipeableViews>
		</Wrapper>
	);
};

export default Slider;

// styled Sheet

const WraperImage = styled(Box, {
	shouldForwardProp: (prop) => {
		return prop !== "partner_image";
	},
})(({ theme }) => {
	return {
		position: "absolute",
		bottom: 0,
		top: 0,
		width: "100%",
		height: "100%",
		pointerEvents: "none",
		objectFit: "contain",
		objectPosition: "center",
	};
});

const Wrapper = styled(Box)(({ theme }) => {
	return {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
	};
});
