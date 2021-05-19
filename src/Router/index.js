import { createRouter , createWebHistory } from 'vue-router'

const routes = [
    {
        path : '/',
        name : 'transaksi.index',
        component: () => import("../Views/Transaksi/index.vue")
    },
    {
        path : '/create',
        name : 'transaksi.create',
        component: () => import("../Views/Transaksi/Create.vue")
    },
    {
        path : '/edit/{id}',
        name : 'transaksi.edit',
        component: () => import("../Views/Transaksi/Edit.vue")
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;