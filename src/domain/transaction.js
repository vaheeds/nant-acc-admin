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
  ArrayField,
  SingleFieldList,
  ChipField,
  ArrayInput,
  SimpleFormIterator,
  ReferenceField,
} from 'react-admin';

export const TransactionList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <DateField source="date" />
      <ReferenceField
        label="پرداخت کننده"
        source="fromAccount"
        reference="accounts"
      >
        <TextField source="accountName" />
      </ReferenceField>
      <ReferenceField
        label="دریافت کننده"
        source="toAccount"
        reference="accounts"
      >
        <TextField source="accountName" />
      </ReferenceField>
      <NumberField source="amount" />
      <TextField source="descr" />
      <ReferenceField label="گروه" source="category" reference="categories">
        <TextField source="categoryName" />
      </ReferenceField>
      <NumberField source="remaining" />
      <ArrayField source="tags">
        <SingleFieldList>
          <ChipField source="title" color="red" />
        </SingleFieldList>
      </ArrayField>
      <TextField source="categoryType" />
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
      <ArrayInput source="tags">
        <SimpleFormIterator>
          <ReferenceInput source="_id" reference="s">
            <SelectInput optionText="id" />
          </ReferenceInput>
          <TextInput source="title" />
          <TextInput source="color" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="fromAccountName" />
      <TextInput source="toAccountName" />
      <TextInput source="categoryName" />
      <TextInput source="categoryType" />
      <NumberInput source="remaining" />
      <TextInput source="id" />
    </SimpleForm>
  </Edit>
);
