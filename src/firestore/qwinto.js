import { firestore } from 'index';

const saveDraw = (draw) => {
    firestore.collection('qwinto').doc('draw').set(draw);
}

const saveSelection = (values) => {
    firestore.collection('qwinto').doc('selection').set({ values });
}

export {
    saveDraw,
    saveSelection
}
