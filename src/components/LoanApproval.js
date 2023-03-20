import { useState } from "react";
import { Notif } from "./Notif";
import { formatNumber, findAccount, transact, trim, capitalize } from "./Utils";

export const LoanApproval = (props) => {
  const [loans, setLoans] = useState(JSON.parse(localStorage.getItem('loans')) || ["123345","aejfnjvn","45000",""]);
  const setNotif = props.setNotif;
  const notif = props.notif;

  const approveLoan = (loanId) => {
    const updatedLoans = loans.map((loan) => {
      if (loan.id === loanId) {
        loan.status = "approved";
      }
      return loan;
    });
    localStorage.setItem('loans', JSON.stringify(updatedLoans));
    setLoans(updatedLoans);
    setNotif({ message: "Loan application approved.", style: 'success' });
  }

  const rejectLoan = (loanId) => {
    const updatedLoans = loans.map((loan) => {
      if (loan.id === loanId) {
        loan.status = "rejected";
      }
      return loan;
    });
    localStorage.setItem('loans', JSON.stringify(updatedLoans));
    setLoans(updatedLoans);
    setNotif({ message: "Loan application rejected.", style: 'danger' });
  }

  const loanList = loans.map((loan) => {
    return (
      <div key={loan.id} className="loan">
        <div className="loan-info">
          <p>Loan ID: {loan.id}</p>
          <p>Account Number: {loan.accountNumber}</p>
          <p>Loan Amount: {formatNumber(loan.amount)}</p>
          <p>Loan Terms: {loan.loanTerms}</p>
        </div>
        <div className="loan-actions">
          {loan.status === "pending" && (
            <>
              <button className="btn btn-success" onClick={() => approveLoan(loan.id)}>Approve</button>
              <button className="btn btn-danger" onClick={() => rejectLoan(loan.id)}>Reject</button>
            </>
          )}
          {loan.status === "approved" && <span className="approved">Approved</span>}
          {loan.status === "rejected" && <span className="rejected">Rejected</span>}
        </div>
      </div>
    );
  });

  return (
    <section id="main-content">
      <h1>Loan Approval</h1>
      <Notif message={notif?.message} style={notif?.style} />
      {loanList.length > 0 ? loanList : <p>No loan applications.</p>}
    </section>
  );
}
