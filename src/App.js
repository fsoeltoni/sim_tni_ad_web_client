import React from "react";
import { Admin, Resource } from "react-admin";
import attrs from "./providers/attrs";
import data from "./providers/data";
import jenjang_kepangkatan from "./resources/jenjang_kepangkatan";

const App = () => (
  <Admin title={attrs.title} dataProvider={data}>
    <Resource {...jenjang_kepangkatan.identities} />
  </Admin>
);

export default App;
