import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MobileNavBar from "./MobileNavBar.js";
import Box from "@mui/material/Box";
import placeholder from "../img/placeholder.png";

export default function BlogPost({ content }) {
  return (
    <React.Fragment>
      <MobileNavBar color="primary" />

      <Container>
        <Typography variant="h2" fontWeight="bold">
          What is IdeaLog?
        </Typography>

        <Typography variant="body1" mt={5}>
          For many collectors, originality of an idea is one of the most
          important factors in their valuation of a project. Currently, there
          are two ways for you to be aware of an idea. until it is on the
          blockchain. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Tortor condimentum lacinia quis vel eros donec. Suspendisse interdum
          consectetur libero id faucibus. Suspendisse ultrices gravida dictum
          fusce. Semper auctor neque vitae tempus. Morbi tristique senectus et
          netus. Pellentesque dignissim enim sit amet venenatis urna cursus
          eget. At tellus at urna condimentum mattis pellentesque id. Morbi non
          arcu risus quis varius quam quisque id. Magnis dis parturient montes
          nascetur ridiculus mus. Sit amet justo donec enim diam. Tincidunt
          augue interdum velit euismod in. Vitae tempus quam pellentesque nec
          nam aliquam sem.
        </Typography>

        <Box mt={2}>
          <img src={placeholder} alt="placeholder alt" width={350} />
        </Box>

        <Typography variant="body1" mt={5}>
          Bibendum ut tristique et egestas quis ipsum suspendisse ultrices
          gravida. Quisque non tellus orci ac auctor augue mauris augue neque.
          Porttitor rhoncus dolor purus non enim praesent elementum facilisis.
          Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.
          Condimentum lacinia quis vel eros donec ac odio tempor orci. Vitae
          ultricies leo integer malesuada nunc. Ut porttitor leo a diam
          sollicitudin. Nec dui nunc mattis enim ut tellus elementum. Adipiscing
          elit duis tristique sollicitudin nibh sit amet commodo. Pulvinar etiam
          non quam lacus suspendisse faucibus. Duis convallis convallis tellus
          id interdum. Odio aenean sed adipiscing diam donec adipiscing
          tristique risus. Dolor sit amet consectetur adipiscing elit ut
          aliquam. Pellentesque elit ullamcorper dignissim cras tincidunt
          lobortis.
        </Typography>

        <Box mt={2}>
          <img src={placeholder} alt="placeholder alt" width={350} />
        </Box>

        <Typography variant="body1" mt={5} mb={10}>
          Commodo ullamcorper a lacus vestibulum sed arcu non. Scelerisque felis
          imperdiet proin fermentum leo vel orci. Morbi quis commodo odio aenean
          sed adipiscing. Gravida rutrum quisque non tellus. Sed nisi lacus sed
          viverra. Sed egestas egestas fringilla phasellus faucibus scelerisque.
          Sed faucibus turpis in eu mi bibendum neque egestas congue. A diam
          sollicitudin tempor id. Id neque aliquam vestibulum morbi. Sit amet
          luctus venenatis lectus magna.
        </Typography>
      </Container>
    </React.Fragment>
  );
}
