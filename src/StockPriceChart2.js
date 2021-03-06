import React, { Component } from 'react';
import Chart from "react-apexcharts"

class StockPriceChart2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                id: "basic-bar",
                type: 'area'
                },
                colors: ['#5BE429'],
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                type: 'datetime',
                }
            },
            series: [
                {
                name: "Index Price",
                }
            ]
            };
        }
        componentDidMount = () => {
            this.updateChart = setInterval(()=> {
                if (this.props.currentStockColor != undefined) {
                    this.setState({
                        options: {
                            chart: {
                            id: "basic-bar",
                            type: 'area'
                            },
                            colors: [this.props.currentStockColor],
                            dataLabels: {
                                enabled: false
                            },
                            xaxis: {
                            type: 'datetime',
                            categories: this.props.time
                            }
                        },
                        series: [
                            {
                            name: "Index Price",
                            data: this.props.price
                            }
                        ]
                    });
                }
            }, 2000)
           
        }
        componentWillUnmount = () => {
            clearInterval(this.updateChart)
            this.updateChart = null
        }
      render() {
        return (
                <Chart className="chart"
                  options={this.state.options}
                  series={this.state.series}
                  width={this.props.width}
                  type='area'
                />
        );
      }
}

export default StockPriceChart2