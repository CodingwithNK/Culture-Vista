const stateNameList = document.getElementById('stateNameList');
const indiaName = document.getElementById('indiaName');
const inputBox = document.getElementById('inputBox');
const searchBtn = document.getElementById('searchBtn');
const districtName = document.querySelectorAll('.districtName');
const unionTerritories = document.getElementById('unionTerritories');


const apDistList = document.getElementById('apDistList');
const arunaPraDistList = document.getElementById('arunaPraDistList');
const asamDistList = document.getElementById('asamDistList')
const biharDistList = document.getElementById('biharDistList')
const chatisDistList = document.getElementById('chatisDistList')
const goaDistList = document.getElementById('goaDistList')
const gujDistList = document.getElementById('gujDistList')
const hrDistList = document.getElementById('hrDistList')
const hpDistList = document.getElementById('hpDistList')
const jkDistList = document.getElementById('jkDistList')
const krntDistList = document.getElementById('krntDistList')
const krlaDistList = document.getElementById('krlaDistList')
const mpDistList = document.getElementById('mpDistList')
const mhDistList = document.getElementById('mhDistList')
const mniprDistList = document.getElementById('mniprDistList')
const mgDistList = document.getElementById('mgDistList')
const mzDistList = document.getElementById('mzDistList')
const ngldDistList = document.getElementById('ngldDistList')
const odishaDistList = document.getElementById('odishaDistList')
const pbDistList = document.getElementById('pbDistList')
const rjDistList = document.getElementById('rjDistList')
const skmDistList = document.getElementById('skmDistList')
const tnDistList = document.getElementById('tnDistList')
const telgnaDistList = document.getElementById('telgnaDistList')
const tripraDistList = document.getElementById('tripraDistList')
const ukDistList = document.getElementById('ukDistList')
const upDistList = document.getElementById('upDistList')
const wbDistList = document.getElementById('wbDistList')


// state par click karenge tab uske district show karega
stateNameList.addEventListener("click", function (e) {
    e.preventDefault();

    const values = document.querySelectorAll('.districtName');

    values.forEach((distt) => {

        distt.style.display = 'none';

    });


    if (e.target.innerHTML === "Andhra Pradesh") {
        apDistList.style.display = "block";
        fetchIndiaStateDetails("Andhra Pradesh");
    } else if (e.target.innerHTML === "Arunachal Pradesh") {
        arunaPraDistList.style.display = "block";
        fetchIndiaStateDetails("Arunachal Pradesh");
    } else if (e.target.innerHTML === "Assam") {
        asamDistList.style.display = "block";
        fetchIndiaStateDetails("Assam");
    } else if (e.target.innerHTML === "Bihar") {
        biharDistList.style.display = "block";
        fetchIndiaStateDetails("Bihar");
    } else if (e.target.innerHTML === "Chhattisgarh") {
        chatisDistList.style.display = "block";
        fetchIndiaStateDetails("Chhattisgarh");
    } else if (e.target.innerHTML === "Goa") {
        goaDistList.style.display = "block";
        fetchIndiaStateDetails("Goa");
    } else if (e.target.innerHTML === "Gujarat") {
        gujDistList.style.display = "block";
        fetchIndiaStateDetails("Gujarat");
    } else if (e.target.innerHTML === "Haryana") {
        hrDistList.style.display = "block";
        fetchIndiaStateDetails("Haryana");
    } else if (e.target.innerHTML === "Himachal Pradesh") {
        hpDistList.style.display = "block";
        fetchIndiaStateDetails("Himachal Pradesh");
    } else if (e.target.innerHTML === "Jharkhand") {
        jkDistList.style.display = "block";
        fetchIndiaStateDetails("Jharkhand");
    } else if (e.target.innerHTML === "Karnataka") {
        krntDistList.style.display = "block";
        fetchIndiaStateDetails("Karnataka");
    } else if (e.target.innerHTML === "Kerala") {
        krlaDistList.style.display = "block";
        fetchIndiaStateDetails("Kerala");
    } else if (e.target.innerHTML === "Madhya Pradesh") {
        mpDistList.style.display = "block";
        fetchIndiaStateDetails("Madhya Pradesh");
    } else if (e.target.innerHTML === "Maharashtra") {
        mhDistList.style.display = "block";
        fetchIndiaStateDetails("Maharashtra");
    } else if (e.target.innerHTML === "Manipur") {
        mniprDistList.style.display = "block";
        fetchIndiaStateDetails("Manipur");
    } else if (e.target.innerHTML === "Meghalaya") {
        mgDistList.style.display = "block";
        fetchIndiaStateDetails("Meghalaya");
    } else if (e.target.innerHTML === "Mizoram") {
        mzDistList.style.display = "block";
        fetchIndiaStateDetails("Mizoram");
    } else if (e.target.innerHTML === "Nagaland") {
        ngldDistList.style.display = "block";
        fetchIndiaStateDetails("Nagaland");
    } else if (e.target.innerHTML === "Odisha") {
        odishaDistList.style.display = "block";
        fetchIndiaStateDetails("Odisha");
    } else if (e.target.innerHTML === "Punjab") {
        pbDistList.style.display = "block";
        fetchIndiaStateDetails("Punjab");
    } else if (e.target.innerHTML === "Rajasthan") {
        rjDistList.style.display = "block";
        fetchIndiaStateDetails("Rajasthan");
    } else if (e.target.innerHTML === "Sikkim") {
        skmDistList.style.display = "block";
        fetchIndiaStateDetails("Sikkim");
    } else if (e.target.innerHTML === "Tamil Nadu") {
        tnDistList.style.display = "block";
        fetchIndiaStateDetails("Tamil Nadu");
    } else if (e.target.innerHTML === "Telangana") {
        telgnaDistList.style.display = "block";
        fetchIndiaStateDetails("Telangana");
    } else if (e.target.innerHTML === "Tripura") {
        tripraDistList.style.display = "block";
        fetchIndiaStateDetails("Tripura");
    } else if (e.target.innerHTML === "Uttarakhand") {
        ukDistList.style.display = "block";
        fetchIndiaStateDetails("Uttarakhand");
    } else if (e.target.innerHTML === "Uttar Pradesh") {
        upDistList.style.display = "block";
        fetchIndiaStateDetails("Uttar Pradesh");
    } else if (e.target.innerHTML === "West Bengal") {
        wbDistList.style.display = "block";
        fetchIndiaStateDetails("West Bengal");
    };

});


