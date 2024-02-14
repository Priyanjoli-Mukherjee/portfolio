import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import "./app.css";
import { getTweets } from "./get-tweets";
import { formatDate } from "./date-utils/format-date";

export function App() {
  const tweets = useMemo(() => getTweets(), []);

  return (
    <Box width={665}>
      <Box
        display="flex"
        padding={1}
        marginLeft={1}
        marginRight={1}
        paddingTop={2}
        paddingBottom={2}
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid lightgrey",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 900, color: "black" }}>
          Home
        </Typography>
      </Box>
      <Box
        display="flex"
        padding={1}
        height={70}
        marginLeft={1}
        marginRight={1}
        style={{
          backgroundColor: "white",
          borderBottom: "10px solid lightgrey",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 500, color: "lightgrey" }}>
          What's Happening?
        </Typography>
      </Box>
      {tweets.map((ele) => (
        <Box
          key={ele.id}
          marginLeft={1}
          marginRight={1}
          marginBottom={1}
          style={{ backgroundColor: "white" }}
        >
          <Box display="flex" alignItems="center" paddingLeft={1}>
            <Box color="black">
              <Typography variant="body1" sx={{ fontWeight: 900 }}>
                {ele.name}
              </Typography>
            </Box>
            <Box color="black" paddingLeft={2}>
              <Typography variant="body1">{ele.twitterHandle}</Typography>
            </Box>
            <Box color="black" paddingLeft={2}>
              <Typography variant="body1">{formatDate(ele.time)}</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            textAlign="start"
            color="black"
            paddingLeft={1}
            paddingRight={1}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="body2">{ele.message}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
