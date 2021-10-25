var gdjs;
(function(gdjs2) {
  gdjs2.PixiFiltersTools.registerFilterCreator("TiltShift", {
    makePIXIFilter: function(layer, effectData) {
      const tiltShiftFilter = new PIXI.filters.TiltShiftFilter();
      return tiltShiftFilter;
    },
    update: function(filter, layer) {
    },
    updateDoubleParameter: function(filter, parameterName, value) {
      const tiltShiftFilter = filter;
      if (parameterName === "blur") {
        tiltShiftFilter.blur = value;
      } else if (parameterName === "gradientBlur") {
        tiltShiftFilter.gradientBlur = value;
      }
    },
    updateStringParameter: function(filter, parameterName, value) {
    },
    updateBooleanParameter: function(filter, parameterName, value) {
    }
  });
})(gdjs || (gdjs = {}));
//# sourceMappingURL=tilt-shift-pixi-filter.js.map
