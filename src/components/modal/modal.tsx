'use client'

import { Box, Modal, SxProps, Theme } from '@mui/material'
import { ModalTypeMap } from '@mui/material/Modal/Modal'

export type ModalProps =  {
    children: React.ReactNode
} & ModalTypeMap['props']

const defaultStyleModal: SxProps<Theme> = (theme) => ({
    backgroundColor: theme.palette.background.paper,
    minHeight: '400px',
    width: '80%',
    maxWidth: '500px',
    margin: theme.spacing(3),
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
})

const defaultStyleBackdrop: SxProps<Theme> = {
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export default function ModalWrapped( props:ModalProps){
    return (
    <Modal {...props} sx={defaultStyleBackdrop}>
        <Box sx={defaultStyleModal} > 
            {props.children} 
        </Box>
    </Modal>
    )
}