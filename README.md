## Some notes about this assignment

1. The thespacedevs launch library keeps throttling the requests (Request was throttled. Expected available in 1066 seconds, last time.). Didn't investigate how to avoid it and didn't want to Tor my way around it. Option B would be to load the data from a local file for development purposes.

SOLUTION:
	npm install -g json-server
	json-server --watch data/data.json --port 3004

2. The OpenStreet and leaflet code is one in production on my personal site.
3. Obviously, the searcher doesn't search.


An approach to fulliling the first step: to show the launches for the next three months. Since the API doesn't allow to find by dates (or I didn't find how) the best approach is to "load" pages and check the window date for the launch, stopping the loading once it's beyond three months. As for searching from a date, same approach, but using the general endpoint and filtering. This task would be best left to some middleware piece in our server, to avoid traffic and processing in the user's device.





