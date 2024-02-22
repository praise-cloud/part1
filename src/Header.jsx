
import AccountMenu from './AccountMenu';


//header component
function  header(){
    return(
        <header>
            <nav>
                <div className="logo">
                    <h1>MONEY<span>-</span>HUB</h1>
                </div>
                <ul className='navbar'>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Statements</a></li>
                    <li><a href="#">Accounts</a></li>
                </ul>

                <AccountMenu />
            </nav>
        </header>
    );
}

export default header;