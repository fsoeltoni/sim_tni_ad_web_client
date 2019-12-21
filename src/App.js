import React from "react";
import { Admin, Resource } from "react-admin";
import attrs from "./providers/attrs";
import data from "./providers/data";
import jenjang_kepangkatan from "./resources/jenjang_kepangkatan";
import pangkat from "./resources/pangkat";
import kecabangan from "./resources/kecabangan";
import korps from "./resources/korps";
import provinsi from "./resources/provinsi";

const App = () => (
  <Admin title={attrs.title} dataProvider={data}>
    <Resource {...provinsi.identities} />
    <Resource {...korps.identities} />
    <Resource {...kecabangan.identities} />
    <Resource {...pangkat.identities} />
    <Resource {...jenjang_kepangkatan.identities} />
  </Admin>
);

export default App;
