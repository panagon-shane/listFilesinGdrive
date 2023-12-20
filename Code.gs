function list() {
  var sheet = SpreadsheetApp.getActiveSheet();  
  sheet.appendRow(["Filename", "Link"]);  
  var folder = DriveApp.getFolderById('1T3tjP2YwJpv0TlncAa50HXOXTtYZBaA1'); 
  var files = folder.getFiles();
  
  while (files.hasNext()) {
    var file = files.next();  
    var fileName = file.getName();
    var fileId = file.getId();
    var downloadUrl = "https://drive.google.com/uc?export=download&id=" + fileId;
    sheet.appendRow([fileName, downloadUrl]);}} 
