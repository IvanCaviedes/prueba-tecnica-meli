import type React from 'react'

export interface LocationStates {
	'/'?: {}
	'/#'?: {}
	'/page404'?: {}
	'/detail/:id': {}
}

export type PathName = keyof LocationStates
export interface Page {
	path: PathName
	exact?: boolean
	Component: React.FC
}
