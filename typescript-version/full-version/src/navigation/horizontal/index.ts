import appAndPages from './app-and-pages'
import charts from './charts'
import dashboard from './dashboard'
import forms from './forms'
import others from './others'
import uiElements from './ui-elements'
import type { HorizontalNavItems } from '@layouts/types'

export default [...dashboard, ...appAndPages, ...uiElements, ...forms, ...charts, ...others] as HorizontalNavItems
