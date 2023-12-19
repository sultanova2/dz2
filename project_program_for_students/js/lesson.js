//phone checker
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/

phoneButton.addEventListener('click',() =>{
    if(regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'THANK YOU'
        phoneSpan.style.color = 'green'
    } else{
        phoneSpan.innerHTML = ' PLEASE WRITE RIGHT ANSWER'
        phoneSpan.style.color = 'red'
    }
})

//TAB SLIDER
const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')
let currentTab = 0;

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideTabContent();
    currentTab = (currentTab + 1) % tabs.length;
    showTabContent(currentTab);
};


hideTabContent()
showTabContent()
setInterval(switchTab, 3000);

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                currentTab = i
                showTabContent(currentTab)
            }
        })
    }
  }
