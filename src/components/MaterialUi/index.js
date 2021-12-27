import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Popover from '@material-ui/core/Popover';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
// import { FormatListNumberedRtlOutlined } from '@material-ui/icons';
const Material = ({ name, email, password }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            overflow: 'unset',
            margin: theme.spacing(3),
        },
        InputWrap: {
            width: '100%',
            margin: '20px 0px',
        },
        SelectWrap: {
            width: '100%',
            margin: theme.spacing(1),
        },
        Select: {
            width: '100%',
        },
        Wrapper: {
            display: 'flex',
        },
        checkbox: {
            padding: '10px',
            color: '#f50057',
        },
        Btn: {
            margin: '20px auto',
            display: 'block',
            background: '#f50057!important',
            color: '#FFFFFF',
        },
        Radio: {
            padding: '10px',
        },
        radioWrapper: {
            display: 'flex',
        },
        ImgWrap: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        Accordion: {
            color: '#FFFFFF',
            background: '#e2427bd9',
        },
        textField: {
            width: '400px',
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            },
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
                flexWrap: 'wrap'
            },
        },
        popoverBtn: {
            margin: '20px auto',
            display: 'block',
        },
        popoverDetail: {
            padding: '12px',
        },
        link: {
            display: 'flex',
            alignItems: 'center'
        },
        icon: {
            marginRight: theme.spacing(0.5),
            width: 20,
            height: 20,
        },
        countBtn: {
            background: '#f50057!important',
            color: '#FFFFFF',
            fontSize: '18px',
            fontWeight: '600',
            height: '30px',
            width: '30px',
            margin: '20px'

        }
    }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const [age, setAge] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [old, setOld] = React.useState('');
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setAge(event.target.value);
        setValue(event.target.value);
        setNumber(event.target.value);
        setOld(event.target.value);
    };


    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopoverClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const openPopover = Boolean(anchorEl);
    const id = openPopover ? 'simple-popover' : undefined;
    const [isMale, setIsMale] = React.useState(undefined);
    const [isDone, setDone] = React.useState();
    const onhandlebutton = () => {
        setDone(!isDone)
    }
    const [isCount, setCount] = useState(0);
    useEffect(() => {
        if (isCount === 10) {
            setIsMale('male')
        }
    }, [isCount]);
    const text=React.useRef(null);
    return (
        <>
            <div className={classes.root}>
                <h4>{name}</h4>
                <div className={classes.checkbox}>

                    <h3>Add Your Quantity</h3>
                    <div>
                        <Button className={classes.countBtn} onClick={() => {
                            if (!isCount <= 0) {
                                setCount(isCount - 1)
                            }
                        }}>
                            -
                        </Button>
                        {isCount}
                        <Button className={classes.countBtn}
                            onClick={() => setCount(isCount + 1)}>
                            +
                        </Button>
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                defaultChecked
                                size="medium"
                                inputProps={{ 'aria-label': 'checkbox with small size' }} />
                        }
                        label="Select one"
                    />
                </div>
                <div className={classes.radioWrapper}>
                    <div className={classes.Radio}>
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female"
                                onChange={(e) => setIsMale(e.target.value)}
                            />
                            <FormControlLabel value="male" control={<Radio />} label="Male"
                                onChange={(e) => setIsMale(e.target.value)}
                            />
                        </RadioGroup>
                    </div>
                    <div className={classes.ImgWrap}>
                        {
                            isMale === 'male' ?
                                <img src="/images/user1.png" alt="" style={{ width: '25%' }}
                                /> :
                                <img src="/images/user2.png" alt="" style={{ width: '25%' }}
                                />
                        }
                    </div>
                </div>
                <Input className={classes.InputWrap}
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    color="secondary"
                    placeholder="this is a web page" >
                </Input>
                <div className={classes.Wrapper} ref={text}>
                    <Grid item={8} className={classes.SelectWrap}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            color="secondary"
                            value={age}
                            onChange={handleChange}
                            className={classes.Select}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item={4} className={classes.SelectWrap}>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={number}
                            onChange={handleChange}
                            label="Number"
                            color="secondary"
                            className={classes.Select}
                        >
                            <MenuItem value={18}>18+</MenuItem>
                            <MenuItem value={40}>40+</MenuItem>
                            <MenuItem value={60}>60+</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item={4} className={classes.SelectWrap}>
                        <Select
                            id="demo-simple-select"
                            value={old}
                            onChange={handleChange}
                            label="Old"
                            color="secondary"
                            className={classes.Select}
                        >
                            <MenuItem value={1}>old</MenuItem>
                            <MenuItem value={2}>much</MenuItem>
                        </Select>
                    </Grid>
                </div>
                <Tooltip title="open" placement="bottom">
                    <Button variant="contained" className={classes.Btn} 
                    onClick={onhandlebutton}>
                        {isDone === true ? "Hide image" : "show image"}
                        
                    </Button>
                </Tooltip>
                <div>
                    {
                        isDone ?
                            <img src="/images/user1.png" alt="" style={{ width: '25%', display: 'block', margin: 'auto' }} />
                            :
                            null
                    }
                </div>
                <Accordion>
                    <AccordionSummary
                        className={classes.Accordion}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>What is Material UI Components ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        label="special"
                        type="date"
                        defaultValue="2021-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="time"
                        label="Alarm clock"
                        type="time"
                        defaultValue="07:30"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300,
                        }}
                    />
                    <TextField
                        id="date"
                        label="special"
                        type="date"
                        defaultValue="2021-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>

                <Button aria-describedby={id} variant="contained" color="primary"
                    className={classes.popoverBtn} onClick={handlePopoverClick}>

                    Popover
                </Button>
                <Popover
                    id={id}
                    open={openPopover}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.popoverDetail} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec dictum, est ut malesuada faucibus,ex orci varius
                        lectus, eget bibendum nisl massa at erat. Donec ultrices,
                        lorem et aliquet lobortis,
                    </Typography>
                </Popover>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                        <HomeIcon className={classes.icon} />
                        Material-UI
                    </Link>
                    <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                        <WhatshotIcon className={classes.icon} />
                        Flow
                    </Link>
                    <Link href="/" onClick={handleClick} className={classes.link}>
                        <WhatshotIcon className={classes.icon} />
                        Service
                    </Link>
                </Breadcrumbs>
            </div>
            <div>
                {/* <Button className={classes.Btn} onClick={{ref:Wrapper?.current?.scroll.view}}>scroll</Button> */}
            </div>
        </>
    );
}
export default Material;