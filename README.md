# Drupal Indonesia Resources

**Live URL:** https://drupal-id.github.io/resources

## Introduction
This repo is a quick online solution to display a resources that (for now) are mostly recorded videos that were taken from previous meetups, sessions, or any Drupal community events, as meant for archival purpose, and as a reference or sharing knowlegde to any individuals that willing to learn more about Drupal.

## Technical Information
The website is hosted using Github free service which is [Github Pages](https://pages.github.com/), using a free theme called *[Meteorlxy](https://github.com/meteorlxy/vuepress-theme-meteorlxy)* for *[VuePress](https://vuepress.vuejs.org/)* .

## Who Can Contribute?
Anyone feel free to contribute to the website by adding more information about some other meetups, sessions, or any community events, along with the link to the respective videos.<br />

## How To Contribute?
Add new content/event by follow the steps as below:

1. **Running the website in your local:**
   1. Fork this repo, and Git clone to your local.
   2. Run these commands in order: 
      * `yarn install`. **NOTE:** Make sure `yarn` has already installed in your local.
      * `yarn dev`


2. **Adding new content/event:**
   1. Copy-paste one of the `*.md` file from directory of `/src/_posts`.
   2. Rename the file as you desire with format: `<yyyy>-<mm>-<dd>-<title-of-the-event>.md`
   3. Modify the content in that file by still abiding the format in it. It's should be pretty straightforward once you look at it.
   4. Check whether the new content/event is showing up properly in you local. 
   5. Once OK, git commit that new file to the `master` branch.
   6. Make a PR (Pull Request) against `master` branch.

3. **Deploy the new content/event:**
   1. Open file `deploy.sh`, and replace `drupal-id` portion with your own Github username in this part below on line 24.
   
   ```
   git push https://github.com/<your-own-github-username>/resources.git master:gh-pages
   ``` 
   2. Run command `./deploy.sh`. This will create new branch called `gh-pages` in your own repo. **NOTE:** If for some reason you have that branch already in your repo, REMOVE it first.
   3. Revert back the file of `deploy.sh`.

4. **Finalising the deployment** (**NOTE:** for now this process is done manually by *admin*. In the future, it will setup CI/CD pipeline for automated deployment):
   1. Admin will review the PR before gets merge.
   2. Once the PR is OK and gets merged, admin will remove the `gh-pages` branch from the original repo, and replace the branch with the one from your forked repo.


Thank you!

