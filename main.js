var obj = document.createElement('button');
obj.className = '';
obj.textContent = "I'm in game !";
obj.style.position = 'fixed';
obj.style.bottom = '1vh';
obj.style.left = '1vw';
obj.onclick = function () {
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');
    div1.className = 'css-1dbjc4n r-1j16mh1';
    div1.style.cssText = 'background-color: rgba(70, 70, 70, 0.93); margin: 16px;';
    div2.tabIndex = '0';
    div2.className = 'css-1dbjc4n r-1j16mh1 r-1d6rzhh r-1loqt21 r-sga3zk r-1sbahrg r-1otgn73 r-lrvibr r-7a29px';
    div3.className = 'css-1dbjc4n r-1awozwy r-1pi2tsx r-1777fci r-13qz1uu';
    div4.dir = 'auto';
    div4.className = 'css-901oao r-lrvibr';
    div4.cssText = 'color: rgb(238, 238, 238); font-family: FontAwesome5_Pro_Solid; font-size: 32px; font-style: normal; font-weight: normal;';
    div4.textContent = 'hi';
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    document.getElementsByClassName('css-1dbjc4n r-1awozwy r-18u37iz r-16y2uox r-1777fci')[0].appendChild(div1);
    console.log(document.getElementsByClassName('css-1dbjc4n r-cdmcib r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-c97pre'));
};

document.querySelector('body').appendChild(obj);