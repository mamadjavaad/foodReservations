import { createVuetify } from "vuetify";
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import {
    VBtn, VAppBarNavIcon, VLayout, VNavigationDrawer, VList, VListItem, VListGroup,
    VDivider, VIcon, VMain, VTextField, VVirtualScroll, VListItemTitle,
    VListItemSubtitle, VAlert, VLocaleProvider, VSelect, VTabs, VTab, VTable,
    VDataTable, VSlideYTransition
} from 'vuetify/components'
const vuetify = createVuetify({
    components: {
        VBtn, VAppBarNavIcon, VLayout, VNavigationDrawer, VList, VListItem, VListGroup,
        VDivider, VIcon, VMain, VTextField, VVirtualScroll, VListItemTitle,
        VListItemSubtitle, VAlert, VLocaleProvider, VSelect, VTabs, VTab, VTable,
        VDataTable, VSlideYTransition
    },
    icons: {
        defaultSet: 'mdi', aliases: {
            ...aliases
        }, sets: {
            mdi,
        },
    }
})
export default vuetify;