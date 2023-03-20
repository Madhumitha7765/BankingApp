import React, {useState} from 'react';
import { Sidebar } from './Sidebar';
import { MainClientContent } from './MainClientContent';
import { findAccount } from './Utils';
import { TransferPage } from './TransferPage';
//  import { BudgetApp } from './BudgetApp';
import { TransactPage } from "./TransactPage";
import { ApplyLoan } from "./ApplyLoan";
import { PayInstallment } from "./PayInstallment";

export const ClientDashboard = (props) => {
    const { logout, client, setClient } = props;
    const [users, setUsers] = useState(props.users);
    const [ page, setPage ] = useState('home');
    const [notif, setNotif] = useState({message: '', style: ''});
  
    const changePageHandler = (pageName) => {
      setPage(pageName);
      const currentUser = findAccount(client.number);
      setClient(currentUser);
    }
  
    if(page === 'home') {
      
      return (
        <main>
          <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
          <MainClientContent user={client} />
        </main>
      )
    }
  
    
  
    if(page === 'transfer') {
      return (
        <main>
          <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
          <TransferPage isClient="true" client={client} setClient={setClient} users={users} setUsers={setUsers}  />
        </main>
      )
    }

    if(page === 'withdraw') {
      return (
        <main>
          <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
          <TransactPage users={users} setUsers={setUsers} notif={notif} setNotif={setNotif} type="subtract" page={page} />
        </main>
      )
    }

    if(page === 'deposit') {
      return (
        <main>
          <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
          <TransactPage users={users} setUsers={setUsers} notif={notif} setNotif={setNotif} type="add" page={page} />
        </main>
      )
    }

    if(page === 'applyloan') {
      return (
        <main>
          <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
          <ApplyLoan isClient="true" setUsers={setUsers} notif={notif} setNotif={setNotif} type="add" page={page}  />
          {/* <Test></Test> */}
        </main>
      )
    }

    if(page === 'payinstallment') {
      return (
        <main>
          <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
          <PayInstallment isClient="true" setUsers={setUsers} notif={notif} setNotif={setNotif} type="add" page={page}  />
        </main>
      )
    }
}
