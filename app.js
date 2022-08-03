var content = document.querySelector(".content");
var input = document.querySelector(".content input");
var closeIcon = document.querySelector(".content li i");
var btnRemoveAll =document.querySelector(".remove-all")

var tags = [];

function render(){
    content.innerHTML = '';
    for(let i=0; i < tags.length; i++ ){
        content.innerHTML +=
        `<li>
            ${tags[i]}
            <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
        </li>`
    }
    content.appendChild(input);
    input.focus();
}

function removeTag(index){
    tags.splice(index, 1);
    render();
}

input.addEventListener('keydown', function(e){
    if(e.key == 'Enter') {
        if (!tags.includes(input.value.trim())) {
            tags.push(input.value.trim());
            render();
            input.focus();
        }
        //input.value = ''; dù isDuplicate true or false
        input.value = '';
    }
})

btnRemoveAll.addEventListener('click', function(){
    tags = [];
    render();
})





