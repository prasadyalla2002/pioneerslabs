import { Component } from 'react'
import {ThreeDots} from 'react-loader-spinner'
import { AreaChart,XAxis,YAxis,Area,Tooltip, ResponsiveContainer } from "recharts"

import PriceCard from '../PriceCard'

  
import './styles.css'

const apiStatusConstants = {
    initial:'INITIAL',
    inProgress:'INPROGRESS',
    success:'SUCCESS',
    failure:'FAILURE'
}

class Dashboard extends Component{
    state={populationData:[], apiStatus:apiStatusConstants.initial,cryptoData:[]}

    componentDidMount(){
        this.getPopulationData()
        this.getCryptoData()
    }

    getPopulationData = async() =>{
        this.setState({apiStatus:apiStatusConstants.inProgress})
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        const data = await response.json()
        this.setState({populationData:data.data})
    }

    getCryptoData = async() =>{
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        const data = await response.json()
        this.setState({cryptoData:data.bpi})
    }

    renderLoader = () =>{
    return(
        <div className='loader-container'>
            <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#0000000"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>)
    }

    renderReChart = () =>{
        const {populationData} = this.state

        return(
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    width={730}
                    height={250}
                    data={populationData}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <XAxis dataKey='Year' />
                    <YAxis />
                    <Area dataKey='Population' stroke="#8884d8" fill="#8884d8" />
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>)

    }

    renderPriceCards = () =>{
        const{cryptoData} = this.state

        return(
            <ul className='prices-list'>
                {cryptoData.forEach((each) => (<PriceCard cardDetails={each} key={each.code}/>))}
            </ul>
        )

    }

    render(){
        return(
            <div className="dashboard-container">
                <h2 className='population-chart-heading'>Population Chart</h2>
                {this.renderReChart()}
                <h2 className='population-chart-heading'>Crypto Currency Prices</h2>
        </div>
        )
    }
}
export default Dashboard