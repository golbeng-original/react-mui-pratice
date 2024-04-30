import { Box, Button, Card, Container, Grid, Link, Stack, styled, Typography } from "@mui/material"
import { Chip as MuiChip} from '@mui/material'

import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded'
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded'
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded'
import { useState } from "react"

const items = [
    {
        icon: <ViewQuiltRoundedIcon />,
        title: 'Dashboard',
        description: 'This item could provide a snapshot of the most important metrics or data points related to the product.',
        imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")'
    },
    {
        icon: <EdgesensorHighRoundedIcon />,
        title: 'Mobile integration',
        description:
          'This item could provide information about the mobile app version of the product.',
        imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
    },
    {
        icon: <DevicesRoundedIcon />,
        title: 'Available on all platforms',
        description:
          'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
        imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
        imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
    }
]

interface ChipProps {
    selected?: boolean
}

const Chip = styled(MuiChip)<ChipProps>(({theme, selected}) => (
    {
        ...(selected && {
            borderColor: theme.palette.mode === 'light'
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
            background:
                'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
            color: 'hsl(0, 0%, 100%)',
            '& .MuiChip-label': {
                color: 'hsl(0, 0%, 100%)'
            }
        })
    }
))

type featureProductsImagesProps = {
    selectedItemIndex:number
}

type featurProductsTbsProps = {
    selectedItemIndex:number,
    onChangeIndex:(idx:number) => void

}

const FeatureProductsTabsSx = (props:featurProductsTbsProps) => {

    const {selectedItemIndex, onChangeIndex} = props

    return (
        <Grid item container gap={1} sx={{display: {xs: 'auto', sm: 'none'}}}>
            {items.map((value, idx) => (
                <Chip
                    key={idx}
                    label={value.title}
                    onClick={() => onChangeIndex(idx)}
                    selected={selectedItemIndex === idx}
                />
            ))}
        </Grid>
    )
}

const FeatureProductsImagesSx = (props:featureProductsImagesProps) => {

    const { selectedItemIndex } = props

    const selectedFeature = items[selectedItemIndex]

    return (
        <Card 
            variant="outlined"
            sx={{
                display: {xs: 'auto', sm: 'none'},
                mt: 4
            }}
        >
            <Box
                sx={{
                    backgroundImage: (theme) => {
                        return theme.palette.mode === 'light'
                            ? items[selectedItemIndex].imageLight
                            : items[selectedItemIndex].imageDark
                    },
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: 280
                }}
            />
            <Box sx={{px:2, pb: 2}}>
                <Typography color={'text.primary'} fontWeight={'medium'} gutterBottom>
                    {selectedFeature.title}
                </Typography>
                <Typography color={'text.secondary'} variant='body2' sx={{mb: 1.5}}>
                    {selectedFeature.description}
                </Typography>
                <Link
                    color='primary'
                    variant='body2'
                    fontWeight='bold'
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg' : { transition: '0.2s'},
                        '&:hover > svg' : {transform: 'translateX(2px)'}
                    }}
                >
                    <span>Learn more</span>
                    <ChevronRightRoundedIcon 
                        fontSize='small'
                        sx={{mt:'1px', ml:'2px'}}
                    />
                </Link>
            </Box>
        </Card>
    )
}

