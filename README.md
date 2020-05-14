# The Metropolitan Museum of Art Search Engine #

Using the Met API, my Met search engine allows you to search the collection of the Metropolitan Museum of Art in NYC by artist, keyword, year, etc. The search engine returns up to 20 results, along with details about each piece.
___________________________________________________________________

**Important to Note**
Based on the following requirements :

+ "If the user types a query very quickly, only one network request should be sent.
E.g. if they super quickly type “Ocean” we should only send one request searching for “Ocean” rather than 5 requests for “O” then “Oc” then “Oce” and etc.
+ We should never show results that don’t match the current content of the search input, even if the user’s network has highly variable latency.
E.g. assume that one request to the server might take 10 seconds to return and the next could only take half a second."

The author has made two versions of this project. The first,
**mainOnSubmit**, takes care of both requirements by requiring a click on the Submit button in order to initiate the search. This will result in only one request sent to the network.

The next version, called **mainKeyup**,does not require a click on a submit button but instead will recognize when the user is done typing and then will show the results of the search.

___________________________________________________________________

**Table of Contents**
+ Tech Stack
+ Features
+ Setup/Installation
+ To-Do

**Tech Stack**
Frontend: HTML, CSS (Flexbox), Javascript, Bootstrap
APIs: Metropolitan Museum of Art API

**Features**

+ Shows 20 results
* Will display immidiately the following:
* Title of the piece
* Image 
* Clickable link to the Met's full website

As well as:

Show More button, 
that displays :
+ dimentions
+ date 
+ classification



**Installation**
Requirements:
+ Node
+ Javascript
+ HTML
+ CSS
+ Metropolitan Museum of Art API

To have this app running on your local computer, please follow the below steps:

+ Clone repository:

$ git clone 
+ Create a virtual environment:

$ virtualenv env
+ Activate the virtual environment:

$ source env/bin/activate


**ToDo**
+ "Focus" or "Scroll" in search after input has been received. (Version mainKeyUp has a something like this but its not smooth. In Version mainOnSubmit is not implemented)
+ Better design on search results.
