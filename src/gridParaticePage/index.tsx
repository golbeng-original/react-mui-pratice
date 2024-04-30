import { Container, Stack } from "@mui/material"
import { BasicGrid } from "./BasicGrid"
import { RowColumnGrid } from "./RowColumnGrid"
import { ComplexGrid } from "./ComplexGrid"

const GridParacticePage = () => {

    return (
        <Container>
            <Stack>
                {/*<BasicGrid />*/}
                <RowColumnGrid />
                <ComplexGrid />
            </Stack>
        </Container>
    )
}

export default GridParacticePage