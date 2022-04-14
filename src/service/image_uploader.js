class ImageUploader{
  async upload(file){
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'earcfl7m');
    const result = await fetch(   
      'https://api.cloudinary.com/v1_1/dt0anzrlz/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}
export default ImageUploader