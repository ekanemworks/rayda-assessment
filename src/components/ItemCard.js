import { Button, Card, CardActions } from '@mui/material'
import React from 'react'

const ItemCard = (props) => {
  return (
    <Card style={{padding:'5px', borderRadius:'10px'}}>
        {/* <img src={props.imag} style={{ width: '50px', backgroundSize: 'contain' }}alt=''/> */}
        <div style={{margin:'5px'}}>
            <img src={props.image} style={{width:'100%'}} />
        </div>
        <div style={{margin:'5px'}}>
            <table>
                <tr>
                    <td>
                        <img src={props.image} style={{width:'30px', height:'30px', borderRadius:'50%'}} />
                    </td>
                    <td>
                        <div>
                            {props.name}
                        </div>
                    </td>
                </tr>
            </table>
            <div style={{fontWeight: 'bold', marginBlock:'10px', height:'50px', fontSize:'14px'}}>
                {props.title}
            </div>
            <div style={{marginBlock:'11px', fontSize:'14px'}}>
                Current Bid: <span style={{fontWeight:'bold'}}>{props.bid}</span>
            </div>
        </div>
        <CardActions>
            <Button variant='contained' style={{background:'#004CCC', width:'100%', textTransform:'none', borderRadius:'10px'}}>
                Add to wishlist
            </Button>
        </CardActions>
    </Card>
  )
}

export default ItemCard