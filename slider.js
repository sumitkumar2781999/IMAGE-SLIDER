let images = [
    'https://c4.wallpaperflare.com/wallpaper/175/985/284/abstract-3d-digital-art-dark-wallpaper-preview.jpg' ,
    'https://c4.wallpaperflare.com/wallpaper/403/855/787/sword-blood-fantasy-armor-wallpaper-preview.jpg' ,
    'https://c4.wallpaperflare.com/wallpaper/663/947/813/oldboy-japanese-digital-art-artwork-wallpaper-preview.jpg' ,
    'https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg',
    'https://c4.wallpaperflare.com/wallpaper/133/969/139/artwork-nature-landscape-fantasy-art-wallpaper-thumb.jpg'
]
// console.log(images.length);
var num = 0;

function next(){
    var slider = document.getElementById('slider');
    num++
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}
function prev(){
    var slider = document.getElementById('slider');
    num--
    if(num < 0){
        num = images.length-1;
    }
    slider.src = images[num];

}