import { AppBar, Drawer, IconButton, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon, DarkMode as DarkModeIcon, Home as HomeIcon } from "@mui/icons-material";
import "../styles/Navbar.css";
import { useColorScheme } from '@mui/material/styles';
import React, { useState } from "react";

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar({ items = [] }) {
    const { t } = useTranslation();
    const language = localStorage.getItem('i18nLanguage');

    function getTranslation(key) {
        return t(language + '.' + key + '.translation');
    }

    const { mode, setMode } = useColorScheme();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const drawerItems = [
        { href: "/", icon: <HomeIcon />, textKey: "nav_home" },
    ]

    const DrawerContent = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {drawerItems.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemButton href={item.href}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={getTranslation(item.textKey)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
        <AppBar position="sticky">
            <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="Menu"
                onClick={
                    toggleDrawer(true)
                }
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
            >
                {DrawerContent}
            </Drawer>
            <Typography variant="h5" component="div">
                {getTranslation('home_heading')}
            </Typography>
            <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
                {/* Render additional items passed as props */}
                {items.map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                    {item} {/* Render the item */}
                </Box>
                ))}

                <IconButton
                color="inherit"
                aria-label="Toggle Dark Mode"
                onClick={() => {
                    setMode(mode === "dark" ? "light" : "dark");
                }}
                >
                <DarkModeIcon />
                </IconButton>

                <LanguageSwitcher/>
            </Box>
            </Toolbar>
        </AppBar>
        </>
    );
};

export default Navbar;
