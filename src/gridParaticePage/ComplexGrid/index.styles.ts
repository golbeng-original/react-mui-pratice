import { Theme } from "@emotion/react";
import { PaletteOptions, SxProps } from "@mui/material";

export const paperSx:SxProps<Theme> = {
    p: 2,
    margin: 'auto',
    maxWidth: 500,
    flexGrow: 1,
    backgroundColor: (theme) => {
        return '#1A2027' //theme.palette.mode === 'dark' ? '#1A2027' : '#FFFFFF'
    }
}