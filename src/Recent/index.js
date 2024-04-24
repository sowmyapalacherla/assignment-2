import {Chrono} from 'react-chrono'
import './index.css'

const Recent = () =>(
    <div className="chrono-container">
    <Chrono mode="VERTICAL">
      <div>
        <p className="year">February 12,2024</p>
        <h1 className="side-heading">Industrial Production</h1>
        <p className="detail">Index of Industrail Production(IIP) grew by 3.8% YoY in December,
         as compaired to a 5.1% YoY growth in the same month last year. Electricity has seen the 
         slowest growth of 1.2% YoY in december as compared to 10.4% YoY growth in the same month lat year.</p>
      </div>
      <div>
      <p className="year">February 12,2024</p>
        <h1 className="side-heading">CPI Inflation</h1>
        <p className="detail">India's Inflation eased to 5.1% in jan,a 60
        basis points decrease from the previous month. Consumer Food Price Index(CFP)
        declined from 9.5% in Dec 23 to 8.3% in India.</p>
      </div>
    </Chrono>
  </div>
) 
export default Recent