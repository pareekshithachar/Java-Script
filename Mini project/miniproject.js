var image;
var image1;
function doChange(){
  var canvas= document.getElementById("can1");
  var input= document.getElementById("finput1");

  image= new SimpleImage(input);
  image.drawTo(canvas);
}
function doChange1(){
  var canvas= document.getElementById("can2");
  var input= document.getElementById("finput2");

  image1= new SimpleImage(input);
  image1.drawTo(canvas);
}
function doGreen(){
  if(image==null ||! image.complete()){
    alert("Please upload foreground image")
  }
  if(image1==null ||! image1.complete()){
    alert("Please upload background image")
  }
  image1.setSize(image.getWidth(),image.getHeight())
  for(var pixel of image.values()){
    if(pixel.getGreen()> pixel.getRed()+pixel.getBlue()){
      var x= pixel.getX();
      var y= pixel.getY();
      var img=image1.getPixel(x,y);
      image.setPixel(x,y,img);
    }
  }
  var can= document.getElementById("can3");
  image.drawTo(can);
}
