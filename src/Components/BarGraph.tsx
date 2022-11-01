import React, {FC} from 'react';
import ReactECharts  from 'echarts-for-react';


type Props = {
    indexAlcohol: number[],
    dataAlcohol: number[]
};

const BarGraph : React.FC<Props> = (propsAlcoholData) => {
    const options = {
        title: {
            text: 'Malic Acid Chart',
      },
        xAxis : {
            type: 'category',
            name: "Alcohol",
            data: propsAlcoholData.indexAlcohol
        },
        yAxis:{
            name: "Malic Acid Level",
            type: 'value'
        },
        series: [
            {
                data: propsAlcoholData.dataAlcohol,
                type:'bar'
            }
        ]
    }

    return <ReactECharts option={options} />
}


export default BarGraph;