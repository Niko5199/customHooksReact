export function useToggle(initialState = false) {
  return [initialState, () => {}];
}

export function useLocalStorage(key, initialValue = {}) {
  return [initialValue, () => {}];
}

export function useEventListener(event, handler, element = window) {
  return;
}

export function useMediaQuery(query) {
  return false;
}

export function useKeyPress(targetKey) {
  return false;
}

export function useIsOnLine() {
  return true;
}

export function usePrevious(value) {
  return value;
}

export function useDeviceScreen() {
  return { width: 0, heigth: 0 };
}
