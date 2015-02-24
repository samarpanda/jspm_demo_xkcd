import jsonp from 'jsonp';

class XkcdApi{
	constructor(){
		this.xkcdURL = "https://morning-river-6203.herokuapp.com/xkcd_jsonp/";
	}
	load(){
		return new Promise((resolve, reject) => {
			jsonp(this.xkcdURL, {param: 'callback'}, (err, data) => {
				err ? reject(err) : resolve(data);
			});
		});
	}
}

export default new XkcdApi;