import moment from 'moment';

export default function getAge() {
	return moment().diff('1996-07-15', 'years');
}
