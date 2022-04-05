import { Fragment } from "react";
import { Footer, Navbar } from "../../components";
import {Box} from '@mui/material'
import { useMemo } from "react";
import {useRouter} from 'next/router'

import {SettingConfig, GlobalConfig} from '../../context';

// const Layout = ({ children }) => {

//   const router = useRouter();

//   const footerComponent = useMemo(()=> {
//     if (router.pathname === '/'){
//       return null;
//     }

//     if (router.pathname === '/news'){
//       return null;
//     }

//     return <Footer/>
//   },[router])

//   return (
// 		<Box
// 			sx={{
// 				overflow: "hidden",
// 				position: "relative",
// 				display: "flex",
// 				justifyContent: "center",
// 				alignItems: "center",
// 				flexDirection: "column",
// 				maxWidth: "100%",
// 				minWidth: "100%",
// 				minHeight: "100vh",
// 			}}>
// 			<SettingConfig>
// 				<GlobalConfig>
// 					<Navbar />
// 					<Box
// 						sx={{
// 							flexGrow: 1,
// 							width: "100%",
// 						}}>
// 						{children}
// 					</Box>
// 					{footerComponent}
// 				</GlobalConfig>
// 			</SettingConfig>
// 		</Box>
// 	);
// };

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Navbar />
			{children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
