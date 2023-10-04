import React from "react";

function useLocalStorage(itemName, initianValue) {

    const [item, setItem] = React.useState(initianValue);

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initianValue));
                    parsedItem = initianValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);

            } catch (error) {

                setLoading(false);
                setError(true);
            }
        }, 3000);
    }, [])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem)
    }

    return { item, saveItem, loading, error };
}

export {
    useLocalStorage
}

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de React", completed: false },
//   { text: "Llorar con la Llorona", completed: false },
//   { text: "Hola Mundo", completed: false },
//   { text: "Nueva tarea", completed: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')