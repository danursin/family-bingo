import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import React from "react";

const Navbar: React.FC = () => {
    return (
        <Menu>
            <Menu.Menu>
                <Menu.Item content="Family Bingo" icon="users" />
                <Menu.Item content="Play" as={Link} to="/play" />
                <Menu.Item content="Create" as={Link} to="/create" />
            </Menu.Menu>
        </Menu>
    );
};

export default Navbar;
