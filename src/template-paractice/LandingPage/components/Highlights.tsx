import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded'
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded'
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded'
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded'
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded'
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded'
import { Box, Button, Card, Container, Grid, Paper, Stack, Typography } from '@mui/material'

const items = [
    {
        icon: <SettingsSuggestRoundedIcon />,
        title: 'Adaptable performance',
        description:
          'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
      },
      {
        icon: <ConstructionRoundedIcon />,
        title: 'Built to last',
        description:
          'Experience unmatched durability that goes above and beyond with lasting investment.',
      },
      {
        icon: <ThumbUpAltRoundedIcon />,
        title: 'Great user experience',
        description:
          'Integrate our product into your routine with an intuitive and easy-to-use interface.',
      },
      {
        icon: <AutoFixHighRoundedIcon />,
        title: 'Innovative functionality',
        description:
          'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
      },
      {
        icon: <SupportAgentRoundedIcon />,
        title: 'Reliable support',
        description:
          'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
      },
      {
        icon: <QueryStatsRoundedIcon />,
        title: 'Precision in every detail',
        description:
          'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
      },
]


export const Highlights = () => {
    return (
        <Box
            id='highlights'
            sx={{
                pt: {xs: 4, sm: 12},
                pb: {xs: 8, sm: 16},
                color:'white',
                bgcolor: 'hsl(200, 30%, 2%)'
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display:'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    gap: {xs: 3, sm: 6},
                }}
            >
                <Box
                    sx={{
                        width: {xs: '100%', md: '60%'},
                        textAlign: {sm: 'left', md: 'center'}
                    }}
                >
                    <Typography component='h2' variant='h4'>
                        Highlights
                    </Typography>
                    <Typography variant='body1' sx={{color: 'grey.400'}}>
                        Explore why our product stands out: adaptability, durability,
                        user-friendly design, and innovation. Enjoy reliable customer support and
                        precision in every detail.
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                    {items.map((item, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Stack
                                direction={'column'}
                                color='inherit'
                                alignItems={'start'}
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    p: 3,
                                    height:'100%',
                                    border: '1px solid',
                                    borderColor: 'hsla(200, 25%, 25%, .3)',
                                    background: 'transparent',
                                    backgroundColor: 'grey.900',
                                    boxShadow: 'none'
                                }}
                            >
                                <Box sx={{opacity: '50%'}}>{item.icon}</Box>
                                <div>
                                    <Typography textAlign={'start'} fontWeight={'medium'} gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography textAlign={'start'} variant='body2' sx={{color: 'grey.400'}}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
