import { Box, Typography , BoxProps } from "@mui/material";

export type TasksContainerProps = {
    children: React.ReactNode,
    title: string
}  & BoxProps


export default function TasksContainer(props: TasksContainerProps) {
    return (
        <Box {...props}>
            <Typography variant="h6" component="h2" fontWeight='bold' color='GrayText' marginY={1}>{props.title}</Typography>
            {props.children}
        </Box>
    )
}