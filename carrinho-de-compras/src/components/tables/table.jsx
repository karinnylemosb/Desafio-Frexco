import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


function TabelaHortifruti (props) {    

    function Row(items) {
      const { item } = items;
        return (         
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell component="th" scope="row">{item.name}</TableCell>
          <TableCell align="right">{item.calories}</TableCell>
          <TableCell align="right">{item.fat}</TableCell>
          <TableCell align="right">{item.carbs}</TableCell>
          <TableCell align="right">{item.protein}</TableCell>
        </TableRow>   
        )
    }

   const { row } = props;
    return (
        <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
            <TableHead>
            <TableRow>
                <TableCell />
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              
             { row.map(r => (<Row item={r} />))}           
            </TableBody>
        </Table>
        </TableContainer>
    );    
}
export default TabelaHortifruti;