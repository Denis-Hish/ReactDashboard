import { GridColDef } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import './add.scss';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

type Props = {
   slug: string;
   columns: GridColDef[];
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // add new item
      // axios.post(`/api/${slug}s`, {})
      alert('Added new ' + props.slug);
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
