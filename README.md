# News-Scraper
All the News That's Fit to Scrape

* This is a web app that lets users view and leave comments on the latest news. But you're not going to actually write any articles; instead, you'll flex your Mongoose and Cheerio muscles to scrape news from the NPR News site.

# NPM used:
    express
    express-handlebars
    mongoose
    cheerio
    axios

# What it does:
* Whenever a user visits this site, the app will scrape stories from NPR News outlet and display them for the user. Each scraped article will be saved to this application's database. 

* Users will also be able to leave comments on the articles displayed and revisit them later. The comments will be saved to the database as well and associated with their articles. Users will also be able to delete comments left on articles. All stored comments will be visible to every user.

# How to access this app:

* Click on this link: https://mongoose-npr-news-scraper.herokuapp.com/
    Or
* Clone this repository. Run npm init. Run npm install. Run node server.js. Last go to localhost:3000 on your browser.
        (You should have Robo 3T installed on your computer if you want to see the collections)