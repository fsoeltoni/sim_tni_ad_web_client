import React from "react";
import { Admin, Resource } from "react-admin";
import attrs from "./providers/attrs";
import data from "./providers/data";
import jenjang_kepangkatan from "./resources/jenjang_kepangkatan";
import pangkat from "./resources/pangkat";
import kecabangan from "./resources/kecabangan";
import korps from "./resources/korps";
import provinsi from "./resources/provinsi";
import jenis_kota_kabupaten from "./resources/jenis_kota_kabupaten";
import kota_kabupaten from "./resources/kota_kabupaten";
import golongan_darah from "./resources/golongan_darah";
import jenis_personel from "./resources/jenis_personel";
import golongan_sim from "./resources/golongan_sim";
import jenis_pengajuan_sim from "./resources/jenis_pengajuan_sim";

const App = () => (
  <Admin title={attrs.title} dataProvider={data}>
    <Resource {...jenis_pengajuan_sim.identities} />
    <Resource {...golongan_sim.identities} />
    <Resource {...jenis_personel.identities} />
    <Resource {...golongan_darah.identities} />
    <Resource {...kota_kabupaten.identities} />
    <Resource {...jenis_kota_kabupaten.identities} />
    <Resource {...provinsi.identities} />
    <Resource {...korps.identities} />
    <Resource {...kecabangan.identities} />
    <Resource {...pangkat.identities} />
    <Resource {...jenjang_kepangkatan.identities} />
  </Admin>
);

export default App;
