import { GridColDef } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import './addUser.scss';

type Props = {
   slug: string;
   columns: GridColDef[];
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddUser = (props: Props) => {
   return (
      <div className='add-user'>
         <div className='modal'>
            <span className='close'>
               <CloseIcon />
            </span>
            <h1>Add new {props.slug}</h1>
            <form>
               {props.columns.filter(item=>item.field !== 'id' && item.field !== 'img').map(column)=>(
                  <div className="item" key={column.field}>
                     <label>{column.headerName}</label>
                     <input type={column.type} placeholder={column.field} />
                  </div>
               )}
            </form>
         </div>
      </div>
   );
};

export default AddUser;
