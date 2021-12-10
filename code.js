/*******************************************************************************
 * Code style *
 * 
 *  - use camelCase for function and variable names
 *  - use double quotes by default
 *  - use double space after your code and before // in inline comments
 ******************************************************************************/

/*******************************************************************************
 * Translation *
 ******************************************************************************/

// Choose app language: "it", "en" or "ru"
var ln = "ru";  

// Define a JSON object for storing translated text
var t = {};
// About panel

t.about = {};
t.about.title = {
  en: "Observation of atmospheric pollutants in the Vicenza provinceh \
  throug the Copernicus satellite data",
  ru: "Наблюдение за загрязнением атмосферы в провинции Виченца с помощью \
  спутниковых данных Copernicus",
  it: "Osservazione degli inquinanti atmosferici nel vicentino mediante \
  i dati satellitari Copernicus"
};
t.about.funding = {
  it: "Il progetto è parte del Programma Operativo Regionale del Fondo \
  Europeo di Sviluppo Regionale (POR FESR 2014-2020) del Veneto, \
  nell'ambito del bando dell'azione 231 volto alla “costituzione di \
  Innovation Lab diretti al consolidamento / sviluppo del network Centri \
  P3@-Palestre Digitali e alla diffusione della cultura degli Open Data”.",
  en: "The project is part of the Regional Operational Program of \
  the European Regional Development Fund (ROP ERDF 2014-2020) of \
  Veneto, in the context of the call for the action 231 \
  aimed at “Constitution of Innovation Labs directed to the \
  consolidation / development of the network of Centri P3@-Palestre \
  Digitali and the spread of the open data culture.”",
  ru: "Проект является частью региональной операционной программы \
  Европейского фонда регионального развития (ROP ERDF 2014-2020) \
  области Венето, в контексте консурса, проведённого в действии №231, \
  нацеленного на «создание инновационных лабораторий, направленных на \
  консолидацию / развитие сети Centri P3@-Palestre Digitali и \
  распространение культуры открытых данных».",
};
t.about.closeButton = {it: "Chiudi", en: "Close", ru: "Закрыть"};
t.about.openButton = {
  it: "Innovation Lab Vicenza",
  en: "About",
  ru: "О проекте"
};
t.about.title = {
  it: "Più informazioni",
  en: "More info",
  ru: "Больше информации",
};
t.about.data = {
  it: "• Dati satellitari: Sentinel-5P (Programma Copernicus)",
  en: "• Satellite Data: Sentinel-5P (Copernicus Programme)",
  ru: "• Спутниковые данные: Sentinel-5P (Программа «Коперник»)"
};
t.about.refs = {
  it: "• Codice sorgente e documentazione: GitHub dell'Innovation Lab Vicenza",
  en: "• Source code and documentation: GitHub of the Innovation Lab Vicenza",
  ru: "• Исходный код и документация: страница Innovation Lab Vicenza на GitHub"
};

// Territory selector
t.aoi = {};
t.aoi.title = {
  en: "Territory of interest",
  ru: "Территория интереса",
  it: "Territorio interessato"
};
t.aoi.admSupCheckbox = {
  en: "Region-wide, Veneto",
  ru: "Весь регион Венето",
  it: "Intera regione del Veneto"
};
t.aoi.selectAdmSup = {
  en: "Select a province",
  ru: "Выберите провинцию",
  it: "Scegli una provincia"
};
t.aoi.selectAdmInf = {
  en: "Select a municipality",
  ru: "Выберите муниципалитет",
  it: "Scegli un comune"
};

// Dataset selector
t.rData = {};
t.rData.title = {
  en: "Observed atmospheric constituent",
  ru: "Наблюдаемый компонент атмосферы",
  it: "Costituente atmosferico osservato"
};
t.rData.compare = {};
t.rData.compare.checkbox = {
  en: "Comparison mode",
  ru: "Режим сравнения",
  it: "Modalità di confronto"
};
t.rData.compare.placeholder = {
  en: "Computing...",
  ru: "Идёт расчёт...",
  it: "Sto calcolando..."
};
t.rData.compare.note = {
  en: "\n relative to the territory mean",
  ru: "\n относительно среднего по территории",
  it: "\n relativo alla media del territorio"
};

t.rData.bands = {};
t.rData.bands.no2 = {};
// Nitrogen dioxide
t.rData.bands.no2.legend = {
  en: "NO₂ tropospheric column density (μmol/m²)",
  ru: "Концентрация NO₂ в столбе тропосферы (мкмоль/м²)",
  it: "Contenuto di NO₂ colonnare in troposfera (μmol/m²)"
};
t.rData.bands.no2.unit = {
  en: "NO₂ (μmol/m²)",
  ru: "NO₂ (мкмоль/м²)",
  it: "NO₂ (μmol/m²)"
};
// Carbon monoxide
t.rData.bands.co = {};
t.rData.bands.co.legend = {
  en: "CO tropospheric column density (μmol/m²)",
  ru: "Концентрация CO в столбе тропосферы (мкмоль/м²)",
  it: "Contenuto di CO colonnare in troposfera (μmol/m²)"
};
t.rData.bands.co.unit = {
  en: "CO (μmol/m²)",
  ru: "CO (мкмоль/м²)",
  it: "CO (μmol/m²)"
};
// Sulfur dioxide
t.rData.bands.so2 = {};
t.rData.bands.so2.legend = {
  en: "SO₂ tropospheric column density (μmol/m²)",
  ru: "Концентрация SO₂ в столбе тропосферы (мкмоль/м²)",
  it: "Contenuto di SO₂ colonnare in troposfera (μmol/m²)"
};
t.rData.bands.so2.unit = {
  en: "SO₂ (μmol/m²)",
  ru: "SO₂ (мкмоль/м²)",
  it: "SO₂ (μmol/m²)"
};
// Methane
t.rData.bands.ch4 = {};
t.rData.bands.ch4.legend = {
  en: "Methane column-averaged dry air mixing ratio (ppbV)",
  ru: "Средний коэффициент смешения метана в столбе атмосферы (ppbV)",
  it: "Rapporto di mescolanza medio di metano in colonna atmosferica (ppbV)"
};
t.rData.bands.ch4.unit = {
  en: "Methane (ppbV)",
  ru: "Метан (ppbV)",
  it: "Metano (ppbV)"
};
// Formaldehyde
t.rData.bands.hcho = {};
t.rData.bands.hcho.legend = {
  en: "Formaldehyde tropospheric column density (μmol/m²)",
  ru: "Концентрация формальдегида в столбе тропосферы (мкмоль/м²)",
  it: "Contenuto di formaldeide colonnare in troposfera (μmol/m²)"
};
t.rData.bands.hcho.unit = {
  en: "Formaldehyde (μmol/m²)",
  ru: "Формальдегид (мкмоль/м²)",
  it: "Formaldeide (μmol/m²)"
};
// Ozone
t.rData.bands.o3 = {};
t.rData.bands.o3.legend = {
  en: "Ozone atmospheric column density (μmol/m²)",
  ru: "Концентрация озона в столбе атмосферы (мкмоль/м²)",
  it: "Contenuto di formaldehyde colonnare in atmosfera (μmol/m²)"
};
t.rData.bands.o3.unit = {
  en: "Ozone (μmol/m²)",
  ru: "Озон (мкмоль/м²)",
  it: "Ozono (μmol/m²)"
};
// Clouds
t.rData.bands.cloud = {  // unitless
  en: "Cloud fraction",
  ru: "Облачность: ",
  it: "Nuvolosità"
};
// Aerosols
t.rData.bands.aerosol = {  // unitless
  en: "Absorbing aerosol index",
  ru: "Индекс поглощения аэрозолей",
  it: "Indice di aerosol assorbenti"
};

