'use client'
import ModalWrapped from "@/components/modal/modal";
import { Dashboard } from "@/components/tasks/dashboard";
import NewTasksPage from "@/components/tasks/new-task";
import useTask from "@/composables/useTask";
import { Task } from "@/types/Task";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SxProps, TextField, Theme, Typography } from "@mui/material";

const categories = [
    { id:1, name:'💸 Finanças' },
    { id:2, name:'❤️ Casamento' },
    { id:3, name:'💻 Trabalho' },
    { id:4, name:'🛒 Lista de Compras' },
]
const taskPageContainerStyle: SxProps<Theme> = (theme) => ({
    height: '100vh',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.up('md')]: {
        justifyContent: 'center',
    }
})

export default function TasksPage(){
    
    const { addTask , donedTasks, tasksToBeDone , updateStatusTask } = useTask()

    return (
        <Box sx={taskPageContainerStyle} >
            <Dashboard.Container>
                <Dashboard.Header donedTasksLen={donedTasks.length} tasksToBeDoneLen={tasksToBeDone.length} />
                <Dashboard.TasksGroup title="A Fazer">
                    {tasksToBeDone.map( task => <Dashboard.Task updateTask={updateStatusTask} task={task} key={task.id} />)}
                </Dashboard.TasksGroup>
                <Dashboard.TasksGroup title="Completas" marginTop={3}>
                    {donedTasks.map( task => <Dashboard.Task updateTask={updateStatusTask} task={task} key={task.id} /> )}
                </Dashboard.TasksGroup>
                <NewTasksPage addTask={addTask} categories={categories} />
            </Dashboard.Container>
        </Box>
    )
}