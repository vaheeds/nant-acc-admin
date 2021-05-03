import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import dataProvider from './data/dataProvider';
import authProvider from './auth/authProvider';
import { i18nProvider } from './i18n/i18n.farsi';
import { StylesProvider } from '@material-ui/core/styles';
import { theme, jss } from './theme/theme.rtl';
// Data Model Sections
import { AccountList, AccountEdit } from './domain/account';
import { CategoryList, CategoryEdit } from './domain/categoty';
import { TransactionList, TransactionEdit } from './domain/transaction';

// APP
const App = () => (
  <StylesProvider jss={jss}>
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      theme={theme}
    >
      <Resource name="accounts" list={AccountList} edit={AccountEdit} />
      <Resource name="categories" list={CategoryList} edit={CategoryEdit} />
      <Resource
        name="transactions"
        list={TransactionList}
        edit={TransactionEdit}
      />
      <Resource name="tags" list={ListGuesser} edit={EditGuesser} />
    </Admin>
  </StylesProvider>
);

export default App;