// Timeline
t.timeline = {};
t.timeline.title = {
  en: "Select period:",
  ru: "Выберите период:",
  it: "Scegli periodo:"
};
t.timeline.start = {en: "Start: ", ru: "Начало: ", it: "Inizio: "};
t.timeline.end = {en: "End: ", ru: "Конец: ", it: "FIne: "};


// Statistics
t.stats = {};
t.stats.lat = {
  en: "Latitude: ",
  ru: "Широта: ",
  it: "Latitudine: "
};
t.stats.lon = {
  en: "Longitude: ",
  ru: "Долгота: ",
  it: "Longitudine: "
};
t.stats.territoryMean = {
  en: "Territory mean: ",
  ru: "Среднее по территории: ",
  it: "Media del territorio: "
};
t.stats.diff = {};
t.stats.diff.label = {};
t.stats.diff.label[0] = {
  en: "Difference from the selected territory mean: ",
  ru: "Отличие от среднего в выбранной территории: ",
  it: "Differenza dalla media del terrotorio selezionato: "
};
t.stats.diff.label[1] = {
  en: "difference from",
  ru: "разница со средним в",
  it: "diffirenza dalla media in"
};
t.stats.diff.label[2] = {en: "average,", ru: ",", it: ","};
t.stats.diff.mean = {en: "mean: ", ru: "среднее: ", it: "media: "};
t.stats.histStretch = {
  en: "Stretch, X * mean: ",
  ru: "Растянуть, X * среднее: ",
  it: "Fai lo Stretch, X * media: "
};

t.stats.valAtPoint = {};
t.stats.valAtPoint.title = {
  en: "Value at clicked point",
  ru: "Значение в выбранной точке",
  it: "Valore nel punto cliccato"
};
t.stats.valAtPoint.subtitle = {
  en: "Click on a map to get some value...",
  ru: "Кликните на карте для вывода значения...",
  it: "Fai clic per ottenere un valore..."
};
t.stats.valAtPoint.placeholder = {
  en: "Getting the information...",
  ru: "Запрос информации...",
  it: "Sto ottenendo l'informazione..."
};
t.stats.nodata = {
  en: "no valid measurements",
  ru: "нет данных",
  it: "nessun dato"
};

// Export
t.export = {};
t.export.expButton = {en: "Export", ru: "Экспорт", it: "Export"};
t.export.placeholder = {
  en: "Preparing output...",
  ru: "Подготовка вывода...",
  it: "Sto preporando l'output..."
};
t.export.downloadButton = {en: "Download", ru: "Скачать файл", it: "Scarica"};

// Control main panel
t.control = {};
t.control.hide = {
  en: "Hide panel",
  ru: "Свернуть панель",
  it: "Nascondi pannello"
};
t.control.show = {
  en: "Show panel",
  ru: "Показать панель",
  it: "Mostra pannello"
};

/*******************************************************************************
 * Model *
 ******************************************************************************/

// Define a JSON object for storing the data model
var m = {};

m.vData = {};  // vector data

m.vData.zoom = 10;
m.vData.centerPoint = [11.4832, 45.6241];  // Vicenza = [11.4832, 45.6241]
m.vData.regCode = 5;  // Veneto = 5
m.vData.provCode = 24;  // Vicenza = 24

// Superior administrative area (provinces)
m.vData.sup = {};
m.vData.sup.fCol = ee.FeatureCollection("users/VicenzaInnovationLab/istat21-province-g")
                 .filter(ee.Filter.eq("COD_REG", m.vData.regCode));
m.vData.sup.nameField = "DEN_UTS";
m.vData.sup.idField = "COD_UTS";

// Inferior administrative area (municipalities)
m.vData.inf = {};
m.vData.inf.fCol = ee.FeatureCollection("users/VicenzaInnovationLab/istat21-comuni-g")
                 .filter(ee.Filter.eq("COD_REG", m.vData.regCode));
m.vData.inf.nameField = "COMUNE";
m.vData.inf.idField = "PRO_COM";

// Data color palettes
m.palette = {};
m.palette.magma = [
  "000005", "080616", "110b2d", "1e0848", "300060", "43006a", "57096e",
  "6b116f", "81176d", "981d69", "b02363", "c92d59", "e03b50", "ed504a",
  "f66b4d", "fa8657", "fba368", "fbc17d", "fcdf96", "fcffb2"
];
m.palette.viridris = [
  "440154", "46085c", "471063", "481769", "481d6f", "482475", "472a7a",
  "46307e", "453781", "433d84", "414287", "3f4889", "3d4e8a", "3a538b",
  "38598c", "355e8d", "33638d", "31688e", "2e6d8e", "2c718e", "2a768e",
  "297b8e", "27808e", "25848e", "23898e", "218e8d", "20928c", "1f978b",
  "1e9c89", "1fa188", "21a585", "24aa83", "28ae80", "2eb37c", "35b779",
  "3dbc74", "46c06f", "50c46a", "5ac864", "65cb5e", "70cf57", "7cd250",
  "89d548", "95d840", "a2da37", "b0dd2f", "bddf26", "cae11f", "d8e219",
  "e5e419", "f1e51d", "fde725"
];
m.palette.aerosol = [
  "black", "blue", "purple", "cyan",
  "green", "yellow", "red"
];
m.palette.methane = ["purple", "blue", "cyan", "yellow", "orange", "red"];
m.palette.cloud = [
  "ffffff", "fdfdfd", "f7fbff", "deebf7", "c6dbef", "9ecae1",
  "6baed6","4292c6", "2171b5", "08519c", "08306b"
];
m.palette.diff = ["blue", "cyan", "green", "yellow", "red"];

