import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h1>Our terms and conditions</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis a, cumque itaque debitis quia, consequatur nisi voluptatibus rem impedit hic, nihil cupiditate ipsum doloremque illo quae. Officia, amet! Blanditiis, sint?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;