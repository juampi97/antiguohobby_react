import * as React from "react";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

const Carta = ({image, title, description, link}) => {

  const handleOpenLink = (event) => {
    event.preventDefault();
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Card sx={{ maxWidth: 375 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image= {image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{display:'flex', justifyContent:'center'}}>
          <Button component={NavLink} to="#" onClick={handleOpenLink} size="small" color="primary">
            Ver Sitio
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Carta;
