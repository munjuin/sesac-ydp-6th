const express = require('express');
const router = express.Router();

const { getMain, postUploadSingle, postUploadArray, postUploadFields, postDynamicFile } = require('../controller/Cfile');
const { uploadSingle, uploadArray, uploadFields, uploadDynamicFile } = require('../middlewares/upload-middleware');

router.get('/', getMain);

router.post('/upload', uploadSingle, postUploadSingle);

router.post('/upload/array', uploadArray, postUploadArray);

router.post('/upload/fields', uploadFields, postUploadFields);

router.post('/dynamicFile', uploadDynamicFile, postDynamicFile);

module.exports = router;