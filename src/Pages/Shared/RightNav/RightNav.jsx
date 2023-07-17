import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='mb-2 mt-4' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login With Github</Button>

            <div className='mt-4'>
                <h3>Find Us On</h3>
                <ListGroup className='mt-4'>
                    <ListGroup.Item className='mb-2 text-primary'> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='border mb-2 text-primary'> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='border text-danger'> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <QZone />

            <div className='mx-auto'>
                <img className='position-absolute' src={bg} alt="" />
                <div className='position-relative top-50 text-center'>
                    <h3>Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn btn-danger'>Learn</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;