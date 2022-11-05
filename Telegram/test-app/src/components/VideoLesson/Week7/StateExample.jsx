
//*/** Example with  PropsExample */
// import React from "react"
// import PropsExample from "./PropsExample"

// export default function State({nameProgrammer}) {
//     return (
//         <div>
//             {/* <h1>Hello im a State page on the Component VidoLesson Week7</h1>  */}
//              <h1>{nameProgrammer}</h1>
//         </div>
//     )
// }


import React, {Component} from "react"
class TaskList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.list.map(task => {
                        return (
                            <div key={task}>
                                {task}
                            </div>   
                        )
                    })
                }
            </div>
        )
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            list: []
        }
        this.handleTaskChange = this.handleTaskChange.bind(this);
    }

    handleTaskChange(e) {
        this.setState({
            task: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Task List </h1>
                <input value={this.state.task} onChange={this.handleTaskChange} />
                <button onClick={() => this.setState({
                    list: [...this.state.list, this.state.task],
                    task: ""
                })}>ADD</button>
                <TaskList list={this.state.list} />
            </div>
        )
    }
}