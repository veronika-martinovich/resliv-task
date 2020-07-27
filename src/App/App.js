import React from "react";
import "./App.scss";
import { Header } from "../components/Header/Header";

export const App = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
