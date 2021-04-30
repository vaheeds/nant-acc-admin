import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import dataProvider from './data/dataProvider';
import authProvider from './auth/authProvider';
import { AccountList, AccountEdit } from './domain/account';
import { CategoryList, CategoryEdit } from './domain/categoty';
import { TransactionList, TransactionEdit } from './domain/transaction';

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="accounts" list={AccountList} edit={AccountEdit} />
    <Resource name="categories" list={CategoryList} edit={CategoryEdit} />
    <Resource
      name="transactions"
      list={TransactionList}
      edit={TransactionEdit}
    />
  </Admin>
);

export default App;
