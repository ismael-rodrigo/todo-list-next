'use client'
import ModalWrapped from "@/components/modal/modal";
import { AddTaskProp } from "@/composables/useTask";
import { Category } from "@/types/Category";
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, SxProps, TextField, Theme, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const addNewTaskBtnStyle: SxProps<Theme> = (theme) => ({
    position: 'fixed',
    width: '60px',
    height: '60px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    bottom: theme.spacing(4),
    right: theme.spacing(2),
    border:'1px solid ' + theme.palette.secondary.dark,
    ":hover":{
        backgroundColor: theme.palette.secondary.dark,
        border:'1px solid ' + theme.palette.secondary.main,
    },
})

export type NewTasksPageProps = {
    categories: Category[],
    addTask: (task: AddTaskProp) => void
}

export default function NewTasksPage({ categories , addTask }: NewTasksPageProps){

    const [openModal , setOpenModal] = useState(false)
 
    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const category = categories.find( category => `${category.id}` == data.get('category')?.toString() )
        const name = data.get('taskName')?.toString()

        if(!category || !name) {
            return alert('Preencha todos os campos')
        }
        addTask({ name,category})
        setOpenModal(false)

    }, [addTask]);

    return (
        <Box>
            <IconButton sx={addNewTaskBtnStyle} onClick={()=>setOpenModal(true)} >
                <AddIcon />
            </IconButton>
            <ModalWrapped open={openModal} onClose={()=>setOpenModal(false)} >
                <form onSubmit={handleSubmit}  >
                    <Box  display='flex' flexDirection='column' justifyContent='space-between' gap={3} sx={{height:'100%'}} padding={2} >
                        <Typography variant="h4" fontWeight='bold' >Adicionar Tarefa</Typography>
                        <TextField name="taskName" label="Tarefa" variant="filled" color="primary" focused />
                        <FormControl variant="filled" color="primary" focused sx={{ marginBottom:25 }} >
                            <InputLabel id="category-id">Categoria</InputLabel>
                            <Select name="category" labelId="category-id" defaultValue={''} >
                                {categories.map( category => (
                                    <MenuItem value={category.id} key={category.id} >
                                        <Typography>
                                            {category.name}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button type="submit" variant="contained"  color="secondary" >
                            <Typography fontWeight='bold'>
                                Adicionar
                            </Typography>
                        </Button>
                    </Box>
                </form>
            </ModalWrapped>
        </Box>

    )
}