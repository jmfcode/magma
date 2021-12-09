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
import Paper from "@mui/material/Paper";

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
            bgcolor: "#FFFFFF",
            borderRadius: 2,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Typography variant="h1" fontWeight="bold" color="#000000">
            We're solving NFT intellectual property on the blockchain
          </Typography>

          <Typography variant="body1" color="#000000" mt={5} maxWidth={850}>
            IdeaLog is a DAO that aims at organizing the blockchains data to
            enable competition but allow inspiration. We're starting with NFTs.
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

        <Container maxWidth="lg">
          <Paper
            variant="outlined"
            sx={{
              bgcolor: "secondary.main",
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 2,
              mt: 5,
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
              <Typography
                variant="body1"
                ccolor="#000000"
                mt={1}
                maxWidth={400}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ultricies semper aliquet.
              </Typography>
              <SignupForm />
            </Box>
          </Paper>
        </Container>
      </JmfContainer>
    </Fragment>
  );
};

export default HomePage;
