// MUI
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";

// Icons
import SettingsIcon from "@mui/icons-material/Settings";

export const UserInfoPage = () => {
  return (
    <Container>
      <Box sx={{ minHeight: "80vh" }}>
        <Stack
          sx={{
            gap: "3rem",
            display: "flex",
            flexDirection: { xs: "colum", md: "row" },
            pt: 5,
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Paper
            sx={{
              width: { xs: "80%", md: 300 },
              height: { xs: 180, md: 200 },
            }}
            elevation={10}
          >
            <Stack
              sx={{
                direction: "colum",
                justifyContent: "center",
                alignItems: "center",
                py: 2,
                width: "100%",
              }}
            >
              <Stack direction={"row"} sx={{ width: "80%" }}>
                <List
                  sx={{
                    width: "100%",
                  }}
                >
                  <ListItem>
                    <SettingsIcon color="primary" sx={{ marginRight: 1 }} />
                    <Typography>{"Manage account"}</Typography>
                  </ListItem>

                  <Divider />

                  <ListItem button>
                    <Box sx={{ marginRight: 4 }}></Box>
                    <Typography>{"Account details"}</Typography>
                  </ListItem>
                </List>
              </Stack>
            </Stack>
          </Paper>

          <Paper
            sx={{
              minWidth: { xs: "80%", md: 500 },
              minHeight: { xs: 300, md: 400 },
            }}
            elevation={10}
          >
            <Stack
              sx={{
                direction: "colum",
                justifyContent: "center",
                alignItems: "center",
                py: 2,
                width: "100%",
              }}
            >
              <Stack
                sx={{ display: "flex", flexDirection: "row", width: "80%" }}
              >
                <SettingsIcon color="secondary" sx={{ marginRight: 1 }} />
                <Typography>{"Manage account"}</Typography>
              </Stack>

              <Stack
                sx={{
                  direction: "colum",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  py: 4,
                  width: "80%",
                }}
              >
                <TextField
                  id="user_name"
                  label="User Name"
                  name="user_name"
                  variant="outlined"
                  fullWidth
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => {
                    console.log(e);
                  }}
                />
                <TextField
                  id="full_name"
                  label="Full Name"
                  name="full_name"
                  variant="outlined"
                  fullWidth
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => {
                    console.log(e);
                  }}
                />
                <TextField
                  id="email"
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  fullWidth
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => {
                    console.log(e);
                  }}
                />
                <Button variant="contained" fullWidth>
                  Save
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
};
