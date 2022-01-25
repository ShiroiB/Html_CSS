var video = document.querySelector('video')
navigator.mediaDevices.getUserMedia(
  {video:true})
.then(stream =>{
video.srcObject =stream;
video.play();
}).catch(error => {
  console.log(error);
})

document.querySelector('button').addEventListener('click',()=>{
  var canvas = document.querySelector('canvas')
  canvas.height= video.videoHeight;
  canvas.width=video.videoWidth;
  var context= canvas.getContext('2d');
  context.drawImage(video,0,0);
  var foto = document.createElement('a');
  foto.download ='polaroid.png';
  foto.href = canvas.toDataURL();
  foto.textContent='download';
  document.body.append(foto);
  
});
