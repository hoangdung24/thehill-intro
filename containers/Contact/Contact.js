import { FormContact, QRcode, SubHeader } from "../../components";
import { Box, Divider, Container, Grid } from "@mui/material";

const ContactPage = ({ dataContact, storeCategories , ...props }) => {
	const { items } = dataContact;

	const data = items?.[0];

	return (
		<Box>
			<SubHeader data={data} isBackground={true} background={data.banner}/>
			<Container
				maxWidth='lg'
				sx={{
					padding: 2,
				}}>
				<Grid
					container
					spacing={2}
					justifyContent='space-around'
					alignItems={"center"}>
					<Grid item lg={6} md={3} xs={12}>
						<Box>
							<QRcode isBadge={true}/>
						</Box>
					</Grid>
					<Grid className='BoxFormContainer' item lg={6} md={9} xs={12}>
						<FormContact category={storeCategories} data={data}/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ContactPage;
