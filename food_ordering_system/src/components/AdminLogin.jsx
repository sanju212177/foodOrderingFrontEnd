import React, { useState,useEffect } from 'react'
import Navbar from './AdminNavbar'
import UserService from '../services/UserService';


export default function AdminLogin() {

    const [isActive, setIsActive] = useState(localStorage.getItem('token') ? true : false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [ loginError ,setLoginError] = useState("");
    


    const getAuthenticated = (e) => {
        // e.preventDefualt();
        // alert(username+" ---------- "+password)
        const dataa = {
            username, password
        }
        UserService.getToken(dataa).then((response) => {
            
   
            UserService.loadUserByUsername(dataa.username).then((response)=>{
                console.log(response.data.role)
                if(response.data.role.localeCompare('ROLE_ADMIN') === 0 ){
                    localStorage.setItem('token', response.data.token)
                }
                else{
                    setLoginError("bad Credentials!!!")
                }
            }).catch(error=>{
                console.log(error);
            })            
 
        }).catch(error => {
            console.log(error);
        })
        if (localStorage.getItem('token')!==null) {

            setIsActive(true);
        }


    }



    return (
        <div>
            <Navbar />
            <div className='container text-dark' style={{ paddingTop: '6%', paddingRight: "30%", paddingLeft: "30%" }}>
                <div className='container py-3 border' style={{
                    '--color-1': 'deepskyblue', '--color-2': 'gray',
                    background: `
                    linear-gradient(
                      120deg,
                      var(--color-1),
                      var(--color-2) 60%
                    )`
                }} >
                    {localStorage.getItem('token')===null &&(
                    <div >
                    <h3>Sign in,</h3>
                    <form className='p-2'>
                        <div class="form-group py-2">
                            <label for="exampleInputusername1">username</label>
                            <input type="text" class="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div class="form-group py-2">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control"  id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='text-danger'><h4>{loginError}</h4></div>
                        <button type="button" class="btn btn-success  btn-sm" onClick={getAuthenticated}>Submit</button>
                    </form>
                    </div>
                    )}
                    {localStorage.getItem('token') && (
                        <div className='text-center text-dark'>
                            <h4><b>Welocome Admin </b></h4>
                        </div>

                    )}
                </div>
            </div>
        </div>
    )
}
