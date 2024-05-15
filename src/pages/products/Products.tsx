import { useState } from 'react';
import './products.scss';
import DataTable from '../../components/dataTable/DataTable';
import Add from '../../components/add/Add';
import { GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 90 },
   {
      field: 'img',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => {
         return <img src={params.row.img || '/noavatar.png'} alt='' />;
      },
   },
   {
      field: 'title',
      type: 'string',
      headerName: 'Title',
      width: 250,
   },
   {
      field: 'color',
      type: 'string',
      headerName: 'Color',
      width: 150,
   },
   {
      field: 'price',
      type: 'string',
      headerName: 'Price',
      width: 200,
   },
   {
      field: 'producer',
      headerName: 'Producer',
      type: 'string',
      width: 200,
   },
   {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
      type: 'string',
   },
   {
      field: 'inStock',
      headerName: 'In Stock',
      width: 150,
      type: 'boolean',
   },
];

const Products = () => {
   const [open, setOpen] = useState(false);

   const { isLoading, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
         fetch('http://localhost:8800/api/products').then((res) => res.json()),
   });

   return (
      <div className='products'>
         <div className='info'>
            <h1>Products</h1>
            <Button variant='contained' onClick={() => setOpen(true)}>
               Add new products
            </Button>
         </div>
         {isLoading ? (
            'Loading...'
         ) : (
            <DataTable slug='products' columns={columns} rows={data} />
         )}
         {open && <Add slug='product' columns={columns} setOpen={setOpen} />}
      </div>
   );
};

export default Products;
