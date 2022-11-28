# Photo Search Projects

## Key Features
* Support search and display image detail
* Responsive layout that works in mobile, tablet and desktop
* In-memory cache search results, cache auto expires in 15 minutes
* Zero state, initial state and error state handling

## Run and Build the Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run storybook`

See all the components' visual in [Storybook format](https://storybook.js.org).\
Open [http://localhost:6006](http://localhost:3000) to view it in the browser.


## Decisions and Tradeoffs

### State Management

Because of its simplicity, this application does not use state management such as [Redux](https://redux.js.org), [Recoil](https://recoiljs.org/), etc.

However, if the application offers additional features such as advanced search, etc., having state management would
ensure better scalability.

### How are data loaded?

The XHR requests are made through [Axios](https://axios-http.com/docs/intro) for its simplicity.  [SWR](https://swr.vercel.app/) is used for
data management, which takes care of convenient features such caching and auto retry.

Once the data is loaded, the data is converted into value objects(VO) before being consumed by UI components.
VOs are decoupled data structure from API data structure, this approach has a few benefits:

1. Decouple UI from backend data structure
2. Any change in backend data structure only requires change in data parsing layer in the UI
3. The application can also be changed to adapt to other API's by only changing data fetching and parsing.
4. The performance overhead is negligible.

### How are styling done?

The application uses CSS-in-JS approach for styling. [Styled Components](https://styled-components.com/) is the library to realize CSS-in-JS.

[Benefits of CSS-in-JS](https://medium.com/@_imGufran/why-use-css-in-js-benefits-and-drawbacks-df40ab4ebef9) include:
1. Eliminate globals -- CSS class names are global, which is prone to style-bleeding
2. Simplify CSS naming.  Because CSS-in-JS generates class names at runtime, this frees engineers from using complicated namespacing techniques like [BEM](https://getbem.com].
3. Styles can be easily composed and reused
4. CSS can be programmatically generated
5. CSS and JavaScript can reuse some common presentation attributes such as colors, spacing etc.
6. Existing developer tools such as IntelliJ/Webstorm and VSCode support CSS-in-JS
7. Support existing CSS syntax

Drawbacks of CSS-in-JS include:
1. Minor performance overhead.  This is because CSS by CSS-in-JS is generated at runtime, while CSS, LESS and SCSS are generated at built.


## Additional Features

When time allows, the following features may be developed to provide better UX, more scalable and secured implementation.

1. Support search beyond the first 30 images, this can be done with infinite scroll in conjunction with virtualization rendering such [react-virtualized](https://github.com/bvaughn/react-virtualized)
2. Support more search options offered by Pixel Bay
3. Display more metadata of the images such as author, tags, likes, comments etc
4. Support deep linking, so user can bookmark search
5. Support media such as video and vector images
6. Hide the usage of Pixel Bay key
7. Use state manager such as Redux, Recoil, etc.
8. Use application routing such as [React Router](https://reactrouter.com/en/main), users can use back/forward button to navigate between searches, and can also bookmark/share search results.
9. Better error handling, and provide users more actionable errors instead of generic error message