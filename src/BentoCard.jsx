
//
// import * as React from 'react';
import PieChart  from './PieChart';

function BentoCard(){
    return(
        <div className="bentoCardSection">
            
            <div className="dashboardCard">

                <div className="mainChartSection">
                    <h1>Total Balance</h1>
                    <PieChart/>

                </div>
                <div className="subChartSection">
                    <div className="subChart1 chartCard">
                        <h1>GTB MAIN ACCOUNT</h1>
                        <p>#20,000</p>
                    </div>
                    <div className="subChart2 chartCard">
                        <h1>GTB MAIN ACCOUNT</h1>
                        <p>#20,000</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BentoCard;
