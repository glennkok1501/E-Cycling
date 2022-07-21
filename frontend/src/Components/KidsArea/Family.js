import { mdiHumanMaleFemaleChild } from '@mdi/js';
import Icon from '@mdi/react';
import act1 from '../../assets/images/kidsarea/family/Kids Infographic 1.jpeg'
import act2 from '../../assets/images/kidsarea/family/Kids Infographic 2.jpeg'
import act3 from '../../assets/images/kidsarea/family/Recycling activities to do with your kid.png'

import Template from './Template';

const Family = () => {
    const acts = [act1, act2, act3]

    return ( 
        <>
            <Template header={<div className='text-secondary'><Icon size={2} path={mdiHumanMaleFemaleChild} /> For Families</div>} images={acts} />
        </>
        
     );
}

export default Family;