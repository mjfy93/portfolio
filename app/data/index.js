import { profile as enProfile, certificates as enCertificates, workHistory as enWorkHistory } from './en/profile'
import { projects as enProjects } from './en/projects'
import { ui as enUi } from './en/ui'

import { profile as esProfile, certificates as esCertificates, workHistory as esWorkHistory } from './es/profile'
import { projects as esProjects } from './es/projects'
import { ui as esUi } from './es/ui'

const data = {
    en: { profile: enProfile, certificates: enCertificates, workHistory: enWorkHistory, projects: enProjects, ui: enUi },
    es: { profile: esProfile, certificates: esCertificates, workHistory: esWorkHistory, projects: esProjects, ui: esUi },
}

export function getData(language) {
    return data[language] || data.en
}
