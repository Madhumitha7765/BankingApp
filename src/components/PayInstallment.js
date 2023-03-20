//import { useState } from "react";
//import { Notif } from "./Notif";
//import { formatNumber, findAccount, transact, trim, capitalize } from "./Utils";

// export const PayInstallment = (props) => {
//     const users = JSON.parse(localStorage.getItem('users'));
//     const setNotif = props.setNotif;
//     const notif = props.notif;
//     const [accounts, setAccounts] = useState(users);
//     const [selectedAccount, setSelectedAccount] = useState({balance: 0});
//     const [depositAmount, setDepositAmount] = useState(0);

//     const options = accounts.map(user => {
//         return <option value={user.number}>{user.fullname} #{user.number}</option>
//     });

//     const displayBalance = (e) => {
//         setNotif(notif);
//         const selectedNumber = e.target.value;
        
//         for(const user of accounts) {
//             if(user.number === selectedNumber) {
//                 setSelectedAccount(user);
//                 break;
//             }
//         }
//     }

//     const onDeposit = (e) => {
//         const amount = formatNumber(trim(e.target.value));
//         setDepositAmount(amount);
//     }

//     const processTransfer = (e) => {
//         e.preventDefault();
//         const amount = trim(e.target.elements.amount.value);
//         const accountNumber = e.target.elements.account.value;

//         if(amount > 0 && accountNumber !== "0") {
//             for(const user of accounts) {
//                 if(user.number === accountNumber) {
//                     transact(user.number, amount, props.type, props.setUsers);
//                     setSelectedAccount(findAccount(user.number));
//                     setAccounts(JSON.parse(localStorage.getItem('users')));
//                     setDepositAmount(0);
//                     setNotif({message: `${capitalize(props.page)} successful.`, style: 'success'});
//                     break;
//                 }
//             }
//         } 
//         else {
//             setNotif({message: `${capitalize(props.page)} failed.`, style: 'danger'});
//         }
//     }
//     // 'bx bx-up-arrow-alt'
//     const icon = props.page === 'withdraw' ? 'bx bx-down-arrow-alt' : 'bx bx-up-arrow-alt';

//     return (
//         <section id="main-content">
//             <form id="form" onSubmit={processTransfer}>
//                 <h1>{props.page}</h1>
//                 <Notif message={notif?.message} style={notif?.style} />
//                 <label>ApplyLoan</label>
//                 <select name="account" onChange={displayBalance}>
//                     <option value="0">Select Loan Type</option>
//                     {options}
//                 </select>

//                 <label>Loan amount requested is </label>
//                 <input type="text" className="right" value={formatNumber(selectedAccount.balance)} disabled />
                
//                 <div className="transfer-icon"><i className={icon}></i></div>
//                 <label>Loan amount </label> 
//                 <input type="text" name="amount" value={depositAmount} onChange={onDeposit} autoComplete="off" className="right big-input" />
//                 <button type="submit" className="btn">{props.page}</button>
//             </form>
//         </section>
//     )
// }



// import { useState } from "react";
// import { Notif } from "./Notif";
// import { formatNumber, findAccount, transact, trim, capitalize } from "./Utils";

// export const PayInstallment = (props) => {
//   const users = JSON.parse(localStorage.getItem('users'));
//   const setNotif = props.setNotif;
//   const notif = props.notif;
//   const [accounts, setAccounts] = useState(users);
//   const [selectedAccount, setSelectedAccount] = useState({balance: 0});
//   const [depositAmount, setDepositAmount] = useState(0);

//   const loanAccountOptions = accounts.map(user => {
//     return <option value={user.number}>{user.fullname} #{user.number} - Loan Balance: {formatNumber(user.loanBalance)}</option>
//   });

//   const displayBalance = (e) => {
//     setNotif(notif);
//     const selectedNumber = e.target.value;

//     for(const user of accounts) {
//       if(user.number === selectedNumber) {
//         setSelectedAccount(user);
//         break;
//       }
//     }
//   }

//   const onDeposit = (e) => {
//     const amount = formatNumber(trim(e.target.value));
//     setDepositAmount(amount);
//   }

//   const processTransfer = (e) => {
//     e.preventDefault();
//     const amount = trim(e.target.elements.amount.value);
//     const accountNumber = e.target.elements.account.value;

