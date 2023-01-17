import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import Checkbox from "@mui/material/Checkbox";
import CircleIcon from "@mui/icons-material/Circle";
import LoginIcon from "@mui/icons-material/Login";
import { useRouter } from "next/router";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SwitchTabsForAuthView() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [Check, SetCheck] = useState(); // Check variable will give checkBox Value True/false

  const [Email, setEmail] = useState();
  const [PhNo, setPhNo] = useState();
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();

  // State management for input

  const [Validate, SetValidate] = useState(false);
  const [EmailValidate, SetEmailValidate] = useState(false);
  const [PhNoValidate, SetPhNoValidate] = useState(false);
  const [UsernameValidate, SetUsernameValidate] = useState(false);
  const [PasswordValidate, SetPasswordValidate] = useState(false);
  const [PasswordNotMatches, SetPasswordNotMatches] = useState(false);
  const [ConfirmPasswordValidate, SetConfirmPasswordValidate] = useState(false);
  const [CheckBox, SetCheckBox] = useState(false);

  const SignUp = () => {
    if (!Email || !PhNo || !Username || !Password || !ConfirmPassword) {
      SetValidate(true);
      setTimeout(() => {
        SetValidate(false);
      }, 10000);
      return;
    }
    if (!Email) {
      SetEmailValidate(true);
      setTimeout(() => {
        SetEmailValidate(false);
      }, 10000);
      return;
    }
    if (!PhNo) {
      SetPhNoValidate(true);
      setTimeout(() => {
        SetPhNoValidate(false);
      }, 10000);
      return;
    }
    if (!Username) {
      SetUsernameValidate(true);
      setTimeout(() => {
        SetUsernameValidate(false);
      }, 10000);
      return;
    }
    if (!Password) {
      SetPasswordValidate(true);
      setTimeout(() => {
        SetPasswordValidate(false);
      }, 10000);
      return;
    }
    if (!ConfirmPassword) {
      SetConfirmPasswordValidate(true);
      setTimeout(() => {
        SetConfirmPasswordValidate(false);
      }, 10000);
      return;
    }
    if (Check === false || !Check) {
      SetCheckBox(true);
      setTimeout(() => {
        SetCheckBox(false);
      }, 10000);
      return;
    }
    if (Password.trim() != ConfirmPassword.trim()) {
      SetPasswordNotMatches(true);
      setTimeout(() => {
        SetPasswordNotMatches(false);
      }, 10000);
      return;
    }
  };

  const focus = () => {
    SetValidate(false);
    SetEmailValidate(false);
    SetPhNoValidate(false);
    SetUsernameValidate(false);
    SetPasswordValidate(false);
    SetConfirmPasswordValidate(false);
    SetPasswordNotMatches(false);
    SetAuth(false);
  };

  const [Auth, SetAuth] = useState(false);

  const Login = () => {
    if (!Email || !Password) {
      SetValidate(true);
      setTimeout(() => {
        SetValidate(false);
      }, 10000);
      return;
    }
    if (!Email) {
      SetEmailValidate(true);
      setTimeout(() => {
        SetEmailValidate(false);
      }, 10000);
      return;
    }
    if (!Password) {
      SetPasswordValidate(true);
      setTimeout(() => {
        SetPasswordValidate(false);
      }, 10000);
      return;
    }
    if (Email.trim() != "admin" && Password.trim() != "admin") {
      SetAuth(true);
      router.push("/homepage");
    }
    if (
      Email.trim() === "am1205@student.le.ac.uk" &&
      Password.trim() === "123456789"
    ) {
      SetAuth(true);
      router.push("/homepage");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.05)",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "12px",
          minHeight: "100vh",
          px: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ fontSize: "24px", px: 6, textTransform: "capitalize" }}
                label="SignUp"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ fontSize: "24px", px: 6, textTransform: "capitalize" }}
                label="Login"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
        </Box>
        <TabPanel style={{ width: "100%" }} value={value} index={0}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "28px",
                lineHeight: "32px",
                color: "#A2A2A2",
                textTransform: "capitalize",
                mt: 2,
              }}
              component="div"
            >
              Welcome!
            </Typography>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                borderRadius: "30px",
                fontSize: "16px",
                px: 4,
                py: 1,
                mt: 3,
                borderColor: "#A2A2A2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "270px",
              }}
            >
              <GoogleIcon sx={{ mr: 1 }} />
              Signup with Google
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                borderRadius: "30px",
                fontSize: "16px",
                px: 4,
                py: 1,
                mt: 1,
                borderColor: "#A2A2A2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "270px",
              }}
            >
              <FacebookIcon sx={{ mr: 1 }} />
              Signup with Facebook
            </Button>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 3,
              }}
            >
              <Box
                sx={{
                  width: "200px",
                  height: "1px",
                  backgroundColor: "#1976d2",
                }}
              ></Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "28px",
                  lineHeight: "32px",
                  color: "#A2A2A2",
                  textTransform: "capitalize",
                  mx: 1,
                }}
                component="div"
              >
                OR
              </Typography>
              <Box
                sx={{
                  width: "200px",
                  height: "1px",
                  backgroundColor: "#1976d2",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                width: {
                  md: "50%",
                  xs: "100%",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      lineHeight: "28px",
                      color: "#666666",
                      textTransform: "capitalize",
                      ml: {
                        sm: 2,
                      },
                    }}
                    gutterBottom
                    component="div"
                  >
                    Email address
                  </Typography>
                </Box>
                <Box
                  sx={
                    Validate
                      ? {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid red",
                          px: 1,
                        }
                      : {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid #666666",
                          px: 1,
                        }
                  }
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: {
                        sm: "5%",
                        xs: "10%",
                      },
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <MailOutlineIcon
                      sx={Validate ? { color: "red" } : { color: "#666666" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "92%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      onFocus={() => focus()}
                      value={Email}
                      onChange={(e) =>
                        setEmail(e.target.value.toLocaleLowerCase())
                      }
                      type="email"
                      style={{
                        width: "100%",
                        height: "100%",
                        outline: "none",
                        border: "unset",
                        fontSize: "16px",
                        lineHeight: "24px",
                        padding: "0px 4px",
                      }}
                      placeholder="Enter your email"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={
                      Validate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Email Address required
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={
                      EmailValidate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Email Address required
                  </Typography>
                </Box>
              </Box>
              <Box
                className="Input"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mt: 3,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      lineHeight: "28px",
                      color: "#666666",
                      textTransform: "capitalize",
                      ml: {
                        sm: 2,
                      },
                    }}
                    gutterBottom
                    component="div"
                  >
                    Phone No.
                  </Typography>
                </Box>
                <Box
                  sx={
                    Validate
                      ? {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid red",
                          px: 1,
                        }
                      : {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid #666666",
                          px: 1,
                        }
                  }
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: {
                        sm: "5%",
                        xs: "10%",
                      },
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <PhoneIcon
                      sx={Validate ? { color: "red" } : { color: "#666666" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "92%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      onFocus={() => focus()}
                      value={PhNo}
                      onChange={(e) => setPhNo(e.target.value)}
                      autoComplete="off"
                      type="text"
                      style={{
                        width: "100%",
                        height: "100%",
                        outline: "none",
                        border: "unset",
                        fontSize: "16px",
                        lineHeight: "24px",
                        padding: "0px 4px",
                        color: "#666666",
                      }}
                      placeholder="Enter your ph no."
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={
                      Validate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Phone required
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={
                      PhNoValidate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Phone required
                  </Typography>
                </Box>
              </Box>
              <Box
                className="Input"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mt: 3,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      lineHeight: "28px",
                      color: "#666666",
                      textTransform: "capitalize",
                      ml: {
                        sm: 2,
                      },
                    }}
                    gutterBottom
                    component="div"
                  >
                    Username
                  </Typography>
                </Box>
                <Box
                  sx={
                    Validate
                      ? {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid red",
                          px: 1,
                        }
                      : {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid #666666",
                          px: 1,
                        }
                  }
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: {
                        sm: "5%",
                        xs: "10%",
                      },
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <PersonIcon
                      sx={Validate ? { color: "red" } : { color: "#666666" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "92%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      onFocus={() => focus()}
                      value={Username}
                      onChange={(e) =>
                        setUsername(e.target.value.toLocaleLowerCase())
                      }
                      autoComplete="off"
                      type="text"
                      style={{
                        width: "100%",
                        height: "100%",
                        outline: "none",
                        border: "unset",
                        fontSize: "16px",
                        lineHeight: "24px",
                        padding: "0px 4px",
                        color: "#666666",
                      }}
                      placeholder="Enter your username"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={
                      Validate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Username required
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={
                      UsernameValidate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Username required
                  </Typography>
                </Box>
              </Box>
              <Box
                className="Input"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mt: 3,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      lineHeight: "28px",
                      color: "#666666",
                      textTransform: "capitalize",
                      ml: {
                        sm: 2,
                      },
                    }}
                    gutterBottom
                    component="div"
                  >
                    Password
                  </Typography>
                </Box>
                <Box
                  sx={
                    Validate
                      ? {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid red",
                          px: 1,
                        }
                      : {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid #666666",
                          px: 1,
                        }
                  }
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: {
                        sm: "5%",
                        xs: "10%",
                      },
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <LockOutlinedIcon
                      sx={Validate ? { color: "red" } : { color: "#666666" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "92%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      onFocus={() => focus()}
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="off"
                      type="password"
                      style={{
                        width: "100%",
                        height: "100%",
                        outline: "none",
                        border: "unset",
                        fontSize: "16px",
                        lineHeight: "24px",
                        padding: "0px 4px",
                        color: "#666666",
                      }}
                      placeholder="Enter your password"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={
                      Validate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Password required
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={
                      PasswordValidate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Password required
                  </Typography>
                </Box>
              </Box>
              <Box
                className="Input"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mt: 3,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      lineHeight: "28px",
                      color: "#666666",
                      textTransform: "capitalize",
                      ml: {
                        sm: 2,
                      },
                    }}
                    gutterBottom
                    component="div"
                  >
                    Confirm password
                  </Typography>
                </Box>
                <Box
                  sx={
                    Validate
                      ? {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid red",
                          px: 1,
                        }
                      : {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid #666666",
                          px: 1,
                        }
                  }
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: {
                        sm: "5%",
                        xs: "10%",
                      },
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <LockResetOutlinedIcon
                      sx={Validate ? { color: "red" } : { color: "#666666" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "92%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      onFocus={() => focus()}
                      value={ConfirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      autoComplete="off"
                      type="password"
                      style={{
                        width: "100%",
                        height: "100%",
                        outline: "none",
                        border: "unset",
                        fontSize: "16px",
                        lineHeight: "24px",
                        padding: "0px 4px",
                        color: "#666666",
                      }}
                      placeholder="Re-enter password"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={
                      Validate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Confirmation required
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={
                      ConfirmPasswordValidate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Confirmation required
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={
                      PasswordNotMatches
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Password not matches
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  mt: 3,
                }}
              >
                <Checkbox
                  onChange={(e) => SetCheck(e.target.checked)}
                  icon={
                    <CircleIcon
                      sx={{
                        border: "1px solid #A2A2A2",
                        borderRadius: "50%",
                        color: "white",
                        width: "16px",
                        height: "16px",
                        lineHeight: "24px",
                      }}
                    />
                  }
                  checkedIcon={
                    <CircleIcon
                      sx={{
                        border: "1px solid #C1C1C1",
                        borderRadius: "50%",
                        color: "#80ACF5",
                        width: "16px",
                        height: "16px",
                        lineHeight: "24px",
                      }}
                    />
                  }
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#666666",
                    textTransform: "capitalize",
                  }}
                  component="div"
                >
                  I agree to Terms of Services
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={
                    CheckBox
                      ? {
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "red",
                          textTransform: "capitalize",
                          fontWeight: 400,
                          textAlign: "start",
                        }
                      : { display: "none" }
                  }
                  gutterBottom
                  component="div"
                >
                  Please check Terms of service checkbox to proceed
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#666666",
                    textTransform: "capitalize",
                  }}
                  component="div"
                >
                  Already have an account?
                </Typography>
                <Button
                  onClick={() => setValue(1)}
                  variant="text"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#666666",
                  }}
                >
                  Login
                </Button>
              </Box>
              <Button
                onClick={() => SignUp()}
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "30px",
                  fontSize: "16px",
                  px: 4,
                  py: 1,
                  borderColor: "#A2A2A2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Sign Up
              </Button>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel style={{ width: "100%" }} value={value} index={1}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "28px",
                lineHeight: "32px",
                color: "#A2A2A2",
                textTransform: "capitalize",
                mt: 2,
              }}
              component="div"
            >
              Wellcome!
            </Typography>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                borderRadius: "30px",
                fontSize: "16px",
                px: 4,
                py: 1,
                mt: 3,
                borderColor: "#A2A2A2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "270px",
              }}
            >
              <GoogleIcon sx={{ mr: 1 }} />
              Signup with Google
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                borderRadius: "30px",
                fontSize: "16px",
                px: 4,
                py: 1,
                mt: 1,
                borderColor: "#A2A2A2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "270px",
              }}
            >
              <FacebookIcon sx={{ mr: 1 }} />
              Signup with Facebook
            </Button>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 3,
              }}
            >
              <Box
                sx={{
                  width: "200px",
                  height: "1px",
                  backgroundColor: "#1976d2",
                }}
              ></Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "28px",
                  lineHeight: "32px",
                  color: "#A2A2A2",
                  textTransform: "capitalize",
                  mx: 1,
                }}
                component="div"
              >
                OR
              </Typography>
              <Box
                sx={{
                  width: "200px",
                  height: "1px",
                  backgroundColor: "#1976d2",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                width: {
                  md: "50%",
                  xs: "100%",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      lineHeight: "28px",
                      color: "#666666",
                      textTransform: "capitalize",
                      ml: {
                        sm: 2,
                      },
                    }}
                    gutterBottom
                    component="div"
                  >
                    Email or Username
                  </Typography>
                </Box>
                <Box
                  sx={
                    Validate
                      ? {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid red",
                          px: 1,
                        }
                      : {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid #666666",
                          px: 1,
                        }
                  }
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: {
                        sm: "5%",
                        xs: "10%",
                      },
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <MailOutlineIcon
                      sx={Validate ? { color: "red" } : { color: "#666666" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "92%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      onFocus={() => focus()}
                      value={Email}
                      onChange={(e) =>
                        setEmail(e.target.value.toLocaleLowerCase())
                      }
                      type="email"
                      style={{
                        width: "100%",
                        height: "100%",
                        outline: "none",
                        border: "unset",
                        fontSize: "16px",
                        lineHeight: "24px",
                        padding: "0px 4px",
                        color: "#666666",
                      }}
                      placeholder="Enter your email or username"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={
                      Validate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Email Address required
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={
                      EmailValidate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Email Address required
                  </Typography>
                </Box>
              </Box>
              <Box
                className="Input"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mt: 3,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      lineHeight: "28px",
                      color: "#666666",
                      textTransform: "capitalize",
                      ml: {
                        sm: 2,
                      },
                    }}
                    gutterBottom
                    component="div"
                  >
                    Password
                  </Typography>
                </Box>
                <Box
                  sx={
                    Validate
                      ? {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid red",
                          px: 1,
                        }
                      : {
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "20px",
                          border: "1px solid #666666",
                          px: 1,
                        }
                  }
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: {
                        sm: "5%",
                        xs: "10%",
                      },
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <LockOutlinedIcon
                      sx={Validate ? { color: "red" } : { color: "#666666" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "92%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      onFocus={() => focus()}
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="off"
                      type="password"
                      style={{
                        width: "100%",
                        height: "100%",
                        outline: "none",
                        border: "unset",
                        fontSize: "16px",
                        lineHeight: "24px",
                        padding: "0px 4px",
                        color: "#666666",
                      }}
                      placeholder="Enter your password"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={
                      Validate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Password required
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={
                      PasswordValidate
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Password required
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={
                      Auth
                        ? {
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "red",
                            textTransform: "capitalize",
                            fontWeight: 400,
                            ml: 2,
                            mt: 1,
                          }
                        : { display: "none" }
                    }
                    gutterBottom
                    component="div"
                  >
                    Invalid username or password
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#666666",
                    textTransform: "capitalize",
                  }}
                  component="div"
                >
                  have an account?
                </Typography>
                <Button
                  onClick={() => setValue(0)}
                  variant="text"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#666666",
                  }}
                >
                  Signup
                </Button>
              </Box>
              <Button
                onClick={() => Login()}
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "30px",
                  fontSize: "16px",
                  px: 4,
                  py: 1,
                  borderColor: "#A2A2A2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Button>
            </Box>
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
}

export default SwitchTabsForAuthView;
