import React from "react";
import { Typography, Menu, MenuItem, AppBar, Card, Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(

        <>
            <CssBaseline />

            <AppBar position="static">
                <Toolbar>

                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                    {auth && (
                        <div>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>Favourite</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>

            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />

                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBopttom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to descibe the content
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined" size="small" color="primary">View</Button>
                                        <Button variant="contained" size="small" color="primary">Edit</Button>
                                    </CardActions>

                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </Container>

            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here to give the footer a purpose
                </Typography>
            </footer>
        </>
    );
}

export default App;