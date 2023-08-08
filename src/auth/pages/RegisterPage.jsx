// import { Apple, Facebook, Google, Pinterest } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

const formData = {
  email: "correo@correo.com",
  password: "123456",
  displayName: "Nombre Completo",
};

const formValidations = {
  email: [ (value) => value.includes('@'), 'EL correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe tener mas de 6 caracteres' ],
  displayName: [ (value) => value.length >= 1, 'El nombre es requerido.']
}

export const RegisterPage = () => {
  const { formState, displayName, email, password, onInputChange, 
         isFormValid, displayNameValid, emailValid, passwordValid,  } =
    useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title="Crear Cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Tu Nombre..."
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={ !displayNameValid }
              helperText={ displayNameValid }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

// import { Apple, Facebook, Google, Pinterest } from "@mui/icons-material";
// import { Button, Grid, Link, TextField, Typography } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import { AuthLayout } from "../layout/AuthLayout";

// export const RegisterPage = () => {
//   return (
//     <AuthLayout title="Register">
//       <form>
//         <Grid container>
//           <Grid item xs={12} sx={{ mt: 2 }} sm={6}>
//             <TextField
//               label="Nombre"
//               type="text"
//               placeholder="Tu Nombre"
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sx={{ mt: 2 }} sm={6}>
//             <TextField
//               label="Apellido"
//               type="text"
//               placeholder="Tu Apellido"
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sx={{ mt: 2 }}>
//             <TextField
//               label="Correo"
//               type="email"
//               placeholder="Correo@google.com"
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sx={{ mt: 2 }}>
//             <TextField
//               label="Contraseña"
//               type="password"
//               placeholder="Contraseña"
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12} sx={{ mt: 2 }}>
//             <TextField
//               label="Confirme Contraseña"
//               type="password"
//               placeholder="Confirme Contraseña"
//               fullWidth
//             />
//           </Grid>

//           <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
//             <Grid item xs={12} /* sm={ 6 } */>
//               <Button variant="contained" fullWidth>
//                 Crear Cuenta
//               </Button>
//             </Grid>
//             {/* <Grid item xs={ 12 } sm={ 6 }>
//                     <Button variant='contained' fullWidth>
//                       <Google />
//                       <Typography sx={{ ml: 1 }}>Google</Typography>
//                     </Button>
//                   </Grid> */}
//           </Grid>

//           <Grid container direction="row" justifyContent="end">
//             <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
//             <Link component={RouterLink} color="inherit" to="/auth/login">
//               Ingresa aqui
//             </Link>
//           </Grid>
//         </Grid>
//       </form>
//     </AuthLayout>
//   );
// };
