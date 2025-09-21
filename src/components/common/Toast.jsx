// import * as React from "react";
// import Button from "@mui/material/Button";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";

// function Toast({ as = "button", children, props }) {
//   const ButtonSnack = as || "buton";
//   // const [open, setOpen] = React.useState(false);
//   const [liked, setLiked] = React.useState(false);
//   const [toast, setToast] = React.useState({
//     open:false,
//     message: "",
//     severity: "success",
//   });

//   const handleClick = () => {
//     if(!liked){
// setToast({open:true,severity:'success',message:'yes'})    }
// else{
//  setToast({open:true,severity:'info',message:'no'})    
 
// }
//     setLiked(!liked);

//   };

//   const handleClose = (event, reason) => {
//     // if (reason === "clickaway") {
//     //   return;
//     // }
// setToast({...toast,open:false})  };

//   return (
//     <div>
//       {/* <ButtonSnack  onClick={handleClick}>{children}</ButtonSnack> */}
//       <ButtonSnack onClick={handleClick} {...props}>
//         {children}
//       </ButtonSnack>

//       <Snackbar open={toast.open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert
//           onClose={handleClose}
//           severity={toast.severity}
//           variant="filled"
//           sx={{ width: "100%" }}
//         >
//           {toast.message}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }
// export default Toast;






import * as React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
// import Toast from './Toast';
// import Toast from './Toast';

function Toast({as='div',Children}) {
  const ButtonSnack=as||'div';
  const { enqueueSnackbar } = useSnackbar();



  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <React.Fragment>
      <ButtonSnack onClick={handleClickVariant('success')}>{Children}</ButtonSnack>
     </React.Fragment>
  );
}

export default function IntegrationNotistack({as,children}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <Toast children={children} as={as}/>
    </SnackbarProvider>
  );
}
// export default Toast