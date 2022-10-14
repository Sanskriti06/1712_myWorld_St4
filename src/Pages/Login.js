import './Login.css';
import cupcake1 from "../Assets/cupcake1.jpg";
import cupcake2 from "../Assets/cupcake2.jpg";
import cupcake4 from "../Assets/cupcake4.jpg";
function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             { <img src={cupcake1} alt="profile" className="profile"/> }

           </div>


         </div>
         <div>
            <br></br>
           <h3>Login Page</h3>
           <br></br>
           <div>
             { <img src={cupcake2} alt="email" className="email"/> }
             <input type="email" placeholder="Enter email" className="name"/>
           </div>
           <div className="second-input">
             { <img src={cupcake4} alt="pass" className="email"/> }
             <input type="password" placeholder="Enter Password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div> 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;