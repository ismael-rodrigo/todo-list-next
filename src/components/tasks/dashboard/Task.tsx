import { Task } from "@/types/Task"
import { Box, Checkbox, Typography } from "@mui/material"


export type TaskItemProps = {
    task: Task,
    updateTask: (taskId: number, newStatus: boolean) => void
}


    

export default function TaskItem( { task , updateTask }: TaskItemProps ){
    return (
        <Box display='flex' alignItems='start'  sx={{marginTop:2 }} >
            <Checkbox 
                onClick={() => updateTask(task.id , !task.done)} 
                checked={task.done} 
                color="default" 
                sx={{marginRight:1, padding:0, paddingTop: 0.5 , 
                    '& .MuiSvgIcon-root': { 
                        fill: '#dbdbdbfd'
                     }
                }} />
            <Box >
                <Typography variant="subtitle1" fontWeight='medium' color={task.done ? 'gray' : 'default'} sx={{padding:0}} >
                    {task.name}
                </Typography>
                {!task.done &&
                    <Typography variant="subtitle2" color='GrayText'>
                        {task.category.name}
                    </Typography>
                }
            </Box>
        </Box>
    )
}