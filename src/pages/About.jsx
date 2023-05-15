import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
        }}
      >
        <Typography variant="h4">Weolcome To My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vitae,
          velit tempora, in dolorum voluptatem sapiente ipsam aut cum
          necessitatibus voluptatum nulla pariatur, culpa quas a. Non
          dignissimos atque nesciunt voluptatem exercitationem necessitatibus
          eos cum obcaecati nihil, porro numquam beatae natus, dolorem
          doloremque! Debitis, unde dolor commodi vel ea sint! Laudantium
          aliquam nobis itaque dolorum harum quisquam suscipit illum nam, ad,
          ducimus animi provident optio iste vitae recusandae. Ipsam voluptate
          ut magni sequi fugit architecto molestias quas voluptas maxime! Ullam
          provident cupiditate commodi vitae doloremque officia rem amet
          blanditiis aspernatur veritatis ad, recusandae reprehenderit dolores
          quae at culpa dolore perferendis.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          consequatur veniam mollitia aspernatur dicta ratione possimus ad
          facere! Aliquam dignissimos quas culpa nesciunt odit laudantium
          placeat officiis consectetur eaque voluptates.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
