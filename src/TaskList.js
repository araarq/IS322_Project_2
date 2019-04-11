import React from 'react';

import TaskItem from './TaskItem';
import TaskItem2 from './Taskitem2';
import TaskItem3 from './Tastitem3';


class TaskList extends React.Component {
    constructor(props) { // Inside of a class we don't need the function keyword or a fat arrow.
        super(props); // Send props to it's superclass React.Component

        this.state = { // Need to set an inital State... more on this later.
            FilteredTasks:props.tasks
        };
    }

    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        task.column="done"
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }
    markInProgress = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        task.column="in-progress"
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }

    markToDo = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        task.column="todo"
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }

    render() {
        const taskItems = this.props.tasks.map(task => {
            if(task.column=="done")
            return <TaskItem task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markInProgress={this.markInProgress}


            />
        });
        const taskItems2 = this.props.tasks.map(task => {
            if(task.column=="in-progress")
            return <TaskItem2 task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markInProgress={this.markInProgress}/>
        });

        const taskItems3 = this.props.tasks.map(task => {
            if(task.column=="todo")
                return <TaskItem3 task={task} key={task.id} markToDo={this.markToDo} markDone={this.markDone} markInProgress={this.markInProgress}/>
        });

        return (
            <ul className="task-list list-group">
                {"Done"}
                {taskItems}
                {"In Progress"}
                {taskItems2}
                {'To Do'}
                {taskItems3}

            </ul>


        )

    }

}

export default TaskList;
