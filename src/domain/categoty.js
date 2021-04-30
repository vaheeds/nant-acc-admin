import * as React from 'react';
import {
  Filter,
  List,
  Datagrid,
  TextField,
  NumberField,
  ArrayField,
  SingleFieldList,
  ChipField,
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  ReferenceField,
} from 'react-admin';

export const CategoryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="categoryName" />
      <TextField source="categoryType" />
      <NumberField source="hitCount" />
      <ReferenceField source="parent" reference="categories">
        <TextField source="categoryName" />
      </ReferenceField>
      <ArrayField source="children">
        <SingleFieldList>
          <ChipField source="hitCount" />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);

export const CategoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="categoryName" />
      <TextInput source="categoryType" />
      <NumberInput source="hitCount" />
      <TextInput source="parent" />
      <TextInput source="children" />
    </SimpleForm>
  </Edit>
);
