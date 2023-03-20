
// import { useState } from "react";
// import { Notif } from "./Notif";
// import { formatNumber, findAccount, transact, trim, capitalize } from "./Utils";

// export const ApplyLoan = (props) => {
//     const users = JSON.parse(localStorage.getItem('users'));
//     const setNotif = props.setNotif;
//     const notif = props.notif;
//     const [accounts, setAccounts] = useState(users);
//     const [selectedAccount, setSelectedAccount] = useState({balance: 0});
//     const [loanAmount, setLoanAmount] = useState(0);

//     const options = accounts.map(user => {
//         return <option value={user.number}>{user.fullname} #{user.number}</option>
//     });

//     const displayLoanAmount = (e) => {
//         setNotif(notif);
//         const selectedNumber = e.target.value;
        
//         for(const user of accounts) {
//             if(user.number === selectedNumber) {
//                 setSelectedAccount(user);
//                 break;
//             }
//         }
//     }

//     const onLoanAmountChange = (e) => {
//         const amount = formatNumber(trim(e.target.value));
//         setLoanAmount(amount);
//     }

//     const processLoanApplication = (e) => {
//         e.preventDefault();
//         const loanAmountValue = trim(e.target.elements.amount.value);
//         const loanTypeValue = e.target.elements.loanType.value;

//         if(loanAmountValue > 0 && loanTypeValue !== "0") {
//             for(const user of accounts) {
//                 if(user.number === loanTypeValue) {
//                     transact(user.number, loanAmountValue, 'loan', props.setUsers);
//                     setSelectedAccount(findAccount(user.number));
//                     setAccounts(JSON.parse(localStorage.getItem('users')));
//                     setLoanAmount(0);
//                     setNotif({message: `Loan application successful.`, style: 'success'});
//                     break;
//                 }
//             }
//         } 
//         else {
//             setNotif({message: `Loan application failed.`, style: 'danger'});
//         }
//     }

//     return (
//         <section id="main-content">
//             <form id="form" onSubmit={processLoanApplication}>
//                 <h1>Apply for Loan</h1>
//                 <Notif message={notif?.message} style={notif?.style} />
//                 <label>Loan Type</label>
//                 <select name="loanType" onChange={displayLoanAmount}>
//                     <option value="0">Select Loan Type</option>
//                     {options}
//                 </select>

//                 <label>Loan Amount Requested</label>
//                 <input type="text" className="right" value={formatNumber(selectedAccount.balance)} disabled />
                
//                 <div className="transfer-icon"><i className="bx bx-up-arrow-alt"></i></div>
//                 <label>Loan Amount</label> 
//                 <input type="text" name="amount" value={loanAmount} onChange={onLoanAmountChange} autoComplete="off" className="right big-input" />
//                 <button type="submit" className="btn">Apply</button>
//             </form>
//         </section>
//     )
// }

// import { useState } from "react";
// import { Notif } from "./Notif";
// import { formatNumber, findAccount, transact, trim, capitalize } from "./Utils";

// export const ApplyLoan = (props) => {
//     const users = JSON.parse(localStorage.getItem('users'));
//     const setNotif = props.setNotif;
//     const notif = props.notif;
//     const [accounts, setAccounts] = useState(users);
//     const [selectedAccount, setSelectedAccount] = useState({balance: 0});
//     const [loanAmount, setLoanAmount] = useState(0);
//     const [applicantName, setApplicantName] = useState("");
//     const [guarantorId, setGuarantorId] = useState("");
//     const [duration, setDuration] = useState(0);
      
//       const loanTypes = [
//         { value: "housing", label: "Housing Loan" },
//         { value: "education", label: "Educational Loan" },
//         { value: "gold", label: "Gold Loan" },
//         { value: "personal", label: "Personal Loan" },
//         { value: "vehicle", label: "Vehicle Loan" },
//         { value: "others", label: "Other Loans" },
//       ];
      
//       const loanTypeOptions = loanTypes.map((loanType) => (
//         <option value={loanType.value} key={loanType.value}>
//           {loanType.label}
//         </option>
//       ));
//       const [loanType, setLoanType] = useState("");
//       const [loanAmountRequested, setLoanAmountRequested] = useState(0);

//       const displayLoanType = (e) => {
//         setNotif(notif);
//         const selectedType = e.target.value;
//         setLoanType(selectedType);
//       };
      
//       const onLoanAmountRequestedChange = (e) => {
//         const amount = formatNumber(trim(e.target.value));
//         setLoanAmountRequested(amount);
//       };
      
//     const displayLoanAmount = (e) => {
//         setNotif(notif);
//         const selectedNumber = e.target.value;
        
//         for(const user of accounts) {
//             if(user.number === selectedNumber) {
//                 setSelectedAccount(user);
//                 break;
//             }
//         }
//     }

//     const onLoanAmountChange = (e) => {
//         const amount = formatNumber(trim(e.target.value));
//         setLoanAmount(amount);
//     }

//     const onApplicantNameChange = (e) => {
//         const name = capitalize(trim(e.target.value));
//         setApplicantName(name);
//     }

