exports.getMain = (req, res)=>{
  res.render('index', { title: '파일 업로드를 배워보자!!!' });
};

exports.postUploadSingle = (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.render('uploaded', { title: req.body.title, src: req.file.path });
};

exports.postUploadArray = (req, res) => {
  console.log(req.body);
  console.log(req.files);

  res.send('Success Upload!! (multiple)');
};

exports.postUploadFields = (req, res) => {
  console.log(req.body);
  console.log(req.files);

  res.send('Success Upload!! (multiple2)');
};

exports.postDynamicFile = (req, res) => {
  res.send(req.file);
};

