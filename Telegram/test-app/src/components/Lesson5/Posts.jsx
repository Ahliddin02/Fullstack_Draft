// import React, {Component} from "react"
// class TaskList extends Component {
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.list.map(task => {
//                         return (
//                             <div key={task}>
//                                 {task}
//                             </div>   
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }


// export default class Posts extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             task: "",
//             list: []
//         }
//         this.handleTaskChange = this.handleTaskChange.bind(this);
//     }

//     handleTaskChange(e) {
//         this.setState({
//             task: e.target.value
//         })
//     }
//     render() {
//         return (
//             <div>
//             <h1>Add Users</h1>
//             <input value={this.state.task} onChange={this.handleTaskChange} />
//             <button onClick={() => this.setState({
//                                     list: [...this.state.list, this.state.task],
//                 task: ""
//             })}>ADD</button>
//             <TaskList list={this.state.list} />
//             </div>
//         )
//     }
// }


import MainTodo from "../Todo/MainTodo";
export default function Posts() {
    return (
        <div>
            <MainTodo />
        </div>
    )
}