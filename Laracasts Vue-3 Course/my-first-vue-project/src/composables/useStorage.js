import { ref, watch } from "vue";

export function useStorage(key, data = null) {
    let storedData = read();

    if (storedData) {
        data = ref(storedData);
    } else {
        data = ref(data);

        write();
    }

    watch(data, write, { deep: true });

    function read() {
        return JSON.parse(localStorage.getItem(key));
    }

    function write() {
        if (data.value === null || data.value === '') {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(data.value));
        }
    }

    return data;
}