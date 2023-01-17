import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../pages/_app";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Select from "@mui/material/Select";
import Link from "next/link";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import { Pie, defaults } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

function HomePage() {
  const { state, dispatch } = useContext(UserContext);
  const [startDate, setStartDate] = useState(new Date());

  const formateDate = (Date) => {
    var today = Date;
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    return today;
  };
  console.log(formateDate(startDate));

  const [RecentAddedTask, setRecentAddedTask] = useState([]);
  useEffect(() => {
    setRecentAddedTask(
      state
        .slice(0)
        .reverse()
        .map((element) => {
          return element;
        })
    );
  }, [state]);

  const [TaskTitle, setTaskTitle] = useState();
  const [Completed, setCompleted] = useState("no");
  const [TaskDes, setTaskDes] = useState();
  const setInputToIntialState = () => {
    setTaskTitle("");
    setCompleted("");
    setTaskDes("");
    setPriorty("");
  };

  const [Validate, SetValidate] = useState(false);

  const AddTask = () => {
    if (!TaskTitle || !TaskDes || !Priorty) {
      SetValidate(true);
      setTimeout(() => {
        SetValidate(false);
      }, 10000);
      return;
    }
    const NewTask = {
      Task: TaskTitle.trim().toLowerCase(),
      Priorty: Priorty.trim().toLowerCase(),
      Date: formateDate(startDate),
      isCompleted: Completed,
      des: TaskDes.trim().toLowerCase(),
    };

    dispatch({ type: "AddTask", payload: { NewTask, state } });
    setInputToIntialState();
  };

  const MarkComplete = (index) => {
    dispatch({
      type: "MarkComplete",
      payload: {
        index,
        state,
      },
    });
  };
  const DeleteTask = (index) => {
    dispatch({
      type: "DeleteTask",
      payload: {
        index,
        state,
      },
    });
  };

  const CompletedTask = () => {
    var tasks = 0;
    state.map((list) => {
      if (list.isCompleted === "yes") {
        tasks = tasks + 1;
      }
    });
    return tasks;
  };

  const PendingTask = () => {
    var tasks = 0;
    state.map((list) => {
      if (list.isCompleted === "no") {
        tasks = tasks + 1;
      }
    });
    return tasks;
  };

  const [Priorty, setPriorty] = React.useState("");

  const handleChange = (event) => {
    setPriorty(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
          borderRadius: "50px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.05)",
          mb: 3,
          backgroundColor: "#1976d2",
        }}
      >
        <Link href={"/homepage"}>
          <a className="a">Homepage</a>
        </Link>
        <Link href={"/taskpage"}>
          <a className="a">Taskpage</a>
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
            backgroundColor: {
              md: "#1976d2",
              xs: "none",
            },
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
              color: {
                md: "white",
                xs: "#666666",
              },
              textTransform: "capitalize",
              fontWeight: 400,
              textAlign: "center",
              fontFamily: "Ubuntu",
            }}
            component="div"
          >
            welcome to task management system!
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              md: "50%",
              xs: "100%",
            },
            mt: 6,
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "column",
            px: 2,
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
                  fontFamily: "Ubuntu",
                }}
                gutterBottom
                component="div"
              >
                Task title
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                border: "1px solid #666666",
                px: 1,
              }}
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
                <AssignmentIcon sx={{ color: "#666666" }} />
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
                  value={TaskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
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
                  placeholder="Enter task title here..."
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
                        fontFamily: "Ubuntu",
                      }
                    : { display: "none" }
                }
                gutterBottom
                component="div"
              >
                Title is required
              </Typography>
            </Box>
          </Box>
          <Box
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
                  fontFamily: "Ubuntu",
                }}
                gutterBottom
                component="div"
              >
                Task priority
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormControl
                sx={{ borderRadius: "20px", height: "40px" }}
                fullWidth
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Priorty}
                  onChange={handleChange}
                  sx={{
                    borderRadius: "20px",
                    border: "unset",
                    height: "40px",
                  }}
                >
                  <MenuItem value={"highest"}>Highest</MenuItem>
                  <MenuItem value={"normal"}>Normal</MenuItem>
                  <MenuItem value={"low"}>Low</MenuItem>
                </Select>
              </FormControl>
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
                        fontFamily: "Ubuntu",
                      }
                    : { display: "none" }
                }
                gutterBottom
                component="div"
              >
                Selection is required
              </Typography>
            </Box>
          </Box>
          <Box
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
                  fontFamily: "Ubuntu",
                }}
                gutterBottom
                component="div"
              >
                Date
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DatePicker
                // dateFormat="dd/mm/yyyy "
                // selected={startDate}
                value={formateDate(startDate)}
                onChange={(date) => setStartDate(date)}
              />
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
                        fontFamily: "Ubuntu",
                      }
                    : { display: "none" }
                }
                gutterBottom
                component="div"
              >
                Selection is required
              </Typography>
            </Box>
          </Box>
          {/* <Box
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
                    fontFamily: "Ubuntu",
                  }}
                  gutterBottom
                  component="div"
                >
                  Completed?
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: {
                    sm: "row",
                    xs: "column",
                  },
                }}
              >
                <Button
                  onClick={() => setCompleted("yes")}
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
                    width: {
                      sm: "50%",
                      xs: "100%",
                    },
                    fontFamily: "Ubuntu",
                    mr: {
                      sm: 1,
                    },
                    boxShadow: "none",
                  }}
                >
                  <DoneOutlineIcon sx={{ mr: 1, fontSize: "18px" }} />
                  Yes
                </Button>
                <Button
                  onClick={() => setCompleted("no")}
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
                    width: {
                      sm: "50%",
                      xs: "100%",
                    },
                    fontFamily: "Ubuntu",
                    ml: {
                      sm: 1,
                    },
                    boxShadow: "none",
                    mt: {
                      sm: 0,
                      xs: 2,
                    },
                  }}
                >
                  <ClearIcon sx={{ mr: 1, fontSize: "18px" }} />
                  No
                </Button>
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
                          fontFamily: "Ubuntu",
                        }
                      : { display: "none" }
                  }
                  gutterBottom
                  component="div"
                >
                  Choose one
                </Typography>
              </Box>
            </Box> */}
          <Box
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
                  fontFamily: "Ubuntu",
                }}
                gutterBottom
                component="div"
              >
                Add description
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <textarea
                rows="8"
                required
                value={TaskDes}
                onChange={(e) => setTaskDes(e.target.value.toLowerCase())}
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
                  borderRadius: "20px",
                  border: "1px solid #666666",
                  padding: "10px",
                  resize: "vertical",
                }}
                placeholder="Enter description here.."
              />
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
                        fontFamily: "Ubuntu",
                      }
                    : { display: "none" }
                }
                gutterBottom
                component="div"
              >
                Description is required
              </Typography>
            </Box>
          </Box>
          <Button
            onClick={() => AddTask()}
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
              width: "50%",
              mt: 3,
              fontFamily: "Ubuntu",
            }}
          >
            <AddCircleOutlineIcon sx={{ mr: 1 }} />
            Add task
          </Button>
        </Box>
        <Box
          sx={{
            width: {
              md: "60%",
              xs: "100%",
            },
            px: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            flexDirection: "column",
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "32px",
              lineHeight: "40px",
              color: "#A2A2A2",
              textTransform: "capitalize",
              mt: 2,
              fontFamily: "Ubuntu",
            }}
            component="div"
          >
            Recent added tasks
          </Typography>
          {/* <ul>
            {state.map((list) => {
              return <li key={list.Task} >
                <Link href={`/tasklist/${list.Task}`}>
                  <a>{list.Task}</a>
                </Link>
              </li>
            })}
          </ul> */}
          <Box
            sx={{
              width: "100%",
              px: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 4,
              flexDirection: "column",
            }}
          >
            {RecentAddedTask.slice(0, 3).map((list, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link href={`/taskdetail/${list.Task}`}>
                    <a>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "18px",
                          lineHeight: "24px",
                          color: "#666666",
                          textTransform: "capitalize",
                          fontFamily: "Ubuntu",
                        }}
                        gutterBottom
                        component="div"
                      >
                        {list.Task}
                      </Typography>
                    </a>
                  </Link>
                  <Box>
                    <IconButton
                      aria-label="delete"
                      onClick={() => MarkComplete(index)}
                      size="medium"
                    >
                      <DoneIcon sx={{ fontSize: "30px", color: "green" }} />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => DeleteTask(index)}
                      size="medium"
                    >
                      <DeleteForeverIcon
                        sx={{ fontSize: "30px", color: "red" }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          width: {
            sm: "500px",
            xs: "300px",
          },
          height: {
            sm: "500px",
            xs: "300px",
          },
          mt: 8,
        }}
      >
        <Pie
          data={{
            labels: ["Completed", "Pending"],
            datasets: [
              {
                label: "Dataset",
                data: [CompletedTask(), PendingTask()],
                backgroundColor: ["lightgreen", "#1976d2"],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                // display: false
                position: "bottom",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default HomePage;
