import React from 'react';
import axios from 'axios';

import GridView from './GridView';
import AddTaskView from './AddTaskView';
import NavBar from './NavBar';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.handleGridViewClick = this.handleGridViewClick.bind(this);
        this.handleAddTaskClick = this.handleAddTaskClick.bind(this);
        this.state = {view: "gridView", tasks: [], errorMessage: ''};
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response => {
                this.setState({ tasks: response.data });
            }).catch(error => {
            this.setState({ errorMessage: error.message });
        });
    }

    handleGridViewClick () {
        this.setState({ view: "gridView"});
    }

    handleAddTaskClick () {
        this.setState({ view: "addTaskView"});
    }

    onAddTask = (taskName) => {
        let tasks = this.state.tasks;
        tasks.push({
            title: taskName,
            id: this.state.tasks.length + 1,
            type: 'task',
            column: 'todo'
        });

        this.setState({ tasks });
    };

    onUpdateTaskList = (newTaskList) => {
        this.setState({ tasks: newTaskList });
    };

    render() {
        let view;

        if (this.state.view === "gridView") {
            view = <GridView tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />;
        }
        else {
            view = <AddTaskView onSubmit={this.onAddTask} />;
        }

        return (
            <div>
                <NavBar view={this.state.view} />
                {view}
            </div>
        );
    }
}

export default App;