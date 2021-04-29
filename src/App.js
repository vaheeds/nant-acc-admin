import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import apiEndpoint from './config';
import { AccountList, AccountEdit } from './domain/account';
const dataProvider = jsonServerProvider(apiEndpoint);
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="accounts" list={AccountList} edit={AccountEdit} />
    <Resource name="categories" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default App;
