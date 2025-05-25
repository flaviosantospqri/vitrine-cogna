import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const Skeleton = () => {
  return (
    <article
      className={styles.container}
      aria-hidden="true"
      role="presentation"
    >
      <p className={styles.image}></p>
      <p className={styles.title}></p>
      <p className={styles.price}></p>
      <p className={styles.button}></p>
    </article>
  );
};

export default Skeleton;
