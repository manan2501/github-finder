import React, {Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () => <Fragment>
    <img scr={spinner}
        alt="Loading..."
        style={{width: '200px',
                margin: 'auto',
                dispaly: 'block'
            }}
    />
    </Fragment>

export default Spinner