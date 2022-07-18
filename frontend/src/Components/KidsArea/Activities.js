import { mdiTicket } from '@mdi/js';
import Icon from '@mdi/react';
import act1 from '../../assets/images/kidsarea/activities/Printable Kids Activity Worksheet 1.png'
import act2 from '../../assets/images/kidsarea/activities/Printable Kids Activity Worksheet 2.png'
import Template from './Template';

const Activities = () => {
    const acts = [act1, act2]

    return ( 
        <>
            <Template header={<div className='text-secondary'><Icon size={2} path={mdiTicket} /> Activities</div>} images={acts} />
        </>
        
     );
}
 
export default Activities;