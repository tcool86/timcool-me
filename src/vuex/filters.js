
const filterCategories = {
    'apps' : 2,
    'vr' : 6,
    'steam' : 3,
    'mac' : 7,
    'ios' : 8,
    'windows' : 9
}

const getFilterNameFromId = function (categoryId) {
    const keys = Object.keys(filterCategories)
    const values = Object.values(filterCategories)
    const index = values.indexOf(categoryId)
    return keys[index]
}

const getIconFromName = function (name) {
    if (name === 'vr') {
        return 'oculus'
    }
    if (name === 'mac' || name === 'ios') {
        return 'apple'
    }
    return name
}

const getFromCategory = function (categoryId) {
    const name = getFilterNameFromId(categoryId)
    const link = '?filter=' + name
    const iconName = getIconFromName(name)
    const hoverClass = iconName + '-color'

    return {
        id : categoryId,
        link : link,
        icon : iconName,
        hover : hoverClass
    }
}

export default {
    getFromCategory,
    filterCategories
}
