var current = -1;
var all = [
	"- --------------------------------------",
	"-- -------------------------------------",
	"--- ------------------------------------",
	"---- -----------------------------------",
	"----- ----------------------------------",
	"------ ---------------------------------",
	"------- --------------------------------",
	"-------- -------------------------------",
	"--------- ------------------------------",
	"---------- -----------------------------",
	"----------- ----------------------------",
	"------------ ---------------------------",
	"------------- --------------------------",
	"-------------- -------------------------",
	"--------------- ------------------------",
	"---------------- -----------------------",
	"----------------- ----------------------",
	"------------------ ---------------------",
	"------------------- --------------------",
	"-------------------- -------------------",
	"--------------------- ------------------",
	"---------------------- -----------------",
	"----------------------- ----------------",
	"------------------------ ---------------",
	"------------------------- --------------",
	"-------------------------- -------------",
	"--------------------------- ------------",
	"---------------------------- -----------",
	"----------------------------- ----------",
	"------------------------------ ---------",
	"------------------------------- --------",
	"-------------------------------- -------",
	"--------------------------------- ------",
	"---------------------------------- -----",
	"----------------------------------- ----",
	"------------------------------------ ---",
	"------------------------------------- --",
	"-------------------------------------- -"
];

window.func = function () {
	var num = NaN;
	if (window.current === 37) {
		window.current = 0;
		num = 0;
	} else {
		window.current += 1;
		num = window.current;
	}
fetch("https://discordapp.com/api/v6/users/@me/settings", {"credentials":"include","headers":{"accept":"*/*","accept-language":"en-US","authorization":"[AUTHORIZATION]","cache-control":"no-cache","content-type":"application/json","pragma":"no-cache","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","x-super-properties":"[SYSTEM INFO IN Base64]"},"referrer":"https://discordapp.com/channels/@me","referrerPolicy":"no-referrer-when-downgrade","body":`{\"custom_status\":{\"text\":\"${window.all[num]}\",\"expires_at\":\"2020-01-10T08:00:00.000Z\"}}`,"method":"PATCH","mode":"cors"});
}; // Change expires_at to correct date

setInterval(func, 1000);