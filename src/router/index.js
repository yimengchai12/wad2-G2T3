import { createRouter, createWebHistory} from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../../views/HomePage.vue") },
        { path: "/sign-in", component: () => import("../components/SignIn.vue") },
        { path: "/collection", component: () => import("../../views/collectionPage.vue") },
        { path: "/buy/:id", component: () => import("../../views/buyPage.vue") },
        { path: "/profile/:id", component: () => import("../../views/OtherProfile.vue") },
        {
            path: "/feed", 
            component: () => import("../../views/FeedPage.vue"),
            meta: { requiresAuth: true, 
                },
        },
        { 
            path: "/listing", 
            component: () => import("../../views/createlistingPage.vue"),
            meta: { requiresAuth: true, 
                },
            },
        { 
            path: "/profile", 
            component: () => import("../../views/ProfilePage.vue"),
            meta: { requiresAuth: true, 
                },
            },
        { 
            path: "/imagePage", 
            component: () => import("../components/ImagePage.vue"),
            
        },
        { 
            path: "/commission", 
            component: () => import("../../views/commissionRequest.vue"),
            meta: { requiresAuth: true, 
                },
        },
        { 
            path: "/success", 
            component: () => import("../../views/successPage.vue"),
            meta: { requiresAuth: true, 
                },
        },



    ]
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(), 
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            alert("You must be logged in to view this page");
            next("/")
        }
    } else {
        next();
    }
})

export default router;