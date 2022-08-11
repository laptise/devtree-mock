import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import Layout from "../components/layout";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FC } from "react";
import { Post, posts } from "../data/posts";

const SamplePost: FC<{ post: Post }> = ({ post }) => (
  <ListItemButton sx={{ display: "flex" }}>
    <ListItemText primary={post.title} />
    <Stack direction={"row"} spacing={2}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <FavoriteIcon fontSize={"small"} />
        <Typography variant="caption">{post.likes}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CommentIcon fontSize={"small"} />
        <Typography variant="caption">{post.comments.length || 0}</Typography>
      </Stack>
    </Stack>
  </ListItemButton>
);

const Home: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={2}>
        <Stack direction={"row"} alignItems="center" width={600} justifyContent="space-between">
          <Typography variant="h5">게시물</Typography>
          <Stack direction={"row"} spacing={1}>
            <Typography variant="body1">인기순</Typography>
            <Typography variant="body1">최신순</Typography>
            <Typography variant="body1">주목순</Typography>
          </Stack>
        </Stack>
        <Divider />
        <List>
          {posts.map((post) => (
            <SamplePost key={post.title} post={post} />
          ))}
        </List>
      </Stack>
    </Layout>
  );
};

export default Home;