// only india ko search karega
indiaName.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.tagName === 'FONT' || e.target.tagName === 'A') {

        fetchIndiaDetails('India');
    }

});


// district name ko search karega
districtName.forEach((dist) => {

    dist.addEventListener("click", function (e) {
        e.preventDefault();

        if (e.target.tagName === 'FONT' || e.target.tagName === 'A') {

            fetchIndiaStateDetails(e.target.innerHTML);
        }

    });

});

// union territories ko search karega
unionTerritories.addEventListener("click", function (e) {
    e.preventDefault();

    fetchIndiaStateDetails(e.target.innerHTML);

});


// search btn se jo bhi search karenge tab ye kam karega
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (inputBox.value !== "") {

        inputBox.style.border = '1px solid green';
        fetchIndiaStateDetails(inputBox.value);
    } else {

        inputBox.style.border = '1px solid red';
    }

});





const resultBoxes = document.getElementById('resultBoxes');

// jab india ke kisi state ya district par click karenge tab ye run hoga.
function fetchIndiaStateDetails(searchTerm) {

    resultBoxes.innerHTML = "";

    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${searchTerm}&prop=text&callback=processData`;

    const script = document.createElement('script');
    script.src = url;

    // Define a callback function to process the data
    window.processData = function (data) {
        const htmlContent = data.parse.text['*'];

        // Set the HTML content to the resultBoxes element
        resultBoxes.innerHTML = htmlContent;

        const para = resultBoxes.querySelectorAll('p');
        const ul = resultBoxes.querySelectorAll('ul');
        const table = resultBoxes.querySelectorAll('table');
        const navboxTitle = resultBoxes.querySelectorAll('.navbox-title');


        removeParagraph(para, ul, navboxTitle, table);

        // Clean up after processing
        document.head.removeChild(script);
        delete window.processData;
    };

    // Append the script tag to initiate the JSONP request
    document.head.appendChild(script);
};

// only india par click karenge tab ye run hoga.
function fetchIndiaDetails(searchTerm) {

    resultBoxes.innerHTML = "";

    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${searchTerm}&prop=text&callback=processData`;

    const script = document.createElement('script');
    script.src = url;

    // Define a callback function to process the data
    window.processData = function (data) {
        const htmlContent = data.parse.text['*'];

        // Set the HTML content to the resultBoxes element
        resultBoxes.innerHTML = htmlContent;


        // Clean up after processing
        document.head.removeChild(script);
        delete window.processData;
    };

    // Append the script tag to initiate the JSONP request
    document.head.appendChild(script);
};


// remove some elements from html page
function removeParagraph(para, ul, navboxTitle, table) {
    para[6].style.display = 'none';
    para[7].style.display = 'none';

    ul[6].style.display = 'none';

    navboxTitle[0].style.display = 'none';


    table.forEach((tbl) => {
        tbl.style.width = "100%";
        tbl.style.backgroundColor = 'black';
    })

};

