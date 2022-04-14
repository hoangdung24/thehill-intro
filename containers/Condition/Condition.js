import {styled, Container, Box} from '@mui/material'
import { Fragment } from 'react';
import { SubHeader } from '../../components';
import {ReaderHTML} from '../../components'

const ConditionPage = ({dataCondition,  ...props}) => {

    const {items} = dataCondition

    const data = items?.[0]

    return (
			<Fragment>
				<SubHeader data={data} isBackground={true} background={data.banner} />
				<Container maxWidth='lg'>
					<Box>
						<ReaderHTML content={data.content} />
					</Box>
				</Container>
			</Fragment>
		);
}

export default ConditionPage;

// styled sheet
