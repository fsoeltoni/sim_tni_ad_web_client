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
  }
};

const GolonganDarahCreate = props => (
  <Create {...props} {...components.create}>
    <SimpleForm variant="outlined" redirect="list">
      <TextInput {...fields.nama} />
    </SimpleForm>
  </Create>
);

const GolonganDarahEdit = props => (
  <Edit {...props} {...components.edit}>
    <SimpleForm variant="outlined">
      <TextInput {...fields.nama} />
    </SimpleForm>
  </Edit>
);

const GolonganDarahList = props => (
  <List {...props} {...components.list}>
    <Datagrid>
      <TextField {...fields.nama} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

const identities = {
  name: "golongan_darah",
  options: {
    label: "Golongan Darah"
  },
  create: GolonganDarahCreate,
  edit: GolonganDarahEdit,
  list: GolonganDarahList
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
