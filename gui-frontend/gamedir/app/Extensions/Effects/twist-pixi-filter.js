var gdjs;
(function(gdjs2) {
  const PIXI_ = GlobalPIXIModule.PIXI;
  gdjs2.PixiFiltersTools.registerFilterCreator("Twist", {
    makePIXIFilter: function(layer, effectData) {
      const twistFilter = new PIXI.filters.TwistFilter();
      twistFilter.offset = new PIXI_.Point(0, 0);
      return twistFilter;
    },
    update: function(filter, layer) {
      const twistFilter = filter;
      twistFilter.offset.x = Math.round(twistFilter._offsetX * layer.getWidth());
      twistFilter.offset.y = Math.round(twistFilter._offsetY * layer.getHeight());
    },
    updateDoubleParameter: function(filter, parameterName, value) {
      const twistFilter = filter;
      if (parameterName === "radius") {
        twistFilter.radius = value;
      } else if (parameterName === "angle") {
        twistFilter.angle = value;
      } else if (parameterName === "padding") {
        twistFilter.padding = value;
      } else if (parameterName === "offsetX") {
        twistFilter._offsetX = value;
      } else if (parameterName === "offsetY") {
        twistFilter._offsetY = value;
      }
    },
    updateStringParameter: function(filter, parameterName, value) {
    },
    updateBooleanParameter: function(filter, parameterName, value) {
    }
  });
})(gdjs || (gdjs = {}));
//# sourceMappingURL=twist-pixi-filter.js.map
