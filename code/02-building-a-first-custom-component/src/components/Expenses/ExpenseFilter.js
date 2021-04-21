import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const expenseFilterHandler = (events) => {
        props.onChangeFilter(events.target.value);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selectedYear}  onChange={expenseFilterHandler}>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};
export default ExpenseFilter;
