import {styled, Container} from '@mui/material'
import { Fragment } from 'react';
import { SubHeader } from '../../components';
import {ReaderHTML} from '../../components'

const ConditionPage = ({dataCondition,  ...props}) => {

    const {items} = dataCondition

    const data = items?.[0]

    return (
        <Fragment>
            <Container maxWidth='lg'>
                <SubHeader data={data}/>
                <ReaderHTML content={data.content}/>
            </Container>
        </Fragment>
    )
}

export default ConditionPage;

// styled sheet
