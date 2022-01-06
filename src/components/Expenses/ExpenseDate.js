import './ExpenseDate.css'

function ExpenseDate(props) {

  const enteredDate = new Date(props.date)
  const month = enteredDate.toLocaleString('en-US', { month: 'long' });
  const day = enteredDate.toLocaleString('en-US', { day: '2-digit' });
  const year = enteredDate.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{day}</div>
      <div className='expense-date__day'>{year}</div>
    </div>
  )
}

export default ExpenseDate;