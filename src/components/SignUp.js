import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export class SignUp extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container text-center' style={{paddingTop:'200px'}}>
                    <h1>SIGN UP</h1>
                    <form>
                        <div className='row justify-content-center align-items-center'>
                            <form>
                                <div className='col-md mt-3'>
                                    <input className='form-control' type='text' placeholder='username' />
                                </div>
                                <div className='col-md mt-3'>
                                    <input className='form-control' type='password' placeholder='password'/>                                
                                </div>
                                <input className='btn btn-sm col-3 btn-outline-success mt-3' value='Ok'/>
                            </form>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default SignUp
