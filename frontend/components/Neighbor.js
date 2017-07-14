import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/stylesheets/neighbor.scss';
import { Button } from 'react-bootstrap';

const Neighbor = ({user}) => {
    return (
        <button className="neighbor">
            <span><img src={user.imgURL} alt="" height="40"/></span>
            <span>{user.fName} {user.lName}</span>
        </button>
    );
};

Neighbor.propTypes = ({
    user: PropTypes.object
});

export default Neighbor;
