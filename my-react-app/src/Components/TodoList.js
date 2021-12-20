import cx from "classnames";
import { Component } from 'react';

export default class TodoList extends Component {

    state = { todoListItems: [], inputValue: '', remainingItemCount: 0, totalItemCount: 0, showWarningText: false }

    onInputValueChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    onAddButtonClick = () => {
        const isItemAlreadyExists = this.state.todoListItems.filter((item)=> {
            return item.label === this.state.inputValue;
        })[0];
        if (isItemAlreadyExists && this.state.inputValue) {
            this.setState({
                showWarningText: true,
            });
        } else if (this.state.inputValue) {
            this.setState({
                inputValue: '',
                showWarningText: false,
                remainingItemCount: this.state.remainingItemCount + 1,
                todoListItems: [...this.state.todoListItems, { id: ++this.state.totalItemCount, label: this.state.inputValue }]
            })
        }
    }

    onListItemClicked = (event) => {
        const tempList = this.state.todoListItems.map((item) => {
            if (item.id == event.target.id) {
                if (item.completed) {
                    this.setState({
                        remainingItemCount: this.state.remainingItemCount + 1
                    })
                } else {
                    this.setState({
                        remainingItemCount: this.state.remainingItemCount - 1
                    })
                }
                item.completed = !item.completed
            }
            return item
        });
        this.setState({
            todoListItems: tempList
        })
    }

    render() {
        return (<>
            <div className='vcc-todo-list'>
                <div>
                    <input type='text' onChange={this.onInputValueChange} name='inputValue' value={this.state.inputValue} />
                    <button onClick={this.onAddButtonClick}> Add </button>
                    {this.state.showWarningText ? <span>List item already exists in the list</span> :
                        <span>{this.state.remainingItemCount} remaining from {this.state.totalItemCount} </span>}
                </div>
                <div className='vcc-todo-list-item'>
                    <ul>
                        {this.state.todoListItems?.map(item => (
                            <li id={item.id} className={cx({ 'is-done': item.completed })} key={item.id} onClick={this.onListItemClicked}>{item.label}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <style>{`
                .is-done{
                    text-decoration: line-through
                }`}
            </style>
        </>
        )
    }
}