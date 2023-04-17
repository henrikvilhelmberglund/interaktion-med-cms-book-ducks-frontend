# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.0.3](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/compare/v0.0.2...v0.0.3) (2023-04-17)


### Features

* :sparkles: add ability to login when you're trying to view the to read list while not logged in ([4e09863](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/4e09863a7499fdea9887815c5aec396082376484))
* **components:** :sparkles: add buttons for adding/removing to read books ([23dc70c](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/23dc70ca1c511dcfa52fa35c9d7663cac2715225))
* **api:** :sparkles: add createReadLaterList() and updateReadLaterList() ([2d50cfa](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/2d50cfa746380084357cd3b54ea5fd209070a59a))
* :package: add @iconify-json/mdi ([dbbc6f7](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/dbbc6f7c3e30d55a3ef66e810c5aaaf20614138f))
* :sparkles: add to-read-list route ([065c726](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/065c7261a26a0754e234477391ba3d639f5e099f))
* :sparkles: set theme stuff from layout instead of index page ([8b44196](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/8b441962ed605085b90704e9bee724f813974cb2))
* **components:** :sparkles: add clickOutside for closing modal ([d33804c](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/d33804cd8c79257d078c05661eb45c206f2ac84e))
* :sparkles: add Header and ThemeTester to layout so they are visible in to-read-list route as well ([d377aca](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/d377aca22b3395dc74528c29be422efd1b4dc075))
* **components:** :sparkles: add UserModal, show UserModal when clicking on user name ([40680ce](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/40680cef267c7a8802ebbd3a3fc14a6f700c550e))
* **components:** :sparkles: add link to main page to logo ([feac22e](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/feac22e44190c3499d3a6ec4b4d6e4bd80760162))
* :sparkles: move setUserRatingObject to helpers.js because it is used in 2 places ([39b1071](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/39b1071a643eee97106fc7b31444827540919a5b))
* :sparkles: add load function in +page.js that loads the books and returns them for use later in page store ([8605178](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/8605178ca69820117752a50dd1d52b8cb7dd9c30))
* :sparkles: add +layout.js with load function that checks token and if there sets myUser store ([deb4e14](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/deb4e140dc210111d0bf07918f57d07af1a81ab6))
* **api:** :sparkles: populate to read list as well ([6a53868](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/6a5386850b15932d164ac2ba4c7137a6c804d31d))


### Bug Fixes

* **components:** :lipstick: improve styling, change text ([6559af4](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/6559af4802bce570b869c43e614cc0e5420a6eb8))
* **components:** :lipstick: improve add to to read list button styling ([a60081e](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/a60081e4ad21c212cc22e357b36819b87b32f888))
* :art: rename route to profile ([0fb087a](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/0fb087aedeaa695ffc4993ee628c3c2095397d7c))
* :fire: remove console log ([ff3182c](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/ff3182cff76977982218a8040dc84cec4d447cfd))
* **components:** :fire: remove console log ([4094ee8](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/4094ee84c773a37fc8e07d14e6e377662ef385bd))
* **components:** :fire: remove console logs ([3f9f377](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/3f9f377062b6abab931a7b6913b7055b1882c5e5))
* :ambulance: remove myUser stores from load functions ([f263c11](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/f263c11af56132a27b38252ddeb2f626f865e4e3))
* :fire: remove onMount, move Header to layout ([708357e](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/708357e3abd5420e85e7728c0e85bd1fc42b8e70))
* **components:** :fire: remove onMount and function that was moved ([1c3848d](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/1c3848de004cbbd2743689430743d8871d5344dc))
* :bug: check for browser in theme function because it needs to use document ([6087c40](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/6087c40d0c741d29481b5294b891aac0ba432e77))

## [0.0.2](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/compare/v0.0.1...v0.0.2) (2023-04-16)


### Features

