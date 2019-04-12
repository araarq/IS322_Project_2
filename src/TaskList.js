import React from 'react';

import TaskItem from './TaskItem';
import TaskItem2 from './Taskitem2';
import TaskItem3 from './Tastitem3';
import TaskItem4 from './TaskItem4';


class TaskList extends React.Component {

    constructor(props) { // Inside of a class we don't need the function keyword or a fat arrow.
        super(props); // Send props to it's superclass React.Component

        this.state = { // Need to set an initial State... more on this later.
            FilteredTasks:props.tasks
        };
    }

    markToDo = (task) => {
        let taskList = this.props.tasks;
        task.column="todo";
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    };

    markInProgress = (task) => {
        let taskList = this.props.tasks;
        task.column="in-progress";
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    };

    markReview = (task) => {
        let taskList = this.props.tasks;
        task.column="review";
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    };

    markDone = (task) => {
        let taskList = this.props.tasks;
        task.column="done";
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    };

    render() {
        const taskItems = this.props.tasks.map(task => {
            if(task.column === "done")
                return <TaskItem task={task} key={task.id} markToDo={this.markToDo}  markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone}/>
        });
        const taskItems2 = this.props.tasks.map(task => {
            if(task.column === "in-progress")
                return <TaskItem2 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone}/>
        });

        const taskItems4 = this.props.tasks.map(task => {
            if(task.column === "review")
                return <TaskItem4 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markDone={this.markDone} markDone={this.markDone}/>
        });

        const taskItems3 = this.props.tasks.map(task => {
            if(task.column === "todo")
                return <TaskItem3 task={task} key={task.id} markToDo={this.markToDo} markInProgress={this.markInProgress} markReview={this.markReview} markDone={this.markDone}/>
        });

        return (
            <ul className="task-list list-group">
                <h3>To Do</h3>
                {taskItems3}
                <h3>In Progress</h3>
                {taskItems2}
                <h3>Review</h3>
                {taskItems4}
                <h3>Done</h3>
                {taskItems}
            </ul>
        )
    }
}

export default TaskList;
