


app.post("/upload", uploadDetail.single('userfile'), );

app.post('/upload/array', uploadDetail.array('banana'), );

app.post('/upload/fields', uploadDetail.fields([{ name: 'kiwi' }, { name: 'orange' }]), );



app.post('/dynamicFile', uploadDetail.single('thumbnail'), )
