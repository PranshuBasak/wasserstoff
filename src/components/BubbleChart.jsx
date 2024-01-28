

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bubble } from "react-chartjs-2";
import sourceData from '../dataset/sourceData.json';
import 'chartjs-adapter-date-fns';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 18;
defaults.plugins.title.color = "#383874";
export default function BubbleChart() {
    // Convert each entry in sourceData to a dataset
    const datasets = sourceData.map(dataEntry => ({
        label: dataEntry.label,
        data: dataEntry.data.map(item => ({
            x: item.x,
            y: item.y,
            r: item.r
        })),
        backgroundColor: dataEntry.backgroundColor,
        borderColor: dataEntry.borderColor,
        borderWidth: dataEntry.borderWidth
    }));

    return (
        <div className='absolute bottom-20 left-2 md:left-32 lg:left-52 w-full max-w-[1000px] h-auto lg:h-[520px] bg-white rounded-2xl'>
            <Bubble
                data={{
                    datasets: datasets
                }}
                options={{
                    layout: {
                        padding: 20
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                              displayFormats: {
                                  quarter: 'MMM'
                              }
                            },
                            min: "2023-12-06 11:59:30",
                            max: "2024-12-31 18:59:30",
                            border: {
                              display: false
                            }
                        },
                        y: {
                            min: 0,
                            max: 1000,
                            grid:{
                              color: false
                            },
                            border: {
                              display: false
                            }
                        }
                    },
                    plugins: {
                      title: {
                        text: "Sales Figures",
                      }
                    }
                }}
            />
        </div>
    );
}