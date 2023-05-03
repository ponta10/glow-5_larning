import React from 'react'
import { NavLink } from 'react-router-dom';
import { Box, Typography, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';

export const BreadCrumbs = (props) => {
  const { links } = props;
    const currentLink = links && links[links?.length - 1].name;
  
    const listActiveLast = links?.map((link) => (
      <div key={link.name ?? ''}>
        {link.name !== currentLink ? (
          <LinkItem href={link.href ?? ''} name={link.name ?? ''} />
        ) : (
          <Typography
            variant="body2"
            sx={{
              maxWidth: 260,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              color: 'text.disabled',
              textOverflow: 'ellipsis',
            }}
          >
            {currentLink}
          </Typography>
        )}
      </div>
    ));
  
    return (
      <MUIBreadcrumbs
        sx={{ mb: 2, px: 10 }}
        separator={(
          <Box
            sx={{
              opacity: 0.48,
            }}
          >
            {'>'}
          </Box>
        )}
      >
        {listActiveLast}
      </MUIBreadcrumbs>
    );
}

const LinkItem = ({ href, name }) => {
  return (
    <NavLink to={href} style={{ color: "#4EABBA"}}>
      {name}
    </NavLink>
  );
}