//     const onGuarantorIdChange = (e) => {
//         const id = trim(e.target.value);
//         setGuarantorId(id);
//     }

//     const onDurationChange = (e) => {
//         const duration = parseInt(trim(e.target.value));
//         setDuration(duration);
//     }

//     const processLoanApplication = (e) => {
//         e.preventDefault();
//         const loanAmountValue = trim(e.target.elements.amount.value);
//         const loanTypeValue = e.target.elements.loanType.value;

//         if(loanAmountValue > 0 && loanTypeValue !== "0" && applicantName !== "" && guarantorId !== "" && duration > 0) {
//             for(const user of accounts) {
//                 if(user.number === loanTypeValue) {
//                     transact(user.number, loanAmountValue, 'loan', props.setUsers);
//                     setSelectedAccount(findAccount(user.number));
//                     setAccounts(JSON.parse(localStorage.getItem('users')));
//                     setLoanAmount(0);
//                     setApplicantName("");
//                     setGuarantorId("");
//                     setDuration(0);
//                     setNotif({message: `Loan application successful.`, style: 'success'});
//                     break;
//                 }
//             }
//         } 
//         else {
//             setNotif({message: `Loan application failed. Please fill in all required fields.`, style: 'danger'});
//         }
//     }

//     return (
//         <section id="main-content">
//             <form id="form" onSubmit={processLoanApplication}>
//                 <h1>Apply for Loan</h1>
//                 <Notif message={notif?.message} style={notif?.style} />
//                 <label>Loan Type</label>
//                 <select name="loanType" onChange={displayLoanType}>
//                     <option value="0">Select Loan Type</option>
//                     {loanTypeOptions}
//                 </select>
//                         {loanType !== "" && (
//         <>
//             <label>Loan Amount Requested ({capitalize(loanType)} Loan)</label>
//             <input
//             type="text"
//             name="amountRequested"
//             value={loanAmountRequested}
//             onChange={onLoanAmountRequestedChange}
//             autoComplete="off"
//             className="right big-input"
//             />
//         </>
//         )}
            
//                  <label>Total Loan Amount Requested</label> 
//                  <input type="text" name="amount" value={displayLoanAmount} onChange={displayLoanAmount} autoComplete="off" className="right big-input" />
//                  <button type="submit" className="btn">Apply</button>
//              </form>
//          </section>
//      )
//  }


import { useState } from "react";
import { Notif } from "./Notif";
import { formatNumber, findAccount, transact, trim, capitalize } from "./Utils";

export const ApplyLoan = (props) => {
  const users = JSON.parse(localStorage.getItem('users'));
  const setNotif = props.setNotif;
  const notif = props.notif;
  const [accounts, setAccounts] = useState(users);
  const [selectedAccount, setSelectedAccount] = useState({balance: 0});
  const [loanTerms, setLoanTerms] = useState("");
  const [loanAmount, setLoanAmount] = useState(0);

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

  const onLoanAmountChange = (e) => {
    const amount = formatNumber(trim(e.target.value));
    setLoanAmount(amount);
  }

  const processLoanApplication = (e) => {
    e.preventDefault();
    const amount = trim(e.target.elements.amount.value);
    const accountNumber = e.target.elements.account.value;
  
    if(amount > 0 && accountNumber !== "0") {
      for(const user of accounts) {
        if(user.number === accountNumber) {
          const transaction = { 
            accountNumber: user.number, 
            amount: amount, 
            type: props.type,
            loanTerms: loanTerms // add loan terms to the transaction data
          };
          //transact(transaction, props.setUsers);
          setSelectedAccount(findAccount(user.number));
          setAccounts(JSON.parse(localStorage.getItem('users')));
          setLoanAmount(0);
          setLoanTerms(""); // reset loan terms
          setNotif({message: `Loan application submitted successfully.`, style: 'success'});
          break;
        }
      }
    } 
    else {
      setNotif({message: `Loan application failed.`, style: 'danger'});
    }
  }
  

  return (
    <section id="main-content">
      <form id="form" onSubmit={processLoanApplication}>
        <h1>Apply Loan</h1>
        <Notif message={notif?.message} style={notif?.style} />
        
        <label>Select Account</label>
        <select name="account" onChange={displayBalance}>
          <option value="0">Select Account</option>
          {options}
        </select>

        <div className="balance">
          <label>Account Balance:</label>
          <input type="text" className="right" value={formatNumber(selectedAccount.balance)} disabled />
        </div>

        <div className="loan-amount">
          <label>Loan Amount:</label> 
          <input type="text" name="amount" value={loanAmount} onChange={onLoanAmountChange} autoComplete="off" className="right big-input" />
        </div>

        <div className="loan-terms">
            <label>Loan Terms:</label>
       <input type="text" name="terms" value={loanTerms} onChange={(e) => setLoanTerms(e.target.value)} autoComplete="off" className="right big-input" />
       </div>
        <button type="submit" className="btn">Apply Loan</button>
      </form>
    </section>
  );
}
