<template>
    <section>
        <svg :class="uniqueID" class="lineChart"></svg>
    </section>
</template>

<script>
    import {
        select,
        scaleLinear,
        extent,
        axisLeft,
        axisBottom,
        line,
        scaleBand,
        curveBasis
    } from 'd3'


    export default {
        name: "lineChart",
        props: {
            uniqueID: {type: String, required: true},
            data: { type: Array, default: () => [] }
        },
        data () {
            return {
                chartData: this.data,
            }
        },
        mounted() {
            this.buildLineChart()
        },
        updated() {
            this.buildLineChart()
        },
        methods: {
            buildLineChart: function () {
                const svg = select(`.${this.uniqueID}`)
                const data = this.chartData

                const render = data => {
                    const title = this.uniqueID

                    const xValue = d => d.label
                    const xAxisLabel = 'Periode'

                    const yValue = d => d.aantal
                    const yAxisLabel = 'Aantal'

                    const margin = {top: 60, right: 10, bottom: 150, left: 70}
                    const width = parseInt(svg.style('width'))
                    const height = parseInt(svg.style('height'))

                    // const margin = { top: 60, right: 40, bottom: 88, left: 105 }
                    const innerWidth = width - margin.left - margin.right
                    const innerHeight = height - margin.top - margin.bottom

                    const xScale = scaleBand()
                        .domain(data.map(data => data.label))
                        .range([0, innerWidth])


                    const yScale = scaleLinear()
                        .domain(extent(data, yValue))
                        .range([innerHeight, 0])
                        .nice()

                    const g = svg.append('g')
                        .attr('transform', `translate(${margin.left},${margin.top})`)

                    const xAxis = axisBottom(xScale)
                        .tickSize(-innerHeight)
                        .tickPadding(0)

                    const yAxis = axisLeft(yScale)
                        .tickSize(-innerWidth)
                        .tickPadding(40)

                    const yAxisG = g.append('g').call(yAxis)
                    yAxisG.selectAll('.domain').remove()

                    yAxisG.append('text')
                        .attr('class', 'axis-label')
                        .attr('y', -60)
                        .attr('x', -innerHeight / 2)
                        .attr('fill', 'white')
                        .attr('transform', `rotate(-90)`)
                        .attr('text-anchor', 'middle')
                        .text(yAxisLabel)

                    const xAxisG = g.append('g').call(xAxis)
                        .attr('transform', `translate(0,${innerHeight})`)
                        .attr('class', 'xaxis')

                    xAxisG.select('.domain').remove()

                    xAxisG.append('text')
                        .attr('class', 'axis-label')
                        .attr('y', 150)
                        .attr('x', innerWidth / 2)
                        .attr('fill', 'white')
                        .text(xAxisLabel)

                    const lineGenerator = line()
                        .x(d => xScale(xValue(d)))
                        .y(d => yScale(yValue(d)))
                        .curve(curveBasis)

                    g.append('path')
                        .attr('class', 'line-path')
                        .attr('d', lineGenerator(data))
                        .attr('transform', `translate(0, ${xScale.domain})`)

                    console.log()
                    g.append('text')
                        .attr('class', 'title')
                        .attr('y', -30)
                        .text(title)
                }

                data.forEach(d => {
                    d.aantal = +d.aantal
                    d.periode =  +d.periode
                })
                render(data)
            }
        },
    }
</script>

<style>

    .lineChart {
        width: 100%;
        height: 100%;
    }

    .lineChart g:nth-child(1) {
        height: 100%;
    }
    .lineChart .line-path {
        fill: none;
        stroke: green;
        stroke-width: 5;
        stroke-linejoin: round;
        padding-right: 1em;
        margin-right: 1em;
    }

    .lineChart text {
        font-family: sans-serif;
    }

    .lineChart .tick {
        color: #ffffff;
    }

    .lineChart .tick text {
        font-size: 1em;
        fill: #ffffff;
        text-anchor: start;
    }

    .xaxis text {
        transform: rotate(70deg);
        text-anchor: start;
        overflow-wrap: normal;
        overflow: auto;
        padding-bottom: 2em;
        width: 100%;
    }
    .lineChart line {
        opacity: 0.1;
    }
    .lineChart .axis-label {
        font-size: 1em;
        color: #ffffff;
        transform: rotate(0deg);
    }

    .lineChart .title {
        font-size: 1em;
        fill: #ffffff;
    }
</style>