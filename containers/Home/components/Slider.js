import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography , styled} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { CardPartner } from "../../../components";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const SliderCarousel = ({partnerData, data,...props}) => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	function slideRenderer(params) {
		const {index, key} = params
	}

	// console.log(partnerData?.items?.[0]);

	return (
		<Wrapper>
			<WraperImage>
				<img
					src={data.partner_image}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</WraperImage>
			<Box
				sx={{
					textAlign: "center",
					paddingBottom: 5,
					paddingTop: 5,
				}}>
				<Title variant='h4'>{data.partner_title}</Title>
			</Box>
			<AutoPlaySwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents>
				{partnerData?.items?.map((e, index) => (
					<CardsWrapper component={"div"} key={index}>
						<CardPartner
							icon={e.image}
							name={e.name}
							description={e.description}
							point_content={e.point_content}
							link={e.link}
						/>
					</CardsWrapper>
				))}
			</AutoPlaySwipeableViews>
		</Wrapper>
	);
};

export default SliderCarousel;

// styled Sheet

const WraperImage = styled(Box, {
	shouldForwardProp: (prop) => {
		return prop !== "partner_image";
	},
})(({ theme }) => {
	return {
		zIndex: -1,
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	};
});

const Wrapper = styled(Box, {
	shouldForwardProp: (prop) => {
		return prop !== "parter_image";
	},
})(({ theme, partner_image }) => {
	return {
		position: "relative",
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
	};
});

const CardsWrapper = styled(Box)(({ theme }) => {
	return {
		alignContent: 'center',
		display: 'flex',
		justifyContent: 'center'
	};
});

const Title = styled(Typography)(({ theme }) => {
	return {
		color: theme.palette.common.white,
	};
});
