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
import Slider from "../containers/Home/components/Slider";

const UIPage = ({ ...props }) => {
  return null;

  return (
    <Fragment>
      <Container maxWidth="xl">
        <Stack
          direction={"column"}
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            width: "inherit",
          }}
        >
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
            <ButtonShape title={"About"} isBackground={true} backgroundColor={"#FAD9E6"} />
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
          <div>
            <ScrollButton />
          </div>
          <div>
            <CardPartner
              link={"https://thepizzacompany.vn"}
              icon={"http://member-intro.t-solution.vn/media/original_images/TPC_logo-02.jpg"}
              description={"Tách cà phê ngon cho cuộc gặp gỡ thêm hứng khởi"}
              point_content={"<p>Tích điểm: <span>5</span></p>"}
              name={"The coffee club"}
            />
          </div>
          <div>
            <ButtonPop
              isSpecial={true}
              svg={"http://member-intro.t-solution.vn/media/original_images/icon-am-thuc.png"}
            />
          </div>
          {/* <div>
						<Slider {...props} />
					</div> */}
        </Stack>
      </Container>
    </Fragment>
  );
};

export default UIPage;

// export async function getServerSideProps({ params }) {
// 	try {
// 		const urls = [`${PARTNER}?fields=*`];
// 		const reList = await Promise.all(
// 			urls.map((url) => {
// 				return axios.get(url).then(({ data }) => {
// 					return data;
// 				});
// 			})
// 		);

// 		console.log(reList);

// 		let partnerData;

// 		reList.forEach((e, index) => {
// 			if (index === 0) {
// 				partnerData = e;
// 			}
// 		});

// 		return {
// 			props: {
// 				partnerData: partnerData,
// 			},
// 		};
// 	} catch (e) {
// 		return console.log(e);
// 	}
// }
