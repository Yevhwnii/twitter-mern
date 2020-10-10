import React from 'react';

// MUI
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core';
import { ButtonBase } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden/Hidden';

interface SideMenuItemProps {
  iconButtonStyles?: {};
  iconButtonColor?: 'default' | 'inherit' | 'primary' | 'secondary' | undefined;
  children: any;
  iconStyles?: {};
  label?: string;
  labelVariant?:
    | 'inherit'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'
    | 'srOnly'
    | undefined;
}

const useSideMenuItemStyles = makeStyles((theme: Theme) => ({
  label: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  icon: {
    fontSize: 34,
  },
  itemBase: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'background-color 0.15s ease-in-out',
    borderRadius: 30,
    height: 50,
    marginBottom: 10,
    // Ripple button inside container
    '& button': {
      width: '100%',
      height: '100%',
      borderRadius: 30,
      padding: '0 20px 0 20px',
      '& span': {
        color: 'rgba(29,161,242,0.5)',
      },
    },
    // Hover effect
    '&:hover': {
      backgroundColor: 'rgba(29,161,242,0.1)',
      // Changing colors for h6 and svg
      '& h6, & svg': {
        color: theme.palette.primary.main,
      },
    },
  },
}));

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  iconStyles,
  children,
  label,
  labelVariant,
}: SideMenuItemProps) => {
  const classes = useSideMenuItemStyles();

  const iconWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      style: { ...iconStyles },
      className: classes.icon,
    });
  });

  return (
    <li>
      <div className={classes.itemBase}>
        <ButtonBase>
          {iconWithProps}
          <Hidden smDown>
            <Typography className={classes.label} variant={labelVariant}>
              {label}
            </Typography>
          </Hidden>
        </ButtonBase>
      </div>
    </li>
  );
};

export default SideMenuItem;