// Data options
m.rData = {};
m.rData["Nitrogen dioxide (NO2)"] = {
  "Near-real-time": "COPERNICUS/S5P/NRTI/L3_NO2",
  Offline: "COPERNICUS/S5P/OFFL/L3_NO2",
  colId: "COPERNICUS/S5P/NRTI/L3_NO2",
  band: "tropospheric_NO2_column_number_density",
  cloudBand: "cloud_fraction",
  maskVal: 0.00007,
  scalar: 1e6,
  legendLabel: t.rData.bands.no2.legend[ln],
  unitsLabel: t.rData.bands.no2.unit[ln],
  visParams: {
    palette: m.palette.magma,
    min: 0.0,
    max: 150.0,
  }
};
m.rData["Carbon monoxide (CO)"] = {
  "Near-real-time": "COPERNICUS/S5P/NRTI/L3_CO",
  Offline: "COPERNICUS/S5P/OFFL/L3_CO",
  colId: "COPERNICUS/S5P/NRTI/L3_CO",
  band: "CO_column_number_density",
  cloudBand: "",
  maskVal: 0,
  scalar: 1e6,
  legendLabel: t.rData.bands.co.legend[ln],
  unitsLabel: t.rData.bands.co.unit[ln],
  visParams: {
    palette: m.palette.viridris,
    min: 0.0,
    max: 40000,
  }
};
m.rData["Sulphur Dioxide (SO2)"] = {
  "Near-real-time": "COPERNICUS/S5P/NRTI/L3_SO2",
  Offline: "COPERNICUS/S5P/OFFL/L3_SO2",
  colId: "COPERNICUS/S5P/NRTI/L3_SO2",
  band: "SO2_column_number_density",
  cloudBand: "cloud_fraction",
  maskVal: 0,
  scalar: 1e6,
  legendLabel: t.rData.bands.so2.legend[ln],
  unitsLabel: t.rData.bands.so2.unit[ln],
  visParams: {
    palette: m.palette.magma,
    min: 0.0,
    max: 2000.0,
  }
};
m.rData["Methane"] = {
    "Near-real-time": "COPERNICUS/S5P/OFFL/L3_CH4",
    Offline: "COPERNICUS/S5P/OFFL/L3_CH4",
    colId: "COPERNICUS/S5P/OFFL/L3_CH4",
    band: "CH4_column_volume_mixing_ratio_dry_air",
    cloudBand: "",
    maskVal: 1750,
    scalar: 1,
    legendLabel: t.rData.bands.ch4.legend[ln],
    unitsLabel: t.rData.bands.ch4.unit[ln],
    visParams: {
      palette: m.palette.methane,
      min: 1700.0,
      max: 1950.0,
    }
};
m.rData["Formaldehyde (HCHO)"] = {
    "Near-real-time": "COPERNICUS/S5P/NRTI/L3_HCHO",
    Offline: "COPERNICUS/S5P/OFFL/L3_HCHO",
    colId: "COPERNICUS/S5P/NRTI/L3_HCHO",
    band: "tropospheric_HCHO_column_number_density",
    cloudBand: "",
    maskVal: 0,
    scalar: 1e6,
    legendLabel: t.rData.bands.hcho.legend[ln],
    unitsLabel: t.rData.bands.hcho.unit[ln],
    visParams: {
      palette: m.palette.aerosol,
      min: 0,
      max: 300,
    }
};
m.rData["Ozone (O3)"] = {
    "Near-real-time": "COPERNICUS/S5P/NRTI/L3_O3",
    Offline: "COPERNICUS/S5P/OFFL/L3_O3",
    colId: "COPERNICUS/S5P/NRTI/L3_O3",
    band: "O3_column_number_density",
    cloudBand: "",
    maskVal: 0,
    scalar: 1e6,
    legendLabel: t.rData.bands.o3.legend[ln],
    unitsLabel: t.rData.bands.o3.unit[ln],
    visParams: {
      palette: m.palette.cloud,
      min: 120000,
      max: 180000,
    }
};
m.rData["Cloud"] = {
    "Near-real-time": "COPERNICUS/S5P/NRTI/L3_CLOUD",
    Offline: "COPERNICUS/S5P/OFFL/L3_CLOUD",
    colId: "COPERNICUS/S5P/NRTI/L3_CLOUD",
    band: "cloud_fraction",
    cloudBand: "",
    maskVal: 0,
    scalar: 1,
    legendLabel: t.rData.bands.cloud[ln],
    unitsLabel: "",
    visParams: {
      palette: m.palette.cloud,
      min: 0,
      max: 1.0,
    }
};
m.rData["Aerosol Index"] = {
    "Near-real-time": "COPERNICUS/S5P/NRTI/L3_AER_AI",
    Offline: "COPERNICUS/S5P/OFFL/L3_AER_AI",
    colId: "COPERNICUS/S5P/NRTI/L3_AER_AI",
    band: "absorbing_aerosol_index",
    cloudBand: "",
    maskVal: 0,
    scalar: 1,
    legendLabel: t.rData.bands.aerosol[ln],
    unitsLabel: "",
    visParams: {
      palette: m.palette.aerosol,
      min: -2.0,
      max: 1.0,
    }
};

// Misc
var subText = "";
var descriptionText = "";

var image;
var aboutPanelVisible = true;

// Styling and display
var regionOpacity = 0.6;
var aoiStyle = {color: "00000050", width: 1, fillColor: "FF000000"};
var showQueryPoint = true;
var queryPointStyle = {color: "red"};  //color, pointSize, pointShape, width, fillColor, styleProperty, neighborhood, lineType


// ### GENERAL ###

var comparisonInfo =
  {
    band: "meanValue",
    unitsLabel: "",
    visParams: {
      palette: m.palette.diff,
    }
  };

// System
var aoiLayerIndex = 0;
var imageLayerIndex = 1;
var scale = 50000;  // higher numbers speed calculation up, smaller numbers make it slower and may result in computation errors
var imageOpacity = regionOpacity;

// Timeline
m.timeline = {};
m.timeline.format = "YYYY-MM-dd";
m.timeline.deltaDays = -10;
m.timeline.today = ee.Date(Date.now()).format(m.timeline.format);
m.timeline.start = ee.Date(Date.now()).advance(m.timeline.deltaDays, "day")
                   .format(m.timeline.format);  // will be reset in the code
