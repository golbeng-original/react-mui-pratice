import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Link, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from "react"


const faqList = [
    {
        key: 'panel1',
        title: 'How do I contact customer support if I have a question or issue?',
        detail: (
            <>
                You can reach our customer support team by emailing
                <Link> support@email.com </Link>
                or calling our toll-free number. We&apos;re here to assist you
            </>
        )
    },
    {
        key: 'panel2',
        title: 'Can I return the product if it doesn&apos;t meet my expectations?',
        detail: (
            <>
                Absolutely! We offer a hassle-free return policy. If you&apos;re not
                completely satisfied, you can return the product within [number of
                days] days for a full refund or exchange.
            </>
        )
    },
    {
        key: 'panel3',
        title: 'What makes your product stand out from others in the market?',
        detail: (
            <>
                Our product distinguishes itself through its adaptability, durability,
                and innovative features. We prioritize user satisfaction and
                continually strive to exceed expectations in every aspect.
            </>
        )
    },
    {
        key: 'panel4',
        title: 'Is there a warranty on the product, and what does it cover?',
        detail: (
            <>
                Yes, our product comes with a [length of warranty] warranty. It covers
                defects in materials and workmanship. If you encounter any issues
                covered by the warranty, please contact our customer support for
                assistance.
            </>
        )
    }
]


export const FAQ = () => {

    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel:string) => {
        return (event: React.SyntheticEvent, isExpanded:boolean) => {
            setExpanded(isExpanded ? panel : false)
        }
    }

    return (
        <Container
            id='faq'
            sx={{
                pt: {xs: 4, sm: 12},
                pb: {xs: 8, sm: 16},
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: {xs: 3, sm: 6}
            }}
        >
            <Typography 
                component='h2' variant='h4' color='text.primary'
                sx={{
                    width: {sm: '100%', md: '60%'},
                    textAlign: { sm: 'left', md: 'center'}
                }}
            >
                Frequently asked questions
            </Typography>
            <Box>
                {faqList.map((faq, idx) => (
                    <Accordion
                        key={idx}
                        expanded={expanded === faq.key}
                        onChange={handleChange(faq.key)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${faq.key}-content`}
                            id={`${faq.key}-header`}
                        >
                            <Typography component={'h3'} variant='subtitle2'>
                                {faq.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant='body2'
                                gutterBottom
                                sx={{
                                    maxWidth: {sm: '100%', md:'70%'}
                                }}
                            >
                                {faq.detail}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Container>
    )
}