import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'white',color:'black', boxShadow:'none', borderBottom:'1px solid #ddd'}}>
        <Toolbar style={{}}>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div style={{fontWeight:'bold'}}>
              Welcome 
            </div>
            <div style={{fontSize:'11px'}}>
              Your current sales auction and activity.
            </div>
          </Typography>
          <IconButton>
            <NotificationsNoneIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header