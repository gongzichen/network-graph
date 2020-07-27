import React, { useEffect, useState } from 'react';
import { data } from './data';
import G6 from '@antv/g6';

export default function() {

  const ref = React.useRef(null)
  let graph: any = null

  function clearAllStats() {
    graph.setAutoPaint(false);
    graph.getNodes().forEach(function (node) {
      graph.clearItemStates(node);
    });
    graph.getEdges().forEach(function (edge) {
      graph.clearItemStates(edge);
    });
    graph.paint();
    graph.setAutoPaint(true);
  }

  const bindEvents = () => {
    graph.on("node:mouseenter", function (e: any) {
      const item = e.item;
      graph.setAutoPaint(false);
      graph.getNodes().forEach(function (node: any) {
        graph.clearItemStates(node);
        graph.setItemState(node, "dark", true);
      });
      graph.setItemState(item, "dark", false);
      graph.setItemState(item, "highlight", true);
      graph.getEdges().forEach(function (edge: any) {
        if (edge.getSource() === item) {
          graph.setItemState(edge.getTarget(), "dark", false);
          graph.setItemState(edge.getTarget(), "highlight", true);
          graph.setItemState(edge, "highlight", true);
          edge.toFront();
        } else if (edge.getTarget() === item) {
          graph.setItemState(edge.getSource(), "dark", false);
          graph.setItemState(edge.getSource(), "highlight", true);
          graph.setItemState(edge, "highlight", true);
          edge.toFront();
        } else {
          graph.setItemState(edge, "highlight", false);
        }
      });
      graph.paint();
      graph.setAutoPaint(true);
    });
    graph.on("node:mouseleave", clearAllStats);
    graph.on("canvas:click", clearAllStats);
  }


  useEffect(() => {
    if(!graph) {
      graph = new G6.Graph({
        container: ref.current,
        width: 1200,
        height: 800,
        modes: {
          default: ["drag-canvas", "name"],
        },
        layout: {
          type: "force",
          edgeStrength: 0.7,
        },
        modes: {
          default: [
            "drag-canvas",
            {
              type: "tooltip",
              formatText: function formatText(model) {
                return model.name;
              },
              offset: 30,
            },
            {
              type: "edge-tooltip",
              formatText: function formatText(model, e) {
                const edge = e.item;
                return (
                  "来源：" +
                  edge.getSource().getModel().name +
                  "<br/>去向：" +
                  edge.getTarget().getModel().name
                );
              },
              offset: 30,
            },
          ],
        },
        defaultNode: {
          size: [10, 10],
          style: {
            lineWidth: 2,
            fill: "#DEE9FF",
            stroke: "#5B8FF9",
          },
        },
        defaultEdge: {
          size: 1,
          style: {
            stroke: "#e2e2e2",
            lineAppendWidth: 2,
          },
        },
        nodeStateStyles: {
          highlight: {
            opacity: 1,
          },
          dark: {
            opacity: 0.2,
          },
        },
        edgeStateStyles: {
          highlight: {
            stroke: "#999",
          },
        },
      });
    }
    
    graph.data({
      nodes: data.nodes,
      edges: data.edges.map(function (edge, i) {
        edge.id = "edge" + i;
        return Object.assign({}, edge);
      }),
    });
    graph.render()
    bindEvents();
  }, [])

  return (
    <div ref={ref}></div>
  );
}
