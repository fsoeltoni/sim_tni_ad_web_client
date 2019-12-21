import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  Edit,
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";

const fields = {
  id: {
    source: "id",
    label: "Id"
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

const ProvinsiCreate = props => (
  <Create {...props} {...components.create}>
    <SimpleForm variant="outlined" redirect="list">
      <TextInput {...fields.nama} />
      <TextInput {...fields.kode} />
    </SimpleForm>
  </Create>
);

const ProvinsiEdit = props => (
  <Edit {...props} {...components.edit}>
    <SimpleForm variant="outlined">
      <TextInput {...fields.nama} />
      <TextInput {...fields.kode} />
    </SimpleForm>
  </Edit>
);

const ProvinsiList = props => (
  <List {...props} {...components.list}>
    <Datagrid>
      <TextField {...fields.nama} />
      <TextField {...fields.kode} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

const identities = {
  name: "provinsi",
  options: {
    label: "Provinsi"
  },
  create: ProvinsiCreate,
  edit: ProvinsiEdit,
  list: ProvinsiList
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
