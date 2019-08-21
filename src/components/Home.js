// import React, { Component } from 'react'
// import axios from '../config/axios'


// class Home extends Component {
//     constructor(props){
//         super(props)
//         this.state = { 
//             tasks: [],
//             modal: false,
//             // pay: false
//         }

//         this.toggle = this.toggle.bind(this);
//         this.togglePay = this.togglePay.bind(this);
//     }

//     componentDidMount() {
//         axios.get('/tasks/:userid/').then(res => this.setState({tasks: res.data, selectedID: 0}))
//     }

//     renderlist = () => {
//         return this.state.task.map(item => {
//             return (
//                 <tr>
                                    
//                                     <td scope="col">{item.description}</td>
//                                     <td> 
//                                         {/* <button className = 'btn btn-danger m-1' onClick={()=>{this.setState({selectedID : item.idBarang, item: item})}} >Edit</button> */}
//                                         <button className = 'btn btn-warning m-1' onClick={()=>{this.deleteProduct(item.id)}}>Delete</button>
//                                     </td>
//                                     {/* <button className = 'btn btn-danger m-1' onClick={()=>{this.toggle()}}>CheckOut</button> */}
//                 </tr>
                
//                 )
//             }
//         )
        
//     }

//     render() {
//         return (
//             <h1>Home Component</h1>
//         )
//     }
// }

// export default Home

// import React, { Component } from 'react'
// import axios from '../config/axios'
// import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'

// class Home extends Component {
//     componentDidMount(){
//         axios.get(
//             '/tasks/' + this.props.id
//         ).then(res => {
//             console.log(res.data)
//         })
//     }


//     render() {
//         // Jika user sudah login
//         if(this.props.id){
//             return (
//                 <div className="container">
//                         <h1 className="display-4 text-center animated bounce delay-1s">List Tasks</h1>
//                         <ul className="list-group list-group-flush mb-5"></ul>
//                         <form className="form-group mt-5">
//                             <input type="text" className="form-control" placeholder="What do you want to do ?" ref={input => this.task = input}/>
//                         </form>
//                         <button type="submit" className="btn btn-block btn-primary mt-3" onClick={() => this.addTask(this.props.id)}>Up !</button>
//                     </div>
//             )
//         }

//         return <Redirect to='/login'/>
        
//     }
// }

// const mps = state => {
//     return {
//         id: state.auth.id
//     }
// }

// export default connect(mps)(Home)


import React, { Component } from 'react'
import axios from '../config/axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Home extends Component {
    state = {
        tasks: []
    }

    addTask = () => {
        const description = this.task.value

        // Post task baru
        axios.post(
            '/tasks/' + this.props.id,
            {
                description
            }
        ).then(() => {
            // Get tasks
            axios.get(
                '/tasks/' + this.props.id
            ).then(res => {
                this.setState({tasks: res.data})
                console.log(res.data)
            })
        })

    }

    checkTask = (taskId) => {
        // const taskid = this.state.tasks._id
        // const completed = this.state.tasks.completed
        console.log(taskId)
        console.log(this.state.tasks);
        
        axios.patch(
            '/tasks/' + this.props.id + '/' + taskId
        )
        .then(() => {
            axios.get(
                '/tasks/' + this.props.id
            ).then(res => {
                this.setState({tasks: res.data})
                console.log(res.data)
            })
        //    .then(res => {
        //         this.setState({tasks: res.data})
        //         console.log(res.data)
        //    })
        })
        
    }

    componentDidMount(){
        // Get Tasks
        axios.get(
            '/tasks/' + this.props.id
        ).then(res => {
            this.setState({tasks: res.data})
        })
    }

    renderTasks = () => {
        return this.state.tasks.map(item => {
            if(!item.completed){
                return (
                    <li className='list-group-item d-flex justify-content-between'>

                        <span>{item.description}</span>
                        <span>
                            <button onClick={() => this.checkTask(item._id)}         
                                 className='btn btn-outline-primary'>
                                Done
                            </button>
                        </span>
                    </li>
                )
            }

            return (
                <li className='list-group-item d-flex justify-content-between'>
                    <span>{item.description}</span>
                    <span>
                        <button onClick={() => this.checkTask(item._id)}  
                                            className='btn btn-outline-primary'>
                            Selesai
                        </button>
                    </span>
                </li>
            )
        })
    }

    render() {
        // Jika user sudah login
        if(this.props.id){
            return (
                <div className="container">
                        <h1 className="display-4 text-center animated bounce delay-1s">List Tasks</h1>
                        <form className="form-group mt-5">
                            <input type="text" className="form-control" placeholder="What do you want to do ?" ref={input => this.task = input}/>
                        </form>
                        <button type="submit" className="btn btn-block btn-primary mt-3" onClick={() => this.addTask()}>Up !</button>
                    
                        <ul className="list-group list-group-flush mb-5">
                            {this.renderTasks()}
                        </ul>
                        </div>
            )
        }

        return <Redirect to='/login'/>
        
    }
}

const mps = state => {
    return {
        id: state.auth.id
    }
}

export default connect(mps)(Home)
