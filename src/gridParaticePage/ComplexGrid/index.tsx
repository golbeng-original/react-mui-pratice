import { ButtonBase, Grid, Paper, styled, Typography } from "@mui/material"
import { paperSx } from "./index.styles"

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
})

const imgUrl = 'https://s3.orbi.kr/data/file/united/3743528424_Krfu2RV4_image.jpeg'

const ComplexGrid = () => {
    
    return (
        <Paper sx={paperSx}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{width:128, height:128}}>
                        <Img src={imgUrl}></Img>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction={'column'} spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Standard license
                            </Typography>
                            <Typography>
                                Full Resolution 1920x1080 JPEG
                            </Typography>
                            <Typography>
                                ID: 1030114
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Remove
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography>
                            $19.000
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export { ComplexGrid }