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

# Usage:

## First, put these lines inside the `<head></head>` of your HTML file:
``` HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://gitlist.himdek.com/GitHubList.js"></script>
```

## Functions:

> <details open>
> <summary><h3>gitpin(apiurl, type, HTMLDOMElement);</h3></summary>
> Inserts a particular repo or gist into the HTMLDOMELement.
>
> #### Parameters: 
> * `apiurl`: api url of the repo or gist. Example: "https://api.github.com/repos/HimDek/GitHub-List-Repositories-HTML" is the api url of this repo.
> * `type`: "repo" or "gist"
> * `HTMLDOMElement`: The HTML DOM Element to insert into. Example: `document.getElementById("myID")`. To set Id of HTML Element: `<div id="myID"></div>`
>
> #### Example
> ``` Js
> gitpin("https://api.github.com/repos/Username/Reponame", "repo", document.getElementById("IdOfTheHTMLElement"));
> ```
> </details>

<br>

> <details open>
> <summary><h3>listrepos(Username, HTMLDOMELement, showProfile=false, showPagesHome=false, exclude=[])</h3></summary>
> Inserts a list of repos belonging to Username into the HTMLDOMELement.
> 
> #### Parameters: 
> * `Username`: GitHub username. Example: `"HimDek"` is my username.
> * `HTMLDOMElement`: The HTML DOM Element to insert into. Example: `document.getElementById("myID")`. To set Id of HTML Element: `<div id="myID"></div>`
> * `showProfile`: default=`false` set to `true` to show the profile repo i.e. "Username/Username"
> * `showPagesHome`: default=`false` set to `true` to show the User's GitHub pages Home page repo i.e. "Username/Username.github.io"
> * `exclude`: default=`[]`, To exclude a repo, put a "," separated list of repo names to be excluded enclosed in `""` inside the `[]`. Example: `["reponame-1", "reponame-2"]`
> 
> #### Example
> * Pin all the repos of a User except the profile and pages Home repo:
>   ``` Js
>   listrepos("Username", document.getElementById("IdOfTheHTMLElement")).then(reposcount => {
>     // In this section, variable reposcount stores the total number of Repositories.
>   });
>   ```
> * Pin all the repos of a User:
>   ``` Js
>   listrepos("Username", document.getElementById("IdOfTheHTMLElement"), showProfile=true, showPagesHome=true).then(reposcount => {
>     // In this section, variable reposcount stores the total number of Repositories.
>   });
>   ```
> * Pin all the repos of a User excluding "repo-1" and "repo-2":
>   ``` Js
>   listrepos("Username", document.getElementById("IdOfTheHTMLElement"), showProfile=true, showPagesHome=true, exclude=["repo-1", "repo-2"]).then(reposcount => {
>     // In this section, variable reposcount stores the total number of Repositories.
>   });
>   ```
> </details>

<br>

> <details open>
> <summary><h3>listgists(Username, HTMLDOMELement)</h3></summary>
> Inserts a list of all the gists belonging to Username into the HTMLDOMELement.
> 
> #### Parameters:
> * `Username`: GitHub username. Example: `"HimDek"` is my username.
> * `HTMLDOMElement`: The HTML DOM Element to insert into. Example: `document.getElementById("myID")`. To set Id of HTML Element: `<div id="myID"></div>`
> 
> #### Example
>   ``` Js
>   listgists("Username", document.getElementById("IdOfTheHTMLElement")).then(gistscount => {
>     // In this section, variable gistscount stores the total number of Gists.
>   });
>   ```

## More Examples:
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

> #### 1. Pin a single GitHub Repository:
> ``` HTML
> <script>
> gitpin("https://api.github.com/repos/Username/Reponame", "repo", document.getElementById("IdOfTheHTMLElement"));
> </script>
> ```

<br>

> #### 2. Pin a single GitHub Gist:
> ``` HTML
> <script>
> gitpin("https://api.github.com/gists/GistID", "gist", document.getElementById("IdOfTheHTMLElement"));
> </script>
> ```

<br>

> #### 3. List All GitHub Repositories:
> ``` HTML
> <script>
> listrepos("Username", document.getElementById("IdOfTheHTMLElement"), showProfile=true, showPagesHome=true).then(reposcount => {
>   // In this section, variable reposcount stores the total number of Repositories.
> });
> </script>
> ```

> #### 4. List All GitHub Gists:
> ``` HTML
> <script>
> listgists("Username", document.getElementById("IdOfTheHTMLElement")).then(gistscount => {
>   // In this section, variable gistscount stores the total number of Gists.
> });
> </script>
> ```

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
