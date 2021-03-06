import React, {useState} from 'react'
import Validator from '../validations'

export default function Login() {
    let [email , setEmail] = useState("")
    let [emailErr, setEmailErr] = useState(false)


    let [pwd , setPwd] = useState("")
    let [pwdErr, setPwdErr] = useState(false)


    let onSubmitLoginForm = ()=>{
         setEmailErr(!Validator.email.test(String(email).toLowerCase()))
         setPwdErr(!Validator.emptyStr.test(String(pwd).toLowerCase()))
    }
    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <div className="login-form-container shadow-box col-md-4 py-3">
                <p className="text-center pb-3 border-bottom h4" >Login</p>

              
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <small id="emailHelp" className="form-text text-muted text-danger">
                            {emailErr && "Invalid Email Entered"}
                        </small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        value = {pwd}
                        onChange={(e)=>setPwd(e.target.value)}
                        />
                        <small id="emailHelp" className="form-text text-muted text-danger">
                            {pwdErr && "Password can not be empty"}
                        </small>
                    </div>
                  
                    <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={onSubmitLoginForm}
                    >Login</button>

             
            </div>
        </div>
    )
}
 