gionNamePrefix = [provinceName, municipName].filter(Boolean).join("_");

  var exportFeatures = ee.FeatureCollection(aggregateStats(currentImage, regionMeanValue, regionNamePrefix))
    .select([".*"], null, false);  // drop .geo column with geometry


  // returns download URL of the image for the aoi.
  exportFeatures.getDownloadURL({
    format: "csv",
    // selectors: ,
    filename: [regionNamePrefix, dataSelector.getValue(), colSelector.getValue(), ui.url.get("startdate"), "-", ui.url.get("enddate")].join("_"),
    callback: setDownloadUrl // pass url to setDownloadUrl when result 
    callback: setDownloadUrl // pass url to setDownloadUrl when result
  })