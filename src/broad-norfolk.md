---
title: English to Broad Norfolk
description: Translate English text into the Broad Norfolk dialect
nav: broad-norfolk
categories:
  - broad-norfolk
eleventyExcludeFromCollections: true
---
<script src="https://cdn.jsdelivr.net/gh/lovell/broad-norfolk@master/bn.min.js"></script>

<form action="#" method="GET" name="broadNorfolkForm">
    <div class="form-floating">
        <textarea class="form-control" placeholder="Enter English text here" id="fromEnglish" style="height: 200px"></textarea>
        <label for="fromEnglish">Enter English text here</label>
    </div>
    <div class="pt-2">
        <button type="button" class="btn btn-primary" id="translateButton">Translate into Broad Norfolk</button>
    </div>
</form>

<div id="toBroadNorfolk" class="p-3 m-3 bg-light text-dark border col-8">Yooor &#8216;ranslation doo appare &#8216;are.</div>

<script>
    document
        .getElementById("translateButton")
        .addEventListener("click", function () {
            const en = document.getElementById("fromEnglish").value;
            const bn = broadNorfolk.translatePhrase(en);
 	 		document.getElementById("toBroadNorfolk").innerHTML = bn;
        });
</script>

<p class="text-muted">Learn more about Broad Norfolk with the <a href="http://www.norfolkdialect.com/" target="_blank">Friends Of Norfolk Dialect</a>.</p>

<p class="text-muted">The <a href="https://github.com/lovell/broad-norfolk" target="_blank">code</a> for this tool is open source and available under the Apache 2.0 licence.</p>
