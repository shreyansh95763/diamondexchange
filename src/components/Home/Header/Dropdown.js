import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const DropdownId = () => {
    // State to manage the anchor element for the menu
    const [anchorEl, setAnchorEl] = useState(null);

    // Function to handle menu opening
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to handle menu closing
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                endIcon={<ExpandMoreIcon style={{fontSize:"2rem",margin:0,fontWeight:600}}/>}
                style={{fontSize:"1rem",color:"white",fontWeight:600}}
            >
                test502
            </Button>
            <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Account Statement</MenuItem>
                <MenuItem onClick={handleMenuClose}>Profit Loss Report</MenuItem>
                <MenuItem onClick={handleMenuClose}>Bet History</MenuItem>
                <MenuItem onClick={handleMenuClose}>Unsettled Bet</MenuItem>
                <MenuItem onClick={handleMenuClose}>Casino Report History</MenuItem>
                <MenuItem onClick={handleMenuClose}>Set Button Values</MenuItem>
                <MenuItem onClick={handleMenuClose}>Change Password</MenuItem>
                <hr style={{margin:0}}/>
                <MenuItem onClick={handleMenuClose}>Signout</MenuItem>
            </Menu>
        </div>
    );
};

export default DropdownId;
