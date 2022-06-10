import React from "react";
import type { FC } from "react";
import styles from "./header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.headerRoot}>
      <p className={styles.headerTitle}>سایت اطلاعات پرواز</p>
    </header>
  );
};

export default Header;
