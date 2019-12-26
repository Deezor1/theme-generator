const con = document.querySelector('#content');
const code = document.querySelector('#code');
const copyBut = document.querySelector('#copyBut');
const genBut = document.querySelector('#generateButton');
genBut.addEventListener('click', function () {
    let gfx = [];
    for (i = 0; i < 59; i++) {
        gfx.push(document.querySelector(`#gfx-${i}`).value);
    }
    let c = 'const styleString = "';
    gfx[0] ? c += `#panel{background-image: url(${gfx[0]});}<br>` : null;
    gfx[1] ? c += `#chat, #chattabs, #chattabs s{background-image: url(${gfx[1]});}<br>` : null;
    gfx[2] ? c += `#chat.left, #chattabs.left, #chat.left #chattabs s{background-image: url(${gfx[2]});}<br>` : null;
    gfx[3] ? c += `#alert .a1, #alert .a3, #alert button, #dlgwin .w1, #staminashop .a1, #staminashop .a3, BUTTON.bal_ok, BUTTON.bal_cancel, BUTTON.bal_yes, BUTTON.bal_no, BUTTON.bal_pay, BUTTON.bal_pay_increase, BUTTON.bal_pay_decrease {background-image: url(${gfx[3]}) !important;}<br>` : null;
    gfx[4] ? c += `#alert, #dlgwin, #staminashop, #upgradeclandepoalert, .MM-alert {background-image: url(${gfx[4]}) !important;}<br>` : null;
    gfx[5] ? c += `.closebut, .close-but, #pre-premium-panel .close-pre-premium, #recipes .close-but, #chests-window .close-chests-window, #loot-preview .close-but, #quest-log-window .quest-log-close-but{background-image: url(${gfx[5]});}<br>` : null;
    gfx[6] ? c += `#quest-log-window{background-image: url(${gfx[6]});}<br>` : null;
    gfx[7] ? c += `#clanmenu{background-image: url(${gfx[7]});}<br>` : null;
    gfx[8] ? c += `#recipes {background-image: url(${gfx[8]});}<br>` : null;
    gfx[9] ? c += `.conf-title{background-image: url(${gfx[9]}) !important;}<br>` : null;
    gfx[10] ? c += `#config{background-image: url(${gfx[10]}) !important;}<br>` : null;
    gfx[11] ? c += `#config .save{background-image: url(${gfx[11]});}<br>` : null;
    gfx[12] ? c += `#config .cancel{background-image: url(${gfx[12]});}<br>` : null;
    gfx[13] ? c += `.changeClient{background-image: url(${gfx[13]});}<br>` : null;
    gfx[14] ? c += `#cfg_options DIV, .my-checkbox, .my-checkbox.active{background-image: url(${gfx[14]});}<br>` : null;
    gfx[15] ? c += `#mappanel{background-image: url(${gfx[15]});}<br>` : null;
    gfx[16] ? c += `#skills, #skills_title{background-image: url(${gfx[16]});}<br>` : null;
    gfx[17] ? c += `.skills_tab_header{background-image: url(${gfx[17]});}<br>` : null;
    gfx[18] ? c += `#friends{background-image: url(${gfx[18]});}<br>` : null;
    gfx[19] ? c += `DIV.frparty, .chatfr, .delfr, #enadd, #fradd, #frsort, .delen, .frup, .frdn{background-image: url(${gfx[19]});}<br>` : null;
    gfx[20] ? c += `.MM-dialog{border-image: url(${gfx[20]}) 51 64 24 57 fill repeat;}<br>` : null;
    gfx[21] ? c += `#startbutton, #shufflebutton, #hdbutton, #volumeSlider .marker{background-image: url(${gfx[21]});}<br>` : null;
    gfx[22] ? c += `.news-panel{background-image: url(${gfx[22]});}<br>` : null;
    gfx[23] ? c += `#stats{background-image: url(${gfx[23]});}<br>` : null;
    gfx[24] ? c += `#addonspanel{background-image: url(${gfx[24]});}<br>` : null;
    gfx[25] ? c += `#clanbox, #inmap, #inmap2wrapper, #addons, #auctions{background-image: url(${gfx[25]});}<br>` : null;
    gfx[26] ? c += `#buttons, #b_recipes, #b_quests, #b_matchmaking, #b_help, #b_clans, #b_pvp, #b_config, #b_map, #b_skills, #b_friends, #b_addons, #b_news, #helpbut, #logoutbut, #bchat{background-image: url(${gfx[26]}) !important;}<br>` : null;
    gfx[27] ? c += `#premiumbut{background-image: url(${gfx[27]});}<br>` : null;
    gfx[28] ? c += `#premiumshop .buymore_ps, #premiumshop .closebutton_ps, #premiumshop, #premiumshop .premiumItem, #premiumshop .item_bg, #premiumshop .promocode_button{background-image: url(${gfx[28]});}<br>` : null;
    gfx[29] ? c += `#new_event_calendar{background-image: url(${gfx[29]});}<br>` : null;
    gfx[30] ? c += `#lagmeter{background-image: url(${gfx[30]});}<br>` : null;
    gfx[31] ? c += `#pvpmode{background-image: url(${gfx[31]});}<br>` : null;
    gfx[32] ? c += `#shop{background-image: url(${gfx[32]});}<br>` : null;
    gfx[33] ? c += `#shop_close, #shop_accept, #match-details-wnd .close-match-details-wrapper .close-match-details{background-image: url(${gfx[33]});}<br>#shop_recover_items{background: url(${gfx[33]}) -182px 0}<br>#create_new_clan{background: url(${gfx[33]}) -368px -0px}<br>#create_new_clan:hover{background: url(${gfx[33]}) -368px 33px}<br>` : null;
    gfx[34] ? c += `#sl_shop_banner{background-image: url(${gfx[34]});}<br>#hieronim_button{background: url(${gfx[34]}) 0px -94px;}<br>#gold_shop_banner{background: url(${gfx[34]}) 0px -54px;}<br>#lehim_button{background: url(${gfx[34]}) 0px -127px;}` : null;
    gfx[35] ? c += `#shop.outfit{background-image: url(${gfx[35]});}<br>` : null;
    gfx[36] ? c += `#auctions button, #ahtitle, #ahselect, #ah_mylist H5, #ahselect B#b_myah, #auctions .itemcont, #auctions #ah_filter BUTTON{background-image: url(${gfx[36]}) !important;}<br>` : null;
    gfx[37] ? c += `#console, #dialog{background-image: url(${gfx[37]});}<br>` : null;
    gfx[38] ? c += `#battlepanelback, #battlehelp, #battleclose, #battle .border-b{background-image: url(${gfx[38]}) !important;}<br>` : null;
    gfx[39] ? c += `#loots_l, #loots_r, #loots .loot, #loots B.yes, #loots B.no, #loots_counter, #loots_button, #loots B.need{background-image: url(${gfx[39]})}<br>` : null;
    gfx[40] ? c += `#loots{border-image-source: url(${gfx[40]});}<br>` : null;
    gfx[41] ? c += `.MM-battleset-switch-button{background-image: url(${gfx[41]});}<br>` : null;
    gfx[42] ? c += `#skillSwitch{background-image: url(${gfx[42]}) !important;}<br>` : null;
    gfx[43] ? c += `#bottombar{background-image: url(${gfx[43]});}<br>` : null;
    gfx[44] ? c += `.SI-button .left{background:url(${gfx[44]});background-position: -443px -229px;}<br>.SI-button .label{background:url(${gfx[44]});background-position: -463px -229px;}<br>.SI-button .right{background:url(${gfx[44]});background-position: -622px -229px;}<br>#for-you-plug{background:url(${gfx[44]}) -0px -942px;}<br>.MM-dialog-header-txt, .MM-big-button-header, .MM-big-button.MM-stat-button, .MM-dialog-space .warning-points, .MM-button .content, .MM-button .left, .MM-button .right, .MM-big-button.MM-fight-button, .MM-big-button.MM-rank-button, .MM-queue-button, .MM-big-button MM-eq-button, .MM-eq-button, .MM-eq-button.selected, .season-wnd .reward-wrapper .rage-wrapper, #pre-premium-panel, #chests-window, #matchmaking-summary{background-image: url(${gfx[44]});}` : null;
    gfx[49] ? gfx[49] === 'usuń' ? c += `#leorn1{display: none}` : c += `#leorn1{background: url(${gfx[49]}) no-repeat;box-sizing:border-box;display:block;height:26px;padding-left:14px;width:14px;}` : null;
    gfx[50] ? gfx[50] === 'usuń' ? c += `#leorn2{display: none}` : c += `#leorn2{background: url(${gfx[50]}) no-repeat;box-sizing:border-box;display:block;height:26px;padding-left:14px;width:14px;}` : null;
    gfx[51] ? c += `.MM-dialog-header{background-image: url(${gfx[51]});}<br>` : null;
    gfx[52] ? c += `#tradebg, #trade BUTTON{background-image: url(${gfx[52]});}<br>` : null;
    gfx[53] ? c += `#alert div.mAlertInputContainer input[name='mAlertInput'], #alert div.mAlertInputContainer .bRight, #alert div.mAlertInputContainer .bLeft{background-image: url(${gfx[53]});}<br>` : null;
    gfx[54] ? c += `#party{background-image: url(${gfx[54]}) !important;}<br>` : null;
    gfx[56] ? c += `#dlgwin .w2{background-image: url(${gfx[56]}) !important;}<br>` : null;
    gfx[57] ? c += `#depo, #depo-title{background-image: url(${gfx[57]});}<br>` : null;
    gfx[58] ? c += `#depo BUTTON{background-image: url(${gfx[58]});}<br>#depo-gold INPUT {background: url(${gfx[58]}) no-repeat 0 -228px;}<br>` : null;
    c += '";<br>const styleElement = document.createElement("style");<br>styleElement.innerHTML = styleString;<br>document.getElementsByTagName("head")[0].appendChild(styleElement);';
    gfx[45] ? c += `<br>document.querySelector('img.border-u').src = '${gfx[45]}';` : null;
    gfx[46] ? c += `<br>document.querySelector('img.border-l').src = '${gfx[46]}';` : null;
    gfx[47] ? c += `<br>document.querySelector('img.border-r').src = '${gfx[47]}';` : null;
    gfx[48] ? c += `<br>document.querySelector('img.border-d').src = '${gfx[48]}';` : null;
    gfx[55] ? c += `<br>document.querySelector('#party img').src = '${gfx[55]}';` : null;
    if (c !== 'const styleString = "";<br>const styleElement = document.createElement("style");<br>styleElement.innerHTML = styleString;<br>document.getElementsByTagName("head")[0].appendChild(styleElement);') {
        con.style.display = 'block';
        code.innerHTML = c;
        copyBut.classList.add('blink');
        con.insertBefore(code, copyBut);
        window.scrollTo(0, 9999);
    } else {
        genBut.style = 'border-color: #ff8a82; color: #ff8a82; transition: .5s';
        genBut.innerHTML = 'Wypełnij pole!';
        genBut.classList.add('shake');
        setTimeout(function () {
            genBut.style = 'border-color: #BBB; color: #555;';
            genBut.innerHTML = 'Generuj kod';
            genBut.classList.remove('shake');
        }, 1000);
    }
});
copyBut.addEventListener('click', function () {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val('/* Motyw stworzony przez Generator Motywow by Deez https://deezor1.github.io/theme-generator/ */ ' + $('div#code').text()).select();
    document.execCommand("copy");
    $temp.remove();
    copyBut.style = 'border-color: #33C3F0; color: #33C3F0; transition: .5s; animation: none;';
    copyBut.innerHTML = 'Skopiowano!';
    copyBut.classList.remove('blink');
    setTimeout(function () {
        copyBut.style = 'border-color: #BBB; color: #555;';
        copyBut.innerHTML = 'Skopiuj do schowka';
    }, 2000);
});
const toTop = document.querySelector('#scroll-to-top');

function scroll() {
    if (window.scrollY > document.body.scrollHeight * 0.33) {
        toTop.style.bottom = '10px';
    } else {
        toTop.style.bottom = '-100px';
    }
}
scroll();
window.addEventListener('scroll', scroll);
toTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
});
