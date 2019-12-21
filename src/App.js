import React from "react";
import { Admin } from "react-admin";
import attrs from "./providers/attrs";
import data from "./providers/data";

const App = () => <Admin title={attrs.title} dataProvider={data} />;

export default App;
