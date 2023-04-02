import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

import moment from "moment/moment";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

Chart.register(CategoryScale);

const CoinChart = ({ chartData, coinId = "bitcoin", handleTimeFrame, days }) => {
    const times = [
        { value: 7, label: "1 Week" },
        { value: 14, label: "2 Weeks" },
        { value: 30, label: "1 Month" },
        { value: 60, label: "2 Months" },
        { value: 90, label: "3 Months" },
        { value: 180, label: "6 Months" },
    ];

    const coinChartData =
        chartData && chartData.prices
            ? chartData.prices.map((value) => ({
                  x: value[0],
                  y: value[1].toFixed(2),
              }))
            : [];

    const data = {
        labels: coinChartData.map((val) => moment(val.x).format("MMM DD")),
        datasets: [
            {
                fill: true,
                label: coinId,
                data: coinChartData.map((val) => val.y),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    return (
        <>
            <Line options={{ responsive: true }} data={data} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <FormControl>
                    <Select
                        value={days}
                        onChange={(e) => handleTimeFrame(e.target.value)}
                    >
                        {times.map((time) => (
                            <MenuItem key={time.value} value={time.value}>
                                {time.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </>
    );
};

export default CoinChart;
