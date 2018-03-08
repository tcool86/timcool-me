const techDictionary = {
    'uikit' : 'apple',
    'foundation' : 'apple',
    'superspritesurface' : 'sss'
}

export const technologyResolver = {
    'classNameForTech' : function (tech) {
        let name = tech
        if (typeof techDictionary[tech] !== 'undefined') {
            name = techDictionary[tech]
        }
        return 'tech-icon--' + name
    }
}
