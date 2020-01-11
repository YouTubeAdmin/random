var Streamer = window.prompt("Streamer Name:").toLowerCase();
window.people = [];
window.peopleTemp = [];
window.First = true;
window.joined = function (user) {
	console.log(user + " has joined the chat."); // If you want try to add it to Twitch chat but I had issues with this
};

window.checkForArivals = function() {
	var http = new XMLHttpRequest();
	http.open("GET", `https://tmi.twitch.tv/group/user/${Streamer}/chatters`);
	http.onload = function(e) {
		var chat = JSON.parse(e.srcElement.response).chatters;
		var vips = chat.vips;
		var mods = chat.moderators;
		var staff = chat.staff;
		var admins = chat.admins;
		var viewers = chat.viewers;
		peopleTemp = people;
		people = [];
		var i;
		for (i = 0; i < vips.length; i++) {
			if (!peopleTemp.includes(vips[i]) && !First) {
				window.joined("The VIP " + "\"" + vips[i] + "\"");
			}
			people.push(vips[i]);
		}
		for (i = 0; i < mods.length; i++) {
			if (!peopleTemp.includes(mods[i]) && !First) {
				window.joined("The Moderator " + "\"" + mods[i] + "\"");
			}
			people.push(mods[i]);
		}
		for (i = 0; i < staff.length; i++) {
			if (!peopleTemp.includes(staff[i]) && !First) {
				window.joined("The Twitch Staff Member \"" + staff[i] + "\"");
			}
			people.push(staff[i]);
		}
		for (i = 0; i < admins.length; i++) {
			if (!peopleTemp.includes(admins[i]) && !First) {
				window.joined("The Twitch Administrator " + "\"" + admins[i] + "\"");
			}
			people.push(admins[i]);
		}
		for (i = 0; i < viewers.length; i++) {
			if (!peopleTemp.includes(viewers[i]) && !First) {
				window.joined("The Viewer " + "\"" + viewers[i] + "\"");
			}
			people.push(viewers[i]);
		}
		First = false;
	};
	http.send();
};

setInterval(checkForArivals, 250);
void(0);