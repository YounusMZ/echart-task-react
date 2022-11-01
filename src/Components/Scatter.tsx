import React, {FC} from 'react';
import ReactECharts from 'echarts-for-react';


type Props = {
    scatterAlcohol: number[][]
};


const Scatter : React.FC<Props> = (propscatterAlcohol) => {
    const options = {
        title: {
            text: 'Color Intensity and Hue - Scatter Chart',
        },
        xAxis: {
            name: "Color Intensity"
        },
        yAxis: {
            name: "Hue"
        },
        series: [
          {
            symbolSize: 10,
            data: propscatterAlcohol.scatterAlcohol,
            type: 'scatter'
          }
        ]
      }

    return <ReactECharts option={options} />
}


export default Scatter;