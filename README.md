# React 🚀

# parcel

-Dev Build
-Local Server
-HMR = Hot Module Reload
-File Watching Algorithm - Written in c++
-Caching -Faster Builds
-Image optimization
-Minification
-Bundling
-Compress
-Consistent Hashing
-Code Splitting
-Different Bundling -Support older browsers
-Daignostic
-Error Handling
-HTTPs Server
-Tree Shaking -remove unused code
-Different dev and prod bundles

# Food ordering App

/\*\*

- Food Ordering App
- Header
- -Logo
- -nav items
- Body
- -search
- -RestrauntContainer
- -RestrauntCard
-      -img
-      -name of restraunt
-      -star rating
-      -cusines
-      -delivery time
- Footer
- -Copyright
- -Links
- -Address
- -Contact
- \*/

Two types of export and import

-Default Export/Import

export default component;
import Component from "path"

-named Export/Import

export const component;
import {component} from "path"

...

# React Hooks

(Normal JS utility functions)
-useState() -superpowerful state variables in react
-useEffect()

# 2 types of Routing in web apps

-Client Side Routing
-Server Side Routing

# Redux ToolKit

    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our app
    - Slice (cartSlice)
    - dispatch(action)
    - Selector

# Types of testing (devloper)

    -Unit Testing
    -Integration Testing
    -End to End Testing (e2e testing)

# Setting up testing in our app

    -Install React Testing Library
    -Installed jest
    -Installed Babel dependencies
    -configure Babel
    -configure parcel config file to disable default babel transpilation
    -Jest configuration - npx jest --init
    -Install jsdom Library
    -Install @babel/preset-react Library - to make jsx work in test cases
    -Include @babel/preset-react inside my babel config
    -Include @testing-library/jest-dom Library