import {styled, Box, Container, Grid, Typography, Stack} from '@mui/material'
import createDOMPurify from 'isomorphic-dompurify'
import {useDevice} from '../../../hooks'

const TinTuc = ({data, tintuc, ...props}) => {
    
    const items = data.items;

    const {isTablet} = useDevice();


    return (
			<Wrapper id='blog'>
				<Container maxWidth='lg'>
					<Box
						sx={{
							display: "flex",
							textAlign: "center",
							justifyContent: "center",
							flexDirection: "column",
							padding: "20px"
						}}>
						<Typography
							variant='subtitle'
							sx={{
								color: "#727777",
							}}>
							{tintuc.blog_subtitle}
						</Typography>
						<Typography
							variant='h3'
							sx={{
								color: "#16215c",
							}}>
							{tintuc.blog_title}
						</Typography>
					</Box>
					<Grid container spacing={4} direction='row'>
						{items?.map((e, index) => (
							<Grid item xs={12} md={6} lg={4} key={index}>
								<WrapperContent isTablet={isTablet}>
									<WrapperImage>
										<img
											src={e.thumbnail}
											width={"100%"}
											height={"270px"}
											alt={"Thumbnail Image"}
											style={{
												borderRadius: "6px",
											}}
										/>
									</WrapperImage>
									<DateBox>
										{new Date(e.meta.first_published_at).toLocaleDateString(
											"vi-VN",
											{
												day: "2-digit",
												month: "2-digit",
												year: "numeric",
											}
										)}
									</DateBox>
									<WrapperText>
										<Typography
											variant='h4'
											sx={{
												color: "#000629",
											}}>
											{e.title}
										</Typography>
										<Box
											dangerouslySetInnerHTML={{
												__html: createDOMPurify
													.sanitize(e.content)
													.split(" ")
													.splice(0, 10)
													.join(" "),
											}}
											sx={{
												"& p": {
													fontSize: "14px",
													fontWeight: 400,
													color: "#727777",
												},
											}}></Box>
									</WrapperText>
								</WrapperContent>
							</Grid>
						))}
					</Grid>
				</Container>
			</Wrapper>
		);
}

export default TinTuc;

// styled sheet

const Wrapper = styled(Box)(({theme})=> {
    return {
        width: "100%",
        padding: 20,
    }
})

const WrapperContent = styled(Box, {
	shouldForwardProp: (prop) => {
		return prop !== "isTablet";
	},
})(({ theme , isTablet}) => {
	return {
		position: "relative",
		zIndex: 0,
		marginBottom: 30,
		boxShadow: theme.shadows[5],
		height: "500px",
		width: isTablet ? "400px" : "100%",
		borderRadius: 10
	};
});

const WrapperImage = styled(Box)(({theme}) => {
    return {
        position: 'relative',
        zIndex: 0,
        borderRadius: "10px"
    }
})

const DateBox = styled(Box)(({theme}) => {
    return {
			padding: "8px 20px",
			borderRadius: 20,
			backgroundColor: "#ffe477",
            position: 'absolute',
            left: "50%",
            bottom: "210px",
            transform: "translateX(-50%)"
		};
})

const WrapperText = styled(Box)(({theme})=> {
    return {
			padding: "50px 0 30px",
			margin: 0,
		};
})