//     if(amount > 0 && accountNumber !== "0") {
//       for(const user of accounts) {
//         if(user.number === accountNumber) {
//           const installmentAmount = parseFloat(amount);
//           const newLoanBalance = user.loanBalance - installmentAmount;
//           if(newLoanBalance < 0) {
//             setNotif({message: `Invalid installment amount.`, style: 'danger'});
//           } else {
//             transact(user.number, installmentAmount, props.type, props.setUsers);
//             user.loanBalance = newLoanBalance;
//             setSelectedAccount(user);
//             setAccounts(JSON.parse(localStorage.getItem('users')));
//             setDepositAmount(0);
//             setNotif({message: `Installment paid successfully.`, style: 'success'});
//           }
//           break;
//         }
//       }
//     } 
//     else {
//       setNotif({message: `Failed to pay installment.`, style: 'danger'});
//     }
//   }
//   // 'bx bx-up-arrow-alt'
//   const icon = 'bx bx-up-arrow-alt';

//   return (
//     <section id="main-content">
//       <form id="form" onSubmit={processTransfer}>
//         <h1>{props.page}</h1>
//         <Notif message={notif?.message} style={notif?.style} />
        
//         <label>Select Loan Type</label>
//         <select name="account" onChange={displayBalance}>
//           <option value="0">Select Loan Type</option>
//           {loanAccountOptions}
//         </select>
  
//         <div className="balance">
//           <label>Outstanding Loan Amount:</label>
//           <input type="text" className="right" value={formatNumber(selectedAccount.balance)} disabled />
//         </div>
  
//         <div className="transfer-amount">
//           <label>Installment Amount:</label> 
//           <input type="text" name="amount" value={depositAmount} onChange={onDeposit} autoComplete="off" className="right big-input" />
//         </div>
  
//         <button type="submit" className="btn">{props.page}</button>
//       </form>
//     </section>
//   );
//   }  
import { useState } from "react";
import { Notif } from "./Notif";
import { formatNumber, findAccount, transact, trim, capitalize } from "./Utils";

export const PayInstallment = (props) => {
  const users = JSON.parse(localStorage.getItem('users'));
  const setNotif = props.setNotif;
  const notif = props.notif;
  const [accounts, setAccounts] = useState(users);
  const [selectedAccount, setSelectedAccount] = useState({balance: 0});
  const [installmentAmount, setInstallmentAmount] = useState(0);

  const options = accounts.map(user => {
    return <option value={user.number}>{user.fullname} #{user.number}</option>
  });

  const displayBalance = (e) => {
    setNotif(notif);
    const selectedNumber = e.target.value;
    
    for(const user of accounts) {
      if(user.number === selectedNumber) {
        setSelectedAccount(user);
        break;
      }
    }
  }

  const onInstallmentAmountChange = (e) => {
    const amount = formatNumber(trim(e.target.value));
    setInstallmentAmount(amount);
  }

  const processInstallmentPayment = (e) => {
    e.preventDefault();
    const amount = trim(e.target.elements.amount.value);
    const accountNumber = e.target.elements.account.value;

    if(amount > 0 && accountNumber !== "0") {
      for(const user of accounts) {
        if(user.number === accountNumber) {
          transact(user.number, amount, 'installment payment', props.setUsers);
          setSelectedAccount(findAccount(user.number));
          setAccounts(JSON.parse(localStorage.getItem('users')));
          setInstallmentAmount(0);
          setNotif({message: `Installment payment successful.`, style: 'success'});
          break;
        }
      }
    } 
    else {
      setNotif({message: `Installment payment failed.`, style: 'danger'});
    }
  }

  return (
    <section id="main-content">
      <form id="form" onSubmit={processInstallmentPayment}>
        <h1>Pay Installments</h1>
        <Notif message={notif?.message} style={notif?.style} />
        
        <label>Select Account</label>
        <select name="account" onChange={displayBalance}>
          <option value="0">Select Account</option>
          {options}
        </select>

        <div className="balance">
          <label>Loan Balance to be paid:</label>
          <input type="text" className="right" value={formatNumber(selectedAccount.balance)} disabled />
        </div>

        <div className="installment-amount">
          <label>Installment Amount:</label> 
          <input type="text" name="amount" value={installmentAmount} onChange={onInstallmentAmountChange} autoComplete="off" className="right big-input" />
        </div>

        <button type="submit" className="btn">Pay Installment</button>
      </form>
    </section>
  );
}
