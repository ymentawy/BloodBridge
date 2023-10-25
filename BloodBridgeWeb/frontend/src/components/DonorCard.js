import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
function DonorCard(props) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 8,
        boxShadow: 2,
        marginY: 2,
        padding: 2,
        backgroundColor: 'white',
        transition: '0.3s',
        '&:hover': {
          boxShadow: 5,
        },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex'
        }}
      >
        <Avatar alt="O" src="/static/images/avatar/1.jpg" style = {{textAlign: 'left'}}sx={{ marginRight: '20px' }} />
        <Divider
          orientation="vertical"
          sx={{
            color: 'black',
            borderWidth: '4px',
            height: '40px',
            marginRight: '20px',
            background: 'black',
          }}
        />
     <Typography variant="body1" sx={{ width: '400px', color: 'black', textAlign: 'left', fontFamily: 'Comic Sans MS, sans-serif' }}>
  {props.person.name}
</Typography>
<Divider
          orientation="vertical"
          sx={{
            color: 'black',
            borderWidth: '4px',
            height: '40px',
            marginRight: '20px',
            background: 'black',
          }}
        />
<Typography variant="body1" sx={{ width: '40px', color: 'black', textAlign: 'left', fontFamily: 'Comic Sans MS, sans-serif' }}>
  {props.person.age}
</Typography>
<Divider
          orientation="vertical"
          sx={{
            color: 'black',
            borderWidth: '4px',
            height: '40px',
            marginRight: '20px',
            background: 'black',
          }}
        />
        <Typography variant="body1" sx={{ width: '100px', color: 'black', textAlign: 'left', fontFamily: 'Comic Sans MS, sans-serif' }}>
  {props.person.bloodtype}
</Typography>
      </CardContent>
    </Card>
  );
}

export default DonorCard;