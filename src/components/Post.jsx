// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from "@mui/material/Grid";

import { useState ,useEffect} from "react";
import { ClassNames } from '@emotion/react';
let login = true; 

function Post() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  });


  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {data.map((user) => {
        // Inner return inside map
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>

                      <CardMedia component="img" height="140" image={user.avatar} alt="green iguana" /> 
                      {/* { login == true ? "logged in" : "logged out"} */}
                      <Typography  variant="body2" className={`statusText ${login ? 'loggedIn' : 'loggedOut'}`}  // Dynamically add class based on login status
>
  {login ? "Logged In" : "Logged Out"}
</Typography>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div"> {user.email} </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }} > {user.name} </Typography>
                </CardContent>

              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary"> Share </Button>
              </CardActions>
              
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );

}

export default Post;