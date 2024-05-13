import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import './users.scss';
import { userRows } from '../../data';
import { useState } from 'react';
import AddUser from '../../components/addUser/addUser';

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
   const [open, setOpen] = useState(true);

   return (
      <div className='users'>
         <div className='info'>
            <h1>Users</h1>
            <button>Add new user</button>
         </div>
         <DataTable slug='users' columns={columns} rows={userRows} />
         {open && <AddUser slug='user' columns={columns} setOpen={setOpen} />}
      </div>
   );
};

export default Users;
