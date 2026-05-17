//let prices = [10, 50, 100, 600, 1500, 5000, 7000, 15000, 50000];
//prices=w,cp,tn,ir,ld,sv,vf,gd,pl

let bcoords = document.getElementById("mainbutton");
bcoords.style.position = "absolute";
let ovl = document.getElementById("overlay");
ovl.style.position = "absolute";
let lup = document.getElementById("uc");
let ldo = document.getElementById("dc");

let element = document.getElementById("overlay");
let rect = element.getBoundingClientRect();
let ow = rect.width;
let oh = rect.height;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let xrange = 0;
let yrange = 0;
let fxrange = 0;
let fyrange = 0;

function moveButton() {
	if (fxrange === 0) {
		bcoords.style.left = `${getRandomInt(xrange, xrange + (ow - 2 * xrange) - 50)}px`;
	}
	if (fyrange === 0) {
		bcoords.style.top = `${getRandomInt(yrange, yrange + (oh - 2 * yrange) - 50)}px`;
	}
	if (fxrange !== 0) {
		bcoords.style.left = `${ow / 2 - 25}px`;
	}
	if (fyrange !== 0) {
		bcoords.style.top = `${oh / 2 - 17}px`;
	}
}

let buttn = document.getElementById("mainbutton");
let Exrange = document.getElementById("exrange");
let lvl = document.getElementById("lev");

let clickcount = 0;
let moneycount = 0;
let Tclickcount = 0;
let moneyadd = 0;
let totalvl = 1;
let chance2 = 0;
let lvlprice = 1;
let exprice = 1;
let tprice = 1;

Exrange.addEventListener("touchstart", () => {
	if (moneycount >= exprice) {
		moneycount = moneycount - exprice;
		xrange += 1;
		yrange += 1;
		tprice = tprice * 1.1;
		exprice = Math.round(tprice);
		document.getElementById("dc").innerHTML = exprice;
		document.getElementById("mc").innerHTML = moneycount;
		if (fxrange === 0) {
			ovl.style.left = `${xrange}px`;
			ovl.style.width = `${ow - 2 * xrange}px`;
		}
		if (fyrange === 0) {
			ovl.style.top = `${yrange}px`;
			ovl.style.height = `${oh - 2 * yrange}px`;
		}
		if (ow - 2 * xrange <= 50) {
			fxrange = xrange;
			ovl.style.width = "50px";
		}
		if (oh - 2 * yrange <= 50) {
			fyrange = yrange;
			ovl.style.height = "50px";
		}
		if (moneycount <= lvlprice) {
			uc.style.color = "black";
		}
		if (moneycount <= exprice) {
			dc.style.color = "black";
		}
		moveButton();
	} else {
		dc.style.color = "red";
	}
});

lvl.addEventListener("touchstart", () => {
	if (moneycount >= lvlprice) {
		moneycount = moneycount - lvlprice;
		totalvl += 1;
		lvlprice = lvlprice + totalvl;
		document.getElementById("uc").innerHTML = lvlprice;
		document.getElementById("mc").innerHTML = moneycount;
		document.getElementById("lc").innerHTML = totalvl;
		if (moneycount <= lvlprice) {
			uc.style.color = "black";
		}
		if (moneycount <= exprice) {
			dc.style.color = "black";
		}
	} else {
		uc.style.color = "red";
	}
});

buttn.addEventListener("touchstart", () => {
	chance2 = getRandomInt(0, 9);
	if (chance2 <= totalvl - Math.round(totalvl / 10)) {
		moneyadd = Math.round(totalvl / 10) + 1;
		moneycount += moneyadd;
		clickcount += 1;
		Tclickcount += 1;
	} else {
		if (totalvl < 5) {
			moneyadd = 1;
			moneycount += moneyadd;
		} else {
			moneyadd = Math.round(totalvl / 10);
			moneycount += moneyadd;
		}

		clickcount += 1;
		Tclickcount += 1;
	}

	moveButton();

	if (moneycount >= lvlprice) {
		uc.style.color = "green";
	} else {
		uc.style.color = "black";
	}
	if (moneycount >= exprice) {
		dc.style.color = "green";
	} else {
		dc.style.color = "black";
	}

	document.getElementById("cc").innerHTML = clickcount;
	document.getElementById("mc").innerHTML = moneycount;
	document.getElementById("mca").innerHTML = `+${moneyadd}`;
});
