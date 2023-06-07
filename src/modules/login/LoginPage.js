import './LoginPage.css';
import Card from '../ui/card/Card'
import Button from '../ui/button/Button';

const LoginPage = () => {
    return <div className="login-page-container">
        <Card className="login-form-container">
            <header>
                <h2>Login</h2>
                <p>Please enter your details to login</p>
            </header>
            <form className="login-form">
                <div className="form-field-container">
                    <label className='form-field_label' htmlFor="username">Username</label>
                    <input className='form-field_input' type="text" id="username" />
                </div>
                <div className="form-field-container">
                    <label className='form-field_label' htmlFor="password">Password</label>
                    <input className='form-field_input' type="password" id="password" />
                </div>
                <div className="btn-submit-container">
                    <Button >Login</Button>
                </div>
            </form>
        </Card>
    </div>
}

export default LoginPage;