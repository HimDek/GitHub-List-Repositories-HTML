function listrepos(username, listelement, showProfile = false, showPagesHome = false, exclude = []) {
  return new Promise((resolve, reject) => {
    reposcount = 0;
    reposurl = "https://api.github.com/users/" + username + "/repos"
    fetch(reposurl).then(res => res.json()).then((out) => {
      var ol = document.createElement("ol");
      ol.setAttribute("class", "sort");
      for (let i = 0; ; i++) {
        if (out[i] == null) {
          break;
        }
        if (!showProfile && out[i].name.toLowerCase() == out[i].owner.login.toLowerCase()) {
          continue;
        }
        if (!showPagesHome && out[i].name.toLowerCase() == out[i].owner.login.toLowerCase() + ".github.io") {
          continue;
        }
        if (exclude.includes(out[i].name)) {
          continue;
        }
        reposcount++;
        node = document.createElement("li");
        node.setAttribute("data-position", 0 - out[i].watchers);
        gitpinjson(out[i], "repo", node);
        ol.appendChild(node);
      }
      listelement.appendChild(ol);
      var $wrapper = $('.sort');
      $wrapper.find('li').sort(function (a, b) {
        return +a.getAttribute('data-position') - +b.getAttribute('data-position');
      }).appendTo($wrapper);
      resolve(reposcount);
    });
  });
}

function listgists(username, listelement) {
  return new Promise((resolve, reject) => {
    gistscount = 0;
    gistsurl = "https://api.github.com/users/" + username + "/gists"
    fetch(gistsurl).then(res => res.json()).then((out) => {
      var ol = document.createElement("ol");
      for (let i = 0; ; i++) {
        if (out[i] == null || Object.keys(out[i].files)[0] == null) {
          break;
        }
        gistscount++;
        node = document.createElement("li");
        gitpinjson(out[i], "gist", node);
        ol.appendChild(node);
      }
      listelement.appendChild(ol);
      resolve(gistscount);
    });
  });
}

function gitpin(apiurl, type, element) {
  fetch(apiurl).then(res => res.json()).then((out) => {
    gitpinjson(out, type, element)
  });
}

function gitpinjson(data, type, element) {
    card = document.createElement("div")
    card.classList.add("box");  // Legacy support
    card.classList.add("card");

    cardbody = document.createElement("div")
    cardbody.classList.add("card-body")

    cardtitle = document.createElement("h5")
    cardtitle.classList.add("card-title")

    cardtext = document.createElement("p")
    cardtext.classList.add("card-text")

    cardstats = document.createElement("span")
    cardstats.classList.add("card-stats")

    titlea = document.createElement("a")

    url = data.html_url;
    desc = (data.description == null) ? "" : data.description;
    cardtext.innerHTML = desc

    if (type == "repo") {
      reposvg = "<svg aria-hidden=\"true\" height=\"19\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\"><path fill-rule=\"evenodd\" d=\"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z\"></path></svg>"

      if (data.has_pages)
        url = "https://" + data.owner.login + ".github.io/" + data.name;

      if (!!data.homepage)
        url = data.homepage

      card.classList.add("repo")

      titlea.setAttribute("href", url)
      titlea.innerHTML = reposvg + data.name

      if (data.language != null) {
        colorize(data.id, data.language);
        languagesvg = "<svg style=\"padding: 0px; margin:0;\" height=\"16\" width=\"16\"><circle id=\"" + data.id + "\" cx=\"6\" cy=\"6\" r=\"6\" stroke=\"white\" stroke-width=\"1\"></circle></svg>"

        span = document.createElement("span")
        span.innerHTML = data.language

        languagespan = document.createElement("span")
        languagespan.innerHTML = languagesvg
        languagespan.appendChild(span)
        cardstats.appendChild(languagespan)
      }

      if (data.stargazers_count >= 1) {
        starurl = "https://github.com/" + data.owner.login.toLowerCase() + "/" + data.name.toLowerCase() + "/stargazers";
        starsvg = "<svg aria-hidden=\"true\" height=\"19\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\"><path fill-rule=\"evenodd\" d=\"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z\"></path></svg>"

        span = document.createElement("span")
        span.innerHTML = data.stargazers_count.toString()

        stara = document.createElement("a")
        stara.setAttribute("href", starurl)
        stara.innerHTML = starsvg
        stara.appendChild(span)
        cardstats.appendChild(stara)
      }

      if (data.forks >= 1) {
        forkurl = "https://github.com/" + data.owner.login.toLowerCase() + "/" + data.name.toLowerCase() + "/network/members"
        forksvg = "<svg aria-hidden=\"true\" height=\"19\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\"><path fill-rule=\"evenodd\" d=\"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z\"></path></svg>"

        span = document.createElement("span")
        span.innerHTML = data.forks.toString()

        forka = document.createElement("a")
        forka.setAttribute("href", forkurl)
        forka.innerHTML = forksvg
        forka.appendChild(span)
        cardstats.appendChild(forka)
      }

      if (data.license != null) {
        licenseurl = "https://choosealicense.com/licenses/" + data.license.key
        licensesvg = "<svg aria-hidden=\"true\" height=\"19\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"19\" data-view-component=\"true\" class=\"octicon octicon-law mr-1\"><path fill-rule=\"evenodd\" d=\"M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z\"></path></svg>";

        span = document.createElement("span")
        span.innerHTML = data.license.spdx_id

        licensea = document.createElement("a")
        licensea.setAttribute("href", licenseurl)
        licensea.innerHTML = licensesvg
        licensea.appendChild(span)
        cardstats.appendChild(licensea)
      }
    }

    if (type == "gist") {
      card.classList.add("gist");

      titlea.setAttribute("href", url)
      titlea.innerHTML = Object.keys(data.files)[0]

      filecount = 0;
      for (let i = 0; ; i++) {
        if (Object.keys(data.files)[i] != null)
          filecount++;
        else
          break;
      }

      if (filecount != 0) {
        filetxt = (filecount == 1) ? filecount + " file" : filecount + " files";
        filesvg = "<svg aria-hidden=\"true\" height=\"19\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-code-square\"><path fill-rule=\"evenodd\" d=\"M1.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm9.22 3.72a.75.75 0 000 1.06L10.69 8 9.22 9.47a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.78 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.31 8l1.47-1.47z\"></path></svg>";

        span = document.createElement("pan");
        span.innerHTML = filetxt;

        filea = document.createElement("a");
        filea.classList.add("card-link");
        filea.setAttribute("href", data.html_url);
        filea.innerHTML = filesvg;
        filea.appendChild(span);

        cardbody.appendChild(filea);
      }

      if (data.comments != 0) {
        commenttxt = (data.comments == 1) ? data.comments + " comment" : data.comments + " comments";
        commentsvg = "<svg aria-hidden=\"true\" height=\"19\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-comment\"><path fill-rule=\"evenodd\" d=\"M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z\"></path></svg>";

        span = document.createElement("span");
        span.innerHTML = commenttxt;

        commenta = document.createElement("a");
        commenta.setAttribute("href", data.html_url + "#comments");
        commenta.innerHTML = commentsvg;
        commenta.appendChild(span);

        cardstats.appendChild(commenta);
      }
    }

    cardtitle.appendChild(titlea)

    cardbody.appendChild(cardtitle)
    cardbody.appendChild(cardtext)
    cardbody.appendChild(cardstats)

    card.appendChild(cardbody)

    element.appendChild(card);
}

function colorize(id, lang) {
  fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json").then(res => res.json()).then((col) => {
    for (const x in col)
      if (x == lang)
        document.getElementById(id).setAttribute("fill", col[x].color);
  });
}