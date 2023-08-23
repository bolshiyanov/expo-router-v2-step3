<!-- Banner Image -->
<p align="center">
  <a href="https://expo.dev/">
    <img alt="expo sdk" height="128" src="./assets/images/banner.png">
    <h1 align="center">Expo Router v2 </h1>
    <h2 align="center">step by step tutorial </h2>
    <h3>Building Apps for Crafting Static Websites for Google and Other Social Networks, as well as a Mobile App for iOS and Android  </h3>
  </a>
<h5 align="center"> <a aria-label="expo documentation" href="https://maps.menu">maps.menu 📚</a></h5>
</p>

<p align="center">
  <a aria-label="try expo with snack" href="https://github.com/bolshiyanov/expo-router-v2-step2"><b>This 2 step</b></a>
 | <a aria-label="try expo with snack" href="https://expo-router-v2-static-web-app-step-3.netlify.app/"><b>Look web site for 3 step</b></a>
 |
  <a aria-label="expo documentation" href="https://github.com/bolshiyanov/expo-router-v2-step4">Next 4 step 📚</a>
</p>

---

- [📚 About this step](#-documentation)
- [🗺 Stack of this step](#-Stack-of-this-step)
- [🏅 Why expo-router v2](#-Why-expo-router)
- [❓ FAQ](#-faq)
- [💙 The Team](#-the-team)
- [License](#license)

<h2 align="center">Learn to optimize project architecture by relocating 'app' to 'src' and integrating SCSS</h2>

In this tutorial, we embark on a step-by-step journey to construct a static website on React-Native using expo-router v2. Our goal is to build a website builder and mobile app constructor all in one, with maximum search optimization. The project itself spans a considerable scope, encompassing a Multilingual Website Constructor, user registration, payment capabilities, and an array of other features.

In the upcoming chapters, we will establish the foundation of this site's structure and introduce a multitude of navigational possibilities. As we progress, we'll lay the groundwork for seamless navigation and explore the potential for dynamic, user-centric experiences.

## 📚 About this step

Enhancing Project Structure: Moving 'app' to 'src' and Adding SCSS in Expo-Router V2

## 🗺  Step-by-Step Guide:<br/>

Moving App Folder to src Directory and Adding SCSS to Expo-Router V2

In the journey of developing our project, there comes a pivotal moment when we must make strategic architectural decisions. With the introduction of Expo-Router V2, we gain the power to transform our project's structure and enhance its development. This article will guide you through the process of moving the 'app' folder into the 'src' directory and seamlessly integrating SCSS, paving the way for a harmonious and scalable application.

### The Evolution of Expo-Router

In the previous version of Expo-Router, we faced constraints that limited our ability to organize our project effectively. The router layer couldn't be nested within the 'src' directory, which hindered the project's overall architecture. However, Expo-Router V2 brings a refreshing change, granting us the freedom to restructure the project to our advantage.

Let's embark on this transformational journey step by step:

1. Remove Node Modules: Begin by removing the 'node_modules' folder to ensure a clean slate for the upcoming changes.

2. Reorganize the Project Structure: Take the leap and move the 'app', 'components', and 'constants' folders into the 'src' directory. This reorganization is a crucial step that sets the foundation for a more organized and maintainable project structure. After making these changes, launch the project and observe the enhancements.

3. Replicate Assets: Duplicate the 'assets' folder and place it within the 'src' directory. This duplication ensures that all necessary assets are in place, contributing to a seamless transition.

### Breathing New Life with SCSS

To harness the full potential of your project, it's time to introduce SCSS into the mix. A significant milestone in modernizing your development approach, SCSS empowers you to create dynamic and visually appealing designs. Previously, inline styles were the norm, but with this update, we're equipped with a more robust and organized styling solution.

Follow these steps to incorporate SCSS:

1. Preparing the Project: First, ensure you have the necessary dependencies by running npm install. This step guarantees that you have everything needed for a smooth integration.

2. Configuring SCSS: Adjust your project settings to accommodate SCSS. This recent capability has unlocked new possibilities, allowing us to break free from the limitations of inline styles.

- `tsconfig.json` :<br/>
- `{`<br/>
  ` "compilerOptions": {`<br/>
    `   "baseUrl": ".",`<br/>
    ` "paths": {`<br/>
      `   "@/*": ["./src/*"]`<br/>
    `  }`<br/>
  ` },`<br/>
  ` "extends": "expo/tsconfig.base",`<br/>
  ` "include": ["/*.ts", "/*.tsx", ".expo/types/**/*.ts", "expo-env.d.ts"]`<br/>
`}`<br/>

- `metro.config.js`<br/>
- `// const { getDefaultConfig } = require("../../expo/packages/@expo/metro-config");`<br/>
`const { getDefaultConfig } = require("expo/metro-config");`<br/>

`const config = getDefaultConfig(__dirname, {`<br/>
 `  isCSSEnabled: true,`<br/>
`});`<br/>

`config.resolver.sourceExts.push("svg");`<br/>

`config.resolver.assetExts = config.resolver.assetExts.filter(`<br/>
  `  (ext) => !config.resolver.sourceExts.includes(ext)`<br/>
`);`<br/>

`config.transformer.babelTransformerPath = require.resolve(`<br/>
  `  "./metro.transformer.js"`<br/>
`);`<br/>

module.exports = config;

### Embracing the Future

This seemingly small but incredibly significant step should not be overlooked. By adopting this architectural overhaul at the project's inception, you're setting the stage for future growth, scalability, and an enhanced development experience.

With your project now residing in the organized embrace of the 'src' directory and empowered by the flexibility of SCSS, you're ready to embark on a journey of creativity and innovation. Unleash your creativity to craft stunning, adaptive designs that bring your website and application to life.

As the project evolves, remember that thoughtful architecture and adaptable styling are your allies. Together, they form the bedrock upon which your digital dreams will flourish. Happy coding!

## 💙 Author

Roman Bolshiyanov < status : open for cooperation, look job >

## License

The Expo source code is made available under the [MIT license](LICENSE). Some of the dependencies are licensed differently, with the BSD license, for example.


<img alt="Star the Expo repo on GitHub to support the project" src="https://user-images.githubusercontent.com/9664363/185428788-d762fd5d-97b3-4f59-8db7-f72405be9677.gif" width="50%">
