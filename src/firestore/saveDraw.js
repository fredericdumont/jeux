import { firestore } from 'index';

const saveDraw = (values) => {
    firestore.collection('qwinto').doc('draw').set({ values });
}

export {
    saveDraw
}
