import { Container, Box, styled } from "@mui/material";
import { useSetting } from "../../hooks";
import {FooterTop , FooterBottom} from "../../components"
const SIZE = "2vw";

const TRANSITION = "all 0.5s";

const Footer = ({children, ...props}) => {

  const {logo_footer} = useSetting();

  return (
		<FootWraper id='contact'>
			<Container maxWidth='lg'>
				<Box
					sx={{
						paddingBottom: 2,
            pointerEvents: 'none'
					}}>
					<img src={logo_footer} height={100} width={175} alt='logo footer' />
				</Box>
				<FooterBottom />
				<FooterTop />
			</Container>
		</FootWraper>
	);
};

export default Footer;

// Styled Sheet

const FootWraper = styled(Box)(({theme}) => {
  return {
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: "30px",
  }
})