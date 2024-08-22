import {useEffect} from 'react';

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `Count is ${count}`;
    }, [count])
}

export default useDocumentTitle
