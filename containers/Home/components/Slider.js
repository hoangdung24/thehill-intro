import React, { useState } from "react";
import { Box, Typography, styled, Container , Button } from "@mui/material";
import { CardPartner } from "../../../components";

import Slider from "react-slick";

const SliderCarousel = ({ partnerData, data, ...props }) => {
	const settings = {
		// className: 'center',
		// centerMode: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		// centerPadding: '60px'
	};

	return (
		<Wrapper id='partner'>
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
			<Container maxWidth='lg'>
				<Box
					sx={{
						textAlign: "center",
						paddingBottom: 5,
						paddingTop: 5,
					}}>
					<Title variant='h4'>{data.partner_title}</Title>
					<Box>
						<Button>MORE</Button>
					</Box>
				</Box>
				<Slider {...settings}>
					{partnerData?.items?.map((e, index) => (
						<CardPartner
							key={index}
							icon={e.image}
							name={e.name}
							description={e.description.substring(0, 50)}
							point_content={e.point_content}
							link={e.link}
						/>
					))}
				</Slider>
			</Container>
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
		height: "450px",
	};
});

const CardsWrapper = styled(Box)(({ theme }) => {
	return {
		alignContent: "center",
		display: "flex",
		justifyContent: "center",
	};
});

const Title = styled(Typography)(({ theme }) => {
	return {
		color: theme.palette.common.white,
	};
});
