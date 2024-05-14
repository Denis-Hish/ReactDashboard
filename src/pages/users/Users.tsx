import { useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import { userRows } from '../../data';
import Add from '../../components/add/Add';
import Button from '@mui/material/Button';
import './users.scss';
import { useQuery } from '@tanstack/react-query';

const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 90 },
   {
      field: 'img',
      headerName: 'Avatar',
      width: 100,
      renderCell: (params) => {
         return <img src={params.row.img || '/noavatar.png'} alt='Avatar' />;
      },
   },
   {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
   },
   {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
   },
   {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
   },
   {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
      editable: true,
   },
   {
      field: 'createdAt',
      headerName: 'Created At',
      width: 150,
      type: 'string',
   },
   { field: 'verified', headerName: 'Verified', width: 150, type: 'boolean' },
];

const Users = () => {
   const [open, setOpen] = useState(false);

   const { isLoading, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
         fetch('http://localhost:8800/api/users').then((res) => res.json()),
   });

   return (
      <div className='users'>
         <div className='info'>
            <h1>Users</h1>
            <Button variant='contained' onClick={() => setOpen(true)}>
               Add new user
            </Button>
         </div>
         {isLoading ? (
            'Loading...'
         ) : (
            <DataTable slug='users' columns={columns} rows={data} />
         )}
         {open && <Add slug='user' columns={columns} setOpen={setOpen} />}
      </div>
   );
};

export default Users;
