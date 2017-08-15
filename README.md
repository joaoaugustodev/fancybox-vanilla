# fancybox-vanilla
This its a simple puling of the light box for images made with pure JS


## Welcome to FancyBox Vanilla JS
its very simple use this pluging without dependency of the other lib or framework

> This is a simple documentation for who want use

Well, its simple

EX:

here its my HTML
```html
<div class="fancyBox" id="images">
        <img src="./images/1.jpg" alt="image one" counter="0" style="cursor: pointer;">
        <img src="./images/2.jpg" alt="image two" counter="1" style="cursor: pointer;">
        <img src="./images/3.jpg" alt="image three" counter="2" style="cursor: pointer;">
        <img src="./images/4.jpg" alt="image four" counter="3" style="cursor: pointer;">
        <img src="./images/5.jpg" alt="image five" counter="4" style="cursor: pointer;">
        <img src="./images/6.jpg" alt="image six" counter="5" style="cursor: pointer;">
        <img src="./images/7.jpg" alt="image seven" counter="6" style="cursor: pointer;">
        <img src="./images/8.jpg" alt="image eight" counter="7" style="cursor: pointer;">
</div>
```

Next I call the class and method
```javascript

FancyBox('.fancy')
        .showImage()
```        
The parameter defined in FancyBox its a class tha I defined for encapsulate my images and next I call the method
to show images like a fancyBox


> Soon I will build a method for the videos and I'll better the method image modal
