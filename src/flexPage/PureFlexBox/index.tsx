
import { Box, Stack, styled } from "@mui/material"


const ContainFlexBox = styled('div')(({ theme }) => (
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
))

const FlexItem = styled('div')(({ theme }) => (
    {
        flexBasis: '300px',
        height: '200px',
        flexGrow: 1,
        flexShrink: 0,
        backgroundColor: '#FF0000',
        border: '1px solid',
        borderColor: '#000000',
    }
)) 

export const PureFlexBox = () => {

    return (
        <ContainFlexBox>
            <FlexItem>
                11
            </FlexItem>
            <FlexItem>
                22
            </FlexItem>
            <FlexItem>
                33
            </FlexItem>
            <FlexItem>
                44
            </FlexItem>
            <FlexItem>
                55
            </FlexItem>
        </ContainFlexBox>
    )
}