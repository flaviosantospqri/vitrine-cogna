"use client";
import React from "react";
import styles from "./style.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer} role="status" aria-live="polite">
      <div className={styles.spinner}></div>
      <span className="sr-only">Carregando...</span>
    </div>
  );
};

export default Spinner;
