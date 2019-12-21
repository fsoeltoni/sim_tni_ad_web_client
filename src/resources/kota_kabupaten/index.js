import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Edit,
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import provinsi from "../provinsi";
import jenis_kota_kabupaten from "../jenis_kota_kabupaten";

const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  provinsi: {
    source: provinsi.identities.name + "_id",
    label: provinsi.identities.label,
    reference: provinsi.identities.name,
    sort: {
      field: provinsi.fields.id.source,
      order: "ASC"
    }
  },
  jenis_kota_kabupaten: {
    source: jenis_kota_kabupaten.identities.name + "_id",
    label: jenis_kota_kabupaten.identities.label,
    reference: jenis_kota_kabupaten.identities.name,
    sort: {
      field: jenis_kota_kabupaten.fields.id.source,
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

const KotaKabupatenCreate = props => (
  <Create {...props} {...components.create}>
    <SimpleForm variant="outlined" redirect="list">
      <ReferenceInput {...fields.provinsi}>
        <SelectInput optionText={provinsi.fields.kode.source} />
      </ReferenceInput>
      <ReferenceInput {...fields.jenis_kota_kabupaten}>
        <SelectInput optionText={jenis_kota_kabupaten.fields.nama.source} />
      </ReferenceInput>
      <TextInput {...fields.nama} />
      <TextInput {...fields.kode} />
    </SimpleForm>
  </Create>
);

const KotaKabupatenEdit = props => (
  <Edit {...props} {...components.edit}>
    <SimpleForm variant="outlined">
      <ReferenceInput {...fields.provinsi}>
        <SelectInput optionText={provinsi.fields.kode.source} />
      </ReferenceInput>
      <ReferenceInput {...fields.jenis_kota_kabupaten}>
        <SelectInput optionText={jenis_kota_kabupaten.fields.nama.source} />
      </ReferenceInput>
      <TextInput {...fields.nama} />
      <TextInput {...fields.kode} />
    </SimpleForm>
  </Edit>
);

const KotaKabupatenList = props => (
  <List {...props} {...components.list}>
    <Datagrid>
      <ReferenceField {...fields.provinsi}>
        <TextField source={provinsi.fields.kode.source} />
      </ReferenceField>
      <ReferenceField {...fields.jenis_kota_kabupaten}>
        <TextField source={jenis_kota_kabupaten.fields.nama.source} />
      </ReferenceField>
      <TextField {...fields.nama} />
      <TextField {...fields.kode} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

const identities = {
  name: "kota_kabupaten",
  options: {
    label: "Kota/Kabupaten"
  },
  create: KotaKabupatenCreate,
  edit: KotaKabupatenEdit,
  list: KotaKabupatenList
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
