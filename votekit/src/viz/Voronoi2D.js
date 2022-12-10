/** @module */

// d3-voronoi
// d3-select
// d3-range

import { Delaunay } from '../lib/snowpack/build/snowpack/pkg/d3-delaunay.js'
// import { Delaunay } from 'd3-delaunay'
// import { Delaunay } from 'https://cdn.skypack.dev/d3-delaunay@6'
// https://github.com/d3/d3-delaunay

/**
 * Draw Voronoi cells to show votes.
 * @param {VoterGroup} voterGroup
 * @param {CandidateViewList} candidateViewList
 * @param {Screen} screen
 * @constructor
 */
export default function Voronoi2D(voterGroup, candidateViewList, screen) {
    const self = this

    let voronoi
    let canList
    self.update = function () {
        canList = candidateViewList.getCandidates()
        const canViewList = candidateViewList.getCanViews()
        const points = canViewList.map((e) => [e.graphic.x, e.graphic.y])
        const delaunay = Delaunay.from(points)
        voronoi = delaunay.voronoi([0, 0, screen.width, screen.height])
    }

    self.render = function () {
        const { ctx } = screen
        const { x, y, w } = voterGroup.shape2

        ctx.save()

        // draw circle clip

        // http://jsfiddle.net/jimrhoskins/dDUC3/1/
        // https://dustinpfister.github.io/2019/10/08/canvas-clip/
        ctx.beginPath()
        ctx.arc(x, y, w * 0.5, 0, 2 * Math.PI)
        // ctx.closePath()
        ctx.clip()

        const n = canList.length
        for (let i = 0; i < n; i++) {
            ctx.beginPath()
            voronoi.renderCell(i, ctx)
            ctx.fillStyle = canList[i].color
            ctx.fill()
            ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(x, y, w * 0.5, 0, 2 * Math.PI)
        ctx.stroke()

        ctx.restore()
    }
}
