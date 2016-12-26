import moment from 'moment';

// Current year and my age, for copyright and displaying how old I am,
// respectively. Now these don't have to be updated every year.
const year = moment().year();
const age = moment().diff('1996-07-15', 'years');

// Properties are referenced as 'self.property' in Pug files.
// (e.g. 'self.title')
const locals = {
  title: 'David Minnerly',
  repo: 'https://github.com/vocksel/my-website',
  copyright: '&copy; ' + year + ' David Minnerly',
  age: age
}

export default locals
