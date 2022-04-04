import React, { Fragment, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { CardPartner, Theme, Image } from "../../../components";
import styled from "@emotion/styled";
import { flexbox } from "@mui/system";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SIZE = 400;

const Slider = (partnerData, ...props) => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<Fragment>
			<Container maxWidth='xl'>
				<ImageBackground>
					<Image
						src='http://member-intro.t-solution.vn/media/original_images/01_qSR6fdH.png'
						width='100%'
						height={SIZE}
						alt='Image Partner'
					/>
					<Wraper>
						<AutoPlaySwipeableViews
							axis={theme.direction === "rtl" ? "x-reverse" : "x"}
							index={activeStep}
							onChangeIndex={handleStepChange}
							enableMouseEvents>
							{partnerData?.partnerData?.items?.map((e, index) => (
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
					</Wraper>
				</ImageBackground>
			</Container>
		</Fragment>
	);
};

export default Slider;

// styled Sheet
const ImageBackground = styled(Box)(({ theme }) => {
	return {};
});

const Wraper = styled(Box)(({ theme }) => {
	return {};
});
