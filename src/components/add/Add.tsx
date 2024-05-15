import { GridColDef } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import './add.scss';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props = {
   slug: string;
   columns: GridColDef[];
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
   const queryClient = useQueryClient();

   const mutation = useMutation({
      mutationFn: () => {
         return fetch(`http://localhost:8800/api/${props.slug}s`, {
            method: 'POST',
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               id: 111,
               img: '',
               firstName: 'Anakin',
               lastName: 'Skywalker',
               email: 'anakin-jedy@tatuin.com',
               phone: '123 456 789',
               createdAt: '01.02.2023',
               varifiels: true,
            }),
         });
      },
      onSuccess: () => {
         queryClient.invalidateQueries([`all${props.slug}s`]);
      },
   });

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Added new ' + props.slug);
      // add new item (user / product)
      mutation.mutate();
      props.setOpen(false);
   };

   return (
      <div className='add'>
         <div className='modal'>
            <span className='close' onClick={() => props.setOpen(false)}>
               <CloseIcon />
            </span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={handleSubmit}>
               {props.columns
                  .filter((item) => item.field !== 'id' && item.field !== 'img')
                  .map((column) => (
                     <div className='item' key={column.field}>
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                     </div>
                  ))}
               <Button type='submit' variant='contained' endIcon={<SendIcon />}>
                  Send
               </Button>
            </form>
         </div>
      </div>
   );
};

export default Add;
