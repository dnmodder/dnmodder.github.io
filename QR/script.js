function generarQR() {
    var firtsname = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var homephone = document.getElementById("homephone").value;
    var mobilephone = document.getElementById("mobilephone").value;
    var email = document.getElementById("email").value;
    var company = document.getElementById("company").value;
    var job = document.getElementById("job").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var zipcode = document.getElementById("zipcode").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var website = document.getElementById("website").value;

    var vcard = `BEGIN:VCARD\n` +
                `VERSION:3.0\n` +
                `N:${lastname};${firtsname};;;\n` +
                `FN:${firtsname} ${lastname}\n` +
                `ORG:${company};\n` +
                `TITLE:${job}\n` +
                `EMAIL;type=INTERNET;type=HOME;type=pref:${email}\n` +
                `TEL;type=CELL;type=pref:${mobilephone}\n` +
                `TEL;type=HOME:${homephone}\n` +
                `ADR;type=HOME;pref:;;${address};${city};${state};${zipcode};${country}\n` +
                `URL:${website}\n` +
                `END:VCARD`;

    console.log(vcard);

    var url = `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(vcard)}&chs=180x180&choe=UTF-8&chld=L|2`;
    var img = document.getElementById("qrimage");
    img.src = url;
}