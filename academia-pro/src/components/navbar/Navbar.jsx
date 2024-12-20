import { useContext,useEffect,useState } from 'react';
import { AppBar, Toolbar, styled, Box, Drawer } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import LoginButton from './loginSection';
import Logo from '../images/logo.png';

const drawerWidth = 240;

const EditToolbar = styled(Toolbar)`
    width: 100%;
    display: flex;
    justify-content: center;
`;
const ScrollTrack = styled(Box)`
    height:4.5px;
    position:fixed;
    left:0px;
    width:100%;
    transform-origin:left;
    scale: 0 1;
    background-color:white;
    animation:scroll-watch linear;
    animation-timeline:scroll();
    @keyframes scroll-watch {
        to{
            scale:1 1;
        }
    }
    background: rgb(174,58,180);
    background: linear-gradient(90deg, rgba(174,58,180,1) 0%, rgba(253,64,29,1) 61%, rgba(252,176,69,1) 100%);
`

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const {isUser} = useContext(UserContext);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };
    useEffect(()=>{
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        };
        console.log("ROle is here : ",getCookie('role'));
    },[])

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };
    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" sx={{ width: '100%',margin:"0",padding:"0"}} >
                    <EditToolbar position='fixed' sx={{ height: { xs: '65px' }, backgroundColor: "#000B58" }}>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' }, position: 'absolute', left: '5vh', scale: '1.4' }} >
                            <MenuIcon />
                        </IconButton>
                        <div className='flex gap-2 sm:block hidden'>
                            <img className='w-[49px] h-[45px] absolute rounded-full ring-gray-300 dark:ring-white left-[30px] top-[10px]' src={Logo} />
                        </div>
                        <div className='w-[55%] hidden sm:flex justify-around'>
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-400" : "text-white"}> Home</NavLink>
                            {
                                !isUser?<>
                                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-400 font-bold" : "text-white font-bold"}> About Us</NavLink>
                                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange-400 font-bold" : "text-white font-bold"}> Contact </NavLink>
                                    <NavLink to="/working" className={({ isActive }) => isActive ? "text-orange-400 font-bold" : "text-white font-bold"}> Working </NavLink>
                                </>:<></>
                            }
                            {
                                localStorage.getItem("role")==="Teacher"?<>
                                <NavLink to="/performance" className={({ isActive }) => isActive ? "text-orange-400" : "text-white"}>Performance</NavLink>
                                <NavLink to="/attendence" className={({ isActive }) => isActive ? "text-orange-400" : "text-white"}>Attendence</NavLink>
                                <NavLink to="/students" className={({ isActive }) => isActive ? "text-orange-400" : "text-white"}>Students</NavLink>
                                </>:<></>
                            }
                            {
                                localStorage.getItem("role")==="Head"?<>
                                    <NavLink to="/addManagement" className={({ isActive }) => isActive ? "text-orange-400" : "text-white"}>Management</NavLink>
                                    <NavLink to="/class" className={({ isActive }) => isActive ? "text-orange-400" : "text-white"}>Class</NavLink>
                                    <NavLink to="/teachers" className={({ isActive }) => isActive ? "text-orange-400" : "text-white"}>Teachers</NavLink>
                                </>:<></>
                            }
                            {
                                localStorage.getItem("role")==="Student"?<>
                                <NavLink to="/teachers" className={({ isActive }) => isActive ? "text-orange-400" : "text-white"}>Resources</NavLink>
                                <NavLink to="/teachers" className={({ isActive }) => isActive ? "text-orange-400" : "text-white"}>Profile</NavLink>
                                </>:<></>
                            }
                        </div>
                        <LoginButton />
                    </EditToolbar>
                </AppBar>
                <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
                    <Drawer variant="temporary" open={mobileOpen} onTransitionEnd={handleDrawerTransitionEnd} onClose={handleDrawerClose}
                        ModalProps={{ keepMounted: true }}
                        sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#0F172A', }, }}>
                    </Drawer>
                </Box>
            </Box>
            <ScrollTrack sx={{ top: { sm: '64px', xs: '56px' }, zIndex: '3' }}></ScrollTrack>
        </>
    );
}

export default Navbar;