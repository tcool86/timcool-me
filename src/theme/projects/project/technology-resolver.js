const techDictionary = {
    'UIKit' : 'apple',
    'Foundation' : 'apple',
    'OpenGL' : 'sss'
}

export const technologyResolver = {
    'classNameForTech' : function (tech) {
        let name = tech
        if (typeof techDictionary[tech] !== 'undefined') {
            name = techDictionary[tech]
        }
        return '.tech-icon--' + name
    }
}
