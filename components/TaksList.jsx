import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../pages/_app";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Select from '@mui/material/Select';
import Link from 'next/link';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { Pie, defaults } from 'react-chartjs-2';

import Zoom from 'react-reveal/Zoom';

function TaksList() {
    const { state, dispatch } = useContext(UserContext);

    const DeleteTask = (index) => {

        dispatch({
            type: "DeleteTask", payload: {
                index,
                state
            }
        });
    }

    return (
        <Zoom>
            <Box sx={{
                width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2, flexDirection: 'column',
            }} >
                <Box sx={{ width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px', borderRadius: '50px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)', mb: 3, backgroundColor: '#1976d2' }} >
                    <Link href={'/homepage'}>
                        <a className='a' >
                            Homepage
                        </a>
                    </Link>
                    <Link href={'/homepage'}>
                        <a className='a' >
                            Taskpage
                        </a>
                    </Link>
                </Box>
                <Container maxWidth="lg" sx={{
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', borderRadius: {
                        md: '12px'
                    }, minHeight: '100vh', p: 0, overflow: 'hidden'
                }}>
                    <Box sx={{
                        backgroundColor: {
                            md: '#1976d2',
                            xs: 'none'
                        }, width: '100%', miHeight: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1
                    }} >
                        <Typography variant="h6" sx={{
                            fontSize: '28px', lineHeight: '32px', color: {
                                md: 'white',
                                xs: '#666666'
                            }, textTransform: 'capitalize', fontWeight: 400, textAlign: 'center', fontFamily: 'Ubuntu',
                        }} component="div">
                            Your task list
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, flexDirection: 'column' }} >
                        {
                            state.map((list, index) => {
                                return <Box key={index} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <Link href={`/taskdetail/${list.Task}`}>
                                        <a>
                                            <Typography variant="h6" sx={{
                                                fontSize: '18px', lineHeight: '24px', color: '#666666', textTransform: 'capitalize', fontFamily: 'Ubuntu',
                                            }} gutterBottom component="div">
                                                {list.Task}
                                            </Typography>
                                        </a>
                                    </Link>
                                    <IconButton aria-label="delete" onClick={() => DeleteTask(index)} size='medium'>
                                        <DeleteForeverIcon sx={{ fontSize: '30px', color: 'red' }} />
                                    </IconButton>
                                </Box>
                            })
                        }
                    </Box>
                </Container>
            </Box>
        </Zoom>
    )
}

export default TaksList;