* **themes:** :lipstick: add darkmode stuff ([404af03](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/404af036eff3d07a51e0a309cdceb47a719a7ecd))
* :lipstick: add some dark mode stuff in shortcuts ([57e3ebd](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/57e3ebda3344aab1a18fc9ed2854b7ca8b945c19))
* :package: add iconify-json/carbon ([f8192c2](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/f8192c201ea372ebefc145f18987521ec5ac9855))
* **themes:** :sparkles: add ThemeTester to index so it's easier to change themes ([14ec86e](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/14ec86e1e31b7351d85bf5b35a3b2cacfaf3ce4b))
* :sparkles: use store to set dark mode in local storage, use local storage (to be able to override) ([d624f56](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/d624f5680e00a55d78cb09ad13028cefb8523b74))
* :sparkles: use functions to create most of the safelist ([c5fb078](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/c5fb078a9f27663135c1c4a7ff5f8f66d5724b7a))
* **themes:** :sparkles: break out ThemeTester into its own component ([37f4d65](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/37f4d65cca7e7ab900a084fe386fae9963d8cdf8))
* **themes:** :lipstick: replace some styling with shortcuts ([2e2459b](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/2e2459b16c834930be010f5ddc438f7f7aa937aa))
* **themes:** :sparkles: add theme helper functions ([111734a](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/111734aa1b631e35a25bb60fee6e84b321c13de0))
* **themes:** :lipstick: add header style for custom themes ([e275ec5](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/e275ec5f8b508c89ede7f63908f65ab132dd986e))
* **themes:** :sparkles: add JSON example of custom colors for giving to chatGPT ([07f962b](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/07f962b149f7e55ef4b267e578c91ee88607710d))
* **themes:** :sparkles: add custom and customDark themes (WIP) ([d2545c9](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/d2545c907be08e350d985b8682362e8aaff21fef))
* **themes:** :lipstick: add backgrounds (... temporary) ([f4db96e](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/f4db96eb0bae4aa2e5a7cecfe87eb0a237058d5a))
* **themes:** :sparkles: set the active theme to a variable on mount ([2fc4248](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/2fc424896743a23a5d10d836d759a802a540849f))
* **themes:** :lipstick: add some theme styling for Header ([d7d0381](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/d7d03812564ffffed64abef4356767f834c6d978))
* **themes:** :sparkles: add activeTheme store ([c1e01d4](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/c1e01d40530090d1485accbdc09e0bbc85a5acd8))
* **themes:** :sparkles: add activateTheme function ([17b8fa8](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/17b8fa887720846ff28b65de0e62210bd7597731))
* **themes:** :lipstick: import and use themeCSS.scss ([d0dc0f5](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/d0dc0f51ae5a242d3b90ade420fc85ae33997b36))
* :wrench: add presetHeroPatterns and logo font ([d02d425](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/d02d4256ff4431a619b6a300495d99990dc20d80))
* **themes:** :package: add unocss-preset-heropatterns and sass ([623a442](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/623a4424e79f207c70b911e00f0a8d54af3749b0))
* **themes:** :sparkles: add onMount, use ThemeCSS CSS in a div ([5a49c4a](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/5a49c4a8089c272f2463fefca90e1bf4c4b5acfe))
* **themes:** :sparkles: add ThemeCSS with global CSS and a bunch of gifs for testing ([673ace5](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/673ace50251598a2e60d11759e5e38b2d75602ba))
* **components:** :sparkles: add {[@debug](https://github.com/debug)} thingy (commented out now) ([aecafa3](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/aecafa3af626544979602b119e85f69f20931576))
* **api:** :sparkles: add getTheme() ([e887e24](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/e887e2473a4b3c227bac5de664baa35b344c1c07))
* :art: rearrange safelist, add a few shortcuts ([392e7f0](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/392e7f041c2abc51b3e8101bb27a9aae40ee60d1))
* **themes:** :sparkles: use new base colors in themes ([210c153](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/210c15372b9f440b8369efcadd2bd729e16305b2))
* **themes:** :sparkles: split base color into light and dark parts so they can easily be used for both text and backgrounds if needed ([393fba7](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/393fba7bf26da09d9c657622788d6c427fa572ce))
* **themes:** :sparkles: add some placeholder colors for the themes ([6bdaea0](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/6bdaea05a0a1ae9c84d2863946ba18e2386279fd))
* :sparkles: add mode 2 to enumCreator for creating safelist strings ([ad87965](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/ad87965b6f0f503eff023cc9b21b57ea8c01c66a))
* **themes:** :sparkles: add themetesting route for testing theme stuff ([b0d75fb](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/b0d75fb33404192838aa55bf6c180230736119ef))
* :sparkles: add themes scope for conventional commits ([a2d0506](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/a2d05061fd6e966af70033473cb86214a61e8afa))
* **themes:** :wrench: add some themes using presetTheme, import colors from unocss colors file ([a7bf596](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/a7bf5967b65597f83ad9205fbd619fea70a2d119))
* :sparkles: add enumCreator.js for spitting out a bunch of enums for use with incrementor ([2b467a1](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/2b467a18999f0329d753e5f8f80ca6fb88ccba45))
* **themes:** :package: add unocss-preset-theme ([492a494](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/492a494e65a2cfc9238f20eda01acff08d754ea6))


### Bug Fixes

* **themes:** :lipstick: improve header styles ([3b8ecc1](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/3b8ecc1b236df8e6db92fe03a4867beea124a262))
* :bug: change inspector to use only shift instead of ctrl shift because it changes language for me ([21551ca](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/21551ca565cb0b8b2fc831668187c7d252a6e102))
* **themes:** :lipstick: update styling for ThemeTester ([163aecc](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/163aecc80768bc1b730556aaa1efc77887b62307))
* **components:** :lipstick: center the logo ([b43dc34](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/b43dc34393d701465821fec048b7dfe5afed4d8b))
* **components:** :lipstick: remove margin and height from footer so it has the same background color ([c73dc5b](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/c73dc5b4bfdddda0bd59837b6dd645816a23b921))
* :art: rename enumCreator to safelist.js ([5edf9cd](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/5edf9cd5add9dcee4db2849e5994851c38449dba))
* **themes:** :lipstick: replace remove rating style ([bc996d6](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/bc996d63b55258024f093873a9e7aa60786a0c28))
* :zap: move unocss config to vite config again because having it restart on changes was better when adding shortcuts ([808f4d8](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/808f4d80b8ef696f608fa0844392060815e4b578))
* **themes:** :fire: remove ThemeCSS.svelte, use flex for main ([2534591](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/2534591a37103c3eef1a49ee5e1e2ba4f61890a1))
* **themes:** :fire: remove ThemeCSS.svelte in favor of .scss file for better HMR ([b0d63f0](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/b0d63f0a39c281c0f3ae697f5b5ea109d6f3bede))
* :zap: change theme names ([5d6cfdb](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/5d6cfdbe803e0fff70d440a578846f43351308b7))
* :fire: remove old unocss fix (only needed for higher unocss version) ([83961e3](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/83961e30a79ec3a1f8e512e4039806a3130e47a0))

## [0.0.1](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/compare/v0.0.0...v0.0.1) (2023-04-14)


### Features

* :sparkles: 8-användaren-ska-kunna-betygsätta-böcker ([#15](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/issues/15)) ([34a5cb4](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/34a5cb4f6a6fbdd25c9f14caf5a409cd352e4795))

## 0.0.0 (2023-04-14)


### Features

* **components:** :lipstick: add fancy shadows in Book ([1f49462](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/1f49462531da77a3a63ec498b96a87af2b804857))
* :sparkles: 7-det-ska-tydligt-framgå-vem-som-är-inloggad-på-sidan-användare-ska-kunna-logga-ut ([#14](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/issues/14)) ([2b816fb](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/2b816fb2129cbbf66c5a77791807c00d48fcca87))
* :sparkles: add logout button ([35616c4](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/35616c425ecbc10f5adae19c8f331a0afad29e9a))
* **components:** :lipstick: set fonts, y offset and font weight from component in strapi book ([cc8d6f1](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/cc8d6f10832b4b2509f957ab5515a84bc04c5b05))
* :wrench: add safelist for unocss (for dynamic values) ([3a5f179](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/3a5f179e9c333644f61b7a87d28396d1ddb46c00))
* :lipstick: add flex ([265d496](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/265d4964897effcdcc94539068654b3d83dca0a2))
* :lipstick: add unocss-fix.css to circumvent unocss bug ([e0ef9e9](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/e0ef9e97947c44ae18f2f604147116dd7ff6a1ae))
* :package: update unocss ([9fe3de4](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/9fe3de4921645ff911a48f7ce085404df1c13030))
* :package: use vite next ([f765280](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/f76528093ceaf860fbb73435b7c9d392b6bab731))
* :memo: add Projectrapport.md ([a41b6a2](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/a41b6a23e364818fd54e264d86d21b4c4c98040b))
* :sparkles: add thingygenerator.js for generating... thingies ([684cfd7](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/684cfd70de5557b9ec2d4dc3345cc930670226b4))
* :sparkles: add unocss config to enable extension ([fb09869](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/fb09869128a5cf2d7900c4eb6a04e41c30947172))
* :package: update unocss ([cdf36e4](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/cdf36e43d2821287564bcab88e8e09737d1ce7b4))
* :memo: add TODO ([6235c00](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/6235c00d4e064adcd958323684b222c5b79db0de))
* **components:** :lipstick: improve styling ([5d7e5b5](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/5d7e5b59dad6f48b5b66c1781df8236e08b6277c))
* **components:** :sparkles: add ability to close modal by clicking outside or pressing escape ([c6afbc7](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/c6afbc72913dd37ecf2146414044076b78d2f683))
* **components:** :sparkles: add button to show modal with more info ([e91d9da](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/e91d9da914f94c4aa2de6d48ea2242f6d86310c9))
* :bento: add a bunch of fonts for testing ([f63a146](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/f63a14678bb5290a8df6915dea7ef90609f1d6fd))
* :sparkles: use onMount to get the books when the page is loaded ([989b204](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/989b204a3fbc62679118dd37982de95fac393a25))
* **api:** :sparkles: add NonAuth version of sendRequest and use it for now ([e11916f](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/e11916f335fcdafc6bc571f21c4417bbeb47926d))
* **api:** :sparkles: add api.js with an axios helper function ([b653207](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/b65320749733427f28b4749bd0342697d908589f))
* :package: add axios ([8bbe99a](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/8bbe99af52e613f9947272bfb3b283b3a0d08122))
* **components:** :sparkles: add Book component to display a single book ([8546b1e](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/8546b1e26b6434ad29f854e7e38fe8fdb53bc7e0))
* :package: add dompurify and marked for parsing markdown from Strapi rich text field ([f8f3c5a](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/f8f3c5a8078b531de27e3d2ce39fa6205a8fa72f))
* :memo: add TASKS for keeping track of stuff to do ([20a8ecd](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/20a8ecd71d1e50ed6a2b62081c20f9c86f0c2bfd))
* :memo: update README ([3e395b4](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/3e395b4a7b95404a12f6cb1982dbc58ef70cfac6))
* :lipstick: update Footer ([9d68866](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/9d6886626da4c2de70003cad4e0f2749e8a45d95))
* :rocket: update package.json info, remove CHANGELOG, update README ([9537090](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/9537090fd8fcae74cb39b4c99d68525a14e3afa1))


### Bug Fixes

* **components:** :lipstick: make styling more consistent ([bf165fc](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/bf165fcdb3f63833d3e7edbf212354ad2e1f1ac3))
* :wrench: apparently you could do this ([681f8a8](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/681f8a8b5db5ebd03e16aad8777f7856c3385899))
* :package: downgrade unocss to make web fonts work ([b33c6ab](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/b33c6ab3c8676b7ecd99dcc4550907009c4fd407))
* :lipstick: add some more minor styling fixes ([ad0a3cc](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/ad0a3cc0a6772339a02ad4826b975a49d8384312))
* :lipstick: update styling ([ab39c3c](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/ab39c3cc3a182b48ad8e9853a46573bc48df3501))
* :lipstick: use flex end to make modal exit area bigger ([15e887b](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/15e887b1dfd93559ba79f80b58e545ade82b8829))
* :lipstick: improve styling ([41e75b1](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/41e75b12482915d5bcb62dca972da108728807b8))
* :lipstick: improve styling ([a190a03](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/a190a03141eb15fc99d55848a8f67b30a611b8f0))
* :lipstick: improve styling maybe ([4d8ad73](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/4d8ad7371ca978039b4ae09d1929e4111a81dcb4))
* :wrench: rename unocss config file ([5b37036](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/5b370367f299996e0368435399b6c80e2c6c5ca2))
* :lipstick: use tailwind reset ([1b91c09](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/1b91c0931aab3604a18015525b63c6d136b5700d))
* :memo: update TASKS.js ([d62398d](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/d62398d20521cd4a8bb229781954a70061e97510))
* **components:** :bug: take in a single prop instead and get the values from there ([71e37b2](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/71e37b2804438faf28b4bc9e5dff477fa6aa19ba))
* :wrench: update base path ([28747a8](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/28747a851d29aff7a7a45f854341886c635f55fb))
* :fire: remove Welcome component ([4e6f3f1](https://github.com/henrikvilhelmberglund/interaktion-med-cms-book-ducks-frontend/commit/4e6f3f1c5c03ddd487021d542b3a0e10aa66da19))
