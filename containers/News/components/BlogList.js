import { Box, Grid , styled} from "@mui/material"
import { useEffect, useState } from "react";
import { useToggle } from "react-use";
import {updatePathname, transformSearchParams} from '../../../helpers'

const BlogList = ({ blogDetail, blogCategories, blogList, tags }) => {

    const router = useRouter();
    const [data, setData] = useState(blogDetail?.items)
    const [open, toggle] = useToggle(false);
    const [loading, setLoading] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    const [params, setParams] = useState({
        tags: null, page: null
    })

    useEffect(()=> {
        let params = {}

        for (const key of Object.keys(router.query)) {
            if (router.query[key] !== ""){
                params[key] = router.query[key]
            }
        }

        if (!("page" in router.query)) {
					params["page"] = 1;
				} else {
					const page = Number(router.query.page);

					if (isNaN(page)) {
						params["page"] = 1;
					} else {
						if (page < 1) {
							params["page"] = 1;
						} else {
							params["page"] = page;
						}
					}
				}

    setParams(params);

    updatePathname({
        pathname: router.pathname,
        query: params
    })
    
    }, [])


	return <Wrapper></Wrapper>;
};

export default BlogList

// styled sheet
const Wrapper = styled(Box)(({theme}) => {
    return{

    }
})