let db = [{
    name: 'Victor',
    code: 1601416,
    age: 14,
    length: 160,
    weight: 42,
    money: 252,
    pic: 'img/Group 7.png'
},
{
    name: 'Taras',
    code: 1423243,
    age: 19,
    length: 180,
    weight: 50,
    money: 1000,
    pic: 'img/Group 1.png'
},
{
    name: 'Alex',
    code: 4533333,
    age: 10,
    length: 110,
    weight: 45,
    money: 10,
    pic: 'img/Group 8.png'
},
{
    name: 'Nastya',
    code: 89878789,
    age: 20,
    length: 160,
    weight: 60,
    money: 776,
    pic: 'img/wooman.png'
},
{
    name: 'Oleg',
    code: 66787998,
    age: 30,
    length: 180,
    weight: 90,
    money: 12323,
    pic: 'img/man.png'
},
{
    name: 'Valera',
    code: 76787876,
    age: 17,
    length: 190,
    weight: 110,
    money: 12,
    pic: 'img/Group 3.png'
},
{
    name: 'John',
    code: 34343422,
    age: 9,
    length: 90,
    weight: 30,
    money: 776,
    pic: 'img/Group 9.png'
},
{
    name: 'Yura',
    code: 7888765,
    age: 14,
    length: 150,
    weight: 56,
    money: 8998,
    pic: 'img/Group 6.png'
},
{
    name: 'Andrii',
    code: 8898788,
    age: 18,
    length: 170,
    weight: 77,
    money: 677,
    pic: 'img/Group 2.png'
},
{
    name: 'Yulia',
    code: 1215456,
    age: 7,
    length: 80,
    weight: 34,
    money: 0,
    pic: 'img/Group 11.png'
},
{
    name: 'Gustavo',
    code: 2469357,
    age: 15,
    length: 175,
    weight: 65,
    money: 123592,
    pic: 'img/Group 5.png'
},
{
    name: 'Marta',
    code: 8472581,
    age: 15,
    length: 170,
    weight: 53,
    money: 34512,
    pic: 'img/Group 10.png'
}
];
$('.filter').hide();
$('.popup').hide();
function showUser() {
for (let el of db) {
    $('.userContainer').append(`<div class='userItem'>
    <img src='${el.pic}'>
    <span class='userName'>${el.name}</span>
    <div class='cardItem'>
    <span>Age:</span>
    <span>${el.age}</span>
    </div>
    <button class='userInfo' id='c${el.code}'>Information</button>
</div>`);
};
};
showUser();

function openPopup() {
    $('.userInfo').click(function(e){
        let userID = (e.target.id).substring(1);
        for(let el of db) {
            if(userID==el.code) {
                $('.popup').show(100)
                $('.pp1').text('Name: ' + el.name);
                $('.pp2').text('Code: ' + el.code);
                $('.pp3').text('Age: ' + el.age);
                $('.pp4').text('Length: ' + el.length);
                $('.pp5').text('Weight: ' + el.weight);
                $('.pp6').text('Money: ' + el.money);
                $('.wrap').css('filter', 'blur(10px)');
            }
        }
    });
};
openPopup();
ageFilter.onclick = function() {
    db.sort(function(a,b){
        return a.age-b.age;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};

ageReverceFilter.onclick = function() {
    db.sort(function(a,b){
        return b.age-a.age;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};

alphabetFilter.onclick = function() {
    db.sort(function(a,b){
        if(a.name<b.name)
        return -1;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};

alphabetReverceFilter.onclick = function() {
    db.sort(function(a,b){
        if(a.name>b.name)
        return -1;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};

lenghtFilter.onclick = function() {
    db.sort(function(a,b){
        return b.length-a.length;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};

lenghtReverceFilter.onclick = function() {
    db.sort(function(a,b){
        return a.length-b.length;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};


weightFilter.onclick = function() {
    db.sort(function(a,b){
        return b.weight-a.weight;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};

weightReverceFilter.onclick = function() {
    db.sort(function(a,b){
        return a.weight-b.weight;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};

moneyFilter.onclick = function() {
    db.sort(function(a,b){
        return b.money-a.money;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};

moneyReverceFilter.onclick = function() {
    db.sort(function(a,b){
        return a.money-b.money;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};

codeFilter.onclick = function() {
    db.sort(function(a,b){
        return b.code-a.code;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};

codeReverceFilter.onclick = function() {
    db.sort(function(a,b){
        return a.code-b.code;
    })
    $('.userContainer').empty();
    showUser();
    openPopup();
};

$('.popup').click(function(){
    $('.popup').hide(300);
    $('.wrap').css('filter', 'none');
});
let btnCur = true;
$('.filterOpen').click(function(){
    $('.filter').slideToggle(300);
    if(btnCur === true) {
        $('.filterOpen').css('top', '0.5%');
        $('.filterOpen').css('right', '0.2%');
        btnCur = false;
    } else {
        $('.filterOpen').css('top', '3%');
        $('.filterOpen').css('right', '1.5%');
        btnCur = true;
    };
});
