/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,

  ListItemIcon,

  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'gatsby'

const useStyles = makeStyles(theme => ({
  root: {
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
  },
}));

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props;
  const classes = useStyles();

  const linkStyles = {
    color:'grey',
    display:'inline-block',
    margin: '0 0.5rem',
    padding: '0.25rem',
    textDecoration:'none',
    
    
    

  };


  const activeStyles ={
    

    color:"#46B5D1"
  }

  // const landings = pages.landings;
  // const supportedPages = pages.pages;
  // const account = pages.account;

  // const MenuGroup = props => {
  //   const { item } = props;
  //   return (
  //     <List disablePadding>
  //       <ListItem disableGutters>
  //         <Typography
  //           variant="body2"
  //           color="primary"
  //           className={classes.menuGroupTitle}
  //         >
  //           {item.groupTitle}
  //         </Typography>
  //       </ListItem>
  //       {item.pages.map((page, i) => (
  //         <ListItem disableGutters key={i} className={classes.menuGroupItem}>
  //           <Typography
  //             variant="body2"
  //             component={'a'}
  //             href={page.href}
  //             className={clsx(classes.navLink, 'submenu-item')}
  //             color="textPrimary"
  //             onClick={() => onClose()}
  //           >
  //             {page.title}
  //           </Typography>
  //         </ListItem>
  //       ))}
  //     </List>
  //   );
  // };

  // const LandingPages = () => {
  //   const { services, apps, web } = landings.children;
  //   return (
  //     <div className={classes.menu}>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={services} />
  //         <MenuGroup item={apps} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={web} />
  //       </div>
  //     </div>
  //   );
  // };

  // const SupportedPages = () => {
  //   const {
  //     career,
  //     helpCenter,
  //     company,
  //     contact,
  //     blog,
  //     portfolio,
  //   } = supportedPages.children;
  //   return (
  //     <div className={classes.menu}>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={career} />
  //         <MenuGroup item={helpCenter} />
  //         <MenuGroup item={company} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={contact} />
  //         <MenuGroup item={blog} />
  //         <MenuGroup item={portfolio} />
  //       </div>
  //     </div>
  //   );
  // };

  // const AccountPages = () => {
  //   const { settings, signup, signin, password, error } = account.children;
  //   return (
  //     <div className={classes.menu}>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={settings} />
  //         <MenuGroup item={signup} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={signin} />
  //         <MenuGroup item={password} />
  //         <MenuGroup item={error} />
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link to='/logistics' style = {linkStyles}activeStyle={activeStyles}>Home</Link>
      </ListItem>
      <br />


      <ListItem className={classes.listItem}>
      <Link to='/expo' style = {linkStyles}activeStyle={activeStyles}>About</Link>
      </ListItem>

      <br />


      <ListItem className={classes.listItem}>
       
      <Link to='/e-commerce' style = {linkStyles}activeStyle={activeStyles}>Products</Link>
      </ListItem>
      <br />

      <ListItem className={classes.listItem}>
      <Link to='/logistics' style = {linkStyles}activeStyle={activeStyles}>Media</Link>
      </ListItem>
      <br />


      <ListItem className={classes.listItem}>
      
<Link to='/career-listing-minimal' style = {linkStyles}activeStyle={activeStyles}>Work with us</Link>
      </ListItem>
      <br />







      {/* <Typography variant="h6" color="textPrimary" gutterBottom>
          Landings
        </Typography> */}
      {/* <LandingPages /> */}

      <ListItem className={classes.listItem}>
        <Button
          variant="contained"
          color=""
          fullWidth
          component="a"
          target="blank"
          href="/contact-page-cover"
        >
          CONNECT
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Divider className={classes.divider} /> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Typography variant="h6" color="textPrimary" gutterBottom>
          Pages
        </Typography> */}
        {/* <SupportedPages /> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Divider className={classes.divider} /> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Typography variant="h6" color="textPrimary" gutterBottom>
          Account
        </Typography>
        <AccountPages /> */}
      </ListItem>



    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;