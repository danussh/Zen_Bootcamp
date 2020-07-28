var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com", true);
//xhr.withCredentials = true;

xhr.onload = function () {
    console.log(xhr.responseText);
};
xhr.send();