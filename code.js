function calculateNodeConnections(adjacencyList) {
  return adjacencyList
    .map(function (edges) {
      return edges.length;
    })
    .sort(function (x, y) {
      return x - y;
    });
}

function isValid(sourceGraph, targetGraph, vertexMap, size) {
  for (let src = 0; src < size; src++) {
    let sourceEdges = sourceGraph[src];
    let targetEdges = targetGraph[vertexMap[src]];

    if (sourceEdges.length !== targetEdges.length) {
      return false;
    }

    for (let i = 0; i < sourceEdges.length; i++) {
      let mappedEdge = vertexMap[sourceEdges[i]];
      let found = false;

      for (let j = 0; j < targetEdges.length; j++) {
        if (targetEdges[j] === mappedEdge) {
          found = true;
          break;
        }
      }

      if (!found) {
        return false;
      }
    }
  }
  return true;
}

function buildMapping(currentIdx, size, visited, vertexMap, sourceGraph, targetGraph) {
  if (currentIdx === size) {
    return isValid(sourceGraph, targetGraph, vertexMap, size);
  }

  for (let idx = 0; idx < size; idx++) {
    if (!visited[idx]) {
      visited[idx] = true;
      vertexMap[currentIdx] = idx;
      if (buildMapping(currentIdx + 1, size, visited, vertexMap, sourceGraph, targetGraph)) {
        return true;
      }
      visited[idx] = false;
    }
  }
  return false;
}

function are_isomorphic(graph1, graph2) {
  if (graph1.length !== graph2.length) {
    return false;
  }

  let mySource = calculateNodeConnections(graph1),
    myTarget = calculateNodeConnections(graph2);

  for (let idx = 0; idx < mySource.length; idx++) {
    if (mySource[idx] !== myTarget[idx]) {
      return false;
    }
  }

  n = graph1.length;
  used = [];
  mapping = [];

  for (let i = 0; i < n; i++) {
    used[i] = false;
    mapping[i] = undefined;
  }

  return buildMapping(0, n, used, mapping, graph1, graph2);

}
