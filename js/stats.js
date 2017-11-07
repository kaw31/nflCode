/*-------------- STICKY NAVBAR --------------------------------------*/

window.onscroll = function() {myStickyNav()};

function myStickyNav() {
    if (document.body.scrollTop > 239 || document.documentElement.scrollTop > 239) {
        document.getElementById("navbar").className = "stickyNav";
        document.getElementById("statTables").className = "stickyStats";
    } else {
        document.getElementById("navbar").className = "";
        document.getElementById("statTables").className = "";
    }
}

/*--------------- STAT NAV SELECT ---------------------------------------*/

function openStat(evt, statName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(statName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/*--------------- SELECT DROPDOWN TABLE ---------------------------------------*/

/*--------------- SUPER BOWLS ---------------------------------------*/

function supFunction() {
    var selectSB = document.getElementById("supSelect").value;
    
    var supTable = document.getElementById("supAll");
    var afc = supTable.getElementsByClassName("afc");
    var nfc = supTable.getElementsByClassName("nfc");
    var afcN = supTable.getElementsByClassName("afcNorth");
    var afcE = supTable.getElementsByClassName("afcEast");
    var afcS = supTable.getElementsByClassName("afcSouth");
    var afcW = supTable.getElementsByClassName("afcWest");
    var nfcN = supTable.getElementsByClassName("nfcNorth");
    var nfcE = supTable.getElementsByClassName("nfcEast");
    var nfcS = supTable.getElementsByClassName("nfcSouth");
    var nfcW = supTable.getElementsByClassName("nfcWest");
    var i;

    if (selectSB === "allTeams") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectSB === "afc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectSB === "nfc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectSB === "afcN") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "table-row";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectSB === "afcE") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "table-row";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectSB === "afcS") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "table-row";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectSB === "afcW") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectSB === "nfcN") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "table-row";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectSB === "nfcE") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "table-row";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectSB === "nfcS") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "table-row";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectSB === "nfcW") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "table-row";
        }
    }
    else {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
}

/*--------------- CONF CHAMPS ---------------------------------------*/

function confFunction() {
    var selectConf = document.getElementById("confSelect").value;
    
    var confTable = document.getElementById("confAll");
    var afc = confTable.getElementsByClassName("afc");
    var nfc = confTable.getElementsByClassName("nfc");
    var afcN = confTable.getElementsByClassName("afcNorth");
    var afcE = confTable.getElementsByClassName("afcEast");
    var afcS = confTable.getElementsByClassName("afcSouth");
    var afcW = confTable.getElementsByClassName("afcWest");
    var nfcN = confTable.getElementsByClassName("nfcNorth");
    var nfcE = confTable.getElementsByClassName("nfcEast");
    var nfcS = confTable.getElementsByClassName("nfcSouth");
    var nfcW = confTable.getElementsByClassName("nfcWest");
    var i;

    if (selectConf === "allTeams") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectConf === "afc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectConf === "nfc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectConf === "afcN") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "table-row";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectConf === "afcE") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "table-row";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectConf === "afcS") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "table-row";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectConf === "afcW") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectConf === "nfcN") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "table-row";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectConf === "nfcE") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "table-row";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectConf === "nfcS") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "table-row";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectConf === "nfcW") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "table-row";
        }
    }
    else {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
}

/*--------------- DIV CHAMPS ---------------------------------------*/

function divFunction() {
    var selectDiv = document.getElementById("divSelect").value;
    
    var divTable = document.getElementById("divAll");
    var afc = divTable.getElementsByClassName("afc");
    var nfc = divTable.getElementsByClassName("nfc");
    var afcN = divTable.getElementsByClassName("afcNorth");
    var afcE = divTable.getElementsByClassName("afcEast");
    var afcS = divTable.getElementsByClassName("afcSouth");
    var afcW = divTable.getElementsByClassName("afcWest");
    var nfcN = divTable.getElementsByClassName("nfcNorth");
    var nfcE = divTable.getElementsByClassName("nfcEast");
    var nfcS = divTable.getElementsByClassName("nfcSouth");
    var nfcW = divTable.getElementsByClassName("nfcWest");
    var i;

    if (selectDiv === "allTeams") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectDiv === "afc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectDiv === "nfc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectDiv === "afcN") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "table-row";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectDiv === "afcE") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "table-row";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectDiv === "afcS") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "table-row";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectDiv === "afcW") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectDiv === "nfcN") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "table-row";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectDiv === "nfcE") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "table-row";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectDiv === "nfcS") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "table-row";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectDiv === "nfcW") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "table-row";
        }
    }
    else {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
}

