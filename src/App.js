import React from "react";
import { Admin, Resource } from "react-admin";
import attrs from "./providers/attrs";
import data from "./providers/data";
import jenjang_kepangkatan from "./resources/jenjang_kepangkatan";
import pangkat from "./resources/pangkat";
import kecabangan from "./resources/kecabangan";

const App = () => (
  <Admin title={attrs.title} dataProvider={data}>
    <Resource {...kecabangan.identities} />
    <Resource {...pangkat.identities} />
    <Resource {...jenjang_kepangkatan.identities} />
  </Admin>
);

export default App;
