var hc_plays_by_month_options = {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(0,0,0,0)',
        renderTo: 'graph_plays_by_month'
    },
    title: {
        text: ''
    },
    legend: {
        enabled: true,
        itemStyle: {
            font: '9pt "Open Sans", sans-serif',
            color: '#A0A0A0'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#444'
        }
    },
    credits: {
        enabled: false
    },
    xAxis: {
            labels: {
                style: {
                    color: '#aaa'
                }
            },
            categories: [{}]
    },
    yAxis: {
            title: {
                text: null
            },
            labels: {
                style: {
                    color: '#aaa'
                }
            },
            stackLabels: {
                enabled: false,
                style: {
                    color: '#fff'
                }
            }
    },
    plotOptions: {
        column: {
            borderWidth: 0,
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                style: {
                    color: '#000'
                }
            }
        },
        series: {
            events: {
                legendItemClick: function () {
                    setGraphVisibility(this.chart.renderTo.id, this.chart.series, this.name);
                }
            }
        }
    },
    tooltip: {
        shared: true
    },
    series: [{}]
};