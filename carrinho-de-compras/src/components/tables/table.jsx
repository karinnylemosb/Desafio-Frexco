import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper  } from '@mui/material';

function TabelaHortifruti (props) { 

    function chargeRow(items, header, hasCount) {
        return (<TableBody>
            {items?.length > 0 ?
                items.map((item, index) => (
                    <TableRow key={`row${index}`} sx={{ '& > *': { borderBottom: 'unset' } }}>
                        {hasCount ? <TableCell scope="th">{index + 1}</TableCell> : <></> }
                        {
                            item.map((subitem, ind) => {
                                return <TableCell key={`row${index}Item${ind}`} component={subitem?.component} scope={subitem?.scope} align={subitem?.align}>{subitem?.item}</TableCell>
                            })
                        }

                    </TableRow>
                ))
                : <TableRow ><TableCell align="center" colSpan={header ? hasCount ? header + 1 : header : 1}>Não há itens</TableCell></TableRow>
            }
        </TableBody>)


    }

    function chargeHeader(items, hasCount){
      if(items?.length > 0) { 
          return (
              <TableHead>
                  <TableRow>
                      {hasCount ? <TableCell>#</TableCell> : <></> }
                      {items.map((item, index) => <TableCell component={item[index]?.component} scope={item[index]?.scope} key={`head${index}`} align={item.align}>{item.name}</TableCell>)}
                  </TableRow>
              </TableHead>
          )
      }
      return <></>
    }

   const { rows, headers, count } = props;
    return (
        <React.Fragment>
             <TableContainer component={Paper}>
             <Table stickyHeader aria-label="collapsible table">
                {chargeHeader(headers, count)}                          
                {chargeRow(rows, headers?.length, count )} 
            </Table>
            </TableContainer>
        </React.Fragment>
    );    
}
export default TabelaHortifruti;



