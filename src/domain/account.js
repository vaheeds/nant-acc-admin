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
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';

const AccountFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search Accounts" source="accountName" alwaysOn />
  </Filter>
);

export const AccountList = (props) => (
  <List filters={<AccountFilter />} {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="initBalance" />
      <NumberField source="hitCount" />
      <TextField source="accountName" />
      <ArrayField source="tags">
        <SingleFieldList>
          <ChipField source="title" />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);

export const AccountEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput source="initBalance" />
      <NumberInput source="hitCount" />
      <TextInput source="accountName" />
      <ArrayInput source="tags">
        <SimpleFormIterator>
          {/* <ReferenceInput source="_id" reference="s">
            <SelectInput optionText="id" />
          </ReferenceInput> */}
          <TextInput source="title" />
          <TextInput source="color" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
