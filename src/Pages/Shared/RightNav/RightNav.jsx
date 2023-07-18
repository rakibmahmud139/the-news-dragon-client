import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='mb-2 mt-4 w-100' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary w-100"> <FaGithub /> Login With Github</Button>

            <div className='mt-4'>
                <h3>Find Us On</h3>
                <ListGroup className='mt-4'>
                    <ListGroup.Item className='mb-2 text-primary w-100'> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='border mb-2 text-primary w-100'> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='border text-danger w-100'> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <QZone />

            <div className='w-75 mx-auto'>
                <img className=' position-absolute' src={bg} alt="" />
                <div className='position-relative top-50 text-center ps-4 pt-5 text-white'>
                    <h3 className='pb-4'>Create an Amazing Newspaper</h3>
                    <p className='pb-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn btn-danger'>Learn</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;