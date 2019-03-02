function changePhoto(val){
    let image = $("#contactUsImage");
    image.attr('src','../img/' + val.value + '.jpg');
}