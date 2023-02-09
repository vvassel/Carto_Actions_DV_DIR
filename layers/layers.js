var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.576000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_REGION_1 = new ol.format.GeoJSON();
var features_REGION_1 = format_REGION_1.readFeatures(json_REGION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGION_1.addFeatures(features_REGION_1);
var lyr_REGION_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REGION_1, 
                style: style_REGION_1,
                interactive: true,
                title: '<img src="styles/legend/REGION_1.png" /> REGION'
            });
var format_DIR_2 = new ol.format.GeoJSON();
var features_DIR_2 = format_DIR_2.readFeatures(json_DIR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIR_2.addFeatures(features_DIR_2);
var lyr_DIR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIR_2, 
                style: style_DIR_2,
                interactive: true,
    title: 'DIR<br />\
    <img src="styles/legend/DIR_2_0.png" /> DIRA<br />\
    <img src="styles/legend/DIR_2_1.png" /> DIRCE<br />\
    <img src="styles/legend/DIR_2_2.png" /> DIRCO<br />\
    <img src="styles/legend/DIR_2_3.png" /> DIRE<br />\
    <img src="styles/legend/DIR_2_4.png" /> DIRIF<br />\
    <img src="styles/legend/DIR_2_5.png" /> DIRMC<br />\
    <img src="styles/legend/DIR_2_6.png" /> DIRMED<br />\
    <img src="styles/legend/DIR_2_7.png" /> DIRN<br />\
    <img src="styles/legend/DIR_2_8.png" /> DIRNO<br />\
    <img src="styles/legend/DIR_2_9.png" /> DIRO<br />\
    <img src="styles/legend/DIR_2_10.png" /> DIRSO<br />\
    <img src="styles/legend/DIR_2_11.png" /> <br />'
        });
var format_Autre_3 = new ol.format.GeoJSON();
var features_Autre_3 = format_Autre_3.readFeatures(json_Autre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autre_3.addFeatures(features_Autre_3);
var lyr_Autre_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Autre_3, 
                style: style_Autre_3,
                interactive: true,
                title: '<img src="styles/legend/Autre_3.png" /> Autre'
            });
var format_Fenaison_4 = new ol.format.GeoJSON();
var features_Fenaison_4 = format_Fenaison_4.readFeatures(json_Fenaison_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fenaison_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fenaison_4.addFeatures(features_Fenaison_4);
var lyr_Fenaison_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fenaison_4, 
                style: style_Fenaison_4,
                interactive: true,
                title: '<img src="styles/legend/Fenaison_4.png" /> Fenaison'
            });
var format_Arbres_5 = new ol.format.GeoJSON();
var features_Arbres_5 = format_Arbres_5.readFeatures(json_Arbres_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arbres_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbres_5.addFeatures(features_Arbres_5);
var lyr_Arbres_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arbres_5, 
                style: style_Arbres_5,
                interactive: true,
                title: '<img src="styles/legend/Arbres_5.png" /> Arbres'
            });
var format_Ecopturage_6 = new ol.format.GeoJSON();
var features_Ecopturage_6 = format_Ecopturage_6.readFeatures(json_Ecopturage_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecopturage_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecopturage_6.addFeatures(features_Ecopturage_6);
var lyr_Ecopturage_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ecopturage_6, 
                style: style_Ecopturage_6,
                interactive: true,
                title: '<img src="styles/legend/Ecopturage_6.png" /> Ecopâturage'
            });
var format_Ruches_7 = new ol.format.GeoJSON();
var features_Ruches_7 = format_Ruches_7.readFeatures(json_Ruches_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruches_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruches_7.addFeatures(features_Ruches_7);
var lyr_Ruches_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ruches_7, 
                style: style_Ruches_7,
                interactive: true,
                title: '<img src="styles/legend/Ruches_7.png" /> Ruches'
            });
var format_Pollinisateurssauvages_8 = new ol.format.GeoJSON();
var features_Pollinisateurssauvages_8 = format_Pollinisateurssauvages_8.readFeatures(json_Pollinisateurssauvages_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pollinisateurssauvages_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pollinisateurssauvages_8.addFeatures(features_Pollinisateurssauvages_8);
var lyr_Pollinisateurssauvages_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pollinisateurssauvages_8, 
                style: style_Pollinisateurssauvages_8,
                interactive: true,
                title: '<img src="styles/legend/Pollinisateurssauvages_8.png" /> Pollinisateurs sauvages'
            });
var format_EEE_9 = new ol.format.GeoJSON();
var features_EEE_9 = format_EEE_9.readFeatures(json_EEE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EEE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EEE_9.addFeatures(features_EEE_9);
var lyr_EEE_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EEE_9, 
                style: style_EEE_9,
                interactive: true,
                title: '<img src="styles/legend/EEE_9.png" /> EEE'
            });

