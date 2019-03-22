// import React, { Component } from 'react';

import './App.css';
import './components/Sidebar';
import './components/Header';
import React, { PureComponent } from 'react';
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, Sector
} from 'recharts';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const request = require('superagent');

const boxStyle = {
    padding: '5px',
};


const data = [
    {
        name: "KSEZ BRANCH",
        deposits: 24.85
    },
    {
        name: "KARONGI",
        deposits: 120.84
    },
    {
        name: "NYABUGOGO",
        deposits: 381.42
    },
    {
        name: "SIEGE",
        deposits: 26.84
    },
    {
        name: "NGOMA BRANCH",
        deposits: 7.15
    },
    {
        name: "RUHANGO",
        deposits: 77.11
    },
    {
        name: "NYAGATARE",
        deposits: 52.07
    },
    {
        name: "CENTENARY BRANCH",
        deposits: "1,085.29"
    },
    {
        name: "NYAMATA BRANCH",
        deposits: 5.01
    },
    {
        name: "HEAD OFFICE BRANCH",
        deposits: 221.59
    },
    {
        name: "GICUMBI",
        deposits: 32.87
    },
    {
        name: "HUYE",
        deposits: 160.26
    },
    {
        name: "REMERA",
        deposits: "1,111.57"
    },
    {
        name: "ROND-POINT",
        deposits: 30.05
    },
    {
        name: "RWAMAGANA",
        deposits: 177.57
    },
    {
        name: "CHIC",
        deposits: 112.25
    },
    {
        name: "GISOZI",
        deposits: 93.91
    },
    {
        name: "TYAZO",
        deposits: 51.87
    },
    {
        name: "KAMEMBE",
        deposits: 158.82
    },
    {
        name: "RUBANGURA HOUSE",
        deposits: 250.71
    },
    {
        name: "RUBAVU",
        deposits: 511.07
    },
    {
        name: "MUSANZE",
        deposits: 121.74
    },
    {
        name: "KICUKIRO",
        deposits: 27.18
    },
    {
        name: "KIREHE",
        deposits: 11.35
    },
    {
        name: "PRESTIGE",
        deposits: 535.62
    },
    {
        name: "CORPORATE",
        deposits: 164.95
    },
    {
        name: "NYAMAGABE",
        deposits: 57.19
    },
    {
        name: "MUHANGA",
        deposits: 52.02
    },
    {
        name: "KABARONDO",
        deposits: 32.16
    },
    {
        name: "NYARUTARAMA",
        deposits: 97.17
    }
];

const data2 = [
    {
        name: "04-02-19",
        deposits: 164860.5728,
        assets: 123787.7618
    },
    {
        name: "06-03-19",
        deposits: 168697.7529,
        assets: 121676.8897
    },
    {
        name: "15-03-19",
        deposits: 163365.5376,
        assets: 121630.6827
    },
    {
        name: "18-03-19",
        deposits: 164575.2777,
        assets: 121217.8678
    },
    {
        name: "20-02-19",
        deposits: 158529.7338,
        assets: 125013.7172
    },
    {
        name: "25-02-19",
        deposits: 165878.1545,
        assets: 124763.4705
    },
    {
        name: "28-02-19",
        deposits: 165704.5766,
        assets: 124935.3063
    },
    {
        name: "05-03-19",
        deposits: 168329.6422,
        assets: 121912.5563
    },
    {
        name: "17-01-19",
        deposits: 159176.4288,
        assets: 125963.6019
    },
    {
        name: "28-01-19",
        deposits: 165294.1619,
        assets: 125114.3793
    },
    {
        name: "05-02-19",
        deposits: 164173.1624,
        assets: 124969.2475
    },
    {
        name: "27-02-19",
        deposits: 163406.6357,
        assets: 124419.4971
    },
    {
        name: "16-01-19",
        deposits: 159610.6796,
        assets: 126031.948
    },
    {
        name: "19-03-19",
        deposits: 162893.2859,
        assets: 121763.5142
    },
    {
        name: "22-02-19",
        deposits: 163824.6241,
        assets: 124983.6775
    },
    {
        name: "01-03-19",
        deposits: 163623.3331,
        assets: 123974.987
    },
    {
        name: "15-02-19",
        deposits: 165666.0881,
        assets: 125260.6117
    },
    {
        name: "25-01-19",
        deposits: 163766.3064,
        assets: 125372.0413
    },
    {
        name: "26-02-19",
        deposits: 164156.6052,
        assets: 124841.8871
    },
    {
        name: "18-02-19",
        deposits: 165663.7876,
        assets: 124863.0358
    },
    {
        name: "12-03-19",
        deposits: 163396.8447,
        assets: 120596.7862
    },
    {
        name: "18-01-19",
        deposits: 157366.1847,
        assets: 125737.2434
    },
    {
        name: "21-02-19",
        deposits: 163215.9949,
        assets: 124833.5239
    },
    {
        name: "22-01-19",
        deposits: 163036.0536,
        assets: 125204.7937
    },
    {
        name: "04-03-19",
        deposits: 168446.1924,
        assets: 123440.9482
    },
    {
        name: "21-01-19",
        deposits: 160819.923,
        assets: 124822.4479
    },
    {
        name: "31-01-19",
        deposits: 163612.3968,
        assets: 123741.2731
    }
];

