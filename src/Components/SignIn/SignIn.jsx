import { useContext, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginContext } from '../Context/LoginContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Trade Cars
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignInSide() {

    const [signUp, setSignUp] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false);

    const { login, setLogin, setUser, user, loading, setLoading } = useContext(LoginContext)

    const navigate = useNavigate()

    const handleBackgroundImageLoad = () => {
        setBackgroundImageLoaded(true);
    };


    useEffect(() => {
        setEmailError('')
        setPasswordError('')
    }, [signUp])

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    const handleLogin = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        // Perform email validation
        if (!email) {
            setEmailError('Email is required');
            return;
        } else if (!emailRegex.test(email)) {
            setEmailError('Invalid email format');
            return;
        } else {
            setEmailError('');
        }

        // Perform password validation
        if (!password) {
            setPasswordError('Password is required');
            return;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return;
        } else {
            setPasswordError('');
        }

        setLoading(true)
        axios.post('http://localhost:8080/api/loginUser', {
            email: email,
            password: password
        }).then((response) => {
            console.log(response);
            if (response?.status === 200) {
                setLogin(true);
            //    setUser(response.data.data[0].name);
                setLoading(false)
                navigate('/')
                return
            }

        }).catch((e) => {
            
            console.log('err', e);
        })

    };

    const handleSignUp = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const confirmPassword = data.get('confirmPassword');

        if (!firstName) {
            setFirstNameError('first name is required');
            return;
        } else if (firstName.length < 2) {
            setFirstNameError('first name must be at least 2 characters');
            return;
        } else {
            setFirstNameError('');
        }

        if (!lastName) {
            setLastNameError('last name is required');
            return;
        } else if (lastName.length < 2) {
            setLastNameError('last name must be at least 2 characters');
            return;
        } else {
            setLastNameError('');
        }


        // Perform email validation 
        if (!email) {
            setEmailError('Email is required');
            return;
        } else if (!emailRegex.test(email)) {
            setEmailError('Invalid email format');
            return;
        } else {
            setEmailError('');
        }

        // Perform password validation
        if (!password) {
            setPasswordError('Password is required');
            return;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return;
        } else {
            setPasswordError('');
        }


        if (!confirmPassword) {
            setConfirmPasswordError('please confirm password');
            return;
        } else if (confirmPassword !== password) {
            setConfirmPasswordError('entered password not match');
            return;
        } else {
            setConfirmPasswordError('')
        }

        console.log({
            email, password, firstName, lastName
        });

        axios.post('http://localhost:8080/api/registerUser', {
            firstName: firstName,
            lastName :lastName,
            email: email,
            password: password     
        }).then((response) => {
            console.log(response)
            if(response.status===200){
                setSignUp(!signUp)
            }
    }).catch((e) => {
        console.log('err', e);
    })

    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '86vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?cars)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}
                    />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign {signUp ? "Up" : "In"}
                        </Typography>
                        <Box component="form" noValidate onSubmit={signUp ? handleSignUp : handleLogin} sx={{ mt: 1 }}>
                            {signUp ?
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            error={Boolean(firstNameError)}
                                            helperText={firstNameError}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"
                                            error={Boolean(lastNameError)}
                                            helperText={lastNameError}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            error={Boolean(emailError)}
                                            helperText={emailError}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                            error={Boolean(passwordError)}
                                            helperText={passwordError}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="confirmPassword"
                                            label="Confirm-Password"
                                            type="password"
                                            id="confirmPassword"
                                            autoComplete="confirm-new-password"
                                            error={Boolean(confirmPasswordError)}
                                            helperText={confirmPasswordError}
                                        />
                                    </Grid>
                                </Grid> :
                                <><TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    error={Boolean(emailError)}
                                    helperText={emailError} />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        error={Boolean(passwordError)}
                                        helperText={passwordError} />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me" />
                                </>}
                            <LoadingButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                loading={loading}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign {signUp ? "Up" : "In"}
                            </LoadingButton>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link onClick={() => setSignUp(!signUp)} href="#" variant="body2">
                                        {signUp ? "" : "Don't"} have an account? Sign {signUp ? "In" : "Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}