m.timeline.end = m.timeline.today;  // will be reset in the code
m.timeline.dateInfo = {
  start: {selected: ""},
  end: {selected: ""}
};

/*******************************************************************************
 * Components *
 ******************************************************************************/

var c = {};

c.dataSelector = ui.Select(Object.keys(m.rData));
c.colSelector = ui.Select(["Near-real-time", "Offline"]);

c.compare = {};
c.compare.checkbox = ui.Checkbox(t.rData.compare.checkbox[ln], false);
c.compare.state = false;

c.download = {};
c.download.button = ui.Button(t.export.expButton[ln]).setDisabled(true);
c.download.urlLabel = ui.Label({value: "Download", style: {shown: false}});
c.meanMultiplierSlider = ui.Slider({
  min: 0.2,
  max: 10,
  step: 0.2,
  style: {width: "60%"}
});
c.regionMeanLabel = ui.Label("", {whiteSpace: "pre"});

// Get data information - used globally in functions
c.dataset = {};
c.dataset.url = ui.url.get("dataset", "Nitrogen dioxide (NO2)");
ui.url.set("dataset", c.dataset.url);  // need to set in case this is the initial load
c.thisData = m.rData[c.dataset.url];
c.dataSelector.set({placeholder: c.dataset.url, value: c.dataset.url});

// Set the datatype
var dataTypeUrl = ui.url.get("datatype", "Near-real-time");
ui.url.set("datatype", dataTypeUrl);
c.thisData.colId = c.thisData[dataTypeUrl];
c.colSelector.set({placeholder: dataTypeUrl, value: dataTypeUrl});

// Get initial map bounds from the url parameter.
var initPoint = ee.Geometry.Point(m.vData.centerPoint).toGeoJSONString();
var center = ui.url.get("center", initPoint);
ui.url.set("center", center);
var zoom = ui.url.get("zoom", m.vData.zoom);
ui.url.set("zoom", zoom);

var startSliderDateUrl = ui.url.get("startdate", m.timeline.start);
ui.url.set("startdate", startSliderDateUrl);

var endSliderDateUrl = ui.url.get("enddate", m.timeline.end);
ui.url.set("enddate", endSliderDateUrl);

m.timeline.dateInfo.start.selected = startSliderDateUrl;
m.timeline.dateInfo.end.selected = endSliderDateUrl;

var meanMultiplier = ui.url.get("meanMultiplier", 2);  // region average multiplier for diff. color stretch
ui.url.set("meanMultiplier", meanMultiplier);  // need to set in case this is the initial load.
c.meanMultiplierSlider.setValue(meanMultiplier, false);

// About panel
c.about = {};
c.about.title = ui.Label(t.about.title[ln]);
c.about.logo = ui.Thumbnail({
  image: ee.Image("users/VicenzaInnovationLab/logo-progetto"),
  params: {min: 0, max: 255}
});
c.about.funding = ui.Label(t.about.funding[ln]);
c.about.panel = ui.Panel([c.about.title, c.about.logo, c.about.funding]);

c.vData = {};
c.vData.regCheckbox = ui.Checkbox({
  label: t.aoi.admSupCheckbox[ln],
  value: true,
  onChange: aoiIsRegionMode,
});

c.vData.municipSelector = ui.Select({
  placeholder: t.aoi.selectAdmSup[ln],
  onChange: municipSelectorHandler
});

c.vData.provSelector = ui.Select({
  placeholder: t.aoi.selectAdmInf[ln],
  onChange: provinceSelectorHandler,
  disabled: true
});

c.vData.panel = ui.Panel([
  ui.Label(t.aoi.title[ln]),
  c.vData.regCheckbox,
  ui.Panel(
    [c.vData.municipSelector, c.vData.provSelector],
    ui.Panel.Layout.flow("horizontal"),
    {stretch: "horizontal"})
]);

var dataSelectPanel = ui.Panel({
  widgets: [
    ui.Label({value: t.rData.title[ln]}),
    ui.Panel(
      [c.dataSelector])
  ],
});

c.dataSelector.onChange(dataSelectorHandler);
c.colSelector.onChange(dataSelectorHandler);

c.compare.checkbox.onChange(modeCheckboxHandler);
c.meanMultiplierSlider.onChange(meanMultiplierHandler);
c.download.button.onClick(exportButtonHandler);

c.timeline = {};

c.timeline.start = {};
c.timeline.start.label = ui.Label(t.timeline.start[ln]);
c.timeline.start.slider = ui.DateSlider({period: 1});
c.timeline.start.panel = ui.Panel({
  widgets: [c.timeline.start.label, c.timeline.start.slider],
  layout: ui.Panel.Layout.flow("horizontal"),
  style: {stretch: "horizontal"}
});

c.timeline.end = {};
c.timeline.end.label = ui.Label(t.timeline.end[ln]);
c.timeline.end.slider = ui.DateSlider({period: 1});
c.timeline.end.panel = ui.Panel({
  widgets: [c.timeline.end.label, c.timeline.end.slider],
  layout: ui.Panel.Layout.flow("horizontal"),
  style: {stretch: "horizontal"}
});

c.timeline.panel = ui.Panel({
  widgets: [
    ui.Label({value: t.timeline.title[ln]}),
    ui.Panel({
      widgets: [c.timeline.start.panel, c.timeline.end.panel],
      style: {stretch: "horizontal"}
    })
  ]
});

var modeSelectPanel = ui.Panel({
  widgets: [c.compare.checkbox, c.regionMeanLabel],//scaleSelector],
  layout: ui.Panel.Layout.flow("horizontal"), style: {stretch: "horizontal"}
});

var meanMultiplierPanel = ui.Panel({
  widgets: [
    ui.Label(t.stats.histStretch[ln]),
    c.meanMultiplierSlider,
  ],
  layout: ui.Panel.Layout.flow("horizontal"), style: {stretch: "horizontal"}
});

var exportPanel = ui.Panel({
  widgets: [c.download.button, c.download.urlLabel],
  layout: ui.Panel.Layout.flow("vertical"), style: {stretch: "horizontal"}
});

var compareModePanel = ui.Panel({
  widgets: [
    meanMultiplierPanel
  ],
  layout: ui.Panel.Layout.flow("vertical"),
  style: {stretch: "horizontal", shown: false}
});

//INSPECTOR PANEL START
var inspectorPanel = ui.Panel({
  layout: ui.Panel.Layout.flow("vertical"),
});
var inspectorTitle = ui.Label({
  value: t.stats.valAtPoint.title[ln],
  style: {margin: "4px 8px", fontWeight: "bold", fontSize: "13px"}
});
inspectorPanel.add(inspectorTitle);

