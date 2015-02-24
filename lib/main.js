import XkcdApi from './xkcd-api';
import XkcdItem from './xkcd-item';
import XkcdView from './xkcd-view';

XkcdApi.load()
	.then(XkcdItem, function(err){
		console.log("XkcdItem Error: ", err);
	})
	.then(XkcdView, function(err){
		console.log("XkcdView Error: ", err);
	});

export default {};