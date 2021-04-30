import * as React from 'react';
import {
  Filter,
  List,
  Datagrid,
  TextField,
  NumberField,
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  DateField,
  ReferenceField,
} from 'react-admin';

export const TransactionList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="fromAccount" />
      <TextField source="category" />
      <DateField source="date" />
      <NumberField source="amount" />
      <TextField source="descr" />
      <ReferenceField source="tag._id" reference="tag.s">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="fromAccountName" />
      <TextField source="toAccountName" />
      <TextField source="categoryName" />
      <TextField source="categoryType" />
      <NumberField source="remaining" />
      <TextField source="id" />
    </Datagrid>
  </List>
);

export const TransactionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="fromAccount" />
      <TextInput source="category" />
      <DateInput source="date" />
      <NumberInput source="amount" />
      <TextInput source="descr" />
      <ReferenceInput source="tag._id" reference="tag.s">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="fromAccountName" />
      <TextInput source="toAccountName" />
      <TextInput source="categoryName" />
      <TextInput source="categoryType" />
      <NumberInput source="remaining" />
      <TextInput source="id" />
    </SimpleForm>
  </Edit>
);
