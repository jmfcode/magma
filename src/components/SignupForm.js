import React from "react";
import Box from "@mui/material/Box";

export default function Signup() {
  return (
    <Box mt={2}>
      <div>
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n\t#mc_embed_signup{ clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}",
          }}
        />
        <div id="mc_embed_signup">
          <form
            action="https://dev.us20.list-manage.com/subscribe/post?u=430e04e6c991628a8f460ca86&amp;id=117599448c"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                width="95%"
                color="#FFF"
              >
                <input
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  style={{ outline: "2px solid #256EFF", height: 51 }}
                  placeholder="Email Address"
                  required
                />
                <input
                  type="submit"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    outline: "inherit",
                    backgroundColor: "#256EFF",
                    color: "#FFF",
                    marginLeft: 10,
                    padding: 20,
                    borderRadius: 3,
                  }}
                  value="SUBMIT"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="callToActionButton"
                />
              </Box>

              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_d6c2eeb800dbf1361092ecf12_db7e9d66b4"
                  tabIndex={-1}
                  defaultValue
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
}
