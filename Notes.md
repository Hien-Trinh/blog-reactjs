# Notes

## Class ```React.Component```

``` javascript
class Car extends React.Component {
    //codes go here
}
```

The class ```Car``` inherits from the class ```React.Component```, which give access to methods such as ```render()```.

## Method ```render()```

``` javascript
class Car extends React.Component {
    render() {
        return (
            <div>
                <h1>Page title goes here!</h1>
            </div>
        )
    }
}
```

The method ```render()``` returns HTML.

## Method ```constructor()```

In the case that you're familiar with OOP (obeject-oriented-programming) in Python, ```constructor()``` is the Javascript's equivalent of Python's ```__init__()``` method.

***Note***: if anyone feels uncomfortable with OOP, you probably should start there before continuing.

``` javascript
class Car extends React.Component {
    constructor(brand) {
        this.brand = brand
    }
}

my_car = Car("Tesla")
```

The object ```my_car``` has the attribute ```brand="Tesla"```.

## React ```props```

### ```props``` is
- short for ***properties***.
- passed into React component as an arguement.
- passed via HTML attribute

### Without React component

``` javascript
const myElement = <Car brand="Tesla" />

function Car(props) {
    return <h2>My car is a {props.brand}!</h2>
```


## Reference

1. Reactjs, Intro to React – [Overview](https://reactjs.org/tutorial/tutorial.html#overview)
2. W3Schools, [React Components](https://www.w3schools.com/react/react_components.asp)
