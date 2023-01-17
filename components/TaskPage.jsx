import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../pages/_app";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useRouter } from "next/router";

function TaskPage() {
  const Router = useRouter();
  const Title = Router.query.taskTitle;

  const { state, dispatch } = useContext(UserContext);
  const [Item, setItem] = useState({});

  useEffect(() => {
    SelectedTask(Title);
  }, []);

  const SelectedTask = (title) => {
    state.map((data) => {
      if (data.Task === title) {
        console.log("true");
        setItem(data);
        return;
      }
    });
    return;
  };

  const Icon = () => {
    if (Item.isCompleted === "yes") {
      return <ThumbUpAltIcon sx={{ fontSize: "80px" }} />;
    } else if (Item.isCompleted === "no") {
      return <DirectionsRunIcon sx={{ fontSize: "80px" }} />;
    }
  };
  const Text = () => {
    if (Item.isCompleted === "yes") {
      return "great";
    } else if (Item.isCompleted === "no") {
      return "do more";
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: {
          md: 2,
        },
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 3,
        }}
      >
        <Link href={"/homepage"}>
          <a>
            <Box
              sx={{
                width: "130px",
                height: "130px",
                border: "1px solid gray",
                borderRadius: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <ArrowBackIcon sx={{ fontSize: "50px" }} />
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#1976d2",
                  textTransform: "capitalize",
                  fontFamily: "Ubuntu",
                  textAlign: "center",
                }}
                component="div"
              >
                Go Back
              </Typography>
            </Box>
          </a>
        </Link>
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.05)",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: {
            md: "12px",
          },
          minHeight: "100vh",
          p: 0,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1976d2",
            width: "100%",
            miHeight: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "28px",
              lineHeight: "32px",
              color: "white",
              textTransform: "capitalize",
              fontWeight: 400,
              textAlign: "center",
              fontFamily: "Ubuntu",
            }}
            component="div"
          >
            Task Details
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            px: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "32px",
              lineHeight: "40px",
              color: "#1976d2",
              textTransform: "capitalize",
              mt: 2,
              fontFamily: "Ubuntu",
            }}
            component="div"
          >
            Title :{" "}
            <Box component={"span"} sx={{ color: "#A2A2A2" }}>
              {Item.Task}
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "32px",
              lineHeight: "40px",
              color: "#1976d2",
              textTransform: "capitalize",
              mt: 2,
              fontFamily: "Ubuntu",
            }}
            component="div"
          >
            Priorty :{" "}
            <Box component={"span"} sx={{ color: "#A2A2A2" }}>
              {Item.Priorty}
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "32px",
              lineHeight: "40px",
              color: "#1976d2",
              textTransform: "capitalize",
              mt: 2,
              fontFamily: "Ubuntu",
            }}
            component="div"
          >
            Date :{" "}
            <Box component={"span"} sx={{ color: "#A2A2A2" }}>
              {Item.Date}
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "32px",
              lineHeight: "40px",
              color: "#1976d2",
              textTransform: "capitalize",
              mt: 2,
              fontFamily: "Ubuntu",
            }}
            component="div"
          >
            Description :{" "}
            <Box component={"span"} sx={{ color: "#A2A2A2" }}>
              {Item.des}
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "32px",
              lineHeight: "40px",
              color: "#1976d2",
              textTransform: "capitalize",
              mt: 2,
              fontFamily: "Ubuntu",
            }}
            component="div"
          >
            Completied :{" "}
            <Box component={"span"} sx={{ color: "#A2A2A2" }}>
              {Item.isCompleted}
            </Box>
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: {
                md: "start",
                xs: "center",
              },
              alignItems: "center",
              mt: 4,
              ml: {
                md: 6,
              },
            }}
          >
            <Box
              sx={{
                width: "200px",
                height: "200px",
                border: "1px solid gray",
                borderRadius: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {Icon()}
              <Typography
                variant="h6"
                sx={{
                  fontSize: "32px",
                  lineHeight: "40px",
                  color: "#1976d2",
                  textTransform: "capitalize",
                  fontFamily: "Ubuntu",
                  textAlign: "center",
                }}
                component="div"
              >
                {Text()}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TaskPage;
