import { Button } from '@mui/material';
import './single.scss';
import {
   Legend,
   Line,
   LineChart,
   ResponsiveContainer,
   XAxis,
   YAxis,
   Tooltip,
} from 'recharts';

type Props = {
   id: number;
   img?: string;
   title: string;
   info: object;
   chart?: {
      dataKeys: {
         name: string;
         color: string;
      }[];
      data: object[];
   };
   activities?: { text: string; time: string }[];
};

const Single = (props: Props) => {
   const handleUpdate = () => {
      alert('ID: ' + props.id + ' - has been updated!');
   };

   return (
      <div className='single'>
         <div className='view'>
            <div className='info'>
               <div className='top-info'>
                  {props.img && <img src={props.img} alt='User logo' />}
                  <h1>{props.title}</h1>
                  <Button
                     variant='contained'
                     color='error'
                     onClick={handleUpdate}
                  >
                     Update
                  </Button>
               </div>
               <div className='details'>
                  {Object.entries(props.info).map((item) => (
                     <div className='item' key={item[0]}>
                        <span className='item-title'>{item[0]}</span>
                        <span className='item-value'>{item[1]}</span>
                     </div>
                  ))}
               </div>
            </div>
            <hr />
            {props.chart && (
               <div className='chart'>
                  <ResponsiveContainer width='100%' height='100%'>
                     <LineChart
                        width={500}
                        height={300}
                        data={props.chart.data}
                        margin={{
                           top: 5,
                           right: 30,
                           left: 20,
                           bottom: 5,
                        }}
                     >
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {props.chart.dataKeys.map((dataKey) => (
                           <Line
                              type='monotone'
                              dataKey={dataKey.name}
                              stroke={dataKey.color}
                           />
                        ))}
                     </LineChart>
                  </ResponsiveContainer>
               </div>
            )}
         </div>
         <div className='activities'>
            <h2>Latest activities</h2>
            {props.activities && (
               <ul>
                  {props.activities.map((activity) => (
                     <li key={activity.text}>
                        <div>
                           <p>{activity.text}</p>
                           <time>{activity.time}</time>
                        </div>
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   );
};

export default Single;
