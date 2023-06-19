const LIST_TYPES = {
	BACKLOG: 'backlog',
    READY: 'ready',
	IN_PROGRESS: 'inProgress',
	DONE: 'done',
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
    [LIST_TYPES.READY]: 'Ready',
	[LIST_TYPES.IN_PROGRESS]: 'In Progress',
	[LIST_TYPES.DONE]: 'Finished',
}

export { LIST_TYPES, LIST_COPY }