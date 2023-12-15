import { Box } from '@mui/material';
import NavBar from '../../components/nav-bar';
import ReactorTable from './components/reactor-table';
import { GridRowSelectionModel } from '@mui/x-data-grid';
import { useState } from 'react';

export default function Dashboard() {
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);

  const onSelectRow = (newRowSelectionModel) => {
    setRowSelectionModel(newRowSelectionModel);
  };

  return (
    <Box component='main' sx={{ p: 3 }}>
      <NavBar />
      <h1>Dashboard</h1>
      <ReactorTable
        rowSelectionModel={rowSelectionModel}
        handleSelectRow={onSelectRow}
      />
    </Box>
  );
}