var placeHolder = ui.Label({
  value: t.stats.valAtPoint.subtitle[ln],
  style: {margin: "4px 8px", fontSize: "13px"},
});
inspectorPanel.add(placeHolder);
c.stats = {};
var latLabel = ui.Label({style: {fontSize: "13px", shown: false}});
var lonLabel = ui.Label({style: {fontSize: "13px", shown: false}});
var meanLabel = ui.Label({style: {fontSize: "13px", shown: false}});
var diffLabel = ui.Label({style: {fontSize: "13px", shown: false}});

var pointStatsPanel = ui.Panel({
  widgets: [latLabel, lonLabel, meanLabel, diffLabel],
});
inspectorPanel.add(pointStatsPanel);

//INSPECTOR PANEL END

var panelCloseButton = ui.Button({
  label: t.control.hide[ln],
  onClick: function () {
    panelOpenButton.style().set("shown", true);
    c.controlPanel.style().set("shown", false);
  },
  style: {width: "95%"},
});

c.panelBreaks = createPanelBreaks(6);
c.legend = {};
c.legend.index = 10;

c.controlPanel = ui.Panel({
  widgets:
    [
      c.about.panel,
      c.panelBreaks[0],
      c.vData.panel,
      c.panelBreaks[1],
      dataSelectPanel,
      c.panelBreaks[2],
      modeSelectPanel,
      compareModePanel,
      c.panelBreaks[3],
      c.timeline.panel,
      c.panelBreaks[4],
      ui.Panel(null, null), // legend placeholder
      inspectorPanel,
      c.panelBreaks[5],
      exportPanel,
      c.panelBreaks[6],
      panelCloseButton,
    ],
  style: {width: "23%", margin: "10px", "shown": aboutPanelVisible}
});

var panelOpenButton = ui.Button({
  label: t.control.show[ln],
  onClick: function () {
    panelOpenButton.style().set("shown", false);
    c.controlPanel.style().set("shown", true);
  },
  style: {position: "bottom-left", "shown": !aboutPanelVisible}
});

/*******************************************************************************
 * Composition *
 ******************************************************************************/

/*******************************************************************************
 * Styling *
 ******************************************************************************/

/* Style definition ***********************************************************/
var s = {};
s.dateSlider = {
  width: "50px",
  color: "000",
  fontWeight: "bold",
  padding: "25px 0px 0px 0px"
};

/* Style setting ***************************************************************/

c.about.logo.style().set({width: "200px"});
c.about.title.style().set({
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "left",
  stretch: "horizontal",
  color: "#b71c1a"
});
c.about.funding.style().set({
  fontSize: "10px",
  textAlign: "justify",
  stretch: "horizontal",
  color: "#a0a3a6",
});
c.dataSelector.style().set({width: "45%"});
c.colSelector.style().set({width: "45%"});
c.vData.municipSelector.style().set({width: "45%"});
c.vData.provSelector.style().set({width: "45%"});
c.download.button.style().set({width: "95%"});

c.timeline.start.label.style().set(s.dateSlider);
c.timeline.end.label.style().set(s.dateSlider);

