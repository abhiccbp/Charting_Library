import React, {useState} from 'react'
import './index.css'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
// Import CSS for Chart component

const dailyData = [
  {timestamp: '2023-01-01T00:00:00Z', value: 10},
  {timestamp: '2023-01-02T00:00:00Z', value: 12},
  {timestamp: '2023-01-03T00:00:00Z', value: 5},
  {timestamp: '2023-01-04T00:00:00Z', value: 8},
  {timestamp: '2023-01-05T00:00:00Z', value: 15},
]

const weeklyData = [
  {timestamp: '2023-01-01T00:00:00Z', value: 70},
  {timestamp: '2023-01-08T00:00:00Z', value: 65},
  {timestamp: '2023-01-15T00:00:00Z', value: 80},
  {timestamp: '2023-01-22T00:00:00Z', value: 75},
  {timestamp: '2023-01-29T00:00:00Z', value: 90},
]

const monthlyData = [
  {timestamp: '2023-01-01T00:00:00Z', value: 300},
  {timestamp: '2023-02-01T00:00:00Z', value: 320},
  {timestamp: '2023-03-01T00:00:00Z', value: 280},
  {timestamp: '2023-04-01T00:00:00Z', value: 340},
  {timestamp: '2023-05-01T00:00:00Z', value: 360},
]

const Chart = () => {
  const [data, setData] = useState(dailyData)

  const handleTimeframeChange = timeframe => {
    switch (timeframe) {
      case 'daily':
        setData(dailyData)
        break
      case 'weekly':
        setData(weeklyData)
        break
      case 'monthly':
        setData(monthlyData)
        break
      default:
        setData(dailyData)
    }
  }

  return (
    <div className="chart-container">
      <div className="chart-controls">
        <button
          className="timeframe-btn"
          onClick={() => handleTimeframeChange('daily')}
        >
          Daily
        </button>
        <button
          className="timeframe-btn"
          onClick={() => handleTimeframeChange('weekly')}
        >
          Weekly
        </button>
        <button
          className="timeframe-btn"
          onClick={() => handleTimeframeChange('monthly')}
        >
          Monthly
        </button>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{top: 20, right: 30, left: 20, bottom: 10}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
