var gdjs;
(function(gdjs2) {
  gdjs2.PixiFiltersTools.registerFilterCreator("RGBSplit", {
    makePIXIFilter: function(layer, effectData) {
      const rgbSplitFilter = new PIXI.filters.RGBSplitFilter();
      return rgbSplitFilter;
    },
    update: function(filter, layer) {
    },
    updateDoubleParameter: function(filter, parameterName, value) {
      const rgbSplitFilter = filter;
      if (parameterName === "redX") {
        rgbSplitFilter.red.x = value;
      } else if (parameterName === "redY") {
        rgbSplitFilter.red.y = value;
      } else if (parameterName === "greenX") {
        rgbSplitFilter.green.x = value;
      } else if (parameterName === "greenY") {
        rgbSplitFilter.green.y = value;
      } else if (parameterName === "blueX") {
        rgbSplitFilter.blue.x = value;
      } else if (parameterName === "blueY") {
        rgbSplitFilter.blue.y = value;
      }
    },
    updateStringParameter: function(filter, parameterName, value) {
    },
    updateBooleanParameter: function(filter, parameterName, value) {
    }
  });
})(gdjs || (gdjs = {}));
//# sourceMappingURL=rgb-split-pixi-filter.js.map
