import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useTweets } from "./hooks/use-tweets";
import { TweetCard } from "./tweet-card";

export function TweetPage() {
  const { tweetId } = useParams();
  const tweets = useTweets();
  const tweet = tweets.find((tweet) => tweet.id === tweetId)!;

  return (
    <Box display="flex" justifyContent="center" width="100vw" paddingTop={6.25}>
      <Box width={649}>
        <TweetCard tweet={tweet} />
      </Box>
    </Box>
  );
}
