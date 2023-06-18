import * as React from 'react';
import { CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';




export default function Login() {

    

  return (

    <CssVarsProvider>
      <main>
        
        <Sheet
          sx={{
            width: 400,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Administrator</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Username</FormLabel>
            
           
                <Input
                    sx={{
                        border: '1px grey solid',
                       }}
                    // html input attribute
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    color="secondary"
                />
                
            
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              sx={{
                 border: '1px grey solid',
                }}
                
              name="password"
              type="password"
              placeholder="Password"
              color="secondary"
                required
            />
          </FormControl>

          <Button sx={{ 
        mt: 1 /* margin top */,
        backgroundColor: 'black',
      '&:hover': {
        color: 'white',
        backgroundColor: '#b82693',
      }  }}>Log in</Button>
        </Sheet>
        
      </main>
     
    </CssVarsProvider>
   

  );
}