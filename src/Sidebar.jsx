// side bar


export default function Sidebar(){

    return(
        <div className="sidebar">

            <div className="sidebarMenu">

                <div className="sidebarLogo">
                    <a href="App.jsx">MONEY-HUB</a>
                </div>

                <div className="sidebarAnalytics">
                    {/* icon */}
                    <a href="#">Analytics</a>
                </div>

                <div className="sidebarProduct">
                    {/* icon */}
                    <a href="#">Products</a>
                </div>

                <div className="sidebarMessages">
                    {/* icon */}
                    <a href="#">Messages</a>
                </div>

                <div className="sidebarCustomers">
                    {/* icon */}
                    <a href="#">Customers</a>
                </div>

                <div className="sidebarDivider"></div>

                <div className="sidebarAccount">

                    <div className="sidebarSettings">
                            {/* icon */}
                        <a href="#">Settings</a>
                    </div>

                    <div className="sidebarSignOut">
                            {/* icon */}
                        <a href="#">Sign Out</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