const data3 = [
    {
        name: "NYABUGOGO",
        active: 1506,
        inactive: 252,
        dormant: 1157
    },
    {
        name: "KARONGI",
        active: 911,
        inactive: 227,
        dormant: 318
    },
    {
        name: "KSEZ BRANCH",
        active: 133,
        inactive: 16,
        dormant: 4
    },
    {
        name: "CENTENARY BRANCH",
        active: 2451,
        inactive: 376,
        dormant: 1998
    },
    {
        name: "NYAGATARE",
        active: 900,
        inactive: 155,
        dormant: 463
    },
    {
        name: "RUHANGO",
        active: 571,
        inactive: 91,
        dormant: 102
    },
    {
        name: "NGOMA BRANCH",
        active: 488,
        inactive: 53,
        dormant: 3
    },
    {
        name: "SIEGE",
        active: 363,
        inactive: 22,
        dormant: 57
    },
    {
        name: "REMERA",
        active: 2593,
        inactive: 344,
        dormant: 1407
    },
    {
        name: "HUYE",
        active: 1452,
        inactive: 180,
        dormant: 639
    },
    {
        name: "GICUMBI",
        active: 487,
        inactive: 96,
        dormant: 238
    },
    {
        name: "HEAD OFFICE BRANCH",
        active: 368,
        inactive: 54,
        dormant: 2
    },
    {
        name: "NYAMATA BRANCH",
        active: 253,
        inactive: 0,
        dormant: 0
    },
    {
        name: "RWAMAGANA",
        active: 1009,
        inactive: 129,
        dormant: 581
    },
    {
        name: "ROND-POINT",
        active: 198,
        inactive: 18,
        dormant: 202
    },
    {
        name: "RUBANGURA HOUSE",
        active: 1804,
        inactive: 246,
        dormant: 1465
    },
    {
        name: "KAMEMBE",
        active: 888,
        inactive: 217,
        dormant: 654
    },
    {
        name: "TYAZO",
        active: 1687,
        inactive: 235,
        dormant: 326
    },
    {
        name: "GISOZI",
        active: 592,
        inactive: 97,
        dormant: 277
    },
    {
        name: "CHIC",
        active: 959,
        inactive: 202,
        dormant: 200
    },
    {
        name: "KICUKIRO",
        active: 639,
        inactive: 93,
        dormant: 344
    },
    {
        name: "MUSANZE",
        active: 1230,
        inactive: 209,
        dormant: 542
    },
    {
        name: "RUBAVU",
        active: 1246,
        inactive: 277,
        dormant: 990
    },
    {
        name: "NYARUTARAMA",
        active: 446,
        inactive: 79,
        dormant: 177
    },
    {
        name: "KABARONDO",
        active: 532,
        inactive: 75,
        dormant: 416
    },
    {
        name: "MUHANGA",
        active: 822,
        inactive: 127,
        dormant: 536
    },
    {
        name: "NYAMAGABE",
        active: 1141,
        inactive: 109,
        dormant: 404
    },
    {
        name: "CORPORATE",
        active: 407,
        inactive: 34,
        dormant: 95
    },
    {
        name: "PRESTIGE",
        active: 384,
        inactive: 65,
        dormant: 167
    },
    {
        name: "KIREHE",
        active: 486,
        inactive: 0,
        dormant: 0
    }
];

