import React, { Component } from "react";
let results = [];
let filmList = [];
let data = "{}";
let APIkey = "14ab2cbcc55cd83768a0abc0594eb1ab";
let output = "";

function generateFilmList(results) {
    filmList = [];
    for (let result in results) {
        let ResArray = results[result];
        if (ResArray[0] != undefined) {
            for (let film in ResArray) {
                filmList.push(ResArray[film]);
            }
        }
    }
}

function displayFilmList(filmListing) {
    output = "";
    for (let film in filmListing) {
        let thisFilm = filmListing[film];
        console.log(thisFilm);

        output += "<h1 className='filmTitle'>" + thisFilm["title"] + "</h1>";
        output += "<p className='filmID'> Film MVDB ID:" + thisFilm["id"] + "</p>";
        output += "<h5 className='filmBio'>" + thisFilm["overview"] + "</h5>";

        output += "<div className='filmCertification' id='certforfilm" + thisFilm["id"] + "'/>";

        let posterURL = "https://image.tmdb.org/t/p/w500" + thisFilm["poster_path"];
        output += "<img className='filmPoster' width='250' src='" + posterURL + "'/>"
        posterURL = "https://image.tmdb.org/t/p/w500" + thisFilm["backdrop_path"];
        output += "<img className='filmBackdrop' width='250' src='" + posterURL + "'/>"

        output += "<div className='castInfo' id='castforfilm" + thisFilm["id"] + "'/>";
    }
    console.log("Final: " + output);
}

function displayCastAndCerts(filmListing) {
    for (let film in filmListing) {
        let thisFilm = filmListing[film];
        obtainCastInfo(thisFilm["id"]);
        obtainCertification(thisFilm["id"]);
    }
}

function obtainCastInfo(filmMVDBID) {
    let castData = "{}";

    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            results = this.responseText;
            results = JSON.parse(results);
            let cast = results["cast"];

            let thisCastListHeader = document.createElement("h4");
            thisCastListHeader.className = "innerCastHead";
            thisCastListHeader.innerText = "Starring:"
            document.getElementById("castforfilm" + filmMVDBID).appendChild(thisCastListHeader);

            for (let i = 0; i < 5; i++) {
                let thisCastMember = cast[i];
                if (thisCastMember != undefined && thisCastMember != null) {
                    let thisCastList = document.createElement("h5");
                    thisCastList.className = "innerCastInfo";
                    if (thisCastMember["name"] != null && thisCastMember["character"] != null) {
                        thisCastList.innerText = thisCastMember["name"] + " as " + thisCastMember["character"];
                    }
                    console.log(thisCastList);
                    document.getElementById("castforfilm" + filmMVDBID).appendChild(thisCastList);
                }
            }
        }
    });

    xhr.open("GET", "https://api.themoviedb.org/3/movie/" + filmMVDBID + "/credits?api_key=" + APIkey);

    xhr.send(castData);
}

function obtainCertification(filmMVDBID) {
    let certData = "{}";

    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            let validCertFound = false;
            results = this.responseText;
            results = JSON.parse(results);
            let CountryArray = results["results"];
            for (let c in CountryArray) {
                let country = CountryArray[c];
                if (country["iso_3166_1"] == "GB") {
                    let certification = country["release_dates"];
                    certification = certification[0];
                    certification = certification["certification"];
                    if (certification != "") {
                        validCertFound = true;
                        let thisFilmCert = document.createElement("h5");
                        thisFilmCert.className = "innerCertification";
                        thisFilmCert.innerText = "Certification: " + certification;
                        document.getElementById("certforfilm" + filmMVDBID).appendChild(thisFilmCert);
                    }
                }
            }

            if (validCertFound == false) {
                let thisFilmCert = document.createElement("h5");
                thisFilmCert.className = "innerCertification";
                thisFilmCert.innerText = "Certification: Not Yet Rated In The UK";
                document.getElementById("certforfilm" + filmMVDBID).appendChild(thisFilmCert);
            }
        }
    });

    xhr.open("GET", "https://api.themoviedb.org/3/movie/" + filmMVDBID + "/release_dates?api_key=" + APIkey);
    xhr.send(certData);
}

function loadMovies() {
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            results = this.responseText;
            results = JSON.parse(results);
            let thisDetail = document.createElement("div");
            thisDetail.id = results;
            generateFilmList(results);
            displayFilmList(filmList);
        }
    });

    xhr.open("GET", "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=" + APIkey);

    xhr.send(data);
}

export default class FilmAPI extends Component {
    constructor(props) {
        super(props);
        this.state = { changed: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
        this.setState({ checked: event.target.value });
    }

    componentDidMount() {
        loadMovies();
        setTimeout(function () {

            document.getElementById("test").innerHTML = output;
            displayCastAndCerts(filmList);

        }, 1000);
    }

    render() {
        return (
            <div id="test">
            </div>
        )
    }
}
