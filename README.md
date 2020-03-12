# Drupal Indonesia Resources

[![Build Status](https://travis-ci.com/drupal-id/resources.svg?branch=master)](https://travis-ci.com/drupal-id/resources)

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
   1. Admin will review the PR before getting it merge.
   2. Once the PR is OK and gets merged, the site will be updated by itself after few minutes. Please notify admin if there's any problem.


Thank you!

