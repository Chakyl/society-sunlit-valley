# Translation Guide
Want to help translate? We rely on high quality community contributions to translate, so any and all contributions are appreciated!

## Before translating
- Be sure to join the [Discord](https://discord.com/invite/GdcZkrZqkj) as a translation community exists there already! This helps prevent repeated work and can also get you help if there's others out there that want to translate the same language.
- **Absolutely no AI/LLM/Machine generated translations!** I believe not having a translation is better than a translation that is unvetted, misleading, or even incorrect. Small high quality translations are better than no translations! 

## What files to translate
There are four categories of translation files:
- **Mod translations** (For example, a Create mod translation). These should be submitted to the mod author if possible!
- **Modpack specific overrides**. If two mods add the same thing or is named something I don't like, I rename it! These can be found in `kubejs/assets/MODID/lang/en_us` folders for every mod.
- **Society items and blocks**. These can be found [here](https://github.com/Chakyl/society-sunlit-valley/blob/master/kubejs/assets/society/lang/en_us_template.json) and the contents should be added to `society/lang/lang_code.json` file. It's done this way because Sunlit Valley is made in English and that template file is generated every update for all the Society items/blocks in the pack.
- **Quests translations** are located in `kubejs/assets/ftbquestlocalizer/lang`. **These translations are low priority as it takes a ton of time and effort to translate, and quests often change every update**.

There is also the `translations` folder which contains all translation files for a language. This is useful for organizing translations and keeping all language specific files in one place, but not strictly required at the moment.

## Github Guide
Never used Github before? No worries! 

1. Create an account and fork the repo.
2. In your fork, go to the folder `translations` folder. This is where the main copies of the translations go! 
3. Click the "Upload Files" button in the top right, and drag your translation folder to it. The folder should be named after the language code you're translating (e.g, ko_kr for the Korean translation)
4. Commit the changes to your main/master branch
5. Make a PR using [this guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

## Pull Requests
- Pull requests (PR) can be made in the [society-sunlit-valley repo](https://github.com/Chakyl/society-sunlit-valley)
- PRs should target the next update branch, if it exists not `master`. Check in with Chakyl if you don't know which branch is next.
- PRs should include a list of changelog items in a similar format as [here](https://github.com/Chakyl/society-sunlit-valley/blob/master/config/fancymenu/assets/changelog.markdown?plain=1)
