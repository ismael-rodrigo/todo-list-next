import { Box, Divider, Typography } from "@mui/material";

export type HeaderDashboardProps = {
    donedTasksLen: number,
    tasksToBeDoneLen: number,
}

var options: Intl.DateTimeFormatOptions = { month: 'long', day: '2-digit' };

export default function HeaderDashboard({ donedTasksLen , tasksToBeDoneLen }:HeaderDashboardProps){
    const date = new Date()
    
    return(
        <Box>
            <Typography variant="h4" fontWeight='bold' >{date.toLocaleDateString('pt-BR', options )}, {date.getFullYear()} </Typography>
            <Typography paragraph variant="subtitle1" fontWeight={600} color='gray' marginTop={1} >{tasksToBeDoneLen} Incompletas, {donedTasksLen} Completas</Typography>
            <Divider />
        </Box>
    )
}