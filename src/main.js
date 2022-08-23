import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		bookmarks: [
			{url: "https://wiki.archlinux.org/", title: "Arch", icon: "cib:arch-linux"},
			{url: "https://open.spotify.com/?nd=1", title: "Spotify", icon: "akar-icons:spotify-fill"},
			{url: "https://docs.google.com/document", title: "Docs", icon: "fa6-solid:file-lines"},
			{url: "https://github.com/nulloneguy", title: "Github", icon: "akar-icons:github-fill"},
			{url: "https://mangalib.me/", title: "Mangalib", icon: "fa-solid:list"},
			{url: "#", title: "Drive", icon: "entypo-social:google-drive"},
			{url: "https://mail.yandex.ru/", title: "Япошта", icon: "fa6-solid:envelope"},
			{url: "https://monkeytype.com/", title: "Monkeytype", icon: "fa6-solid:keyboard"},
			{url: "https://www.notion.so/", title: "Notion", icon: "fa6-solid:list-check"},
			{url: "https://youtube.com", title: "YouTube", icon: "akar-icons:youtube-fill"},
			{url: "https://www.deepl.com/translator#en/ru", title: "DeepL", icon: "fa6-solid:language"},
			{url: "https://wakatime.com/dashboard", title: "WakaTime", icon: "fa-solid:chevron-circle-down"}, 	
		]
	}
});

export default app;

