const prioLevel = {
    1: "is-danger",
    2: "is-warning",
    3: "is-success",
}

export const tagColor = (level) => {
    return prioLevel[level]
}

export const deprecationColor = (deprecated) => {
    return deprecated ? 'is-danger' : ''
}