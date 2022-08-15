// function loveMsg(){
//     document.getElementById('msg').innerText = "I love YoU"
// }
document.getElementById('yes-btn').addEventListener('click', function(){
    // document.getElementById('msg').innerText= 'I love YOu';
    commonfun('msg')
})

function ofCourse(id){
    // document.getElementById('msg').innerText= 'I love YOu More';
    commonfun('msg')
}

function commonfun(id){
    document.getElementById(id).innerText= 'I Love YoU More 💝 ';
    document.getElementById(id).style.fontSize= '30px';
}