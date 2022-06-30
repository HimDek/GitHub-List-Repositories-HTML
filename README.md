<p align="center">
 <a href="https://gitlist.himdek.com/"><h1 align="center">GitHub List Repositories</h1></a>
 <p align="center">List or pin the GitHub Repositories or Gists in a webpage using GitHub API</p>
</p>

<p class="buttons" align="center">
 <a href="https://github.com/HimDek/GitHub-List-Repositories-HTML/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/HimDek/GitHub-List-Repositories-HTML?style=flat-square&label=Issues" /></a>
 <a href="https://github.com/HimDek/GitHub-List-Repositories-HTML/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/himdek/GitHub-List-Repositories-HTML?style=flat-square&label=Pull%20requests" /></a>
 <a href="https://github.com/HimDek/GitHub-List-Repositories-HTML/"><img src="https://img.shields.io/badge/GitHub-View%20sourcecode-blue?style=flat-square&logo=github&color=blueviolet" /></a>
 <a href="https://github.com/HimDek/GitHub-List-Repositories-HTML/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/HimDek/GitHub-List-Repositories-HTML?style=flat-square&label=License" /></a>
 <a href="https://github.com/HimDek/GitHub-List-Repositories-HTML/workflows/pages/pages-build-deployment/"><img src="https://img.shields.io/github/deployments/HimDek/GitHub-List-Repositories-HTML/github-pages?label=WebPage%20build%20status&logo=InternetExplorer&style=flat-square" /></a>
 <a href="https://github.com/HimDek/GitHub-List-Repositories-HTML/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/HimDek/GitHub-List-Repositories-HTML?style=flat-square&label=Forks" /></a>
 <a href="https://github.com/HimDek/GitHub-List-Repositories-HTML/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/HimDek/GitHub-List-Repositories-HTML?style=flat-square&label=Stars" /></a>
</p>

<br />

<p class="buttons" align="center">
  <a href="https://himdek.com/?tab=repos"><img src="https://img.shields.io/badge/Webpage%20using%20this%20script-Repos-green?style=for-the-badge" /></a>
  <a href="https://jsfiddle.net/HimDek/rka0wpoq/"><img src="https://img.shields.io/badge/JSFiddle-Live%20example-blueviolet?style=for-the-badge&logo=JSFiddle" /></a>
  <a href="https://himdek.com/?tab=gists"><img src="https://img.shields.io/badge/Webpage%20using%20this%20script-Gists-green?style=for-the-badge" /></a>
</p>

<p class="buttons" align="center">
  <a href="#first-put-these-lines-inside-the-headhead-of-your-html-file"><img src="https://img.shields.io/badge/HTML-How%20to%20use-blue?style=for-the-badge&logo=HTML5" /></a>
  <a href="https://himdek.com/?tab=donate"><img src="https://img.shields.io/badge/Donate-Support%20me-green?style=for-the-badge&logo=Razorpay" /></a>
  <a href="https://gitlist.himdek.com/"><img class="invisible" src="https://img.shields.io/badge/gitlist.himdek.com-View%20Website-blue?style=for-the-badge&logo=Internet-Explorer&color=blue" /></a>
</p>

<br />

### First, put these lines inside the `<head></head>` of your HTML file:
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://gitlist.himdek.com/GitHubList.js"></script>
```

### General Examples:
From the examples below,
* Replace `Username` with a real GitHub Username.
* Replace `Reponame` with the name of a GitHub Repository of the GitHub User specified in the first step.
* Replace `GistID` with the ID of a GitHub Gist of the GitHub User specified in the first step.
* Replace `IdOfTheHTMLElement` with the ID of the HTML Element that you want to put the entry in.
  * For Example, create a HTML `div` element with an `id` attribute wherever you want it to be in your HTML file.
    ```
    <div id="ElementId"></div>
    ```
    In the above case, replace `IdOfTheHTMLElement` from the below examples with `ElementId`.

#### 1. Pin a single GitHub Repository:
```
<script>
gitpin("https://api.github.com/repos/Username/Reponame", "repo", document.getElementById("IdOfTheHTMLElement"));
</script>
```

#### 2. Pin a single GitHub Gist:
```
<script>
gitpin("https://api.github.com/gists/GistID", "gist", document.getElementById("IdOfTheHTMLElement"));
</script>
```

#### 3. List All GitHub Repositories:
```
<script>
listrepos("Username", document.getElementById("IdOfTheHTMLElement")).then(reposcount => {
  // In this section, variable reposcount stores the total number of Repositories.
});
</script>
```

#### 4. List All GitHub Gists:
```
<script>
listgists("Username", document.getElementById("IdOfTheHTMLElement")).then(gistscount => {
  // In this section, variable gistscount stores the total number of Gists.
});
</script>
```

### Basic CSS to be used:
Put the following lines inside the `<head></head>` of you HTML file. These very basic CSS styles. You can customize them to match the theme of your website.
```
<style>
svg {
  vertical-align: middle;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.box {
  border: 1px solid black;
  padding: 25px;
  margin: 20px;
}

.stats span {
  display: inline-block;
  margin-right: 10px;
}

ol {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}
</style>
```
