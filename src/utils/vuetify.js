import { createVuetify } from "vuetify";
import { VBtn, VAppBarNavIcon, VLayout, VNavigationDrawer, VList, VListItem, VListGroup, 
    VDivider, VIcon, VMain, VTextField, VVirtualScroll, VListItemTitle, 
    VListItemSubtitle, VAlert, VLocaleProvider, VSelect, VTabs, VTab, VTable, 
    VDataTable, VSlideYTransition } from 'vuetify/components'
const vuetify=createVuetify({
    components:{
        VBtn, VAppBarNavIcon, VLayout, VNavigationDrawer, VList, VListItem, VListGroup, 
        VDivider, VIcon, VMain, VTextField, VVirtualScroll, VListItemTitle, 
        VListItemSubtitle, VAlert, VLocaleProvider, VSelect, VTabs, VTab, VTable, 
        VDataTable, VSlideYTransition
    }
})
export default vuetify;