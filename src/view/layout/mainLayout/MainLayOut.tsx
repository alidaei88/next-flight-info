import React from "react";
import type { FC, ReactNode } from "react";
import Header from "view/modules/header/Header";
import styles from "./mainLayout.module.css";
import Footer from "view/modules/footer/Footer";

interface MainLayOutProps {
  children: ReactNode;
}
const MainLayOut: FC<MainLayOutProps> = ({ children }) => {
  return (
    <main className={styles.mailLayoutRoot}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayOut;
