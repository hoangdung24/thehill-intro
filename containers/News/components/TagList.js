import {Chip, Stack} from '@mui/material'
import { useCallback } from 'react'

const Tag = ({items, selectedItem, ...props}) => {

    const handleClick = useCallback((data)=> {
        return (e) => {
            props.handleClick(e, data)
        }
    }, [])

    return (
        <Stack>
            {items.map((e, index) => {
                return (
                    <Chip key={index}
                    label={e}
                    variant={selectedItem === e ? "filled" : "outlined"}
                    clickable
                    onClick={handleClick(e)}/>
                )
            })}
        </Stack>
    )

}

export default Tag