// Minified js-code for the background map
function greyMap(){return[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#737373"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{invert_lightness:!0}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#efefef"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#dadada"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#696969"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#b3b3b3"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#d6d6d6"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"},{weight:1.8}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#d7d7d7"}]},{featureType:"transit",elementType:"all",stylers:[{color:"#808080"},{visibility:"off"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#d3d3d3"}]},{featureType:"water",elementType:"labels.text",stylers:[{color:"#737373"}]}]}

/*******************************************************************************
 * Behaviors *
 ******************************************************************************/

 var currentImage;  // global variable to store current image
 var compareImage;
 var aoi = m.vData.sup.fCol;  // default AOI
 
 // Extract details from a clicked point
 function clearValueAtPointStats() {
   Map.layers().set(imageLayerIndex + 1, null);
   placeHolder.style().set("shown", true);
   placeHolder.setValue(t.stats.valAtPoint.placeholder[ln]);
   latLabel.style().set({"shown": false});
   lonLabel.style().set({"shown": false});
   meanLabel.style().set({"shown": false});
   diffLabel.style().set({"shown": false});
 }
 
 // Dynamically create panel breaks
 function createPanelBreaks(maxVal) {  
   var panelBreaks = [];
   for (var i = 0; i <= maxVal; ++i) {
     panelBreaks[i] = ui.Panel(null, null, {
       stretch: "horizontal",
       height: "1px",
       backgroundColor: "bbb",
       margin: "8px 0px 8px 0px"
     });
   }
   return panelBreaks;
 }
 
 /* Timeline sliders ***********************************************************/
 
 function updateStartSliderDate() {
   c.timeline.start.panel.widgets().get(1).setDisabled(true);
 
   var dateRange = getMinMaxDate();  // min/max date for selected collection
   var firstDate = ee.Date(dateRange.get("firstDate"));
   var firstDateMillis = ee.Date(dateRange.get("firstDate")).millis();
   var lastDate = ee.Date(dateRange.get("lastDate"));
   var lastDateMillis = ee.Date(dateRange.get("lastDate")).millis();
 
   var selectedDate = lastDate.advance(-10, "day");
   var selectedDateMillis = lastDateMillis;
 
   // check if selected date fall within possible date range, else force it
   selectedDate = ee.Date(ee.Algorithms.If(
     firstDateMillis.gt(selectedDateMillis),
     firstDate,
     selectedDate
   ));
   selectedDate = ee.Date(ee.Algorithms.If(
     lastDateMillis.lt(selectedDateMillis),
     lastDate,
     selectedDate
   ));
 
   var startDate = selectedDate;
   var endDate = m.timeline.dateInfo.end.selected;
 
   currentImage = compositeImages(startDate, endDate);
   Map.layers().set(
     imageLayerIndex,
     ui.Map.Layer(currentImage, c.thisData.visParams, null, true, imageOpacity)
   );
 
   ee.Dictionary({
     firstDate: firstDate.format(m.timeline.format),
     lastDate: lastDate.format(m.timeline.format),
     selectedDate: selectedDate.format(m.timeline.format)
   }).evaluate(function (dates) {
     var dateSelector = ui.DateSlider({
       start: dates.firstDate,
       end: dates.lastDate,
       value: dates.selectedDate,
       period: 1,
       style: {stretch: "horizontal"},
       onChange: startDateHandler
     });
     ui.url.set("startdate", dates.selectedDate);  // update date in url
     m.timeline.dateInfo.start.selected = dates.selectedDate;
     c.timeline.start.panel.widgets().set(1, dateSelector);
   });
 }
 
 function updateEndSliderDate() {
   c.timeline.end.panel.widgets().get(1).setDisabled(true);
 
   var dateRange = getMinMaxDate();  // min/max date for selected collection
   var firstDate = ee.Date(dateRange.get("firstDate"));
   var firstDateMillis = ee.Date(dateRange.get("firstDate")).millis();
   var lastDate = ee.Date(dateRange.get("lastDate"))
     .advance(1, "day");
   var lastDateMillis = ee.Date(dateRange.get("lastDate"))
     .advance(1, "day")
     .millis();
 
   var selectedDate = lastDate;
   var selectedDateMillis = lastDateMillis;
 
   // check if selected date fall within possible date range, else force it
   selectedDate = ee.Date(ee.Algorithms.If(
     firstDateMillis.gt(selectedDateMillis),
     firstDate,
     selectedDate
   ));
   selectedDate = ee.Date(ee.Algorithms.If(
     lastDateMillis.lt(selectedDateMillis),
     lastDate,
     selectedDate
   ));
 
 
   var startDate = m.timeline.dateInfo.start.selected;
   var endDate = selectedDate;
 
   currentImage = compositeImages(startDate, endDate);
   Map.layers().set(
     imageLayerIndex,
     ui.Map.Layer(currentImage, c.thisData.visParams, null, true, imageOpacity)
   );
 
   ee.Dictionary({
     firstDate: firstDate.format(m.timeline.format),
     lastDate: lastDate.format(m.timeline.format),
     selectedDate: selectedDate.format(m.timeline.format)
   })
     .evaluate(function (dates) {
       var dateSelector = ui.DateSlider({
         start: dates.firstDate,
         end: dates.lastDate,
         value: dates.selectedDate,
         period: 1,
         style: {stretch: "horizontal"},
         onChange: endDateHandler
       });
       ui.url.set("enddate", dates.selectedDate);  // update date in url
       m.timeline.dateInfo.end.selected = dates.selectedDate;
       c.timeline.end.panel.widgets().set(1, dateSelector);
     });
 }
 
 /* Map Legend *****************************************************************/
 
 // Color bar thumbnail image for use in legend
 function makeColorBarParams(palette) {
   return {
     bbox: [0, 0, 1, 0.1], dimensions: "100x10", format: "png",
     min: 0,
     max: 1,
     palette: palette,
   };
 }
 
 // Color bar for the legend
 function makeLegend(params) {
   var colorBar = ui.Thumbnail({
     image: ee.Image.pixelLonLat().select(0),
     params: makeColorBarParams(params.visParams.palette),
     style: {stretch: "horizontal", margin: "0px 8px", maxHeight: "20px"},
   });
 
   var minValLabel, maxValLabel, medValLabel;
 
   if (c.compare.state) {  // custom legend style for comparison mode
     minValLabel = "< " + params.visParams.min;
     maxValLabel = "> " + "+" + params.visParams.max;
     medValLabel = params.visParams.mean + (" (region mean)");
   } else {  // default legend style
     minValLabel = c.thisData.visParams.min;
     maxValLabel = params.visParams.max;
     medValLabel = (
       c.thisData.visParams.min + ((params.visParams.max - params.visParams.min)/2)
     );
   }
 
   // Create a panel with three numbers for the legend
   var legendLabels = ui.Panel({
     widgets: [
       ui.Label(minValLabel, {margin: "4px 8px", fontSize: "12px"}), //
       ui.Label(medValLabel, {
         margin: "4px 8px",
         textAlign: "center",
         stretch: "horizontal",
         fontSize: "12px"
       }),
       ui.Label(maxValLabel, {margin: "4px 8px", fontSize: "12px"})
     ],
     layout: ui.Panel.Layout.flow("horizontal")
   });
 
   var legendTitle = ui.Label({
     value: params.legendLabel,
     style: {fontWeight: "bold", fontSize: "12px"}
   });
 
   var legendPanel = ui.Panel([legendTitle, colorBar, legendLabels]);
   c.controlPanel.widgets().set(c.legend.index, legendPanel);
 }
 
 /* UI Handlers ****************************************************************/
 
 function aoiIsRegionMode(checked) {
   if (checked) {
     aoi = m.vData.sup.fCol;
     imageOpacity = regionOpacity;
     refreshMap();
     Map.centerObject(aoi, m.vData.zoom);
     c.vData.municipSelector.setValue(null, false);
     c.vData.provSelector.items().reset();
     c.vData.provSelector.setDisabled(true);
   } else {
     imageOpacity = regionOpacity;
   }
 }
 
 function municipSelectorHandler(municipFP) {
   c.vData.regCheckbox.setValue(false, false);
   c.vData.provSelector.setDisabled(false);
   c.vData.provSelector.setPlaceholder("Loading...");
   c.vData.provSelector.items().reset();
 
   var municipProvinces = m.vData.inf.fCol.filterMetadata(
     m.vData.sup.idField, "equals", municipFP
   );
   aoi = municipProvinces;
   refreshMap();
   Map.centerObject(aoi);
 
   var provinceDict = makeNameIdDict(
     municipProvinces, m.vData.inf.nameField, m.vData.inf.idField
   );
   provinceDict.evaluate(function (provinces) {
     var items = [];
     for (var key in provinces) {
       items.push({"label": key, "value": provinces[key]});
     }
     c.vData.provSelector.items().reset(items);
     c.vData.provSelector.setPlaceholder(t.aoi.selectAdmInf[ln]);
   });
 }
 
 function provinceSelectorHandler(provinceGEOID) {
 
   var province = m.vData.inf.fCol.filterMetadata(
     m.vData.inf.idField, "equals", provinceGEOID
   );
   aoi = province;
   refreshMap();
   Map.centerObject(aoi);
 }
 
 function dataSelectorHandler(e) {
   c.download.urlLabel.style().set({shown: false});
 
   if (c.compare.state) {  // turn comparison mode off when changing datasets
     c.compare.checkbox.setValue(false, false);
     c.compare.state = false;
     c.regionMeanLabel.setValue("");
     compareModePanel.style().set({shown: false});
     c.download.urlLabel.style().set({shown: false});
   }
 
   var datasetFromClick = c.dataSelector.getValue();
   var dataTypeFromClick = c.colSelector.getValue();
   ui.url.set("dataset", datasetFromClick);
   ui.url.set("datatype", dataTypeFromClick);
 
   c.thisData = m.rData[datasetFromClick];
   c.thisData.colId = c.thisData[dataTypeFromClick];
 
   ui.url.set("min", c.thisData.visParams.min);
   ui.url.set("max", c.thisData.visParams.max);
 
   // Update map data
   updateStartSliderDate();
   updateEndSliderDate();
 
   // Update legend elements
   makeLegend(c.thisData);
 
   // Reset "Value at point"
   clearValueAtPointStats();
 }
 
 function refreshMap() {  // toDo: use a global image and only clip it to aoi
   var startDate = m.timeline.dateInfo.start.selected;
   var endDate = m.timeline.dateInfo.end.selected;
   currentImage = compositeImages(startDate, endDate);
   Map.layers().set(aoiLayerIndex, ui.Map.Layer(aoi.style(aoiStyle)));
   if (c.compare.state) {
     makeComparison();
   } else {
     Map.layers().set(imageLayerIndex, ui.Map.Layer(currentImage, c.thisData.visParams, null, true, imageOpacity));
   }
 }
 
 function updateDate(startOrEnd) {
   var panel, dateUrlTag, dateInfoDate;
 
   if (startOrEnd == "start date") {
     panel = c.timeline.start.panel;
     dateUrlTag = "startdate";
   } else if (startOrEnd == "end date") {
     panel = c.timeline.end.panel;
     dateUrlTag = "enddate";
   }
 
   var selectedDate = ee.Date(ee.List(panel.widgets().get(1).getValue()).get(0));
   selectedDate.format(m.timeline.format).evaluate(function (date) {
     ui.url.set(dateUrlTag, date);
 
     if (startOrEnd == "start date") {
       m.timeline.dateInfo.start.selected = date;
     } else {
       m.timeline.dateInfo.end.selected = date;
     }
 
     var startDate = m.timeline.dateInfo.start.selected;
     var endDate = m.timeline.dateInfo.end.selected;
 
     currentImage = compositeImages(startDate, endDate);
 
     if (c.compare.state) {
       makeComparison();
     } else {
       Map.layers().set(imageLayerIndex, ui.Map.Layer(currentImage, c.thisData.visParams, null, true, imageOpacity));
     }
   });
 }
 
 function startDateHandler() {
   updateDate("start date");
   c.download.urlLabel.style().set({shown: false});
 }
 
 function endDateHandler() {
   updateDate("end date");
   c.download.urlLabel.style().set({shown: false});
 }
 
 function modeCheckboxHandler(checked) {
   c.compare.state = !c.compare.state;
   print("Comparison: " + c.compare.state);
 
   if (checked) {
     compareModePanel.style().set({shown: true});
     makeComparison();
   } else {
     refreshMap();
     c.regionMeanLabel.setValue("");
     compareModePanel.style().set({shown: false});
     c.download.urlLabel.style().set({shown: false});
   }
   clearValueAtPointStats();
 }
 
 function meanMultiplierHandler(value) {
   meanMultiplier = value;
   comparisonInfo.visParams.min = (-1 * meanMultiplier * comparisonInfo.visParams.mean).toFixed(1);
   comparisonInfo.visParams.max = (1 * meanMultiplier * comparisonInfo.visParams.mean).toFixed(1);
   makeLegend(comparisonInfo);
   Map.layers().set(
     imageLayerIndex,
     ui.Map.Layer(compareImage, comparisonInfo.visParams, null, true, imageOpacity)
   );
 }
 
 function exportButtonHandler() {
   c.download.urlLabel.style().set({
     fontWeight: "bold",
     color: "#ea4f4d",
     shown: true
   });
   c.download.urlLabel.setValue(t.export.placeholder[ln]).setUrl("");
   computeExports();
 }
 
 Map.onClick(function (coords) {
   clearValueAtPointStats();
   placeHolder.style().set("shown", true);
   placeHolder.setValue(t.stats.valAtPoint.placeholder[ln]);
 
   var latitude = t.stats.lat[ln] + coords.lat.toFixed(4);
   var longitude = t.stats.lon[ln] + coords.lon.toFixed(4);
   var clickPoint = ee.Geometry.Point(coords.lon, coords.lat);
   if (showQueryPoint) {
     Map.layers().set(imageLayerIndex + 1, ui.Map.Layer(clickPoint, queryPointStyle));
   }
 
   //We need the layer casted to image to be able to use reduceRegion on it
   var mapValue = currentImage.reduceRegion(ee.Reducer.mean(), clickPoint, 100)
     .get(c.thisData.band + "_mean")
     //Asynchronous Event for the query
     .evaluate(function (val) {
       if (val === null) {
         val = t.stats.nodata[ln];
       } else {
         val = val.toFixed(4);
       }
       var mapvalueText = c.thisData.unitsLabel + ": " + val;
       placeHolder.style().set("shown", false);
       latLabel.setValue(latitude).style().set({"shown": true});
       lonLabel.setValue(longitude).style().set({"shown": true});
       meanLabel.setValue(mapvalueText).style().set({"shown": true});
     });
 
   if (c.compare.state) {
     var diffValue = compareImage.reduceRegion(ee.Reducer.mean(), clickPoint, 100)
       .get("difference")//.aside(print)
       //Asynchronous Event for the query
       .evaluate(function (val) {
         if (val === null) {
           val = "no valid measurements";
         } else {
           val = val.toFixed(4);
         }
         var diffValueText = t.stats.diff.label[0][ln] + val;
         diffLabel.setValue(diffValueText).style().set({"shown": true});
       });
   }
 });
 
 /* Data processors ************************************************************/
 
 // Get min and max dates for dataset
 function getMinMaxDate() {
   var col = ee.ImageCollection(c.thisData.colId);
 
   var dataDateRange = ee.Dictionary(col.reduceColumns(
     {reducer: ee.Reducer.minMax(), selectors: ["system:time_start"]}));
 
   var firstDate = ee.Date(dataDateRange.get("min"));
   var lastDate = ee.Date(dataDateRange.get("max"));
   return ee.Dictionary({firstDate: firstDate, lastDate: lastDate});
 }
 
 function compositeImages(startDate, endDate) {
   var dateFilter = ee.Filter.date(startDate, endDate);
   var col = ee.ImageCollection(c.thisData.colId).filter(dateFilter);
 
   return col.select(c.thisData.band).reduce(ee.Reducer.mean())
     .multiply(c.thisData.scalar)
     .clip(aoi);
 }
 
 function getRegionMean(img, bandName, aoi, scale) {
   var regionMeanValue = img.reduceRegion({
     reducer: ee.Reducer.mean(),
     geometry: aoi,
     scale: scale,
   }).get(bandName + "_mean");
 
   return regionMeanValue;
 }
 
 function makeComparison() {
   c.regionMeanLabel
     .setValue(t.rData.compare.placeholder[ln])
     .style().set({fontWeight: "bold", color: "green"});
   c.meanMultiplierSlider.setDisabled(true);  // while (re)computing mean
 
   var regionMean = getRegionMean(currentImage, c.thisData.band, aoi, scale);
 
   regionMean.evaluate(function (val) {
 
     var meanImage = ee.Image(currentImage).rename("difference");
     compareImage = meanImage.subtract(ee.Image(val)).updateMask(currentImage.mask());
 
     comparisonInfo.visParams.min = (-1 * meanMultiplier * val).toFixed(1);
     comparisonInfo.visParams.max = (1 * meanMultiplier * val).toFixed(1);
     comparisonInfo.visParams.mean = val.toFixed(1);
     comparisonInfo.legendLabel = c.thisData.legendLabel + t.rData.compare.note[ln];
 
     makeLegend(comparisonInfo);
 
     Map.layers().set(imageLayerIndex, ui.Map.Layer(compareImage, comparisonInfo.visParams, null, true, imageOpacity));
 
     c.regionMeanLabel
       .setValue(t.stats.territoryMean[ln] + val.toFixed(1))
       .style().set({fontWeight: "normal", color: "black"});
     c.meanMultiplierSlider.setDisabled(false);
   });
 }
 
 function aggregateStats(localMeanImage, regionMeanValue, regionName) {
   var regionMeanImage = ee.Image(ee.Number(regionMeanValue));
   var differenceImage = currentImage.subtract(regionMeanImage);
 
   var exportImage = localMeanImage.reproject("EPSG:4326", null, scale);
   var exportCompareImage = differenceImage.reproject("EPSG:4326", null, scale);
 
   // generate a new image containing lat/lon of the pixel and reproject it to NO2 projection
   var coordsImage = ee.Image.pixelLonLat().reproject(exportImage.projection());
   var joinedImage = coordsImage.addBands(exportImage).addBands(exportCompareImage);
 
   var valuesList = joinedImage.reduceRegion({
     reducer: ee.Reducer.toList(4),
     scale: scale,
     geometry: aoi,
     maxPixels: 1e13,
   }).values().get(0);
 
   valuesList = ee.List(valuesList);  // Cast valuesList
 
   var diffLabel = [
     t.stats.diff.label[1][ln],
     regionName.replace(/_/g, ", "),
     t.stats.diff.label[2][ln],
     c.thisData.unitsLabel
   ].join(" ");
   print(diffLabel);
   var meanLabel = t.stats.diff.mean[ln] + c.thisData.unitsLabel;
 
   var exportFeatures = ee.FeatureCollection(valuesList.map(function (el) {
     el = ee.List(el);  // cast every element of the list
     var geom = ee.Geometry.Point([ee.Number(el.get(0)), ee.Number(el.get(1))]);
 
     var attributes = {};
     attributes[diffLabel] = ee.Number(el.get(3));
     attributes[meanLabel] = ee.Number(el.get(2));
     attributes.latitude = ee.Number(el.get(1)).format("%.2f");
     attributes.longitude = ee.Number(el.get(0)).format("%.2f");
 
     return ee.Feature(geom, attributes);
   }));
 
   return exportFeatures;
 }
 
 
 function computeExports() {
   var regionMeanValue = getRegionMean(currentImage, c.thisData.band, aoi, scale);
 
   var provinceName = getLabelByValue(c.vData.provSelector, c.vData.provSelector.getValue());
   var municipName = getLabelByValue(c.vData.municipSelector, c.vData.municipSelector.getValue());
   var regionNamePrefix = [provinceName, municipName].filter(Boolean).join("_");
 
   var exportFeatures = ee.FeatureCollection(aggregateStats(currentImage, regionMeanValue, regionNamePrefix))
     .select([".*"], null, false);  // drop .geo column with geometry
 
 
   // returns download URL of the image for the aoi.
   exportFeatures.getDownloadURL({
     format: "csv",
     filename: [regionNamePrefix, c.dataSelector.getValue(), c.colSelector.getValue(), ui.url.get("startdate"), "-", ui.url.get("enddate")].join("_"),
     callback: setDownloadUrl  // pass url to setDownloadUrl when result is ready
   });
 }
 
 function makeNameIdDict(featureColl, nameAttribute, idAttribute) {
   var names = ee.List(featureColl.aggregate_array(nameAttribute));
   var ids = ee.List(featureColl.aggregate_array(idAttribute));
   var nameIdDict = ee.Dictionary.fromLists(names, ids);
   return nameIdDict;
 }
 
 function setMunicipalities() {
   var municipDict = makeNameIdDict(m.vData.sup.fCol, m.vData.sup.nameField, m.vData.sup.idField);
   municipDict.evaluate(function (municips) {
     var items = [];
     for (var key in municips) {
       items.push({"label": key, "value": municips[key]});
     }
     c.vData.municipSelector.items().reset(items);
     c.vData.municipSelector.setValue(m.vData.provCode);  // setting default province
   });
 }
 
 function getLabelByValue(selector, value) {  // get selector label by value
   var items = selector.items().getJsArray();
   for (var x = 0; x < items.length; x++) {
     if (items[x].value == value) {
       return items[x].label;
     }
   }
   return null;  // if selector is empty or does not contain the requested value
 }
 
 function setDownloadUrl(url) {
   c.download.urlLabel.setValue(t.export.downloadButton[ln]);
   c.download.urlLabel.setUrl(url);
 }

/*******************************************************************************
 * Initialize *
 ******************************************************************************/

 setMunicipalities();
 c.timeline.start.slider.setDisabled(true);
 c.timeline.end.slider.setDisabled(true);

// Set map properties
Map.setOptions({
  mapTypeId: "Grey Map",
  styles: {"Grey Map": greyMap()},
  types: ["Grey Map"]
});
Map.setControlVisibility({all: false, mapTypeControl: true});
Map.style().set("cursor", "crosshair");


Map.centerObject(aoi, m.vData.zoom);

// Set url params for map bounds.
Map.onChangeBounds(function (e) {
  ui.url.set("center", ee.Geometry.Point(e.lon, e.lat).toGeoJSONString());
  ui.url.set("zoom", e.zoom);
});

ui.root.insert(0, c.controlPanel);
Map.add(panelOpenButton);

// Update map data
updateStartSliderDate();
updateEndSliderDate();
c.download.button.setDisabled(false);  // mean image is ready, so enable export

// Update legend elements
makeLegend(c.thisData);

// Add AOI
Map.layers().set(aoiLayerIndex, ui.Map.Layer(aoi.style(aoiStyle)));
