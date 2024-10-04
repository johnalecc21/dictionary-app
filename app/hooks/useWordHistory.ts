import { useDispatch, useSelector } from 'react-redux';
import { addWordToHistory } from '../redux/slices/wordSlice';
import { RootState } from '../redux/store';

const useWordHistory = () => {
    const dispatch = useDispatch();
    const history = useSelector((state: RootState) => state.words.history); 

    const addWordToHistoryHandler = (word: string) => {
        dispatch(addWordToHistory({ word, date: new Date().toLocaleString() }));

    };

    return { history, addWordToHistory: addWordToHistoryHandler }; 
};

export default useWordHistory;
