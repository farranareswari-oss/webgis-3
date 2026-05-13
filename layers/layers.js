var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_Praktikum7WebGISaksesibilitas_univgpkg_1 = new ol.format.GeoJSON();
var features_Praktikum7WebGISaksesibilitas_univgpkg_1 = format_Praktikum7WebGISaksesibilitas_univgpkg_1.readFeatures(json_Praktikum7WebGISaksesibilitas_univgpkg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Praktikum7WebGISaksesibilitas_univgpkg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Praktikum7WebGISaksesibilitas_univgpkg_1.addFeatures(features_Praktikum7WebGISaksesibilitas_univgpkg_1);
var lyr_Praktikum7WebGISaksesibilitas_univgpkg_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Praktikum7WebGISaksesibilitas_univgpkg_1, 
                style: style_Praktikum7WebGISaksesibilitas_univgpkg_1,
                popuplayertitle: 'Praktikum 7 - WebGIS/aksesibilitas_univ.gpkg',
                interactive: true,
    title: 'Praktikum 7 - WebGIS/aksesibilitas_univ.gpkg<br />\
    <img src="styles/legend/Praktikum7WebGISaksesibilitas_univgpkg_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/Praktikum7WebGISaksesibilitas_univgpkg_1_1.png" /> 2,4km (30 menit)<br />' });
var format_NAMAKAMPUSSURABAYA_2 = new ol.format.GeoJSON();
var features_NAMAKAMPUSSURABAYA_2 = format_NAMAKAMPUSSURABAYA_2.readFeatures(json_NAMAKAMPUSSURABAYA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAMAKAMPUSSURABAYA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAMAKAMPUSSURABAYA_2.addFeatures(features_NAMAKAMPUSSURABAYA_2);
var lyr_NAMAKAMPUSSURABAYA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAMAKAMPUSSURABAYA_2, 
                style: style_NAMAKAMPUSSURABAYA_2,
                popuplayertitle: 'NAMA KAMPUS SURABAYA',
                interactive: true,
    title: 'NAMA KAMPUS SURABAYA<br />\
    <img src="styles/legend/NAMAKAMPUSSURABAYA_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/NAMAKAMPUSSURABAYA_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/NAMAKAMPUSSURABAYA_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/NAMAKAMPUSSURABAYA_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/NAMAKAMPUSSURABAYA_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/NAMAKAMPUSSURABAYA_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/NAMAKAMPUSSURABAYA_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/NAMAKAMPUSSURABAYA_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/NAMAKAMPUSSURABAYA_2_8.png" /> UPNV Jatim<br />' });

lyr_WazeWorld_0.setVisible(true);lyr_Praktikum7WebGISaksesibilitas_univgpkg_1.setVisible(true);lyr_NAMAKAMPUSSURABAYA_2.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_Praktikum7WebGISaksesibilitas_univgpkg_1,lyr_NAMAKAMPUSSURABAYA_2];
lyr_Praktikum7WebGISaksesibilitas_univgpkg_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_NAMAKAMPUSSURABAYA_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'RANKING QS': 'RANKING QS', 'TAHUN BERDIRI': 'TAHUN BERDIRI', 'FAKULTAS': 'FAKULTAS', 'FOTO': 'FOTO', });
lyr_Praktikum7WebGISaksesibilitas_univgpkg_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_NAMAKAMPUSSURABAYA_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'RANKING QS': 'TextEdit', 'TAHUN BERDIRI': 'TextEdit', 'FAKULTAS': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_Praktikum7WebGISaksesibilitas_univgpkg_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_NAMAKAMPUSSURABAYA_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'hidden field', 'Kampus': 'inline label - always visible', 'RANKING QS': 'inline label - always visible', 'TAHUN BERDIRI': 'inline label - always visible', 'FAKULTAS': 'header label - always visible', 'FOTO': 'no label', });
lyr_NAMAKAMPUSSURABAYA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});