const COLORS = ['#0088FE', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


export default class App extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/exh283uh/';

    state = {
        account_status: [],
        deposits_made: [],
        deposits_analysis: [],
        deposits_assets: []
    }

    componentWillMount() {
        console.log('component mounting');
    }

    componentDidMount() {
        console.log('did mount');
        request
            .get('http://192.168.0.213:7070/kpis/api/accountStatus.php')
            .then(res => {
                const response = JSON.parse(res.text);
                this.setState({ account_status: response });

            });

        request
            .get('http://192.168.0.213:7070/kpis/api/deposits_made.php')
            .then(res => {
                const response = JSON.parse(res.text);
                this.setState({ deposits_made: response });

            })

        request
            .get('http://192.168.0.213:7070/kpis/api/deposits_analysis.php')
            .then(res => {
                const response = JSON.parse(res.text);
                this.setState({ deposits_analysis: response });

            })

        request
            .get('http://192.168.0.213:7070/kpis/api/deposits_assets.php')
            .then(res => {
                const response = JSON.parse(res.text);
                this.setState({ deposits_assets: response });

            })
    }

    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <div id="content" className="container-fluid">
                    <Header />
                    <div className="row">

                        <div className="col-sm">
                            <p><strong>Accounts Status per branch</strong></p>
                            <BarChart
                                width={500}
                                height={400}
                                data={this.state.account_status}
                                margin={{
                                    top: 5, right: 5, left: 5, bottom: 160,
                                }}
                            >
                                <CartesianGrid strokeDasharray="2 2" />
                                <XAxis dataKey="name" tickSize={2} interval={0} angle={-90} textAnchor="end" />
                                <YAxis />
                                <Tooltip />
                                <Legend verticalAlign="top" />
                                <Bar dataKey="active" stackId="a" fill="#417DC8" />
                                <Bar dataKey="inactive" stackId="a" fill="#35B296" />
                                <Bar dataKey="dormant" stackId="a" fill="#AF1A1A" />
                            </BarChart>
                        </div>

                        <div className="col-sm">
                            <p><strong>Deposits as of yesterday per branch </strong>[in Billions]</p>
                            <BarChart
                                width={500}
                                height={400}
                                data={this.state.deposits_made}
                                margin={{
                                    top: 5, right: 5, left: 5, bottom: 160,
                                }}
                            >
                                <CartesianGrid strokeDasharray="2 2" />
                                <XAxis dataKey="name" tickSize={2} interval={0} angle={-90} textAnchor="end" />
                                <YAxis />
                                <Tooltip />
                                {/* <Legend verticalAlign="top" /> */}
                                <Bar dataKey="deposits" stackId="a" fill="#6DCE66" />

                            </BarChart>
                        </div>

                        <div className="col-sm">
                            <p>Deposits & Assets trend [30 days]</p>
                            <LineChart
                                width={300}
                                height={200}
                                data={this.state.deposits_assets}
                                margin={{
                                    top: 10, right: 30, left: 0, bottom: 5,
                                }}
                            >
                                {/* <CartesianGrid /> */}
                                {/*  */}
                                {/* <YAxis tickCount="4" /> */}
                                {/* <XAxis dataKey="name" /> */}
                                <Tooltip />
                                <Legend verticalAlign="top" />
                                <Line type="monotone" dataKey="assets" stroke="#AF1A1A" activeDot={{ r: 8 }} dot={false} />
                                <Line type="monotone" dataKey="deposits" stroke="#8884d8" activeDot={{ r: 8 }} dot={false} />

                            </LineChart>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="row">
                        <div className="col-6" style={boxStyle}>
                            <div className="card">
                                <div className="card-body">
                                    <p><strong>Top 40 Depositors</strong></p>
                                    <div class="table-responsive">
                                        <table className="table display table-sm table-condensed" id="example">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                </tr>
                                            </thead>

                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-4" style={boxStyle}>
                            <div className="card">
                                <div className="card-body">
                                    <p><strong>Depostis Analysis</strong> [amounts in Billions]</p>
                                    <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
                                        <Tooltip />
                                        <Legend />
                                        <Pie
                                            data={this.state.deposits_analysis}
                                            cx={140}
                                            cy={120}
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            // innerRadius={60}
                                            outerRadius={80}
                                            fill="#8884d8"

                                            // paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {
                                                this.state.deposits_analysis.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                            }
                                        </Pie>

                                    </PieChart>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
