import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  row: {
      backgroundColor: "#eee",
  },
}));


export const HistoryTable = ({ rows, columns, initialFilterModel }) => {
  const classes = useStyles();

  const getRowClassName = (params) => {
    return params.id % 2 === 0 ? classes.row : '';
  };

      
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        filterModel={initialFilterModel}
        // checkboxSelection
        // disableRowSelectionOnClick
        getRowClassName={getRowClassName}
        sx={{
          '& .centered-cell': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />
    </Box>
  )
}
