import React, { useEffect, useState } from 'react'
import { Card, Box, Button, Grid, Item, Divider, CircularProgress } from '@mui/material'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCard from './ItemCard';

const FeaturedItemsCard = () => {

    const [count,setCount] = useState(0)
	const [responseVariable, setResponse] = useState({
		loading: true,
		data: [],
	});

    // setCount=(countp)=>{
    //     count = countp +1;
    // };

    useEffect(()=>{

        const fetchData = async () => {
            // Get PROPERTY
            // Get PROPERTY
            try {
                let response = await fetch(
                    `https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );

                response = await response.json();
                if (response.success == true) {
                    setResponse({
                        ...responseVariable,
                        loading: false,
                        data: response.data,
                    });
                }
                
            } catch (error) {}
        }
		fetchData();

		



    },[])


    return (
        <Box style={{width:'95%', margin:'auto', paddingTop:'20px'}}>
            <Card sx={{ minWidth: 275 }} style={{borderRadius:'10px', }}>
                <CardContent>
                    <Box style={{borderBottom:'1px solid #ddd', paddingBottom:'10px', marginBottom:'10px'}}>
                        <table>
                            <tr>
                                <td style={{width:'100%'}}>
                                    <div style={{ fontSize: 16, fontWeight: 'bold', lineHeight:'30px'}}>
                                        Featured Items
                                    </div>
                                </td>
                                <td>
                                    <Button onClick={()=>setCount(count+1)} variant="outlined" style={{fontSize:'13px', borderRadius:'10px',textTransform:'none', width:'130px', color:'#555', border:'1px solid #999'}}>View Auction</Button>
                                </td>
                            </tr>
                        </table>
                    </Box>

                    {responseVariable.loading?
                    (
                        <Box>
                            <div style={{textAlign:'center', padding:'20px', margin:'auto'}}>
                                <CircularProgress />
                                loading...
                            </div>
                        </Box>
                    ):(
                        <Box>
                            <Grid container spacing={3}>
                
                                {responseVariable.data.map((data) => (
                                    <Grid item xs={10} md={4} lg={3} sm={6}>
                                        <ItemCard
                                            name={data.name}
                                            title={data.title}
                                            bid={data.bid}
                                            image={data.image}
                                        />
                                    </Grid>
                                ))}
                                
                            </Grid>
                        </Box>
                    )}

                </CardContent>
            </Card>
        </Box>
    )
}

export default FeaturedItemsCard