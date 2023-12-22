import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getReactors } from '../../../../api/reactorsApi';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'fullName', headerName: 'Full Name', width: 200 },
  {
    field: 'outputGross',
    headerName: 'Output (MWe)',
    width: 150,
    type: 'number',
  },
  {
    field: 'thermalOutput',
    headerName: 'Thermal Output (MWth)',
    width: 170,
    type: 'number',
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 80,
  },
  {
    field: 'coolant',
    headerName: 'Coolant',
    width: 130,
  },
  { field: 'designOrg', headerName: 'Designer', width: 160 },
  {
    field: 'country',
    headerName: 'Country',
    width: 130,
  },
];

export default function ReactorTable() {
  const {
    data: reactorsData,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['reactors'],
    queryFn: getReactors,
  });

  return (
    <div style={{ height: '65vh', width: '100%' }}>
      {isLoading && <CircularProgress />}
      {isSuccess && (
        <DataGrid
          rows={reactorsData?.map((reactor) => {
            return { ...reactor, id: reactor._id };
          })}
          columns={columns}
          // checkboxSelection
        />
      )}
    </div>
  );
}
