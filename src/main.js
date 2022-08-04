import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		bookmarks: [
			{url: "https://wiki.archlinux.org/", title: "Arch" },
			{url: "https://open.spotify.com/?nd=1", title: "Spotify"},
			{url: "https://docs.google.com/document", title: "Docs"},
			{url: "https://github.com/nulloneguy", title: "Github"},
			{url: "https://mangalib.me/", title: "Mangalib"},
			{url: "#", title: "Drive"},
			{url: "https://mail.yandex.ru/", title: "Япошта" },
			{url: "https://monkeytype.com/", title: "Monkeytype"},
			{url: "https://www.notion.so/", title: "Notion"},
			{url: "https://youtube.com", title: "YouTube"},
			{url: "https://www.deepl.com/translator#en/ru", title: "DeepL"},
			{url: "https://wakatime.com/dashboard", title: "WakaTime"}, 	
		]
	}
});

export default app;

