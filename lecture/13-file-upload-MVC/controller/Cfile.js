exports.getMain = (req, res) => {
  res.render('index', { title: '파일 업로드를 배워보자!!!' });
};

exports.postUploadSingle = (req, res) => {
  res.render('uploaded', { title: req.body.title, src: req.file.path });
};

exports.postUploadArray = (req, res) => {
  console.log(req.body); // { title: '파일 2개 업로드 중!!' }
  console.log(req.files); // [ {}, {}, ... ] 배열 형태로 각 파일 정보를 저장

  res.send('Success Upload!! (multiple)');
};

exports.postUploadFields = (req, res) => {
  console.log(req.body); // { title1: '개3', title2: '개2' }
  console.log(req.files); // { kiwi: [ {}, ... ], ornage: [ {}, ... ] }

  res.send('Success Upload!! (multiple2)');
};

exports.postDynamicFile = (req, res) => {
  res.send(req.file);
};





