require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "0f37b9c59d674df8ae64cfd1b9b46cae"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});