import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const ContentsCard = (props) => {
  const { title, image, description, category, point } = props;
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 2 }}>
      <CardMedia
        component="img"
        sx={{ height: 120, objectFit: 'contain' }}
        image="https://pontaro.net/wp-content/uploads/2023/02/757bd17370cf026586dc55fc1c514faf.png"
        title="Contents Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h5" component="div">
          {point}pt
        </Typography>
      </CardContent>
    </Card>
  )
}
