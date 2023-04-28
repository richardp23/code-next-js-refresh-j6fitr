import { render } from './util';

// TODO: What does the translate function do?
// Update the translate function to support more acronyms.
render('functions1', () => {
  const translate = (acronym) => {
    if (acronym === 'lol') {
      return 'laugh out loud';
    } else if (acronym === 'idk') {
      return "i don't know";
    } else {
      throw new Error(`idk how to translate: '${acronym}'`);
    }
  };

  return translate('idk');
});

// TODO: Write a function that returns the bar property of an object.
render('functions2', () => {
  const getBar = (object) => {
    return object.bar;
  };

  return getBar({ foo: 'foo', bar: 'bar' });
});

// TODO: Write a function that upcases each string in an array and returns it.
render('functions3', () => {
  const strings = ['hello', 'world'];

  const upcaseAll = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i].toUpperCase();
    }

    return newArray;
  };

  return upcaseAll(strings);
});
