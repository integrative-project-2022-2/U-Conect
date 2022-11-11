import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
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
    name: "",
    email: "",
    username: "",
    password: ""
  },
  confPassword: ""

}

function handleChange(e){
  let value = e.target.value;
  switch (e.target.name){
    case "name": 
    state.data.name = value;
    break;
    case "email": 
    state.data.email = value;
    break;
    case "username": 
    state.data.username = value;
    break;
    case "password": state.data.password = value;
    break;
    case "passwordConf":  state.confPassword = value;
    break;
  }
}

async function handleSubmit(e){
  e.preventDefault();
  if (state.data.password != state.confPassword){
    alert("Password doesn't match")
  }else{
    console.log(state.data)
    await fetch("http://localhost:3000/api/registerUser",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state.data)
    })
  }
  
}
export default function SignIn() {

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar alt="" src="https://cdn-icons-png.flaticon.com/512/3534/3534139.png" sx={{ width: 60, height: 60 }}/>
          <Typography component="h1" variant="h5">
            Formulario de registro
          </Typography>

          
          <form onSubmit={handleSubmit}>

          <TextField
              margin="normal"
              required
              fullWidth
              label="Nombre Completo"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Nombre de usuario"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleChange}
            />
    
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
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
              autoComplete="current-password"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="passwordConf"
              label="Confirmar contraseña"
              type="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
                          
            >
              Registrarme
            
            </Button>
                <Link href='/' variant="body2" alignContent={"center"}>
                  {"Ya tienes cuenta? Inicia sesión"}
                </Link>
            </form>
          
        </Box>
      </Container>
    </ThemeProvider>
  );
}