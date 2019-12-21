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
import kecabangan from "../kecabangan";

const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  kecabangan: {
    source: kecabangan.identities.name + "_id",
    label: kecabangan.identities.label,
    reference: kecabangan.identities.name,
    sort: {
      field: kecabangan.fields.id.source,
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

const KorpsCreate = props => (
  <Create {...props} {...components.create}>
    <SimpleForm variant="outlined" redirect="list">
      <ReferenceInput {...fields.kecabangan}>
        <SelectInput optionText={kecabangan.fields.nama.source} />
      </ReferenceInput>
      <TextInput {...fields.nama} />
      <TextInput {...fields.kode} />
    </SimpleForm>
  </Create>
);

const KorpsEdit = props => (
  <Edit {...props} {...components.edit}>
    <SimpleForm variant="outlined">
      <ReferenceInput {...fields.kecabangan}>
        <SelectInput optionText={kecabangan.fields.nama.source} />
      </ReferenceInput>
      <TextInput {...fields.nama} />
      <TextInput {...fields.kode} />
    </SimpleForm>
  </Edit>
);

const KorpsList = props => (
  <List {...props} {...components.list}>
    <Datagrid>
      <ReferenceField {...fields.kecabangan}>
        <TextField source={kecabangan.fields.nama.source} />
      </ReferenceField>
      <TextField {...fields.nama} />
      <TextField {...fields.kode} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

const identities = {
  name: "korps",
  options: {
    label: "Korps"
  },
  create: KorpsCreate,
  edit: KorpsEdit,
  list: KorpsList
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
