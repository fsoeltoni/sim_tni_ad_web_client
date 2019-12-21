import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Edit,
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import jenjang_kepangkatan from "../jenjang_kepangkatan";

const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  jenjang_kepangkatan: {
    source: jenjang_kepangkatan.identities.name + "_id",
    label: jenjang_kepangkatan.identities.label,
    reference: jenjang_kepangkatan.identities.name,
    sort: {
      field: jenjang_kepangkatan.fields.id.source,
      order: "ASC"
    }
  },
  nama: {
    source: "nama",
    label: "Nama"
  },
  kode: {
    source: "kode",
    label: "Kode"
  }
};

const PangkatCreate = props => (
  <Create {...props} {...components.create}>
    <SimpleForm variant="outlined" redirect="list">
      <ReferenceInput {...fields.jenjang_kepangkatan}>
        <SelectInput optionText={jenjang_kepangkatan.fields.nama.source} />
      </ReferenceInput>
      <TextInput {...fields.nama} />
      <TextInput {...fields.kode} />
    </SimpleForm>
  </Create>
);

const PangkatEdit = props => (
  <Edit {...props} {...components.edit}>
    <SimpleForm variant="outlined">
      <ReferenceInput {...fields.jenjang_kepangkatan}>
        <SelectInput optionText={jenjang_kepangkatan.fields.nama.source} />
      </ReferenceInput>
      <TextInput {...fields.nama} />
      <TextInput {...fields.kode} />
    </SimpleForm>
  </Edit>
);

const PangkatList = props => (
  <List {...props} {...components.list}>
    <Datagrid>
      <ReferenceField {...fields.jenjang_kepangkatan}>
        <TextField source={jenjang_kepangkatan.fields.nama.source} />
      </ReferenceField>
      <TextField {...fields.nama} />
      <TextField {...fields.kode} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

const identities = {
  name: "pangkat",
  options: {
    label: "Pangkat"
  },
  create: PangkatCreate,
  edit: PangkatEdit,
  list: PangkatList
};

const components = {
  create: {
    title: "Tambah " + identities.options.label
  },
  edit: {
    title: "Ubah " + identities.options.label
  },
  list: {
    title: "Daftar " + identities.options.label,
    sort: {
      field: fields.id.source,
      order: "ASC"
    }
  }
};

export default { identities, fields };
