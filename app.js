const menuBars = document.querySelector('.menu-bars');
const dropDownList = document.querySelector('.drop-down-list');
const list = document.querySelector('.list');
const featureList = document.querySelector('.feature-list');
const chevronDown = document.querySelector('.bi-chevron-down');
const info = document.querySelector('.info');


featureList.addEventListener('mouseenter', showDropDownList)
// featureList.addEventListener('mouseout', (event) => {
    
//     const e = window.event;
//     console.log(e)
//     // if(e.clientX > 100){
//     //     hideDropDownList
//     // }

// }
// )

document.addEventListener('mousemove', tellPos, false);
featureList.addEventListener('click', showDropDownList)
menuBars.addEventListener('click', showMenus)

function tellPos(position){
    info.innerHTML = 'Position X : ' + position.pageX + '<br />Position Y : ' + position.pageY;
    if(position.pageX < 453 || position.pageY < 52){
        hideDropDownList();
    } else if(position.pageX > 625 || position.pageY > 240) {
        hideDropDownList();
        
    }
  }

function showDropDownList(){
    dropDownList.classList.remove('hidden')
    dropDownList.classList.add('adding-lists-list')
    chevronDown.classList.add('rotate-[90deg]')
}
function showMenus(){
    list.classList.toggle('hidden')
    list.classList.toggle('adding-class-list')
}
function hideDropDownList(){
    dropDownList.classList.add('hidden')
    dropDownList.classList.remove('adding-lists-list')
    chevronDown.classList.remove('rotate-[90deg]')
}