import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const formattedMonth = props.date.toLocaleString('en-US', {month: 'long'});
    const formattedDay = props.date.toLocaleString('en-US', {day: '2-digit'});
    const formattedYear = props.date.getFullYear();
    return (<div className="expense-date">
        <div className="expense-date__month">{formattedMonth}</div>
        <div className="expense-date__day">{formattedDay}</div>
        <div className="expense-date__year">{formattedYear}</div>
    </div>);
}
export default ExpenseDate;
