// import logo from './logo.svg';
// import './App.css';


// class App extends React.Component {

//   state = {
//     number: 0
//   }

//   increment = () => {
//   this.stateState({number: this.state.number + 1})
//   }

//   decrement = () => {
//   this.stateState({number: this.state.number - 1})
//   }

//   render() {
//     return (
//       <div className = 'container'>
//         <div>{this.state.number}   </div>
//         <div>
//           <input type="submit" 
//                  value='Tambah'   
//                 />
//           <input 
//                  type="text" 
//                  value= {this.state.number} /> 
//           <input type="submit" 
//                  value='Kurang' 
//                  />
//         </div>


//       </div>


//     )
        



    
// }

// }

// export default App;

// import React from 'react';
// import Question from './question'

// class App extends React.Component {

// state = {
//   questions: [
//      { id: 'fdsd', title: 'Why is the sky blue?'},
//      { id: 'adsf', title: 'Who invented pizza?'},
//      { id: 'afdsf', title: 'Is green tea overrated?'},
//   ],
//      displayQuestions: false
// }

// displayQuestion = () => {
//   this.setState({
//       displayQuestions: !this.state.displayQuestions
//   })
// }

// render() {
//   if ( this.state.displayQuestions ) {
//     var questions = (
//     <div>
//          { this.state.questions.map((x, index) => { // index 
//               return <Question id={x.id} 
//                               judul={x.title} />
//          })}
//     </div>
//     )
//   }

//   return (
//   <div className="App">
//      <h1>Question Genie</h1>
//      <button className="btn" onClick={this.displayQuestion}>View Unanswered Questions</button>
//       {questions}
//   </div> 
//   )

// }


// import React, { Component } from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'

// import Register from './Register'
// import Login from './Login'
// import Home from './Home'

import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import cookies from 'universal-cookie'
import {connect} from 'react-redux'
import {keepLogin} from '../actions'
import Home from './Home'
import Header from './Header'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import EditProfile from './EditProfile'

const cookie = new cookies()
class App extends Component {

    componentWillMount(){
        var user = cookie.get('dataUser')

        // User pada cookie di temukan
        if(user){
            // Kirim id dan name ke redux
            this.props.keepLogin(user)
        }
    }

    render() {
        return (
            // <h1>App Component</h1>

            <BrowserRouter>
                <Header/>
                <Route path='/' exact component={Home}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/editprofile' component={EditProfile}/>
            </BrowserRouter>
        )
    }
}


// export default App 

export default connect(null, {keepLogin})(App)