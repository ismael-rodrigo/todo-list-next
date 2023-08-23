import { Box, SxProps, Theme } from "@mui/material";


const defaultStyleContainer: SxProps<Theme> = (theme) => ({
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    maxWidth: theme.breakpoints.values.md,
    position: 'relative',

})

export default function Container({
    children
}:{
    children: React.ReactNode
}) {
    return (
        <Box sx={defaultStyleContainer}>
            {children}
        </Box>
    )
}