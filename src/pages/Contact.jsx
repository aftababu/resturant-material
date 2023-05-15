import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Mail, Phone, SupportAgent } from "@mui/icons-material";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sit,
        expedita quo alias sequi sint magni, molestiae deleniti eveniet rem
        accusantium amet! Ipsum quibusdam voluptate sed aliquid. Ab, illum
        maxime.
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "#000", color: "#fff" }}
                  align="center"
                >
                  Contact Detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgent sx={{ color: "red", pt: 1 }} />
                  123234456 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Mail sx={{ color: "skyblue", pt: 1 }} />
                  aftababu54@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Phone sx={{ color: "skyblue", pt: 1 }} />
                  01123456789
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
