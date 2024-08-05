// const heading = React.createElement(
//     "h1", 
//     {id: "heading" , xyz: "abc"},
//     "Hello World using React!!"
// );
// // this heaing is not a h1 tag it is a js object
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // this render method converts the heading js obj into h1 tag and put it in the root
// root.render(heading);
 

/**
 * <div>
 *      <div>
 *          <h1>heading</h1>
 *      </div>
 * </div>
 * 
 * ReactElement(object) => HTML(Browser Understands)
 * 
 */

// const parent = React.createElement(
//     'div',
//     {id: "parent"}, 
//     React.createElement(
//         'div', 
//         {id: 'children'},
//         React.createElement('h1', {}, "I'm a h1 tag")
//     )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent);

/**
 * <div>
 *      <div>
 *          <h1>heading1</h1>
 *          <h2>heading2</h2>
 *      </div>
 * </div>
 * 
 * 
 */

// const parent = React.createElement(
//     'div',
//     {id: 'parent'},
//     React.createElement('div', {id: 'children'}, [
//         React.createElement('h1', {}, "heading1"),
//         React.createElement('h2', {}, "heading2")
//     ])
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent);


/**
 * <div id='parent'>
 *      <div id='child1'>
 *          <h1>heading1</h1>
 *          <h2>heading2</h2>
 *      </div>
 *      <div id='child2'>
 *          <h1>heading1</h1>
 *          <h2>heading2</h2>
 *      </div>
 * </div>
 * 
 * 
 */

const parent = React.createElement(
    'div',
    {id: 'parent'},
    [
        React.createElement('div', {id: 'child1'}, [
            React.createElement('h1', {}, "heading1"),
            React.createElement('h2', {}, "heading2")
        ]),
        React.createElement('div', {id: 'child2'}, [
            React.createElement('h1', {}, "heading3"),
            React.createElement('h2', {}, "heading4")
        ])
    ]
);

//Jsx

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);