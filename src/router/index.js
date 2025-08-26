import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[{
        path:'/',
        name:'quiz',
        component:()=> import('../pages/quizzez.vue')
    },
{
    path:'/quis/:id',
    name:'quis',
    component:()=> import('../pages/quis.vue')
}]
})
export default router;