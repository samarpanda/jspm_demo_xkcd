export default (item) => {
	var elem = document.querySelector("#xkcd-cont");
	elem.innerHTML = `<a href="${item.page_url}"><img src="${item.img_url}" title="${item.title}"></a><p>${item.title}</p>`;
}