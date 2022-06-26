function listrepos(username, listelement) {
	return new Promise((resolve, reject) => {
		reposcount = 0;
		reposurl = "https://api.github.com/users/" + username + "/repos"
		fetch(reposurl).then(res => res.json()).then(async (out) => {
			var ol = document.createElement("ol");
			ol.setAttribute("class", "sort");
	
			divtxt = "";
			for (let i = 0; ; i++) {
				if (out[i] == null) {
					break;
				}
				if (out[i].name.toLowerCase() == out[i].owner.login.toLowerCase() || out[i].name.toLowerCase() == out[i].owner.login.toLowerCase() + ".github.io") {
					continue;
				}
				reposcount++;
				node = document.createElement("li");
				node.setAttribute("data-position", 0 - out[i].watchers);
        			await gitpin(out[i].url, "repo", node);
				ol.appendChild(node);
			}
			listelement.appendChild(ol);
			var $wrapper = $('.sort');
			$wrapper.find('li').sort(function(a, b) { return +a.getAttribute('data-position') - +b.getAttribute('data-position'); }).appendTo($wrapper);
			resolve(reposcount);
		});
	});
}

function listgists(username, listelement) {
	return new Promise((resolve, reject) => {
		gistscount = 0;
		gistsurl = "https://api.github.com/users/" + username + "/gists"
		fetch(gistsurl).then(res => res.json()).then(async (out) => {
			var ol = document.createElement("ol");
			divtxt = "";
			for (let i = 0; ; i++) {
				if (out[i] == null || Object.keys(out[i].files)[0] == null) {
					break;
				}
				gistscount++;
				node = document.createElement("li");
				await gitpin(out[i].url, "gist", node);
				ol.appendChild(node);
			}
			listelement.appendChild(ol);
			resolve(gistscount);
		});
	});
}

async function gitpin(apiurl, type, element) {
	await fetch(apiurl).then(res => res.json()).then(async (out) => {
    	url = out.html_url;
		newdiv = document.createElement("div");
        
        desc = "";
        if (out.description != null) {
			desc = out.description;
		}

        if (type == "repo") {
        	newdiv.setAttribute("class", "box");
		buttons = "<a href=\"" + url + "\"><button>View in Github</button></a>";

		site = false;
		if (out.has_pages){
			url = "https://" + out.owner.login + ".github.io/" + out.name;
			site = true;
		}
		if (!!out.homepage) {
			url = out.homepage;
			site = true;
		}
		if (site) {
			buttons = "<a href=\"" + url + "\"><button>View</button></a>" + buttons;
		}
			
		fork = "<a href=\"https://github.com/" + out.owner.login.toLowerCase() + "/" + out.name.toLowerCase() + "/network/members\"><svg aria-hidden=\"true\" height=\"19\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\"><path fill-rule=\"evenodd\" d=\"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z\"></path></svg>" + out.forks.toString() + "</a>";
                    
		star = "<a href=\"https://github.com/" + out.owner.login.toLowerCase() + "/" + out.name.toLowerCase() + "/stargazers\"><svg aria-hidden=\"true\" height=\"19\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\"><path fill-rule=\"evenodd\" d=\"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z\"></path></svg>" + out.watchers.toString() + "</a>";		
		
		language = "";
		if (out.language != null) {
			await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json").then(res => res.json()).then((col) => {
				for(const x in col)
 					if (x == out.language)
						language = "<span>" + "<svg style=\"padding: 0px; margin:0;\" height=\"16\" width=\"14\"><circle cx=\"6\" cy=\"6\" r=\"6\" stroke=\"white\" stroke-width=\"1\" fill=\"" + col[x].color + "\"></circle></svg>" + out.language + "</span>";
			});
		}
        
		stats = "<span class=\"stats\">" + language + star + fork + "</span>";

		controls = "<div class=\"controls\">" + stats + "<span class=\"horizontalspace\"></span><span class=\"buttons\">" + buttons + "</span></div>";
            
        divtxt = "<a href = \"" + url + "\"><svg aria-hidden=\"true\" height=\"19\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\"><path fill-rule=\"evenodd\" d=\"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z\"></path></svg>" + out.name + "</a><p>" + desc + "</p>" + controls;
        }
        
        if (type == "gist") {
        	divtxt = "<div class = \"box\"><div><a href = \"" + url + "\"><h2>" + Object.keys(out.files)[0] + "</h2></a><p>" + desc + "</p></div></div>";
        }

        newdiv.setAttribute("style", "text-align: left;");
        newdiv.innerHTML = divtxt;
        element.appendChild(newdiv);
	});
}
