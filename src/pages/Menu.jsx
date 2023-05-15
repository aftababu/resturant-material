import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { data } from "../data";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {data.map((dt) => (
          <>
            <Card sx={{ maxWidth: "350px", display: "flex", m: 2 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "350px" }}
                  component={"img"}
                  src={dt.image}
                  alt={dt.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {dt.name}
                  </Typography>
                  <Typography variant="body2">{dt.description}</Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    Rs
                    <Typography
                      variant="span"
                      sx={{ ml: 1, color: "goldenrod" }}
                    >
                      {dt.price}
                    </Typography>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
