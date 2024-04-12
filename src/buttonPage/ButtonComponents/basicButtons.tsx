import { Box, Button, IconButton, Stack, styled, Typography } from "@mui/material"
import ButtonBase from '@mui/material/ButtonBase'

import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { LoadingButton } from "@mui/lab"
import { Send } from "@mui/icons-material"

// styled 사용
const CustomButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 120,
}))



export const BasicButtons = () => {
    return (
        <Stack>
            <Box>
                <Typography>Variant Buttons</Typography>
            </Box>
            <Box>
                {/* variant default value is text*/}
                <Button variant={'text'}>
                    Text Button
                </Button>
                <Button variant={'contained'}>
                    Contained Button
                </Button>
                <Button variant={'outlined'}>
                    Outlined Button
                </Button>
            </Box>
            <Box>
                <Typography>Text Buttons</Typography>
            </Box>
            <Box>
                <Button disabled>Disable Button</Button>
                <Button href="#">href use Button</Button>
            </Box>
            <Box>
                <Typography>Elevation?</Typography>
            </Box>
            <Box>
                <Button variant='contained'>Normal</Button>
                <Button variant='contained' disableElevation>Normal</Button>
            </Box>

            <Box>
                <Typography>Button Colors</Typography>
            </Box>
            <Box>
                {/* color는 이미지 정해져 있는 테마 색상만 가능 #00ff00 이런거 안됨 */}
                <Button variant='contained' color='success'>success</Button>
                <Button variant='contained' color='primary'>primary</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
            </Box>

            <Box>
                <Typography>Button Sizes</Typography>
            </Box>
            <Box>
                <Button variant='contained' color='success' size='small'>small</Button>
                <Button variant='contained' color='success' size='medium'>medium</Button>
                <Button variant='contained' color='success' size='large'>large</Button>
            </Box>

            <Box>
                <Typography>Button With Icon</Typography>
            </Box>
            <Box>
                <Button variant='outlined' startIcon={<SendIcon />}>left</Button>
                <Button variant='contained' endIcon={<DeleteIcon />}>right</Button>
            </Box>
            <Box>
                <Typography>Icon Button</Typography>
            </Box>
            <Box>
                <IconButton color="success">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="error">
                    <SendIcon />
                </IconButton>
            </Box>
            <Box>
                <Typography>Icon Button</Typography>
            </Box>
            <Box>
                <CustomButton>
                    CustomButton
                </CustomButton>
            </Box>
            <Box>
                <Typography>Loading Button</Typography>
            </Box>
            <Box>
                {/* @mui/lab 패키지에서 재공한다! */}
                <LoadingButton loading variant='contained' color='error'>
                    Submit
                </LoadingButton>
                {/* loading property를 제거하면 startIcon과 enabled 된다. */}
                <LoadingButton 
                    loading
                    loadingPosition='start'
                    startIcon={<SendIcon />}
                    variant='contained' 
                    color='error'
                >
                    Submit
                </LoadingButton>
            </Box>
        </Stack>
    )
}