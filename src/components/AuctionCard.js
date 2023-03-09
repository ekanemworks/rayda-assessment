import { Card, Box } from '@mui/material'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AuctionImg from '../assets/banner.png'
import AuctionImg2 from '../assets/auction-img.png'
import React from 'react'

const AuctionCard = () => {
  return (
    <Box style={{width:'95%', margin:'auto', paddingTop:'20px'}}>
        <Card sx={{ minWidth: 275 }} style={{borderRadius:'10px',height:'220px'}}>
            <CardContent>
                <div style={{backgroundImage: `url(${AuctionImg})`, backgroundSize: 'cover', borderRadius:'10px', height:'120px' }}>

                    <div style={{height:'10px',}}>

                    </div>
                    <div style={{marginTop:'70px', height:'500px'}}>
                        <table>
                            <tr>
                                <td>
                                    <img src={AuctionImg2} style={{width:'117px', height:'117px', borderRadius:'50%', marginLeft:'20px'}}/>
                                </td>
                                <td style={{width:'100%'}}>
                                    <div style={{marginLeft:'10px', marginTop:'16px'}}>
                                        <div style={{fontWeight:'bold'}}>
                                            Starts in: 3 days : 2 hours : 24 minutes 
                                        </div>
                                        <div style={{marginTop:'6px'}}>
                                            <span style={{fontWeight:'bold', fontSize:'12px', color:'#B54708'}}>
                                                Not Live
                                            </span>
                                            <span style={{fontWeight:'normal', fontSize:'12px', color:'#475467', marginLeft:'10px'}}>
                                                Layers Auction 
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Button variant="outlined" style={{fontSize:'12px', borderRadius:'10px', width:'130px', marginTop:'10px', textTransform:'none',color:'#555', border:'1px solid #999'}}>Accept Invite</Button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </CardContent>
        </Card>
    </Box>
  )
}

export default AuctionCard