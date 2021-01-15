<template>
    <section>
        <svg class="lineChart" width="960" height="500"></svg>
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

    import { data as dataFile } from "../assets/data/groothandelsbedrijven_omzetontwikkeling.js"

    export default {
        name: "lineChart",
        mounted() {
            this.buildLineChart()
        },
        methods: {
            buildLineChart: function () {
                const svg = select("svg")
                const width = svg.attr('width')
                const height = svg.attr('height')
                const data = dataFile

                const render = data => {
                    const title = 'Omzet groothandel'

                    const xValue = d => d.Perioden
                    const xAxisLabel = 'Perioden'

                    const yValue = d => d.Omzetontwikkeling
                    const yAxisLabel = 'Omzetontwikkeling'

                    const margin = { top: 60, right: 40, bottom: 88, left: 105 }
                    const innerWidth = width - margin.left - margin.right
                    const innerHeight = height - margin.top - margin.bottom

                    const xScale = scaleBand()
                        .domain(data.map(data => data.Perioden))
                        .range([0, innerWidth])

                    const yScale = scaleLinear()
                        .domain(extent(data, yValue))
                        .range([innerHeight, 0])
                        .nice()

                    const g = svg.append('g')
                        .attr('transform', `translate(${margin.left},${margin.top})`)

                    const xAxis = axisBottom(xScale)
                        .tickSize(-innerHeight)
                        .tickPadding(1)

                    const yAxis = axisLeft(yScale)
                        .tickSize(-innerWidth)
                        .tickPadding(10)

                    const yAxisG = g.append('g').call(yAxis)
                    yAxisG.selectAll('.domain').remove()

                    yAxisG.append('text')
                        .attr('class', 'axis-label')
                        .attr('y', -60)
                        .attr('x', -innerHeight / 2)
                        .attr('fill', 'black')
                        .attr('transform', `rotate(-90)`)
                        .attr('text-anchor', 'middle')
                        .text(yAxisLabel)

                    const xAxisG = g.append('g').call(xAxis)
                        .attr('transform', `translate(0,${innerHeight})`)
                        .attr('class', 'xaxis')

                    xAxisG.select('.domain').remove()

                    xAxisG.append('text')
                        .attr('class', 'axis-label')
                        .attr('y', 80)
                        .attr('x', innerWidth / 2)
                        .text(xAxisLabel)

                    const lineGenerator = line()
                        .x(d => xScale(xValue(d)))
                        .y(d => yScale(yValue(d)))
                        .curve(curveBasis)

                    g.append('path')
                        .attr('class', 'line-path')
                        .attr('d', lineGenerator(data))

                    g.append('text')
                        .attr('class', 'title')
                        .attr('y', -10)
                        .text(title)
                }

                data.forEach(d => {
                    d.Omzetontwikkeling = +d.Omzetontwikkeling
                    d.periode =  +d.periode
                })
                render(data)
            }
        },
    }
</script>

<style>
    svg .line-path {
        fill: none;
        stroke: maroon;
        stroke-width: 5;
        stroke-linejoin: round;
    }

    svg text {
        font-family: sans-serif;
    }

    svg .tick text {
        font-size: 1em;
        fill: #635F5D;

        text-anchor: start;
        width: 5em;
    }

    .xaxis text {
        transform: rotate(70deg);
        display: inline-block;
        overflow-wrap: normal;
    }
    svg line {
        opacity: 0.1;
    }
    svg .axis-label {
        font-size: 1em;
        fill: #8E8883;
    }

    svg .title {
        font-size: 1em;
        fill: #635F5D;
    }
</style>