import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { AccountList, AccountEdit } from './domain/account';
import dataProvider from './data/dataProvider';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="accounts" list={AccountList} edit={AccountEdit} />
    <Resource name="categories" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default App;
