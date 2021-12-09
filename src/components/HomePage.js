import { useState, Fragment } from "react";
import * as React from "react";
import MobileNavBar from "./MobileNavBar.js";
import JmfContainer from "../components/JmfContainer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import SignupForm from "./SignupForm";
import placeholder from "../img/placeholder.png";

async function getAccount() {
  window.ethereum
    .request({
      method: "eth_requestAccounts",
    })
    .then();
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];

  return account;
}
const HomePage = () => {
  const [auth, setAuth] = useState(false);
  const [account, setAccount] = useState("");
  const navigate = useNavigate();
  const navigateToPrimaryBlog = () => navigate("/blog/what-is-ideaDAO");

  return (
    <Fragment>
      <MobileNavBar color="primary" auth={auth} accountName={account} />
      <JmfContainer bgcolor="primary.main">
        <Container
          maxWidth="lg"
          sx={{
            bgcolor: "secondary.main",
            borderRadius: 2,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Typography variant="h1" fontWeight="bold" color="#000000">
            We're building the future
          </Typography>

          <Typography variant="body1" color="#000000" mt={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultricies semper aliquet. Sed eget tellus enim. Ut tempor est neque,
            vel facilisis risus mollis vitae. Proin vel felis ut nulla elementum
            pharetra laoreet sit amet ipsum. Aliquam at posuere orci, in
            fringilla erat. Nam congue placerat sollicitudin.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 5,
              flexDirection: "column",
            }}
          >
            <ButtonGroup disableElevation size="large">
              <Button
                color="info"
                variant="outlined"
                onClick={navigateToPrimaryBlog}
              >
                Learn how
              </Button>
              <Button
                color="info"
                variant="contained"
                onClick={() => {
                  if (typeof (window.ethereum !== "undefined")) {
                    getAccount().then((response) => {
                      setAccount(response);
                      setAuth(true);
                    });
                  }
                }}
              >
                Connect Wallet
              </Button>
            </ButtonGroup>
          </Box>
        </Container>

        <Container
          maxWidth="lg"
          sx={{
            bgcolor: "secondary.main",
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 2,
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h2" fontWeight="bold" color="#000000">
              Aliquet bibendum enim facilisis
            </Typography>

            <Typography variant="body1" color="#000000" mt={2} maxWidth={450}>
              Sed eget tellus enim. Ut tempor est neque, vel facilisis risus
              mollis vitae. Proin vel felis ut nulla elementum pharetra laoreet
              sit amet ipsum.
            </Typography>

            <Box mt={2}>
              <img src={placeholder} alt="placeholder alt" width={350} />
            </Box>
          </Box>

          <Box display="flex" flexDirection="row-reverse" mt={10}>
            <Box display="flex" flexDirection="column" alignItems="flex-end">
              <Typography variant="h2" fontWeight="bold" color="#000000">
                Elementum pulvinar etiam non
              </Typography>
              <Typography variant="body1" color="#000000" mt={2} maxWidth={450}>
                Sed eget tellus enim. Ut tempor est neque, vel facilisis risus
                mollis vitae. Proin vel felis ut nulla elementum pharetra
                laoreet sit amet ipsum.
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                mt={2}
              >
                <img src={placeholder} alt="placeholder alt" width={350} />
              </Box>
            </Box>
          </Box>

          <Box mt={10}>
            <Typography variant="h2" fontWeight="bold" color="#000000">
              At quis risus sed vulputate odio
            </Typography>

            <Typography variant="body1" color="#000000" mt={2} maxWidth={450}>
              Sed eget tellus enim. Ut tempor est neque, vel facilisis risus
              mollis vitae.
            </Typography>

            <Box mt={2}>
              <img src={placeholder} alt="placeholder alt" width={350} />
            </Box>
          </Box>
        </Container>

        <Container
          maxWidth="lg"
          sx={{
            bgcolor: "secondary.main",
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 2,
            mt: 10,
            mb: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h3" fontWeight="bold" color="#000000">
              Join the waitlist
            </Typography>
            <Typography variant="body1" ccolor="#000000" mt={1} maxWidth={400}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ultricies semper aliquet.
            </Typography>
            <SignupForm />
          </Box>
        </Container>
      </JmfContainer>
    </Fragment>
  );
};

export default HomePage;