/*--------------- PLAYOFF APPS ---------------------------------------*/

function playFunction() {
    var selectPlay = document.getElementById("playSelect").value;
    
    var playTable = document.getElementById("playAll");
    var afc = playTable.getElementsByClassName("afc");
    var nfc = playTable.getElementsByClassName("nfc");
    var afcN = playTable.getElementsByClassName("afcNorth");
    var afcE = playTable.getElementsByClassName("afcEast");
    var afcS = playTable.getElementsByClassName("afcSouth");
    var afcW = playTable.getElementsByClassName("afcWest");
    var nfcN = playTable.getElementsByClassName("nfcNorth");
    var nfcE = playTable.getElementsByClassName("nfcEast");
    var nfcS = playTable.getElementsByClassName("nfcSouth");
    var nfcW = playTable.getElementsByClassName("nfcWest");
    var i;

    if (selectPlay === "allTeams") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectPlay === "afc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectPlay === "nfc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectPlay === "afcN") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "table-row";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectPlay === "afcE") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "table-row";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectPlay === "afcS") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "table-row";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectPlay === "afcW") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectPlay === "nfcN") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "table-row";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectPlay === "nfcE") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "table-row";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectPlay === "nfcS") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "table-row";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectPlay === "nfcW") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "table-row";
        }
    }
    else {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
}

/*--------------- HALL OF FAMERS ---------------------------------------*/

function hofFunction() {
    var selectHof = document.getElementById("hofSelect").value;
    
    var hofTable = document.getElementById("hofAll");
    var afc = hofTable.getElementsByClassName("afc");
    var nfc = hofTable.getElementsByClassName("nfc");
    var afcN = hofTable.getElementsByClassName("afcNorth");
    var afcE = hofTable.getElementsByClassName("afcEast");
    var afcS = hofTable.getElementsByClassName("afcSouth");
    var afcW = hofTable.getElementsByClassName("afcWest");
    var nfcN = hofTable.getElementsByClassName("nfcNorth");
    var nfcE = hofTable.getElementsByClassName("nfcEast");
    var nfcS = hofTable.getElementsByClassName("nfcSouth");
    var nfcW = hofTable.getElementsByClassName("nfcWest");
    var i;

    if (selectHof === "allTeams") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectHof === "afc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectHof === "nfc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectHof === "afcN") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "table-row";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectHof === "afcE") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "table-row";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectHof === "afcS") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "table-row";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectHof === "afcW") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectHof === "nfcN") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "table-row";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectHof === "nfcE") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "table-row";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectHof === "nfcS") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "table-row";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectHof === "nfcW") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "table-row";
        }
    }
    else {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
}

/*--------------- RECORDS ---------------------------------------*/

function recFunction() {
    var selectRec = document.getElementById("recSelect").value;
    
    var recTable = document.getElementById("recAll");
    var afc = recTable.getElementsByClassName("afc");
    var nfc = recTable.getElementsByClassName("nfc");
    var afcN = recTable.getElementsByClassName("afcNorth");
    var afcE = recTable.getElementsByClassName("afcEast");
    var afcS = recTable.getElementsByClassName("afcSouth");
    var afcW = recTable.getElementsByClassName("afcWest");
    var nfcN = recTable.getElementsByClassName("nfcNorth");
    var nfcE = recTable.getElementsByClassName("nfcEast");
    var nfcS = recTable.getElementsByClassName("nfcSouth");
    var nfcW = recTable.getElementsByClassName("nfcWest");
    var i;

    if (selectRec === "allTeams") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectRec === "afc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectRec === "nfc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectRec === "afcN") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "table-row";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectRec === "afcE") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "table-row";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectRec === "afcS") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "table-row";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectRec === "afcW") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectRec === "nfcN") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "table-row";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectRec === "nfcE") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "table-row";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectRec === "nfcS") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "table-row";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectRec === "nfcW") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "table-row";
        }
    }
    else {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
}

/*--------------- ALL STATS ---------------------------------------*/

