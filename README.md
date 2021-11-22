# GitHub-List-Repositories
List or pin the GitHub Repositories or Gists in a webpage using GitHub API.

### First, put these lines inside <head></head> of your HTML file:
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://hide-techno-tips.github.io/GitHub-List-Repositories/GitHubList.js"></script>
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
Put the following lines inside the <head></head> of you HTML file. These are the basic CSS styles. You can customize them to match the theme of your website.
```
<style>
svg {
  display: inline-block;
  vertical-align: middle;
  padding-bottom: 3px;
}

a {
  text-decoration: none;
}

.box {
  border: 2px solid black;
  padding: 25px;
  margin: 20px;
}

.box div {
  margin: 5px;
}

.box p {
  color: black;
}

.controls {
  display: flex;
}

.horizontalspace {
  flex-grow: 1;
}

.stats {
  display: inline-flex;
  align-items: center;
}

.buttons * {
  margin-left: 5px;
}

.stats *:not(svg) {
  margin-right: 5px;
}

ol {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}
</style>
```

### Working Examples:
[Click here](https://jsfiddle.net/HiDe_Techno_Tips/rka0wpoq/) to view example on how to list all Repositories of a GitHub User in a HTML webpage.
[Click here](https://github.com/HiDe-Techno-Tips/HiDe-Techno-Tips.github.io) to view the source code of my website that uses this Script.
