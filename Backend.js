var form;
function doPost(e){ 
  var p = e.parameters;
  var name = String(p['name']);
  var key = String(p['key']);
  return HtmlService.createHtmlOutput(myFunction(name,key));
}
function creatF(stt,a,b,c,d){
  var item = form.addMultipleChoiceItem();
  item.setTitle('Câu ' + String(stt+1))
      .setChoices([
        item.createChoice('A',a),
        item.createChoice('B',b),
        item.createChoice('C',c),
        item.createChoice('D',d)
      ])
      .setPoints(1)
      .showOtherOption(true);
}
function myFunction(name,key) {
  form = FormApp.create(name);   // tao mot form
  var item = form.addParagraphTextItem();
  item.setTitle('Name');
  var item = form.addParagraphTextItem();
  item.setTitle('Class');
  form.setIsQuiz(true); // tao che do kiem tra
  for( var i = 0 ; i < key.length ; i++){
    creatF(i,key[i]=='a',key[i]=='b',key[i]=='c',key[i]=='d')
  }
  return 'Link Kiểm Tra : ' + form.getPublishedUrl() + '<br>' + 'Link Chỉnh Sửa : ' + form.getEditUrl();
}