lyr_OSMStandard_0.setVisible(true);lyr_REGION_1.setVisible(true);lyr_DIR_2.setVisible(true);lyr_Autre_3.setVisible(true);lyr_Fenaison_4.setVisible(true);lyr_Arbres_5.setVisible(true);lyr_Ecopturage_6.setVisible(true);lyr_Ruches_7.setVisible(true);lyr_Pollinisateurssauvages_8.setVisible(true);lyr_EEE_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_REGION_1,lyr_DIR_2,lyr_Autre_3,lyr_Fenaison_4,lyr_Arbres_5,lyr_Ecopturage_6,lyr_Ruches_7,lyr_Pollinisateurssauvages_8,lyr_EEE_9];
lyr_REGION_1.set('fieldAliases', {'ID': 'ID', 'NOM_REG_M': 'NOM_REG_M', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', });
lyr_DIR_2.set('fieldAliases', {'fid': 'fid', 'route': 'route', 'lib_rte': 'lib_rte', 'dist_deb': 'dist_deb', 'dist_fin': 'dist_fin', 'portee': 'portee', 'gestionnai': 'gestionnai', 'nom_plo_in': 'nom_plo_in', 'nom_plo_fi': 'nom_plo_fi', 'NOM_REG_M': 'NOM_REG_M', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', 'length': 'length', });
lyr_Autre_3.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'DISTRICT': 'DISTRICT', 'gestionnai': 'gestionnai', 'Année': 'Année', 'Commentair': 'Commentair', 'Catégorie': 'Catégorie', 'Pratique': 'Pratique', 'Route': 'Route', });
lyr_Fenaison_4.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'DISTRICT': 'DISTRICT', 'gestionnai': 'gestionnai', 'Année': 'Année', 'Commentair': 'Commentair', 'Catégorie': 'Catégorie', 'Pratique': 'Pratique', 'Route': 'Route', });
lyr_Arbres_5.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'DISTRICT': 'DISTRICT', 'gestionnai': 'gestionnai', 'Année': 'Année', 'Commentair': 'Commentair', 'Catégorie': 'Catégorie', 'Pratique': 'Pratique', 'Route': 'Route', });
lyr_Ecopturage_6.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'DISTRICT': 'DISTRICT', 'gestionnai': 'gestionnai', 'Année': 'Année', 'Commentair': 'Commentair', 'Catégorie': 'Catégorie', 'Pratique': 'Pratique', 'Route': 'Route', });
lyr_Ruches_7.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'DISTRICT': 'DISTRICT', 'gestionnai': 'gestionnai', 'Année': 'Année', 'Commentair': 'Commentair', 'Catégorie': 'Catégorie', 'Pratique': 'Pratique', 'Route': 'Route', });
lyr_Pollinisateurssauvages_8.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'DISTRICT': 'DISTRICT', 'gestionnai': 'gestionnai', 'Année': 'Année', 'Commentair': 'Commentair', 'Catégorie': 'Catégorie', 'Pratique': 'Pratique', 'Route': 'Route', });
lyr_EEE_9.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'DISTRICT': 'DISTRICT', 'gestionnai': 'gestionnai', 'Année': 'Année', 'Commentair': 'Commentair', 'Catégorie': 'Catégorie', 'Pratique': 'Pratique', 'Route': 'Route', });
lyr_REGION_1.set('fieldImages', {'ID': 'TextEdit', 'NOM_REG_M': 'TextEdit', 'NOM_REG': 'TextEdit', 'INSEE_REG': 'TextEdit', });
lyr_DIR_2.set('fieldImages', {'fid': 'TextEdit', 'route': 'TextEdit', 'lib_rte': 'TextEdit', 'dist_deb': 'TextEdit', 'dist_fin': 'TextEdit', 'portee': 'TextEdit', 'gestionnai': 'TextEdit', 'nom_plo_in': 'TextEdit', 'nom_plo_fi': 'TextEdit', 'NOM_REG_M': 'TextEdit', 'NOM_REG': 'TextEdit', 'INSEE_REG': 'TextEdit', 'length': 'TextEdit', });
lyr_Autre_3.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'DISTRICT': 'TextEdit', 'gestionnai': 'TextEdit', 'Année': 'Range', 'Commentair': 'TextEdit', 'Catégorie': 'TextEdit', 'Pratique': 'TextEdit', 'Route': 'TextEdit', });
lyr_Fenaison_4.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'DISTRICT': 'TextEdit', 'gestionnai': 'TextEdit', 'Année': 'Range', 'Commentair': 'TextEdit', 'Catégorie': 'TextEdit', 'Pratique': 'TextEdit', 'Route': 'TextEdit', });
lyr_Arbres_5.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'DISTRICT': 'TextEdit', 'gestionnai': 'TextEdit', 'Année': 'Range', 'Commentair': 'TextEdit', 'Catégorie': 'TextEdit', 'Pratique': 'TextEdit', 'Route': 'TextEdit', });
lyr_Ecopturage_6.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'DISTRICT': 'TextEdit', 'gestionnai': 'TextEdit', 'Année': 'Range', 'Commentair': 'TextEdit', 'Catégorie': 'TextEdit', 'Pratique': 'TextEdit', 'Route': 'TextEdit', });
lyr_Ruches_7.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'DISTRICT': 'TextEdit', 'gestionnai': 'TextEdit', 'Année': 'Range', 'Commentair': 'TextEdit', 'Catégorie': 'TextEdit', 'Pratique': 'TextEdit', 'Route': 'TextEdit', });
lyr_Pollinisateurssauvages_8.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'DISTRICT': 'TextEdit', 'gestionnai': 'TextEdit', 'Année': 'Range', 'Commentair': 'TextEdit', 'Catégorie': 'TextEdit', 'Pratique': 'TextEdit', 'Route': 'TextEdit', });
lyr_EEE_9.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'DISTRICT': 'TextEdit', 'gestionnai': 'TextEdit', 'Année': 'Range', 'Commentair': 'TextEdit', 'Catégorie': 'TextEdit', 'Pratique': 'TextEdit', 'Route': 'TextEdit', });
lyr_REGION_1.set('fieldLabels', {'ID': 'no label', 'NOM_REG_M': 'inline label', 'NOM_REG': 'no label', 'INSEE_REG': 'no label', });
lyr_DIR_2.set('fieldLabels', {'fid': 'no label', 'route': 'no label', 'lib_rte': 'no label', 'dist_deb': 'no label', 'dist_fin': 'no label', 'portee': 'no label', 'gestionnai': 'no label', 'nom_plo_in': 'no label', 'nom_plo_fi': 'no label', 'NOM_REG_M': 'no label', 'NOM_REG': 'no label', 'INSEE_REG': 'no label', 'length': 'no label', });
lyr_Autre_3.set('fieldLabels', {'id': 'no label', 'nom': 'inline label', 'DISTRICT': 'inline label', 'gestionnai': 'inline label', 'Année': 'inline label', 'Commentair': 'inline label', 'Catégorie': 'inline label', 'Pratique': 'inline label', 'Route': 'inline label', });
lyr_Fenaison_4.set('fieldLabels', {'id': 'no label', 'nom': 'inline label', 'DISTRICT': 'inline label', 'gestionnai': 'inline label', 'Année': 'inline label', 'Commentair': 'inline label', 'Catégorie': 'inline label', 'Pratique': 'inline label', 'Route': 'inline label', });
lyr_Arbres_5.set('fieldLabels', {'id': 'no label', 'nom': 'inline label', 'DISTRICT': 'inline label', 'gestionnai': 'inline label', 'Année': 'inline label', 'Commentair': 'inline label', 'Catégorie': 'inline label', 'Pratique': 'inline label', 'Route': 'inline label', });
lyr_Ecopturage_6.set('fieldLabels', {'id': 'no label', 'nom': 'inline label', 'DISTRICT': 'inline label', 'gestionnai': 'inline label', 'Année': 'inline label', 'Commentair': 'inline label', 'Catégorie': 'inline label', 'Pratique': 'inline label', 'Route': 'inline label', });
lyr_Ruches_7.set('fieldLabels', {'id': 'no label', 'nom': 'inline label', 'DISTRICT': 'inline label', 'gestionnai': 'inline label', 'Année': 'inline label', 'Commentair': 'inline label', 'Catégorie': 'inline label', 'Pratique': 'inline label', 'Route': 'inline label', });
lyr_Pollinisateurssauvages_8.set('fieldLabels', {'id': 'no label', 'nom': 'inline label', 'DISTRICT': 'inline label', 'gestionnai': 'inline label', 'Année': 'inline label', 'Commentair': 'inline label', 'Catégorie': 'inline label', 'Pratique': 'inline label', 'Route': 'inline label', });
lyr_EEE_9.set('fieldLabels', {'id': 'no label', 'nom': 'inline label', 'DISTRICT': 'inline label', 'gestionnai': 'inline label', 'Année': 'inline label', 'Commentair': 'inline label', 'Catégorie': 'inline label', 'Pratique': 'inline label', 'Route': 'inline label', });
lyr_EEE_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});