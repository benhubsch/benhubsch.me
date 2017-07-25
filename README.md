# PersonalWebsite

A website I created to share about myself and my interests as they relate to Computer Science and my Duke experience: [benhubsch.io](https://www.benhubsch.io)

## Table of Contents

- [Project Overview](#project-overview)
- [Demo](#demo)
- [Contributing](#contributing)

## Project Overview

This was a project that I'd been meaning to get around to for a long time, I just needed to actually get to work and get it done. I really enjoyed building this site from scratch, though it came with its fair share of challenges (flexbox, I'm lookin' at you!).

This project was written on an Express server, 

One of the biggest benefits of doing this project was working on my ability to mesh existing components and code to fit within my setup. As an example, I have a dynamic header on my [About](https://www.benhubsch.io/about) page that I found somewhere on CodePen in a slightly different form. When I tried to incorporate into my page, the padding was off, I had overlapping class names, and the animation didn't work. I had to dive deeper into how that component worked in order to understand why it had worked on CodePen but not in my codebase and sort out the differences. It's a very different kind of debugging than the kind of debugging I'm used to -- i.e., the kind of debugging where your program crashes and a cryptic error message gives you hints for what lines to check out. Instead, you have to fiddle with properties using the Chrome Developer Tools, inspect each element, and proceed from there.

## Demo

Let's say I'm the project lead on a team, and I want to reward my coworkers for workind hard the past couple weeks with a Friday afternoon pizza party. I can make the Dominator application listen to me from anywhere inside my Slack channel by typing an order, which it will understand and being a conversation, asking me for information that I did not provide. It is possible to provide more than just order information when I invoke the bot -- I could also give it my phone number, email, and home address if I wanted to knock it out in one fell swoop. We've illustrated the step-by-step process here for clarity.

![alt text](https://github.com/benhubsch/SlackPizza/blob/master/pics/slack.png "In Slack")

Note a couple of things: for starters, I say I want a pepperoni pizza. The application runs keywords that the api.ai entity picks out of my request -- most likely "pepperoni" and "pizza" -- and runs those keywords through an algorithm that matches to Dominos menu items behind the scenes. It came up with Ultimate Pepperoni as the dish that would suit me best. Not bad! The application was also able to pick my phone number and email out of otherwise perfectly normal English sentences. Lastly, I gave it a really poorly formatted address, and the application was able to churn out a gorgeous, nicely formatted address that will ultimately be passed on to Dominos (1412 Market san fran to 1412 Market St., San Francisco, CA 94102).

I am then forwarded to a link that contains a page where I can enter my credit card information. Slack does not support sending forms through direct messages, nor would it be ideal to put credit card info inline as a regular message, so the most secure option is to link to an external form:
![alt text](https://github.com/benhubsch/SlackPizza/blob/master/pics/payment.png "Payment Details")
Each of the fields that I fill out are validated to ensure that they are non-empty, contain the correct type, and are plausible credit card details. The UI automatically changes color and autofills your credit company if it is well known.

Lastly, the most enjoyable step: my order is complete! I can see how much I spent, and how long I can expect to wait until Dominos is able to deliver to my apartment.
![alt text](https://github.com/benhubsch/SlackPizza/blob/master/pics/final.png "Order confirmation")

If you have any doubts as to whether this actually works, it does! I suppose you'll have to take my word for it. Unless, of course, your stomach starts to grumble, and you can't help but be a little bit curious if the code we wrote actually works, and you fork it and place an order.

## Contributing

Interested in contributing to this project? Feel free! Create a branch, add commits, and [open a pull request](https://github.com/benhubsch/File-Finder/compare/). 
