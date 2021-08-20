
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import React from 'react';
import { useSelector } from 'react-redux';


import { Cellist } from '../marcas/Cellist';
import { DetalleModal } from '../marcas/DetalleModal';


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}






export const HomeScreen = () => {
    // <div className="container mt-10  "></div>

    // const {cellist} = useSelector(state => state.cellist);
    // console.log(cellist)

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    





    return (
        

        

        <div>
        <div className="caruosel-cel">
         <img class="img-fluid" src={`./assets/bann/bsam2.JPG`}  alt=""></img>
        
         {/* <img src="./assets/bann/bsam2.JPG" alt="Parliament Hill" height="null" width="1900"></img> */}
        </div>

        <hr />  

          <div><h3>Productos recomendados</h3></div>
          

            
              <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Ordenar por calificación,...
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>ascendente</MenuItem>
            <MenuItem onClick={handleClose}>descendente</MenuItem>
            {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          </Menu>

          </div>
       

          <hr />  


        <Cellist/>
        {/* <DetalleModal/> */}
        



      </div>

      




    )
}








