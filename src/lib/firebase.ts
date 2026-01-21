import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, orderBy, Timestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export interface Article {
    id: string;
    title: string;
    content: string;
    imageUrl: string | null;
    author: string | null;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * Fetches all published articles from Firestore, ordered by creation date.
 */
export async function getArticles(): Promise<Article[]> {
    try {
        const articlesRef = collection(db, 'articles');
        const q = query(
            articlesRef,
            where('isPublished', '==', true),
            orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);

        return snapshot.docs.map(docSnap => {
            const data = docSnap.data();
            return {
                id: docSnap.id,
                title: data.title || '',
                content: data.content || '',
                imageUrl: data.imageUrl || null,
                author: data.author || null,
                isPublished: data.isPublished ?? false,
                createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
                updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
            };
        });
    } catch (error) {
        console.error('Error fetching articles from Firestore:', error);
        return [];
    }
}

/**
 * Fetches a single article by its ID from Firestore.
 */
export async function getArticleById(id: string): Promise<Article | null> {
    try {
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return null;
        }

        const data = docSnap.data();
        return {
            id: docSnap.id,
            title: data.title || '',
            content: data.content || '',
            imageUrl: data.imageUrl || null,
            author: data.author || null,
            isPublished: data.isPublished ?? false,
            createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
            updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
        };
    } catch (error) {
        console.error('Error fetching article by ID from Firestore:', error);
        return null;
    }
}
