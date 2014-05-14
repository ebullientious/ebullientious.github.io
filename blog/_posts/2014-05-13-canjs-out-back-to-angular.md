---
layout: post
title:  "CanJS out, Back to Angular"
date:   2014-05-13
categories: frameworks
---

Sigh. It is with sadness I retire my attempts to use [CanJS][canjs], and 
return to AngularJS. I really wanted to support an alternative framework for 
creating web apps that provided the two-way data binding AngularJS boasts, 
observer/subscriber patterns for detecting changes in data, etc. I met
one of CanJS's authors through a tech talk and thought it would be interesting 
to try out, but it's still premature for public consumption. There is a lot
of missing pieces they need to flesh out.

1. Poor documentation/tutorials
=====================
I appreciate when people take time to painstakingly document code. But
their documentation lacked cohesion; it was like presenting multiple
storylines without a nice bridge that connected them all. The tutorials 
were barebones, lacking in fleshing out under what circumstances developers 
should be considering to use [Observables][observables]/[Deferred][deferred]/etc. 

2. Not enough community support
===============================
Again, because of the lack of people using it, it was hard to find resources
to reference to create simple things, like a navigational menu that would
take people to a static subpage (without using iframes). A few
members are active in IRC, that provided me with some help, so that's a 
nice bonus.

3. Mostly used for private corporate projects
=============================================
CanJS seems to cater to private organizations. I met one of its writers
through a tech talk at work and was excited to try it out.
It was disappointing not to see many projects publicly using it, which
leads me to believe it's being pushed and popularized by contractors
seeking employment through corporations. In other words, CanJS's primary
clients are not the day-to-day developers interested in learning 
another framework; instead, the team behind CanJS provides the 
expertise in building this small framework for internal company projects.

As much as I tried to love CanJS, it just didn't cut it out for me.
I'm going to be reverting my content back to AngularJS. 

[canjs]:http://canjs.com
[observables]:http://canjs.com/guides/Observables.html
[deferred]:http://canjs.com/guides/Deferreds.html
