import React from 'react';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="/home">Soccer Leagues</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Header;