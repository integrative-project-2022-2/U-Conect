import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple, pink } from '@mui/material/colors';




const theme = createTheme({palette: {
  primary: deepPurple,
},
});

let state = {
  data : {
    username: "",
    password: ""
  },
}




function handleChange(e){

  let value = e.target.value;
  switch (e.target.name){
    case "username": 
    state.data.username = value;
    break;
    case "password":
    state.data.password = value
    break;   
  }
}

async function handleSubmit(e){  

  

  e.preventDefault();
    const response = await fetch("http://localhost:3000/api/loginUser",{
      
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify(state.data)
           
    })
    const data = await response.json();
    console.log(data)
  
    if(data === 0){
      alert("Password or Username is not correct")
      state.data.username = "";
      state.data.password = ""
    } else {
      location.replace('/home')
    }
    
  }

export default function SignIn() {

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" id='container'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar alt="" src="https://png.pngtree.com/element_our/png_detail/20181010/book-icon-logo-png_125608.jpg" />
          <Typography component="h1" variant="h5">
            Bienvenido/a a U-Conect
          </Typography>
          
          <Box>
            <form onSubmit={handleSubmit}         
            >
            
            <TextField
            
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              type="username"
              autoComplete="username"
              autoFocus
              onChange={handleChange}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuérdame"
            />
            <Button
              
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}         
                                        
            >
              Iniciar Sesión
            
            </Button>
            </form>
            
           
            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="register" variant="body2">
                  {"No tienes cuenta? Regístrate aquí"}
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );

  
}