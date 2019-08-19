import React from 'react';
import Highcharts from 'highcharts';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.highchartsOptions = {
      subtitle: {
        text: 'Industry: Technolgy'
      },
      rangeSelector: {
        selected: 4
    },

    yAxis: {
        plotLines: [{
            value: 0,
            width: 2,
            color: 'silver'
        }]
    },

    plotOptions: {
        series: {
            compare: 'percent',
            showInNavigator: true
        }
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
        valueDecimals: 2,
        split: true
    },
    
            title: {
        text: 'Example Company (EC)',
        align : 'center',
        x : 10,
        y : 6,
        style :{
          fontSize : '1rem',
        },
        useHTML : false
    },
    
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%%m/%d/%Y',
            week: '%m/%Y',
            month: '%m/%Y',
            year: '%Y'
        },
        title: {
          text: 'Date'
        },
        //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        //  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
    yAxis: {
        
        title: {
            text: 'Stock Value'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            lineWidth: 1
        },
        series: {
            marker:{
                enabled: true
            },
            turboThreshold:0,
            compare:'percent',
            fillOpacity: 0.5
        }
    },
    tooltip: {
        shared: true,
        shadow: false,
        crosshairs: true,
        useHTML:true,
        borderWidth: '0',
        backgroundColor:'#ffffff',
        dateTimeLabelFormats: {
            day: '%m/%d/%Y',
            week: '%m/%d/%Y',
            month: '%m/%Y',
            year: '%Y'
        },
        positioner: function () {
            return { x: 0, y: 0 };
        },
        style: {
            fontSize: '1rem'
        },
        formatter: function()
        {
            var date = new Date(this.x);
            var header = '<span class="chart-fontsize">' + (date.getMonth()+1) + '/'+ date.getDate() + '/' + date.getFullYear() + '</span>';
            return header;
        }
    },
      series: [{
        showInLegend: false, 
        name: 'Company',
        marker: {
          symbol: 'square'
        },
        data: [{x:1395763200000,y:1},{x:1406822400000,y:1.0564},{x:1408032000000,y:1.06},{x:1409155200000,y:1},{x:1409241600000,y:1.0628},{x:1467734400000,y:1},{x:1475078400000,y:1},{x:1478188800000,y:1}]
        //data: props.dataTwo
        }]
    }
  }

  componentDidMount() {
    Highcharts.chart('chart', this.highchartsOptions);
  }

  render() {
    return <div id='chart'></div>
  }
}

export default LineChart;
