import { firestore } from 'index';

const saveDraw = (values) => {
    firestore.collection('qwinto').doc('draw').set({ values });
}

const saveSelection = (values) => {
    firestore.collection('qwinto').doc('selection').set({ values });
}

export {
    saveDraw,
    saveSelection
}
