import React from 'react'

const BASE_URL = 'https://twitter.com/intent/tweet'

interface Props {
	text: string,
	url?: string,
	via?: string,
	children: React.ReactNode,
}

export default function TweetIntent({
	url,
	text,
	via = 'vocksel_',
	children
}: Props) {
	if (!url) {
		url = location.href
	}

	let intentUrl = `${BASE_URL}?text=${text}&url=${url}`

	if (via) {
		intentUrl = intentUrl + `&via=${via}`
	}

	return <a href={encodeURI(intentUrl)}>{children} <i className='fab fa-twitter' /></a>
}
