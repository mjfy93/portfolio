import { useLanguage } from '../context/LanguageContext'
import { getData } from '../data'

export function useData() {
    const { language } = useLanguage()
    return getData(language)
}
