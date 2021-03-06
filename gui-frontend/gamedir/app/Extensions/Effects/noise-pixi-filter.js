var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  gdjs2.PixiFiltersTools.registerFilterCreator("Noise", {
    makePIXIFilter: function(layer, effectData) {
      const noiseFilter = new PIXI.filters.NoiseFilter();
      return noiseFilter;
    },
    update: function(filter, layer) {
    },
    updateDoubleParameter: function(filter, parameterName, value) {
      const noiseFilter = filter;
      if (parameterName !== "noise") {
        return;
      }
      noiseFilter.noise = gdjs2.PixiFiltersTools.clampValue(value, 0, 1);
    },
    updateStringParameter: function(filter, parameterName, value) {
    },
    updateBooleanParameter: function(filter, parameterName, value) {
    }
  });
})(gdjs || (gdjs = {}));
//# sourceMappingURL=noise-pixi-filter.js.map
