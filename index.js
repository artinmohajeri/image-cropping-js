const btn = document.querySelector("button")
const image = document.querySelector("#input")

const cropper = new Cropper(image,{
    aspectRatio : 1,
    viewMode: 1,
})

btn.addEventListener("click",function(){
    let croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
    document.getElementById('output').setAttribute("src",croppedImage);
})

