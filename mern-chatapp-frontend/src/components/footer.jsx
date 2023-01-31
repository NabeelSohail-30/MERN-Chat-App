import * as React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import "./css/footer.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

function MyFooter() {
  return (
    <Box className="footerContainer">
      <Container>
        <Grid container spacing={2}></Grid>
        Developed and Maintained by{" "}
        <Link color={"inherit"} href="#" target={"blank"}>
          Nabeel Sohail
        </Link>
      </Container>

      <div>
        {"Copyright © "} {new Date().getFullYear()} {" All Rights Rserved"}
      </div>
      <div>
        <div class="social">
          <ul class="media-icons">
            <li>
              <Link
                color={"inherit"}
                href="https://github.com/NabeelSohail-30"
                target={"blank"}
              >
                <i class="fab fa-github"></i>
              </Link>
            </li>
            <li>
              <Link
                color={"inherit"}
                href="https://www.linkedin.com/in/nabeel-sohail-a63508200/"
                target={"blank"}
              >
                <i class="fab fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link
                color={"inherit"}
                href="https://wa.me/923453628868"
                target={"blank"}
              >
                <i class="fab fa-whatsapp"></i>
              </Link>
            </li>
            <li>
              <Link
                color={"inherit"}
                href="mailto:nabeel.sohail2630@outlook.com"
                target={"blank"}
              >
                <i class="fas fa-envelope"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
}

export default MyFooter;