function allstatFunction() {
    var selectAllstat = document.getElementById("allstatSelect").value;
    
    var allstatTable = document.getElementById("allstatAll");
    var afc = allstatTable.getElementsByClassName("afc");
    var nfc = allstatTable.getElementsByClassName("nfc");
    var afcN = allstatTable.getElementsByClassName("afcNorth");
    var afcE = allstatTable.getElementsByClassName("afcEast");
    var afcS = allstatTable.getElementsByClassName("afcSouth");
    var afcW = allstatTable.getElementsByClassName("afcWest");
    var nfcN = allstatTable.getElementsByClassName("nfcNorth");
    var nfcE = allstatTable.getElementsByClassName("nfcEast");
    var nfcS = allstatTable.getElementsByClassName("nfcSouth");
    var nfcW = allstatTable.getElementsByClassName("nfcWest");
    var i;

    if (selectAllstat === "allTeams") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectAllstat === "afc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectAllstat === "nfc") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "table-row";
        }
    }
    else if (selectAllstat === "afcN") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "table-row";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectAllstat === "afcE") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "table-row";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectAllstat === "afcS") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "table-row";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectAllstat === "afcW") {
        for (i = 0; i < afcN.length; i++) {
            afcN[i].style.display = "none";
        }
        for (i = 0; i < afcE.length; i++) {
            afcE[i].style.display = "none";
        }
        for (i = 0; i < afcS.length; i++) {
            afcS[i].style.display = "none";
        }
        for (i = 0; i < afcW.length; i++) {
            afcW[i].style.display = "table-row";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
    else if (selectAllstat === "nfcN") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "table-row";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectAllstat === "nfcE") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "table-row";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectAllstat === "nfcS") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "table-row";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "none";
        }
    }
    else if (selectAllstat === "nfcW") {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfcN.length; i++) {
            nfcN[i].style.display = "none";
        }
        for (i = 0; i < nfcE.length; i++) {
            nfcE[i].style.display = "none";
        }
        for (i = 0; i < nfcS.length; i++) {
            nfcS[i].style.display = "none";
        }
        for (i = 0; i < nfcW.length; i++) {
            nfcW[i].style.display = "table-row";
        }
    }
    else {
        for (i = 0; i < afc.length; i++) {
            afc[i].style.display = "none";
        }
        for (i = 0; i < nfc.length; i++) {
            nfc[i].style.display = "none";
        }
    }
}


/*--------------- SORT TABLE ---------------------------------------*/

//function sortTable(tableClass, n) {
//  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//
//  table = document.getElementsByClassName(tableClass)[0];
//  switching = true;
//  dir = "asc";
//  while (switching) {
//      switching = false;
//      rows = table.getElementsByTagName("TR");
//      for (i = 1; i < (rows.length - 1); i++) {
//          shouldSwitch = false;
//          x = rows[i].getElementsByTagName("TD")[n];
//          y = rows[i + 1].getElementsByTagName("TD")[n];
//          var xContent = (isNaN(x.innerHTML)) 
//              ? (x.innerHTML.toLowerCase() === '-')
//                    ? 0 : x.innerHTML.toLowerCase()
//              : ~~x.innerHTML;
//          var yContent = (isNaN(y.innerHTML)) 
//              ? (y.innerHTML.toLowerCase() === '-')
//                    ? 0 : y.innerHTML.toLowerCase()
//              : ~~y.innerHTML;
//          if (dir == "asc") {
//              if (xContent > yContent) {
//                  shouldSwitch= true;
//                  break;
//              }
//          } else if (dir == "desc") {
//              if (xContent < yContent) {
//                  shouldSwitch= true;
//                  break;
//              }
//          }
//      }
//      if (shouldSwitch) {
//          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//          switching = true;
//          switchcount ++;      
//      } else {
//          if (switchcount == 0 && dir == "asc") {
//              dir = "desc";
//              switching = true;
//          }
//      }
//   }
//}

function sortTable(tableClass, n) {
var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

table = document.getElementsByClassName(tableClass)[0];
switching = true;
dir = "asc";
while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
                var cmpX=isNaN(parseFloat(x.innerHTML))?x.innerHTML.toLowerCase():parseFloat(x.innerHTML);
                var cmpY=isNaN(parseFloat(y.innerHTML))?y.innerHTML.toLowerCase():parseFloat(y.innerHTML);
        cmpX=(cmpX=='-')?0:cmpX;
        cmpY=(cmpY=='-')?0:cmpY;

        if (dir == "asc") {
            if (cmpX > cmpY) {
                shouldSwitch= true;
                break;
            }
        } else if (dir == "desc") {
            if (cmpX < cmpY) {
                shouldSwitch= true;
                break;
            }
        }
    }
    if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
    } else {
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
    }
}
}

