import { Avatar, Typography } from "@mui/material";
import Head from "next/head";
import { FC, ReactNode } from "react";
import styles from "../styles/Common.module.scss";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Typography sx={{ fontWeight: "bold", fontSize: 22 }} className={styles.title}>
          DEVTREE | 데브트리, 개발자의 지식이 공유되는곳{" "}
        </Typography>
        <Avatar />
      </header>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>DEVTREE</footer>
    </div>
  );
};

export default Layout;