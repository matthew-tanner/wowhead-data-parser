# wowhead-data-parser
Boilerplate for working with Wowhead.com data objects since there is no official API provided by them.

#### SETUP
1. We need to get the object data from the website through [Postman](https://postman.com) or any alternative.
URL - https://www.wowhead.com/items

2. You will then need to extract the object array from the response which is in the Listview("data") object.
![Listview](https://i.imgur.com/kQNGR7z.png)

3. Save the "data" array as your input.json file
4. Profit


#### NOTE
- This relies heavily on you filtering your data down on the original url before grabbing the data array. Right click on "Type" on the website item list and choose "Herb". It will then add to the URL the full path you need for getting just the "Herb" data.
Example - https://www.wowhead.com/objects#type=herb

- The data object can be obtained from any wow head items list url for the most part. So if you have a specific list of items you need data from, this could work as well.

- Wowhead restricts their object arrays to 1000 , but sometimes you may end up with 1500 or 1800 results in the array since their return object buffers extra items to help with server load when users are on the website looking at data **(my guess anyway)**.


This is just a basic example of what you can do with the object arrays on wowhead. You could automate this to crawl the items page and pull all 126,000 objects with their respective data info and store them locally.