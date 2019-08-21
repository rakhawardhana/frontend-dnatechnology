import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from '../config/axios'


class Register extends Component {

    // onAvatarClick = () => {
    //     const avatar = this.avatar.files[0]

    //     axios.patch(
    //         '/users/avatar',
    //         {avatar}
    //     ).then (res => {
    //         console.log(res.data)
    //     }).catch(error => {
    //         console.log(error)
    //     })

    // }


    onButtonClick = () => {
        const username = this.username.value
        const usia = this.age.value
        const full_name = this.fullname.value
        const password = this.password.value
        const alamat = this.alamat.value
        const pendidikan = this.pendidikan.value
        const contact = this.contact.value
        // const avatar = this.avatar.files[0]

        axios.post(
            '/users',
            {
                username, password, full_name, alamat, usia, pendidikan, contact
            }
        ).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        })
        

    }


    render() {
        return (
            // <h1>Register Component</h1>
            <div className="mt-5 row animated bounceIn delay-2s">
                    <div className="col-sm-3 mx-auto card">
                        <div className="card-body">
                            <div className="border-bottom border-secondary card-title">
                                <h1>Register</h1>
                            </div>
                            <div className="card-title mt-1">
                                <h4>Username</h4>
                            </div>
                            <form className="input-group"><input ref={input => this.username = input} className="form-control" type="text" /></form>
                            <div className="card-title mt-1">
                                <h4>Age</h4>
                            </div>
                            <form className="input-group"><input ref={input => this.age = input} className="form-control" type="number" /></form>
        
                            <div className="card-title mt-1">
                                <h4>Password</h4>
                            </div>
                            <form className="input-group"><input ref={input => this.password = input} className="form-control" type="password" /></form>
                            <div className="card-title mt-1">
                                <h4>Fullname</h4>
                            </div>
                            <form className="input-group"><input ref={input => this.fullname = input} className="form-control" type="password" /></form>
                            <div className="card-title mt-1">
                                <h4>Alamat</h4>
                            </div>
                            <form className="input-group"><input ref={input => this.alamat = input} className="form-control" type="password" /></form>
                            
                            <div class="input-group mt-2">
                                <h4>Pendidikan  </h4>
                                <select ref={pendidikan => this.pendidikan = pendidikan} class="custom-select" id="inputGroupSelect01">
                                    <option value="SMA">SMA</option>
                                    <option value="SMK">SMK</option>
                                </select>
                            </div>
                            <div className="card-title mt-1">
                                <h4>Contact</h4>
                            </div>
                            <form className="input-group"><input ref={input => this.contact = input} className="form-control" type="password" /></form>
                            
                            {/* <div className='custom-file'>
                                <input type='file' ref={input => {this.avatar = input}}/>
                            </div> */}
                            <div className="d-flex justify-content-center my-3">
                                <button className="btn btn-success btn-block" onClick={this.onButtonClick}
                                                                                >DAFTAR</button>
                            </div>
                            <p className="lead">Do you have account ? <Link to="/login">Sign In!</Link></p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Register




