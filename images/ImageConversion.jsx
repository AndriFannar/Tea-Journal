#target photoshop

var inputFolder = Folder.selectDialog("Select the folder with images");
var outputFolder = Folder.selectDialog("Select the folder to save resized images");

if (inputFolder && outputFolder) {
    var files = inputFolder.getFiles(/\.(jpg|jpeg|png|heic|tif|tiff)$/i);
    var maxWidth = 2000; // max width in pixels
    var jpgQuality = 10; // 0-12

    for (var i = 0; i < files.length; i++) {
        var doc = open(files[i]);

        // Resize
        if (doc.width > maxWidth) {
            var aspectRatio = doc.height / doc.width;
            doc.resizeImage(UnitValue(maxWidth, "px"), UnitValue(maxWidth * aspectRatio, "px"), null, ResampleMethod.BICUBIC);
        }

        // Save as JPG
        var jpgOptions = new JPEGSaveOptions();
        jpgOptions.quality = jpgQuality;

        var jpgFile = new File(outputFolder + "/" + files[i].name.replace(/\.[^\.]+$/, ".jpg"));
        doc.saveAs(jpgFile, jpgOptions, true, Extension.LOWERCASE);

        doc.close(SaveOptions.DONOTSAVECHANGES);
    }

    alert("Finished converting images!");
}
