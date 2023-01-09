const MyForm = document.getElementById('RegisterForm');

MyForm.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch('http://201.40.5.101:3000', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            NickName: document.getElementById('NickNameField').value,
            Email: document.getElementById('EmailField').value,
            Number: document.getElementById('NumberField').value,
            Age: document.getElementById('AgeField').value,
            Plataform: document.getElementById('PlataformInput').value,
            Sex: document.getElementById('SexForm').value,
            Why: document.getElementById('WhyForm').value
        })
    }).then(function (respose) {
        return respose.text();
       

    }).then(function (text){
        var temp = JSON.parse(text)
        document.getElementById('popTitle').innerText = temp.Title
        document.getElementById('popDesc').innerText = temp.Subtitle
        $('.wrap, .MangaAzul').toggleClass('active');
    })
});

const NickNameInput = document.getElementById('NickNameField');

$(document.getElementById('ClosePop')).on('click', function(){
    $('.wrap, .MangaAzul').toggleClass('active');
    
    return false;
  });

