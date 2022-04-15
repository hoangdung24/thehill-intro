import createDOMPurify from 'isomorphic-dompurify'
import { Fragment } from 'react';
import { Image } from '../../../HOC';
import {Box} from '@mui/material'
import { useRouter } from 'next/router';

const BlogDetail = ({data}) => {
    if (data === null){
        return null;
    }
	
	// const router = useRouter();

	// const handlerPath = (id) => {
	// 	return () => {
	// 		const pathname = router.pathname;
	// 		router.push(`${pathname}/${id}`);
	// 	};
	// }


    const items = data.items;

    return (
			<Fragment>
                {items.map((e)=>{
                    const {
                        value: {detail, banner}
                    } = e;
                })}
				<Box>
					<Image
						src={banner}
						width='100%'
						height={"400px"}
						alt='Banner'
					/>
				</Box>

				<Box
					dangerouslySetInnerHTML={{
						__html: createDOMPurify
							.sanitize(detail)
					}}></Box>
			</Fragment>
		);

}

export default BlogDetail;