const FeatureProductsTabsSmMd = (props:featurProductsTbsProps) => {

    const {selectedItemIndex, onChangeIndex} = props

    return (
        <Stack
            direction={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            spacing={2}
            useFlexGap
            sx={{
                width: '100%',
                display: {xs: 'none', sm: 'flex'}
            }}
        >
            {items.map((value, idx) => (
                <Card 
                    key={idx}
                    component={Button}
                    onClick={() => onChangeIndex(idx)}
                    sx={(theme) => ({
                        p: 3,
                        height: 'fit-content',
                        width: '100%',
                        background: 'none',
                        ...(selectedItemIndex === idx && {
                            backgroundColor: 'action.selected',
                            borderColor: theme.palette.mode === 'light'
                                ? 'primary.light'
                                : 'primary.dark'
                        }),
                        '&:hover': {
                            background: theme.palette.mode === 'light'
                                ? 'linear-gradient((to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%))'
                                : 'linear-gradient((to bottom right, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%))',
                            borderColor: theme.palette.mode === 'light'
                                ? 'primary.light'
                                : 'primary.dark',
                            boxShadow: theme.palette.mode === 'light'
                                ? '0px 2px 8px hsla(0, 0%, 0%, 0.1)'
                                : '0px 1px 8px hsla(210, 100%, 25%, 0.5)'
                        }
                    })}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            textAlign: 'left',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignItems: { md: 'center' },
                            gap: 2.5
                        }}
                    >
                        <Box
                            sx={(theme) => ({
                                color: theme.palette.mode === 'light' ? 'grey.400' : 'grey.600',
                                ...(selectedItemIndex === idx && {
                                    color: 'primary.main'
                                })
                            })}
                        >
                            {value.icon}
                        </Box>
                        <div>
                            <Typography
                                color='text.primary'
                                fontWeight='medium'
                                gutterBottom
                            >
                                {value.title}
                            </Typography>
                            <Typography
                                color='text.secondary'
                                variant="body2"
                                sx={{ mb: 1.5 }}
                            >
                                {value.description}
                            </Typography>
                            <Link
                                color='primary'
                                variant='body2'
                                fontWeight='bold'
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    '& > svg': {transition: '0.2s'},
                                    '&:hover > svg' : {transform: 'translateX(2px)'}
                                }}
                            >
                                <span>Learn more</span>
                                <ChevronRightRoundedIcon 
                                    fontSize="small"
                                    sx={{mt: '1px', ml: '2px'}}
                                />
                            </Link>
                        </div>
                    </Box>
                </Card>
            ))}
        </Stack>
    )
} 

const FeatureProductsImagesSmMd = (props:featureProductsImagesProps) => {

    const {selectedItemIndex} = props

    return (
        <Grid
            item
            xs={12}
            md={6}
            sx={{
                display: {xs: 'none', sm: 'flex'},
                width: '100%'
            }}
        >
            <Card
                variant='outlined'
                sx={{
                    height: '100%',
                    width: '100%',
                    display: {xs: 'none', sm: 'flex'},
                    pointerEvents: 'none'
                }}
            >
                <Box
                    sx={{
                        m: 'auto',
                        width: 420,
                        height: 500,
                        backgroundSize: 'contain',
                        backgroundImage: (theme) => {
                            return theme.palette.mode === 'light'
                                ? items[selectedItemIndex].imageLight
                                : items[selectedItemIndex].imageDark
                        }
                    }}
                />
            </Card>

        </Grid>
    )
}

export const Features = () => {

    const [selectedItemIndex, setItemIndex ] = useState(0)

    return (
        <Container id='features' sx={{py: {xs: 8, sm: 16}}}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <Typography component={'h2'} variant={'h4'} color='text.primary'>
                        Product Features
                    </Typography>
                    <Typography>
                        Provide a brief overview of the key features of the product. For
                        example, you could list the number of features, their types or
                        benefits, and add-ons.
                    </Typography>
                    <>
                        <FeatureProductsTabsSx 
                            selectedItemIndex={selectedItemIndex}
                            onChangeIndex={(idx) => setItemIndex(idx)}
                        />
                        <FeatureProductsImagesSx selectedItemIndex={selectedItemIndex} />
                    </>
                    <>
                        <FeatureProductsTabsSmMd 
                            selectedItemIndex={selectedItemIndex}
                            onChangeIndex={(idx) => setItemIndex(idx)}
                        />
                    </>
                </Grid>
                <FeatureProductsImagesSmMd selectedItemIndex={selectedItemIndex} />
            </Grid>
        </Container>
    )
}