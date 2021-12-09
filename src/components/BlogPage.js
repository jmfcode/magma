import { useState, useEffect } from "react";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import JmfContainer from "../components/JmfContainer";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import MobileNavBar from "./MobileNavBar.js";
import ButtonBase from "@mui/material/ButtonBase";

const BlogPage = () => {
  const navigate = useNavigate();
  const navigateToPrimaryBlog = () => navigate("/blog/what-is-ideaDAO");

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <Fragment>
      <MobileNavBar color="primary" />
      <JmfContainer bgcolor="primary.main">
        <Typography variant="h1" fontWeight="bold" marginBottom={5}>
          Blog
        </Typography>

        <ButtonBase onClick={navigateToPrimaryBlog}>
          <Container
            maxWidth="lg"
            sx={{
              bgcolor: "secondary.main",
              height: "550px",
              padding: isMobile ? 5 : 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box display="flex" width="498px" height="350px" bgcolor="#000">
              Blog cover image
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              width="450px"
              padding={3}
              bgcolor="#FFF"
            >
              <Typography color="text.sub"> 12/09/2021</Typography>
              <Typography variant="body1" fontWeight="bold">
                What is IdealogDAO ?
              </Typography>
              <Typography variant="body1">
                Sed eget tellus enim. Ut tempor est neque, vel facilisis risus
                mollis vitae...
              </Typography>
            </Box>
          </Container>
        </ButtonBase>
      </JmfContainer>
    </Fragment>
  );
};

export default BlogPage;
