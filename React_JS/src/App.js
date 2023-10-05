// import logo from './logo.svg';
import './styles.css';

function App() {
  return (
  <div className="body">
    <div className="header">

        <div className="logo-container">
            <img src="imports/logo-img.png" id="logoimg"/>
            <img src="imports/logo-text.png" id="logotxt"/>
        </div>


        <div className="nav-container">
            <div className="navbar">
                <ul>
                    <li><a href="#">Join Firesides</a></li>
                    <li><a href="#">Partner with us</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Blog</a></li>
                    <li id="divider"></li>
                </ul>
            </div>
            <div className="navbuttons">
                <button className="login">Login</button>
                <button className="create-acc">Create Account</button>
            </div>
        </div>
    </div>
    <div className="wrapper">
        <div className="phone-container">
            <img src="imports/iphone1.png" id="iphone1"/>
            <img src="imports/iphone2.png" id="iphone2"/>
        </div>
    
    <div className="right-side">

    <div id="page-divider"></div>
        <div className="maintext-container">
            <h1>Land the dream job by showing your soft skills credentials</h1>
        </div>

        <div className="instruction-container">
            <h3>Create your free talent wallet</h3>
        </div>

        <div className="txtbars-container">
            <input type="text" id="dpname" name="dpname" placeholder="Display Name"/>
            <input type="text" id="email" name="email" placeholder="Email address"/>
        </div>

        <div className="submit-container">
            <button>Sign up with email</button>
        </div>

        <div className="logintxt-container">
            <p>Already have an account? <b><a href="#">Log in</a></b></p>
        </div>
    </div>

    <div className="app-container">
        <div className="appimgs">
            <img src="imports/appimg.png" id="appimg"/>
            <img src="imports/applogo.png" id="applogo"/>
        </div>
        <div className="apptxtbars-container">
            <div className="dpname-wrapper">
                <input type="text" id="dpname" name="dpname" placeholder=""/>
                <label for="dpname">Display Name</label>
                <img src="imports/clear_button.png" id="clear1" className="clear-button"/>  
            </div>
            <div className="email-wrapper">
                <input type="text" id="email" name="email" placeholder=""/>
                <label for="email">Email address</label>
                <img src="imports/clear_button.png" id="clear2" className="clear-button"/>
            </div>
        </div>
        
    
        <div className="appsubmit-container">
            <div className="magiclink-logo"><img src="imports/signup-icon.png" id="magiclinklogo"/></div>
            <button>Continue with Magic Link</button>
        </div>
    </div>
    <div/>
    </div>
  </div>
  );
}

export default App;
