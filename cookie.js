const buttons = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const output = document.querySelector('.output');


document.addEventListener('DOMContentLoaded', function() {
  const now = new Date();

  let day = now.getDate() + 3;

  day = ('0' + day).slice(-2);

  let month = ('0' + (now.getMonth()+1)).slice(-2);

  let year = now.getFullYear();

  // console.log(year + '-' + month + '-' + day);
  console.log(`${year}-${month}-${day}`)

  document.querySelector('input[type=date]').value = `${year}-${month}-${day}`
});

buttons.forEach(function(btn) {
  btn.addEventListener('click', btnAction);
});

function btnAction(e) {
  //console.log(e.target);
  let action = e.target.innerHTML.substr(0, e.target.innerHTML.indexOf(' '));

  let v = {};

  inputs.forEach(function(item) {
    let attributeName = item.getAttribute('name');
    let attributeValue = (attributeName !== 'cookieExpire' ? item.value : item.valueAsDate);

    v[attributeName] = attributeValue

  });
  //console.log(v);

  if(action === 'Set'){
    setCookie(v.cookieName, v.cookieValue, v.cookieExpire);
  } else if(action === 'Get') {
    getCookie(v.cookieName);
  } else if(action === 'Delete') {
    console.log(action);
    deleteCookie(v.cookieName);
  } else {
    listAllCookies();

  }
}

//homework below:

function listAllCookies(cookieName, cookieValue, cookieExpire) {
    let cookies = document.cookie.split(';');

    cookies.forEach(function (item) {
      
    })
}

function deleteCookie(cookieName) {
  document.cookie = `${cookieName}='';path=/;expires=Thu, Oct 29 2019 20:00:00 GMT-0400S;`;

  output.textContent = `${cookieName} has been deleted!!`
}

function getCookie(cookieName) {
  let cookies = document.cookie.split(';');

  output.textContent = 'No cookies found, try again!';

  cookies.some(function(item) {
    item.trim();
    let cookieValues = item.split('=');

    cookieValues[0] = cookieValues[0].trim();

    if(cookieValues[0] === cookieName) {
      output.textContent = `Found: ${cookieValues[0]} is ${decodeURIComponent(cookieValues[1])}`;

      return true;
    }
    console.log(cookieValues[0]);
  })
}

function setCookie(cookieName, cookieValue, cookieExpire) {
  if(cookieValue.length > 0) {
  document.cookie = cookieName + '=' + encodeURIComponent(cookieValue) + '; path=/; expires=' + cookieExpire.toUTCString();
  output.textContent = `Cookie is set for ${cookieName}!!`;
} else {
  output.textContent = `Cookie needs a Value!!`;
}
}

 {


}
