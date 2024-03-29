import {Button, Link, MenuItem, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import React, {useState} from "react";
import {navOptionsButton} from "../home/HomePage";

export default function NavButton({buttonColor}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

            >
                <MenuIcon fontSize="small"
                          sx={{
                              color: buttonColor,
                              fontSize: '3rem',
                          }}></MenuIcon>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}

            >
                {navOptionsButton.map((option) => (
                    <MenuItem onClick={handleClose}>
                        <Link href={`/${option.toLowerCase()}`}>
                            <Typography variant="h6" component="div"
                                // sx={{flexGrow: 1, color: '#ee7337'}}>
                                        sx={{flexGrow: 1, color: buttonColor}}>
                                {option}
                            </Typography>
                        </Link>
                    </MenuItem>
                ))}

            </Menu>
        </>
    )
}
